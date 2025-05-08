import Logos from 'components/atoms/logos';
import Card from 'components/organisms/card';
import {
  PhotoIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  CommandLineIcon,
  BeakerIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  CubeIcon,
} from '@heroicons/react/24/outline';
import Button from 'components/atoms/button';
import CopyButton from 'components/molecules/copy-button';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Lightning Fast',
    description:
      "Experience development at the speed of thought with Vite's instant server start and HMR.",
    logo: RocketLaunchIcon,
    docs: 'https://vitejs.dev/',
  },
  {
    name: 'React 19',
    description:
      'Build with confidence using the latest React 19 features, hooks, and best practices.',
    logo: SparklesIcon,
    docs: 'https://react.dev/',
  },
  {
    name: 'TypeScript',
    description:
      "Write better code with TypeScript's powerful type system, strict mode, and intelligent tooling.",
    logo: CodeBracketIcon,
    docs: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Tailwind CSS',
    description:
      "Create stunning interfaces with Tailwind's utility-first approach and modern design system.",
    logo: PhotoIcon,
    docs: 'https://tailwindcss.com/',
  },
  {
    name: 'Testing Ready',
    description:
      'Write reliable tests with Vitest and React Testing Library, including coverage reports.',
    logo: BeakerIcon,
    docs: 'https://vitest.dev/',
  },
  {
    name: 'Code Quality',
    description:
      "Maintain pristine code with ESLint's intelligent linting and Prettier's formatting.",
    logo: BeakerIcon,
    docs: 'https://eslint.org/',
  },
  {
    name: 'Atomic Design',
    description:
      'Build maintainable systems with Atomic Design principles and scalable architecture.',
    logo: CubeIcon,
    docs: 'https://bradfrost.com/blog/post/atomic-web-design/',
  },
  {
    name: 'Git Hooks',
    description:
      'Enforce code quality with Husky, lint-staged, and commit-lint for consistent commits.',
    logo: ShieldCheckIcon,
    docs: 'https://typicode.github.io/husky/',
  },
  {
    name: 'Modern Tooling',
    description:
      'Development workflow with hot reloading, path aliases, and optimized builds.',
    logo: CommandLineIcon,
    docs: 'https://vitejs.dev/guide/',
  },
  {
    name: 'Production Ready',
    description:
      'Zero-config deployment with Vercel, optimized builds, and modern browser support.',
    logo: DocumentCheckIcon,
    docs: 'https://vercel.com',
  },
];

function App() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5/0.1,#4f46e5/0.1),linear-gradient(to_right,#4f46e5/0.1,#4f46e5/0.1)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <header className="pt-24 z-10 relative max-w-screen-lg xl:max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-3xl sm:text-5xl leading-none font-bold tracking-tight text-gray-200 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Vitkd
              </span>
              <span className="text-gray-400">
                {' '}
                — The Future of Web Development
              </span>
            </h3>
            <h1 className="text-5xl lg:text-7xl leading-none font-extrabold tracking-tight mb-8 sm:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Build Better. Build Faster.
            </h1>
            <p className="max-w-screen-lg text-xl sm:text-2xl text-gray-300 font-medium mb-10 sm:mb-11 leading-relaxed">
              A modern React template that combines the best tools and practices
              for 2024.
              <span className="block mt-4 text-gray-400">
                Ready to ship. Zero configuration. Maximum productivity.
              </span>
              <span className="block mt-4 text-gray-400">
                Built with React 19, TypeScript, Tailwind CSS, and modern
                tooling.
              </span>
            </p>
          </motion.div>
          <div className="absolute top-12 right-12 opacity-10 lg:opacity-50">
            <Logos.Vite className="w-56 h-56" />
          </div>
        </header>

        <motion.section
          className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 items-center">
            <a
              href="https://github.com/imkuldeepahlawat/vitkd"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 px-2 py-2 rounded-md">
                Get Started on GitHub
              </Button>
            </a>
            <CopyButton text="npx degit imkuldeepahlawat/vitkd my-vitkd-app" />
          </div>
        </motion.section>

        <motion.section
          className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {features.map((props, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
            >
              <Card
                title={props.name}
                description={props.description}
                Icon={props.logo}
                href={props.docs}
              />
            </motion.div>
          ))}
        </motion.section>

        <motion.footer
          className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 text-center sm:text-right text-gray-400 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="https://github.com/imkuldeepahlawat"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Crafted with ❤️ by Kuldeep Ahlawat @ {new Date().getFullYear()}
          </a>
        </motion.footer>
      </motion.div>
    </main>
  );
}

export default App;
