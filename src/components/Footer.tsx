import { motion } from 'framer-motion';
import { Github, Youtube, MessageSquare, Mail } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navigationItems = [
    { name: 'Home', path: '/', section: 'home' },
    { name: 'Projects', path: '/projects', section: 'projects' },
    { name: 'Contact', path: '/#contact', section: 'contact' },
    { name: 'About', path: '/#about', section: 'about' },
  ];

  const handleNavigation = (path: string, section: string) => {
    if (isHomePage) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 rounded-t-3xl">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Afraz</h3>
            <p className="text-gray-400">
              Building digital experiences that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  {item.name === 'Projects' ? (
                    <Link
                      to="/projects"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.path, item.section)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="flex space-x-4 mb-4">
              {[Github, Youtube, MessageSquare, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
            <p className="text-gray-400">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          © {new Date().getFullYear()} Mohamed Afraz. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}