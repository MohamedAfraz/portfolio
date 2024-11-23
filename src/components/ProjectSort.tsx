import { motion } from 'framer-motion';
import { TrendingUp, Clock } from 'lucide-react';

type SortOption = 'newest' | 'popularity';

interface ProjectSortProps {
  activeSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string; icon: typeof Clock }[] = [
  { value: 'newest', label: 'Newest', icon: Clock },
  { value: 'popularity', label: 'Popular', icon: TrendingUp },
];

export default function ProjectSort({ activeSort, onSortChange }: ProjectSortProps) {
  return (
    <div className="flex justify-center gap-4">
      {sortOptions.map(({ value, label, icon: Icon }) => (
        <motion.button
          key={value}
          onClick={() => onSortChange(value)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
            activeSort === value
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
          whileHover={{ scale: activeSort === value ? 1.05 : 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon size={16} />
          {label}
        </motion.button>
      ))}
    </div>
  );
}