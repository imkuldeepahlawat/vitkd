import {
  forwardRef,
  RefAttributes,
  ForwardRefExoticComponent,
  SVGProps,
} from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  title: string;
  description: string;
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & RefAttributes<SVGSVGElement>
  >;
  href: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, Icon, href, ...rest }, ref) => {
    return (
      <motion.div
        ref={ref}
        className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden h-full border border-white/10 hover:border-white/20 transition-all duration-300"
        whileHover={{ y: -5 }}
        {...rest}
      >
        <div className="absolute right-4 top-4">
          <Icon 
            className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" 
            aria-hidden="true" 
          />
        </div>
        <div className="flex flex-col h-full">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            {title}
          </h3>
          <p className="mt-3 text-base text-gray-300 flex-1 leading-relaxed">
            {description}
          </p>
          <div className="pt-6">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              Learn more
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
);

export default Card;
