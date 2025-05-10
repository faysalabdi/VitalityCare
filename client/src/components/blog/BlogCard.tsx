import { motion } from "framer-motion";
import { BlogPostType } from "@/data/blogPosts";
import { Link } from "wouter";

interface BlogCardProps {
  post: BlogPostType;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={item}
      className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col"
    >
      <div className="h-48 relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-50"></div>
        
        <div className="absolute bottom-4 left-4">
          <span className={`bg-[hsl(var(--vitality-${post.categoryColor}))] text-white text-xs font-medium py-1 px-2 rounded`}>
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-[hsl(var(--neutral-dark))] opacity-75 mb-2">{post.date}</p>
        <h3 className="text-xl font-medium text-[hsl(var(--neutral-dark))] mb-2">{post.title}</h3>
        <p className="text-[hsl(var(--neutral-dark))] mb-4 flex-grow">{post.excerpt}</p>
        <Link 
          href={`/blog/${post.slug}`} 
          className={`text-[hsl(var(--vitality-${post.categoryColor}))] font-medium flex items-center self-start hover:underline`}
        >
          Read More 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
