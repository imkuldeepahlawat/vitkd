# 🚀 Vitkd

> A lightning-fast React starter template for modern web applications

<p align='center'>
  <b>Vitkd</b> - Speed up your development workflow
</p>

<p align='center'>
  <a href="https://vitkd.kuldeepahlawat.in">🌐 Live Demo</a>
</p>

## ✨ Features

- ⚡️ [React 19](https://react.dev/) - Latest React features and improvements
- 🦾 TypeScript - Type-safe development
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 👑 [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) - Scalable component architecture
- 🗂 Relative imports - Clean import paths
- 😃 [Hero icons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
- ☁️ Vercel deployment - Zero-config hosting

## 🛠️ Development Tools

- 📝 [ESLint](https://eslint.org/) - Code linting for React/Hooks & TypeScript
- 💅 [Prettier](https://prettier.io/) - Code formatting
- 🎯 [TypeScript](https://www.typescriptlang.org/) - Type safety
- 🚀 [Vercel](https://vercel.com) - Zero-config deployment

## 📦 Dependencies

### Core Dependencies
- React 19.0.0
- React DOM 19.0.0
- Framer Motion 12.10.0
- Hero Icons 2.1.5

### Development Dependencies
- TypeScript 5.6.3
- Vite 5.4.10
- Tailwind CSS 3.4.14
- ESLint 9.13.0
- Prettier 3.3.3
- Vitest 3.1.3
- Testing Library 14.2.1

## 🏗️ Project Structure

```
src/
├── app/           # Application routes and pages
├── components/    # React components following Atomic Design
│   ├── atoms/     # Basic building blocks
│   ├── molecules/ # Combinations of atoms
│   └── organisms/ # Complex UI components
├── hooks/         # Custom React hooks
└── test/          # Test setup and utilities
```

## 🔧 Development Workflow

### Prerequisites
- Node.js >= 18
- Yarn >= 1.22.5

### Development Server
```bash
yarn dev
```
The development server runs on http://localhost:3000

### Code Quality
```bash
# Type checking
yarn typecheck

# Linting
yarn lint

# Formatting
yarn format
```

### Testing
```bash
# Run tests
yarn test

# Run tests with coverage
yarn test:coverage
```

## 🏗️ Build and Deployment

### Production Build
```bash
yarn build
```
The build output will be in the `dist` directory.

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_URL=your_api_url
```

## 🤝 Contributing

### Commit Message Format
This project follows [Conventional Commits](https://www.conventionalcommits.org/):
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Code Style
- Follow TypeScript strict mode
- Use functional components with TypeScript
- Follow Atomic Design principles
- Write tests for new features
- Maintain 80%+ test coverage

### Pull Request Process
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 🎯 Code Quality Tools

### ESLint Configuration
- React Hooks rules
- TypeScript strict mode
- React Refresh rules
- Custom rules for code quality

### Prettier Configuration
- Single quotes
- Trailing commas
- 2 spaces indentation
- 80 characters line length

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured
- Modern JavaScript features
- React JSX support

## 🌐 Browser Support

The project supports modern browsers as defined in the browserslist configuration:
```
> 0.2%
not dead
not IE 11
```

## 🚀 Getting Started

### Using GitHub Template

[Create a repo from this template on GitHub](https://github.com/imkuldeepahlawat/vitkd/generate)

### Manual Setup

```bash
npx degit imkuldeepahlawat/vitkd my-vitkd-app
cd my-vitkd-app
yarn # If you don't have yarn installed, run: npm install -g yarn
```

## 📋 Setup Checklist

- [ ] Update `name` and `author` in `package.json`
- [ ] Update author name in `LICENSE`
- [ ] Update title in `index.html`
- [ ] Replace favicon in `public`
- [ ] Update manifest in `public`
- [ ] Customize this README

## 💻 Development

Start the development server:

```bash
yarn dev
```

Visit http://127.0.0.1:3000/

## 🏗️ Build

Create a production build:

```bash
yarn build
```

The build output will be in the `dist` directory.

## 🚀 Deployment

1. Go to [Vercel](https://vercel.com)
2. Import your repository
3. Follow the prompts
4. Your app will be live in minutes

## ⚠️ Troubleshooting

### Husky Pre-commit Hooks

If pre-commit hooks aren't working:

```bash
husky install
```

This command should run automatically after installing dependencies.

## 🤔 Why Vitkd?

This template was created to streamline the React development process. It includes:

- Modern tooling and best practices
- Optimized development workflow
- Production-ready configuration
- Clean, maintainable code structure

Feel free to customize and maintain your own version!

## 🙏 Acknowledgments

This project is inspired by and built upon the excellent work of [Josep Vidal](https://github.com/jvidalv), particularly his [vital](https://github.com/jvidalv/vital) template. I've extended and customized it to create Vitkd, adding our own improvements while maintaining the core principles of modern React development.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
