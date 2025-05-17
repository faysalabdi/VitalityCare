import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, Check, Send } from "lucide-react";

// Define options list for service interests
const serviceOptions = [
  { id: "personal-care", label: "Personal Care" },
  { id: "community-participation", label: "Community Participation" },
  { id: "school-holiday", label: "School Holiday Program" },
  { id: "sil", label: "Supported Independent Living" },
  { id: "respite", label: "Respite / STA" },
  { id: "group-activities", label: "Group Activities" },
  { id: "early-childhood", label: "Early Childhood" },
  { id: "behaviour-support", label: "Behaviour Support" },
  { id: "physiotherapy", label: "Physiotherapy" },
  { id: "psychology", label: "Psychology" },
  { id: "transport", label: "Transport" },
  { id: "cleaning", label: "Cleaning" },
  { id: "other", label: "Other" },
];

// Define options for referral sources
const referralSourceOptions = [
  { id: "google", label: "Google" },
  { id: "instagram", label: "Instagram" },
  { id: "clickability", label: "Clickability" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "facebook", label: "Facebook" },
  { id: "kismet", label: "Kismet" },
  { id: "mycarespace", label: "MyCareSpace" },
  { id: "karista", label: "Karista" },
  { id: "support-coordinator", label: "Support Coordinator" },
  { id: "other", label: "Other" },
];

// Form schemas for each step
const personalDetailsSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z.string().min(6, { message: "Phone number is required" }),
  email: z.string().email({ message: "Valid email is required" }),
});

const participantDetailsSchema = z.object({
  participantName: z.string().min(2, { message: "Participant name is required" }),
  participantDob: z.string().optional(),
  participantGender: z.string().optional(),
  disability: z.string().optional(),
  participantAddress: z.string().optional(),
  ndisNumber: z.string().optional(),
});

const serviceDetailsSchema = z.object({
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  referralReason: z.string().optional(),
  referralSource: z.string().optional(),
  enquiry: z.string().optional(),
});

// Combined schema
const referralFormSchema = z.object({
  ...personalDetailsSchema.shape,
  ...participantDetailsSchema.shape,
  ...serviceDetailsSchema.shape,
});

type ReferralFormData = z.infer<typeof referralFormSchema>;

const MultiStepReferral = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Create form instance
  const form = useForm<ReferralFormData>({
    resolver: zodResolver(referralFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      participantName: "",
      participantDob: "",
      participantGender: "",
      disability: "",
      participantAddress: "",
      ndisNumber: "",
      services: [],
      referralReason: "",
      referralSource: "",
      enquiry: "",
    },
    mode: "onChange",
  });

  // Get form state
  const { isValid, isDirty } = form.formState;

  // Step validation mapping
  const validateStep = (step: number) => {
    switch (step) {
      case 0:
        return form.trigger(["firstName", "lastName", "phone", "email"]);
      case 1:
        return form.trigger(["participantName"]);
      case 2:
        return form.trigger(["services"]);
      default:
        return true;
    }
  };

  // Next step handler
  const handleNextStep = async () => {
    const isStepValid = await validateStep(currentStep);
    if (isStepValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Previous step handler
  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Submit handler
  const onSubmit = async (data: ReferralFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mldbpjnr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _subject: `New referral for ${data.participantName}`,
          formType: "referral"
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit referral form');
      }
      
      toast({
        title: "Referral Sent",
        description: "Thank you for your referral. We'll be in touch shortly!",
      });
      
      form.reset();
      setCurrentStep(0);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem sending your referral. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Progress indicator
  const steps = [
    { name: "Personal Details", description: "Your contact information" },
    { name: "Participant Details", description: "Information about the participant" },
    { name: "Service Details", description: "Services required and additional information" },
  ];

  // Render step content
  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="Your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="Your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number*</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address*</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email address" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="participantName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Participant's Full Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="Participant's full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="participantDob"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="participantGender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="non-binary">Non-Binary</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="disability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Disability</FormLabel>
                  <FormControl>
                    <Input placeholder="Please describe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="participantAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Participant's address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ndisNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NDIS Number</FormLabel>
                  <FormControl>
                    <Input placeholder="NDIS number (if applicable)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="services"
              render={() => (
                <FormItem>
                  <div className="mb-2">
                    <FormLabel>What services are you interested in?*</FormLabel>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {serviceOptions.map((option) => (
                      <FormField
                        key={option.id}
                        control={form.control}
                        name="services"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={option.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(option.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value || [], option.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== option.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal text-sm">
                                {option.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referralReason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason for referral</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please explain why you're referring this person"
                      className="resize-none min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referralSource"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Where did you hear about us?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a source" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {referralSourceOptions.map((option) => (
                        <SelectItem key={option.id} value={option.id}>{option.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="enquiry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any additional information you'd like to share"
                      className="resize-none min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= index
                    ? "bg-[hsl(var(--vitality-green))] text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {currentStep > index ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium">{step.name}</p>
                <p className="text-xs text-gray-500">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-10 h-1 mx-2 ${
                    currentStep > index
                      ? "bg-[hsl(var(--vitality-green))]"
                      : "bg-gray-200"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderStepContent(currentStep)}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevStep}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            
            {currentStep < steps.length - 1 ? (
              <Button
                type="button"
                onClick={handleNextStep}
                className="bg-[hsl(var(--vitality-green))] text-white hover:opacity-90 flex items-center gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[hsl(var(--vitality-green))] to-[hsl(var(--vitality-blue))] hover:opacity-90 text-white flex items-center gap-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-white border-opacity-50 border-t-white rounded-full"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Submit Referral
                    <Send className="h-4 w-4" />
                  </span>
                )}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MultiStepReferral; 