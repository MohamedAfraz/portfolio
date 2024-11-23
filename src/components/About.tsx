import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Coffee } from 'lucide-react';
import { useState } from 'react';

const stats = [
  { icon: Code2, value: '5+', label: 'Years Experience' },
  { icon: Rocket, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '30+', label: 'Collabs' },
  { icon: Coffee, value: '1000+', label: 'Coffee Cups' },
];

const techStack = {
  languages: [
    { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
    { name: 'PHP', url: 'https://www.php.net' },
    { name: 'Python', url: 'https://www.python.org' },
    { name: 'Java', url: 'https://www.java.com' },
    { name: 'Rust', url: 'https://www.rust-lang.org' },
    { name: 'C++', url: 'https://isocpp.org' },
    { name: 'Go', url: 'https://golang.org' },
    { name: 'Markdown', url: 'https://www.markdownguide.org' }
  ],
  frameworks: [
    { name: 'Next.js', url: 'https://nextjs.org' },
    { name: 'React', url: 'https://reactjs.org' },
    { name: 'Vue.js', url: 'https://vuejs.org' },
    { name: 'Svelte', url: 'https://svelte.dev' }
  ],
  cssTools: [
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
    { name: 'Bootstrap', url: 'https://getbootstrap.com' }
  ],
  backend: [
    { name: 'Node.js', url: 'https://nodejs.org' },
    { name: 'API', url: 'https://developer.mozilla.org/en-US/docs/Web/API' }
  ],
  platforms: [
    { name: 'iOS', url: 'https://developer.apple.com/ios' },
    { name: 'MacOS', url: 'https://developer.apple.com/macos' },
    { name: 'Android', url: 'https://developer.android.com' },
    { name: 'Windows', url: 'https://developer.microsoft.com/windows' }
  ],
  mobile: [
    { name: 'Swift', url: 'https://developer.apple.com/swift' },
    { name: 'React Native', url: 'https://reactnative.dev' },
    { name: 'Kotlin', url: 'https://kotlinlang.org' }
  ],
  gamedev: [
    { name: 'Unity', url: 'https://unity.com' },
    { name: 'Unreal Engine', url: 'https://www.unrealengine.com' }
  ]
};

type Section = 'about' | 'tech';

export default function About() {
  const [activeSection, setActiveSection] = useState<Section>('about');

  const stackVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-4 mb-12">
          {(['about', 'tech'] as const).map((section) => (
            <motion.button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeSection === section
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: activeSection === section ? 1.05 : 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {section === 'about' ? 'About Me' : 'My Tech Stack'}
            </motion.button>
          ))}
        </div>

        {activeSection === 'about' ? (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80"
                alt="Mohamed Afraz"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 dark:text-white">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a software engineer with a passion for creating elegant solutions to complex problems. 
                With expertise in modern web technologies and a keen eye for design, I build applications 
                that not only work flawlessly but also provide an exceptional user experience.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through technical writing and mentoring.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold dark:text-white">{stat.value}</div>
                    <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(techStack).map(([category, items], sectionIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-6 dark:text-white capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {items.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      custom={index}
                      variants={stackVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer"
                    >
                      <span className="text-gray-800 dark:text-gray-200">{item.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}