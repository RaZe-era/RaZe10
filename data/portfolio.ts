```typescript
// data/portfolio.ts
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string; // Path relative to /public folder
  description?: string;
  glowColor?: string;
}

// PLEASE VERIFY/REPLACE ALL 'imageUrl' paths with your actual image filenames in /public/images/portfolio/
export const portfolioSamples: PortfolioItem[] = [
  { id: 'logo-raze', title: 'RaZe Brand Identity', category: 'Logos', imageUrl: '/images/portfolio/sample-logo-1.jpg', description: 'Bold and dynamic logo system.', glowColor: 'purple' },
  { id: 'brochure-tech', title: 'Tech Innovate Brochure', category: 'Brochures', imageUrl: '/images/portfolio/sample-brochure-1.jpg', description: 'Sleek tri-fold for product launch.', glowColor: 'cyan' },
  { id: 'mockup-app', title: 'Mobile App Showcase', category: 'Mockups', imageUrl: '/images/portfolio/sample-mockup-1.jpg', description: 'Realistic presentation on device screens.', glowColor: 'blue' },
  { id: 'flyer-event', title: 'Music Fest Flyer', category: 'Flyers', imageUrl: '/images/portfolio/sample-flyer-1.jpg', description: 'Vibrant design to attract attendees.', glowColor: 'magenta' },
  { id: 'poster-art', title: 'Abstract Art Expo Poster', category: 'Posters', imageUrl: '/images/portfolio/sample-poster-1.jpg', description: 'Minimalist design for gallery event.', glowColor: 'yellow' },
  { id: 'card-luxe', title: 'Luxury Consulting Card', category: 'Visiting Cards', imageUrl: '/images/portfolio/sample-card-1.jpg', description: 'Premium finish business card.', glowColor: 'purple' },
  { id: 'ppt-startup', title: 'Startup Pitch Deck', category: 'PPTs', imageUrl: '/images/portfolio/sample-ppt-1.jpg', description: 'Compelling investor presentation.', glowColor: 'cyan' },
  { id: 'web-ecommerce', title: 'E-commerce Platform UI', category: 'Web Design', imageUrl: '/images/portfolio/sample-mockup-web.jpg', description: 'High-fidelity website visual.', glowColor: 'blue' },
  // Add more samples for different categories
];
```
