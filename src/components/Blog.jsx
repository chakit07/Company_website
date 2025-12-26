import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Cloud Computing: Trends to Watch in 2025',
      excerpt: 'Explore the latest trends shaping cloud computing, from edge computing to serverless architectures and how they impact business operations.',
      author: 'Sarah Johnson',
      date: 'Dec 20, 2024',
      category: 'Cloud Computing',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3NjY2ODM4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      title: 'AI-Powered Development: How Machine Learning is Transforming Software',
      excerpt: 'Discover how artificial intelligence is revolutionizing the software development lifecycle and improving code quality and efficiency.',
      author: 'Michael Chen',
      date: 'Dec 18, 2024',
      category: 'AI & Machine Learning',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1620680779930-e74c15c8f7a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYXJ0aWNsZXxlbnwxfHx8fDE3NjY3NzEwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Modern Enterprises',
      excerpt: 'Learn essential cybersecurity strategies to protect your organization from evolving threats and maintain data integrity.',
      author: 'Emily Rodriguez',
      date: 'Dec 15, 2024',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1647675975434-864e1c3fc98d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGluc2lnaHRzfGVufDF8fHx8MTc2Njc3MTA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest thoughts on technology trends, best practices, 
            and industry insights.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <motion.a
                    href="#blog"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Read more
                    <ArrowRight size={16} className="ml-1" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="#blog"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
            <ArrowRight className="ml-2" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
