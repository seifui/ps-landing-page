# Prezso Labs Landing Page

A modern, AI-powered productivity landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful glassmorphism design with dark theme
- ✨ Smooth scroll animations and reveal effects
- 📱 Fully responsive design
- 🎭 Custom 3D transforms and perspective effects
- 🎪 Animated marquee for trust signals
- 🚀 Interactive components with hover effects
- 🌊 Animated background powered by UnicornStudio

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Iconify
- **Fonts:** Inter, Plus Jakarta Sans
- **Animation:** Custom CSS animations + UnicornStudio

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main page component
│   └── components/
│       ├── BackgroundAnimation.tsx
│       ├── CTASection.tsx
│       ├── DemoSection.tsx
│       ├── FeaturesSection.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── Navigation.tsx
│       ├── PricingSection.tsx
│       ├── Testimonials.tsx
│       └── TrustMarquee.tsx
├── tailwind.config.ts          # Tailwind configuration with custom utilities
├── tsconfig.json              # TypeScript configuration
└── package.json              # Project dependencies

```

## Customization

### Colors

The design uses a dark color palette with indigo/purple accents. To customize colors, edit the color classes in the components or add custom colors to `tailwind.config.ts`.

### Content

All text content is directly in the component files. Search for text strings to update:
- Company name: "Prezso Labs"
- Taglines and descriptions
- Features, pricing tiers, testimonials

### Animations

Custom animations are defined in `src/app/globals.css`:
- `.reveal` - Scroll reveal animation
- `.animate-marquee` - Infinite marquee scroll
- `.glass-panel` - Glassmorphism effect
- `.title-gradient` - Gradient text effect

## Building for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm start
# or
yarn start
```

## Deployment

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, you can deploy to:
- Netlify
- AWS Amplify
- Railway
- Any platform that supports Node.js

## License

This project is open source and available for use and modification.

## Support

For issues or questions, please open an issue in the GitHub repository.
