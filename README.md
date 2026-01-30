# Melvice Guimfack - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Software Engineering student. Built with cutting-edge web technologies and featuring sophisticated animations and glassmorphism design.

## Features

- **Modern UI/UX Design**: Premium glassmorphism effects, smooth animations, and thoughtful micro-interactions
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Interactive Components**: Animated hero section with floating elements, interactive project cards, and hover effects
- **Performance Optimized**: Built with Vite for lightning-fast development and production builds
- **Accessible**: ARIA labels and semantic HTML for better accessibility

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. deploy the website on github pages for prod:
```bash
npm run deploy
```

## Project Structure

```
project/
├── src/
|   ├── assets/
│   ├── components/
│   │   ├── About.tsx         # About section with highlights
│   │   ├── Contact.tsx       # Contact information and form
│   │   ├── Experience.tsx    # Work experience timeline
│   │   ├── Footer.tsx        # Footer component
│   │   ├── Header.tsx        # Navigation header with dark mode
│   │   ├── Hero.tsx          # Hero section with animations
│   │   ├── Projects.tsx      # Projects showcase
│   │   └── Skills.tsx        # Skills and technologies
│   ├── contexts/
│   │   └── DarkModeContext.tsx  # Dark mode state management
│   ├── App.tsx               # Main app component
│   ├── index.css             # Global styles and animations
│   └── main.tsx              # Entry point
├── public/                   # Static assets
├── .env                      # Environment variables
└── package.json              # Dependencies and scripts
```

## Customization

### Personal Information

Update your personal information in the following files:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Name and tagline
   - Social media links (GitHub, LinkedIn, Email)
   - Call-to-action buttons

2. **About Section** (`src/components/About.tsx`):
   - Bio and description
   - Core values and highlights

3. **Projects Section** (`src/components/Projects.tsx`):
   - Project details, images, and links
   - Technologies used
   - Problems solved and learnings

4. **Skills Section** (`src/components/Skills.tsx`):
   - Technical skills by category
   - Tools and technologies

5. **Experience Section** (`src/components/Experience.tsx`):
   - Work experience entries
   - Education history

6. **Contact Section** (`src/components/Contact.tsx`):
   - Contact information
   - Email and location

### Styling

The project uses Tailwind CSS with custom animations defined in `src/index.css`:

- **Animations**: `animate-fade-in`, `animate-slide-up`, `animate-scale-in`, `animate-float`, `animate-blob`
- **Colors**: Blue and teal gradient scheme (customizable in Tailwind config)
- **Spacing**: Consistent 8px spacing system

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - deploy for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Performance
- **Bundle Size**: Optimized with code splitting and lazy loading
- **Animations**: Hardware-accelerated CSS transforms
- **Images**: Lazy loading with optimized formats

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

- **Email**: mguimfack@hotmail.com
- **GitHub**: [github.com/melvice](https://github.com/melvice)
- **LinkedIn**: [linkedin.com/in/melvice-guimfack](https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BwZHBMSkOSvu7TYuaASSO3g%3D%3D)
