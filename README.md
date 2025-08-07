# UVOKA - LinkedIn Personal Branding Agency Website

A modern, responsive website for UVOKA, a LinkedIn personal branding agency. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion for smooth animations and interactions.

## 🚀 Live Demo

Visit the live website: [https://uvoka.advaitt.tech](https://uvoka.advaitt.tech)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Components Overview](#components-overview)
- [Styling & Theming](#styling--theming)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with persistent state
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Components**: Hover effects, scroll animations, and micro-interactions
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized images, lazy loading, and efficient rendering

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom shadcn/ui components
- **Package Manager**: pnpm
- **Deployment**: Vercel

## 📁 Project Structure

```
_uvoka-website/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with providers
│   ├── loading.tsx              # Loading component
│   ├── page.tsx                 # Homepage
│   ├── privacy-policy/          # Privacy policy page
│   └── terms-of-service/        # Terms of service page
├── components/                   # React components
│   ├── ui/                      # Reusable UI components (shadcn/ui)
│   ├── AboutSection.tsx         # About section component
│   ├── CTASection.tsx           # Call-to-action section
│   ├── FavikonSection.tsx       # Client favicon showcase
│   ├── Footer.tsx               # Footer component
│   ├── Header.tsx               # Navigation header
│   ├── HeroSection.tsx          # Hero/landing section
│   ├── PackagesSection.tsx      # Service packages
│   ├── ProcessSection.tsx       # Process/workflow section
│   ├── ResultsSection.tsx       # Results/statistics section
│   ├── ServicesSection.tsx      # Services overview
│   ├── TeamSection.tsx          # Team member showcase
│   ├── TestimonialsSection.tsx  # Client testimonials
│   ├── TrustBar.tsx             # Trust indicators
│   └── theme-provider.tsx       # Theme context provider
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx           # Mobile detection hook
│   ├── use-scroll.ts            # Scroll position hook
│   └── use-toast.ts             # Toast notification hook
├── lib/                         # Utility functions
│   └── utils.ts                 # Common utilities
├── public/                      # Static assets
│   ├── fonts/                   # Custom fonts
│   └── [images]/                # Images and icons
├── styles/                      # Additional styles
└── [config files]               # Configuration files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/_uvoka-website.git
   cd _uvoka-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠 Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript type checking

# Database (if applicable)
pnpm db:push      # Push database schema
pnpm db:studio    # Open database studio
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured with Next.js rules
- **Prettier**: Automatic code formatting
- **Conventions**: 
  - PascalCase for components
  - camelCase for functions and variables
  - kebab-case for CSS classes

## 🧩 Components Overview

### Core Sections

#### HeroSection.tsx
- Landing section with animated headline
- Purple underline animation for "Brands" text
- Statistics showcase with animated counters
- Call-to-action buttons

#### Header.tsx
- Responsive navigation with mobile menu
- Theme toggle functionality
- Smooth scroll to sections
- Sticky header with scroll effects

#### TestimonialsSection.tsx
- Client testimonials with expandable content
- Animated cards with hover effects
- Read more/less functionality
- Responsive grid layout

#### FavikonSection.tsx
- Client favicon showcase
- 2x2 grid on mobile, 4-column on desktop
- Animated grid with hover effects

### UI Components (shadcn/ui)

The project uses custom shadcn/ui components located in `components/ui/`:

- **Button**: Custom styled buttons with variants
- **Card**: Content containers with shadows
- **Dialog**: Modal dialogs and popovers
- **Form**: Form components with validation
- **Navigation**: Menu and navigation components
- **Toast**: Notification system
- **Theme Toggle**: Dark/light mode switcher

### Custom Hooks

#### use-mobile.tsx
```typescript
const isMobile = useMobile();
// Returns boolean for mobile detection
```

#### use-scroll.ts
```typescript
const scrolled = useScroll();
// Returns scroll position for header effects
```

#### use-toast.ts
```typescript
const { toast } = useToast();
// Toast notification system
```

## 🎨 Styling & Theming

### Tailwind CSS Configuration

The project uses a custom Tailwind configuration with:

- **Custom Colors**: Purple brand colors (`#542267`, `#6c2c80`)
- **Custom Fonts**: Inter font family
- **Responsive Breakpoints**: Mobile-first approach
- **Dark Mode**: Automatic dark mode support

### Theme System

The website supports both light and dark themes:

```typescript
// Theme context usage
const { theme, setTheme } = useTheme();
```

### Color Palette

```css
/* Primary Colors */
--primary: #542267
--primary-dark: #432052
--accent: #6c2c80

/* Background Colors */
--bg-light: #ffffff
--bg-dark: #0f0f23

/* Text Colors */
--text-light: #374151
--text-dark: #f9fafb
```

### Animation Classes

```css
/* Hover Effects */
.hover-lift { transform: translateY(-4px); }
.hover-scale { transform: scale(1.05); }

/* Transitions */
.transition-smooth { transition: all 0.3s ease; }
```

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach

All components are designed mobile-first with progressive enhancement:

```typescript
// Example responsive classes
className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Link your GitHub repository to Vercel
   - Configure build settings

2. **Environment Variables**
   - Add production environment variables in Vercel dashboard

3. **Deploy**
   ```bash
   # Automatic deployment on push to main branch
   git push origin main
   ```

### Manual Deployment

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## 🔧 Configuration Files

### next.config.mjs
- Image optimization settings
- Redirects and rewrites
- Performance optimizations

### tailwind.config.ts
- Custom color palette
- Font configurations
- Animation utilities

### tsconfig.json
- TypeScript strict mode
- Path aliases
- Compiler options

## 📊 Performance

### Optimizations

- **Image Optimization**: Next.js Image component with WebP format
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components loaded on demand
- **Bundle Analysis**: Regular bundle size monitoring

### Lighthouse Scores

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add new testimonial section"
   ```
6. **Push and create a pull request**

### Commit Convention

```
type(scope): description

feat: new feature
fix: bug fix
docs: documentation
style: formatting
refactor: code restructuring
test: adding tests
chore: maintenance
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support:

- **Email**: contact@uvoka.com
- **Website**: [https://uvoka.advaitt.tech](https://uvoka.advaitt.tech)
- **Issues**: Create an issue in this repository

## 🙏 Acknowledgments

- **Design Inspiration**: Modern SaaS landing pages
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 🚀 Hosting

This website is hosted on **Vercel** - a modern cloud platform for static sites and serverless functions.

- **Platform**: Vercel
- **CDN**: Global edge network for fast loading
- **SSL**: Automatic HTTPS certificates
- **Deployment**: Automatic deployments from Git

## 👨‍💻 Development

**Developed by [Advaitt.tech](https://advaitt.tech)** 

---

**Built with ❤️ by the UVOKA team** 