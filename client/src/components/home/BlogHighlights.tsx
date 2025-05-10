import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";

const BlogHighlights = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Get the latest 3 blog posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-16 bg-[hsl(var(--neutral-light))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">Latest Insights</h2>
          <p className="text-lg text-[hsl(var(--neutral-dark))] max-w-3xl mx-auto">
            Discover resources, tips, and stories from our community care experts.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg" className="rounded-full border-[hsl(var(--vitality-blue))] text-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue))] hover:text-white">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHighlights;
