import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FileText, ArrowRight } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = searchTerm 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : blogPosts;

  return (
    <>
      <Helmet>
        <title>Blog & Resources | Vitality Community Care</title>
        <meta name="description" content="Explore our blog for resources, tips, and stories about disability support, NDIS services, and community care." />
        <meta property="og:title" content="Blog & Resources | Vitality Community Care" />
        <meta property="og:description" content="Insights and resources for disability support and community care." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[hsl(var(--vitality-blue-25))] to-[hsl(var(--vitality-green-25))] py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Vitality Insights</h1>
            <p className="text-lg mb-8">
              Explore the latest insights and updates from our community care experts.
            </p>
            
            <div className="relative max-w-lg mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 rounded-full"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-[hsl(var(--neutral-light))] rounded-xl overflow-hidden shadow-lg">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-[hsl(var(--vitality-green))] text-white text-xs font-medium py-1 px-2 rounded mb-4">
                    {filteredPosts[0].category}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-semibold mb-4">{filteredPosts[0].title}</h2>
                  <p className="text-gray-600 mb-2">{filteredPosts[0].date}</p>
                  <p className="mb-6">{filteredPosts[0].excerpt}</p>
                  <Button asChild variant="outline" className="self-start rounded-full border-[hsl(var(--vitality-green))] text-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green))] hover:text-white">
                    <a href={`/blog/${filteredPosts[0].slug}`}>Read Full Article</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Articles Grid */}
      <section className="py-16 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          {searchTerm && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">
                {filteredPosts.length === 0 
                  ? "No results found" 
                  : `Search results for "${searchTerm}"`}
              </h2>
              {filteredPosts.length > 0 && (
                <p>Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}</p>
              )}
            </div>
          )}
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="mb-4">Try adjusting your search terms or browse all our articles.</p>
              <Button onClick={() => setSearchTerm("")} className="rounded-full bg-[hsl(var(--vitality-green))]">
                View All Articles
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(searchTerm ? 0 : 1).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {!searchTerm && filteredPosts.length > 6 && (
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="rounded-full border-[hsl(var(--vitality-blue))] text-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue))] hover:text-white">
                <a href="/blog/archive">View More Articles</a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Referral CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[hsl(var(--vitality-blue-10))] to-[hsl(var(--vitality-green-10))] p-8 rounded-xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white opacity-5 rounded-full"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white opacity-5 rounded-full"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="text-[hsl(var(--vitality-blue))] w-8 h-8 md:w-12 md:h-12" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Know Someone Who Could Benefit From Our Services?</h3>
                <p className="text-[hsl(var(--neutral-dark))] mb-4">
                  You can easily refer family members, friends, or clients who might need our support services. Our referral process is quick and straightforward.
                </p>
                <Button asChild className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
                  <a href="/referral" className="flex items-center gap-2">
                    Make a Referral Now
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-8">
              Stay updated with the latest insights, resources, and news from Vitality Community Care.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow py-6 rounded-full"
                required
              />
              <Button type="submit" className="whitespace-nowrap rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
