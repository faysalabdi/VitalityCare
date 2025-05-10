import { motion } from "framer-motion";
import { TeamMemberType } from "@/data/team";

interface TeamMemberProps {
  member: TeamMemberType;
}

const TeamMember = ({ member }: TeamMemberProps) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      variants={item}
      className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105"
    >
      <div className={`h-64 bg-[hsl(var(--vitality-${member.color}-25))] relative overflow-hidden`}>
        <img 
          src={member.image} 
          alt={`${member.name}, ${member.role}`} 
          className="w-full h-full object-cover"
        />
        
        {/* Puzzle piece accent */}
        <div className={`absolute top-0 left-0 w-12 h-12 bg-[hsl(var(--vitality-${member.color}))]`} style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)", opacity: 0.7 }}></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-[hsl(var(--neutral-dark))] mb-1">{member.name}</h3>
        <p className={`text-[hsl(var(--vitality-${member.color}))] mb-4`}>{member.role}</p>
        <p className="text-[hsl(var(--neutral-dark))] text-sm mb-4">{member.bio}</p>
        <div className="flex gap-2">
          {member.email && (
            <a 
              href={`mailto:${member.email}`} 
              className={`text-[hsl(var(--vitality-${member.color}))] hover:text-[hsl(var(--vitality-${member.color}-75))]`} 
              aria-label={`Email ${member.name}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          )}
          {member.profile && (
            <a 
              href={member.profile} 
              className={`text-[hsl(var(--vitality-${member.color}))] hover:text-[hsl(var(--vitality-${member.color}-75))]`} 
              aria-label={`View ${member.name}'s profile`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
