import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Developer Course',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    description: 'Complete web development course',
  },
  {
    name: 'Code Templates',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
    description: 'Premium React/Next.js templates',
  },
  {
    name: 'E-book Bundle',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80',
    description: 'Collection of programming e-books',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
    },
  }),
  hover: {
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

export default function Store() {
  return (
    <section id="store" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Digital Store</h2>
          <p className="text-gray-600 dark:text-gray-300">Premium resources to boost your development journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-2xl font-bold text-blue-600"
                  >
                    {product.price}
                  </motion.span>
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                  >
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}