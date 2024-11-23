import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import ProjectSort from '../components/ProjectSort';
import { useEffect, useState } from 'react';

type ProjectType = 'All' | 'Apps' | 'Websites' | 'Extensions';
type SortOption = 'newest' | 'popularity';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  type: ProjectType | Exclude<ProjectType, 'All'>;
  date: string;
  popularity: number;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'Project Alpha',
    description: 'A modern web application built with React and TypeScript, featuring real-time data synchronization and a beautiful UI.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tech: ['React', 'TypeScript', 'Tailwind'],
    type: 'Apps',
    date: '2024-02',
    popularity: 95,
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Project Beta',
    description: 'Mobile-first e-commerce platform with seamless payment integration and user authentication.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    tech: ['Next.js', 'MongoDB', 'Stripe'],
    type: 'Websites',
    date: '2024-01',
    popularity: 88,
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Project Gamma',
    description: 'AI-powered analytics dashboard providing insights through interactive visualizations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    tech: ['Python', 'TensorFlow', 'React'],
    type: 'Apps',
    date: '2023-12',
    popularity: 92,
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Project Delta',
    description: 'Real-time collaboration tool enabling seamless team communication and project management.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80',
    tech: ['Socket.io', 'React', 'Node.js'],
    type: 'Apps',
    date: '2023-11',
    popularity: 85,
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Project Epsilon',
    description: 'Mobile fitness tracking app with personalized workout plans and progress monitoring.',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80',
    tech: ['React Native', 'Firebase', 'Redux'],
    type: 'Apps',
    date: '2023-10',
    popularity: 90,
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Project Zeta',
    description: 'Blockchain-based voting system ensuring secure and transparent elections.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80',
    tech: ['Solidity', 'Web3.js', 'React'],
    type: 'Apps',
    date: '2023-09',
    popularity: 87,
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Browser Extension',
    description: 'Productivity-boosting browser extension for streamlined workflow management.',
    image: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?auto=format&fit=crop&q=80',
    tech: ['JavaScript', 'Chrome API', 'CSS'],
    type: 'Extensions',
    date: '2023-08',
    popularity: 82,
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and skills with modern design.',
    image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    type: 'Websites',
    date: '2023-07',
    popularity: 89,
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

const projectTypes: ProjectType[] = ['All', 'Apps', 'Websites', 'Extensions'];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
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

export default function ProjectsPage() {
  const [activeType, setActiveType] = useState<ProjectType>('All');
  const [activeSort, setActiveSort] = useState<SortOption>('newest');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    let filtered = projects;
    
    // Apply type filter
    if (activeType !== 'All') {
      filtered = filtered.filter(project => project.type === activeType);
    }

    // Apply sort
    filtered = [...filtered].sort((a, b) => {
      if (activeSort === 'newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return b.popularity - a.popularity;
    });

    setFilteredProjects(filtered);
  }, [activeType, activeSort]);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-200">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 dark:text-white">My Projects</h1>
            <p className="text-gray-600 dark:text-gray-300">
              A collection of my work across various platforms and technologies
            </p>
          </motion.div>

          <div className="mb-12 space-y-8">
            <div className="flex justify-center gap-4">
              {projectTypes.map((type) => (
                <motion.button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeType === type
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: activeType === type ? 1.05 : 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {type}
                </motion.button>
              ))}
            </div>

            <ProjectSort
              activeSort={activeSort}
              onSortChange={setActiveSort}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-white rounded-full text-gray-900"
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-white rounded-full text-gray-900"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}