import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useState } from "react";
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
import { FileText, Send, Calendar, User, Users } from "lucide-react";
import PuzzlePiece from "@/components/shared/PuzzlePiece";

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

// Create schema for referral form
const referralFormSchema = z.object({
  // Referrer Details
  referrerName: z.string().min(2, { message: "Please enter a valid name" }),
  referrerOrganisation: z.string().optional(),
  referrerPhone: z.string().min(6, { message: "Please enter a valid phone number" }),
  referrerEmail: z.string().email({ message: "Please enter a valid email address" }),
  services: z.array(z.string()).optional(),
  
  // Participant Details
  participantName: z.string().min(2, { message: "Please enter the participant's name" }),
  participantDob: z.string().optional(),
  participantGender: z.string().optional(),
  participantPhone: z.string().optional(),
  participantEmail: z.string().email({ message: "Please enter a valid email address" }).optional(),
  participantAddress: z.string().optional(),
  referralReason: z.string().optional(),
  disability: z.string().optional(),
  referralSource: z.string().optional(),
  enquiry: z.string().optional(),
});

type ReferralFormData = z.infer<typeof referralFormSchema>;

const Referral = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ReferralFormData>({
    resolver: zodResolver(referralFormSchema),
    defaultValues: {
      referrerName: "",
      referrerOrganisation: "",
      referrerPhone: "",
      referrerEmail: "",
      services: [],
      participantName: "",
      participantDob: "",
      participantGender: "",
      participantPhone: "",
      participantEmail: "",
      participantAddress: "",
      referralReason: "",
      disability: "",
      referralSource: "",
      enquiry: "",
    },
  });

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

  return (
    <>
      <Helmet>
        <title>Make a Referral | Vitality Community Care</title>
        <meta name="description" content="Refer someone to Vitality Community Care. Fill out our easy referral form and we'll be in touch promptly." />
        <meta property="og:title" content="Make a Referral | Vitality Community Care" />
        <meta property="og:description" content="Refer someone to our services. We're committed to providing quality care." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background with color sections */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[hsl(var(--vitality-blue))] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[hsl(var(--vitality-green))] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--vitality-blue))] text-white">
                <FileText className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Make a Referral</h1>
            <p className="text-lg mb-8">
              Referring someone to Vitality Community Care is a breeze. Just fill out the form below, and a welcoming team member will reach out to you shortly.
            </p>
            
            {/* Decorative elements */}
            <div className="hidden md:block absolute top-10 left-10">
              <PuzzlePiece variant="green" size="sm" className="opacity-20 animate-float" />
            </div>
            <div className="hidden md:block absolute bottom-10 right-10">
              <PuzzlePiece variant="blue" size="sm" className="opacity-20 animate-float-delay" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Referral Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[hsl(var(--neutral-light))] p-8 rounded-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Referrer Details Section */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Users className="h-5 w-5 text-[hsl(var(--vitality-green))]" />
                    <h2 className="text-2xl font-semibold text-[hsl(var(--neutral-dark))]">Referrer Details</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="referrerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="referrerOrganisation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organisation</FormLabel>
                          <FormControl>
                            <Input placeholder="Your organisation (if applicable)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="referrerPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone*</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="referrerEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email*</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email address" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="services"
                      render={() => (
                        <FormItem>
                          <div className="mb-2">
                            <FormLabel>What services are you interested in?</FormLabel>
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
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                {/* Participant Details Section */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <User className="h-5 w-5 text-[hsl(var(--vitality-blue))]" />
                    <h2 className="text-2xl font-semibold text-[hsl(var(--neutral-dark))]">Participant Details</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="participantName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="participantPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="Participant's phone number" type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="participantEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Participant's email address" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
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
                      name="referralReason"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reason for referral?</FormLabel>
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
                      name="disability"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What is your disability?</FormLabel>
                          <FormControl>
                            <Input placeholder="Please describe" {...field} />
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
                          <FormLabel>Enquiry</FormLabel>
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
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[hsl(var(--vitality-green))] to-[hsl(var(--vitality-blue))] hover:opacity-90 text-white"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="animate-spin h-4 w-4 border-2 border-white border-opacity-50 border-t-white rounded-full"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Details
                      <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Referral; 