import Logos from "components/atoms/logos";
import Card from "components/organisms/card";
import {
  ChevronDownIcon,
  PhotoIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  CommandLineIcon,
  PhoneXMarkIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import Button from "components/atoms/button";
import CopyButton from "components/molecules/copy-button";
import { motion } from "framer-motion";

const features = [
  {
    name: "Lightning Fast",
    description: "Experience development at the speed of thought with Vite's instant server start.",
    logo: RocketLaunchIcon,
    docs: "https://vitejs.dev/",
  },
  {
    name: "Modern React",
    description: "Build with confidence using the latest React features and best practices.",
    logo: SparklesIcon,
    docs: "https://reactjs.org/",
  },
  {
    name: "Type Safety",
    description: "Write better code with TypeScript's powerful type system and intelligent tooling.",
    logo: CodeBracketIcon,
    docs: "https://www.typescriptlang.org/",
  },
  {
    name: "Beautiful Design",
    description: "Create stunning interfaces with Tailwind's utility-first approach.",
    logo: PhotoIcon,
    docs: "https://tailwindcss.com/",
  },
  {
    name: "Code Quality",
    description: "Maintain pristine code with ESLint's intelligent linting.",
logo: BeakerIcon,
    docs: "https://eslint.org/",
  },
  {
    name: "Perfect Formatting",
    description: "Keep your codebase consistent with Prettier's opinionated formatting.",
    logo: CommandLineIcon,
    docs: "https://prettier.io/",
  },
  {
    name: "Scalable Architecture",
    description: "Build maintainable systems with Atomic Design principles.",
    logo: PhoneXMarkIcon,
    docs: "https://bradfrost.com/blog/post/atomic-web-design/",
  },
  {
    name: "Clean Imports",
    description: "Simplify your imports with absolute paths from the project root.",
    logo: ChevronDownIcon,
    docs: "https://github.com/vitejs/vite/issues/88#issuecomment-762415200",
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
              <span className="text-gray-400"> — The Future of Web Development</span>
            </h3>
            <h1 className="text-5xl lg:text-7xl leading-none font-extrabold tracking-tight mb-8 sm:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Build Better. Build Faster.
            </h1>
            <p className="max-w-screen-lg text-xl sm:text-2xl text-gray-300 font-medium mb-10 sm:mb-11 leading-relaxed">
              A modern React template that combines the best tools and practices. 
              <span className="block mt-4 text-gray-400">
                Ready to ship. Zero configuration. Maximum productivity.
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
            <a href="https://github.com/imkuldeepahlawat/vitkd" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 px-2 py-2 rounded-md">
                Get Started on GitHub
              </Button>
            </a>
            <CopyButton text="npx degit imkuldeepahlawat/vitkd my-vitkd-app" />
          </div>
        </motion.section>

        <motion.section 
          className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
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
