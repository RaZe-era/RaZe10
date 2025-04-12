```typescript
// data/services.ts
import { IconType } from 'react-icons';
import { FaPaintBrush, FaBullhorn, FaDesktop, FaShareAlt, FaCalendarAlt, FaLightbulb, FaPalette, FaFilePowerpoint, FaMobileAlt, FaShoppingBag, FaUserTie, FaBookOpen, FaUsers, FaPenNib, FaEnvelopeOpenText, FaUtensils, FaAddressCard, FaQuestionCircle, FaInstagram, FaHamburger, FaFilm } from 'react-icons/fa'; // Added more icons

// --- NEW TIER STRUCTURE ---
export interface PricingTierUSD {
  level: 'Basic' | 'Pro' | 'Elite';
  originalPriceUSD: number; // Anchor price (strikethrough)
  launchPriceUSD: number; // The $59+ style offer
  features: string[];
  concepts: string;
  revisions: string;
  deliveryEstimate: string;
  bonus?: string; // Elite bonus
  scarcity?: string; // Elite scarcity hook
  glowColor: string;
  isMostPopular?: boolean; // Highlight Pro or Elite
}

// --- EXPANDED SERVICE CATEGORY ---
export interface ServiceCategoryExpanded {
  id: string;
  name: string;
  description: string; // Short description for cards
  longDescription?: string; // Fuller description for pricing section
  icon?: IconType;
  previewImage?: string; // Image path for card/overview
  tags?: string[]; // Sub-types like ['Personal', 'Business'] for Web Design
  tiers: PricingTierUSD[]; // Use the new tier structure
}

// --- DEFINE SERVICE CATEGORIES WITH NEW PRICING ---
// PLEASE VERIFY/REPLACE ALL 'previewImage' paths with your actual image filenames in /public/images/portfolio/
export const serviceCategoriesExpanded: ServiceCategoryExpanded[] = [
    // 1. Web Design
    {
      id: 'web-design', name: 'Web Design & Dev', description: 'Stunning, high-performance websites that convert.',
      longDescription: "From sleek portfolios to robust e-commerce platforms, we build digital experiences that define brands. We focus on luxury aesthetics, seamless UX, and cutting-edge technology.",
      icon: FaDesktop, previewImage: '/images/portfolio/sample-mockup-web.jpg', tags: ['Personal', 'Business', 'Portfolio', 'E-Commerce'],
      tiers: [
        { level: 'Basic', originalPriceUSD: 599, launchPriceUSD: 59, features: ['Single Page Design', 'Responsive Layout', 'Contact Form', 'Basic SEO'], concepts: '1 Concept', revisions: '1 Revision', deliveryEstimate: '3-4 Days', glowColor: 'cyan' },
        { level: 'Pro', originalPriceUSD: 1499, launchPriceUSD: 159, features: ['Up to 5 Pages', 'CMS Integration Ready', 'Enhanced Animations', 'SEO Optimized'], concepts: '2 Concepts', revisions: '2 Revisions', deliveryEstimate: '5-7 Days', glowColor: 'magenta', isMostPopular: true },
        { level: 'Elite', originalPriceUSD: 3499, launchPriceUSD: 349, features: ['Unlimited Pages', 'Custom Functionality', 'E-commerce Setup', 'Advanced UI/UX Strategy', 'Dedicated Support'], concepts: 'Multiple Concepts', revisions: 'Unlimited Minor Revisions', deliveryEstimate: '7-10+ Days', bonus: 'Free Brand Strategy Mini-Session', scarcity: 'Only 3 Elite slots/month!', glowColor: 'yellow' },
      ],
    },
    // 2. Logo Design
    {
      id: 'logo-design', name: 'Logo Design', description: 'Iconic logos that tell your brand’s story instantly.',
      icon: FaPenNib, previewImage: '/images/portfolio/sample-logo-1.jpg',
      tiers: [
        { level: 'Basic', originalPriceUSD: 299, launchPriceUSD: 29, features: ['1 Logo Concept', 'Basic Typography', 'JPG/PNG Files'], concepts: '1 Concept', revisions: '1 Revision', deliveryEstimate: '2-3 Days', glowColor: 'cyan' },
        { level: 'Pro', originalPriceUSD: 699, launchPriceUSD: 69, features: ['2 Logo Concepts', 'Color Variations', 'Vector Files (AI/EPS)', 'Mockup Preview'], concepts: '2 Concepts', revisions: '2 Revisions', deliveryEstimate: '3-5 Days', glowColor: 'magenta', isMostPopular: true },
        { level: 'Elite', originalPriceUSD: 1499, launchPriceUSD: 149, features: ['3+ Unique Concepts', 'Full Brand Mark Suite', 'Social Media Sizes', 'Style Snippet', 'Source Files'], concepts: 'Multiple Concepts', revisions: 'Unlimited Minor Revisions', deliveryEstimate: '5-7 Days', bonus: 'Business Card Concept', glowColor: 'yellow' },
      ],
    },
    // 3. Branding Kit
     {
      id: 'branding-kit', name: 'Branding Kit', description: 'Comprehensive brand identity: logo, fonts, colors.',
      icon: FaPalette, previewImage: '/images/portfolio/sample-brand-kit.jpg',
      tiers: [
        { level: 'Basic', originalPriceUSD: 499, launchPriceUSD: 49, features: ['Logo Design (Basic)', 'Primary Color Palette', 'Primary Font Selection'], concepts: '1 Kit Concept', revisions: '1 Revision', deliveryEstimate: '3-4 Days', glowColor: 'cyan' },
        { level: 'Pro', originalPriceUSD: 1199, launchPriceUSD: 119, features: ['Logo Design (Pro)', 'Full Color Palette', 'Font Hierarchy', 'Basic Guidelines PDF'], concepts: '2 Kit Concepts', revisions: '2 Revisions', deliveryEstimate: '5-7 Days', glowColor: 'magenta', isMostPopular: true },
        { level: 'Elite', originalPriceUSD: 2999, launchPriceUSD: 299, features: ['Logo Design (Elite)', 'Extensive Brand Guidelines', 'Iconography Style', 'Social Templates (3)'], concepts: 'Multiple Concepts', revisions: 'Unlimited Minor Revisions', deliveryEstimate: '7-10 Days', bonus: '1-Pager Website Style Tile', glowColor: 'yellow' },
      ],
    },
    // 4. Brochures & Catalogs
     {
      id: 'brochures-catalogs', name: 'Brochures & Catalogs', description: 'Engaging print & digital brochures that captivate.',
      icon: FaBookOpen, previewImage: '/images/portfolio/sample-brochure-1.jpg',
      tiers: [
        { level: 'Basic', originalPriceUSD: 399, launchPriceUSD: 39, features: ['Up to 4 Pages', 'Digital PDF Output', 'Basic Stock Photos'], concepts: '1 Concept', revisions: '1 Revision', deliveryEstimate: '2-3 Days', glowColor: 'cyan' },
        { level: 'Pro', originalPriceUSD: 899, launchPriceUSD: 89, features: ['Up to 8 Pages', 'Print-Ready Files', 'Interactive PDF', 'Source Files (Indd/PSD)'], concepts: '2 Concepts', revisions: '2 Revisions', deliveryEstimate: '3-5 Days', glowColor: 'magenta', isMostPopular: true },
        { level: 'Elite', originalPriceUSD: 1999, launchPriceUSD: 199, features: ['Unlimited Pages (Scope Limit)', 'Custom Graphics', 'Advanced Layout', 'Premium Stock Imagery'], concepts: 'Multiple Concepts', revisions: 'Unlimited Minor Revisions', deliveryEstimate: '5-7+ Days', glowColor: 'yellow' },
      ],
    },
     // 5. Posters & Event Flyers
     {
      id: 'posters-flyers', name: 'Posters & Event Flyers', description: 'Eye-catching designs that draw crowds and attention.',
      icon: FaCalendarAlt, previewImage: '/images/portfolio/sample-flyer-1.jpg',
      tiers: [
          { level: 'Basic', originalPriceUSD: 199, launchPriceUSD: 19, features: ['Single Sided Design', 'Web Optimized Version', 'Standard Layout'], concepts: '1 Concept', revisions: '1 Revision', deliveryEstimate: '2-3 Days', glowColor: 'cyan' },
          { level: 'Pro', originalPriceUSD: 499, launchPriceUSD: 49, features: ['Double Sided / Multiple Sizes', 'Print Ready Files', 'Source Files (PSD/AI)', 'Stock Photo Included'], concepts: '2 Concepts', revisions: '2 Revisions', deliveryEstimate: '3-5 Days', glowColor: 'magenta', isMostPopular: true },
          { level: 'Elite', originalPriceUSD: 999, launchPriceUSD: 99, features: ['Custom Illustration/Art', 'Full Size Range + Socials', 'Animated GIF Option', 'Premium Support'], concepts: 'Multiple Concepts', revisions: 'Unlimited Minor Revisions', deliveryEstimate: '5-7 Days', bonus: 'Matching Social Banner', glowColor: 'yellow' },
      ],
    },
     // 6. Instagram Posts & Stories
     {
      id: 'instagram-graphics', name: 'Instagram Posts & Stories', description: 'Scroll-stopping graphics optimized for Instagram.',
      icon: FaInstagram, previewImage: '/images/portfolio/sample-instagram.jpg',
      tiers: [
        { level: 'Basic', originalPriceUSD: 249, launchPriceUSD: 25, features: ['3 Static Post Designs', 'Based on Your Brand', 'JPG/PNG Output'], concepts: '1 Style Concept', revisions: '1 Revision', deliveryEstimate: '2-3 Days', glowColor: 'cyan' },
        { level: 'Pro', originalPriceUSD: 599, launchPriceUSD: 59, features: ['5 Post + 2 Story Designs', 'Editable Templates (Canva/Figma)', 'Carousel Post Design (1)'], concepts: '2 Style Concepts', revisions: '2 Revisions', deliveryEstimate: '3-5 Days', glowColor: 'magenta', isMostPopular: true },
        { level: 'Elite', originalPriceUSD: 1299, launchPriceUSD: 129, features: ['10 Post + 5 Story Designs', 'Mix of Static & Simple Animation', 'Custom Icons/Elements', 'Reel Cover Templates (2)'], concepts: 'Multiple Concepts', revisions: 'Unlimited Minor Revisions', deliveryEstimate: '5-7 Days', bonus: 'Hashtag Strategy Snippet', glowColor: 'yellow' },
      ],
    },
    // 7. Mockups & Product Presentations
    {
      id: 'mockups', name: 'Mockups & Presentations', description: 'Realistic mockups that showcase your work flawlessly.',
      icon: FaMobileAlt, previewImage: '/images/portfolio/sample-mockup-1.jpg',
      tiers: [
        { level: 'Basic', originalPriceUSD: 149, launchPriceUSD: 15, features: ['1 Scene/Device Mockup', 'High Resolution Output', 'Your Artwork Inserted'], concepts: 'N/A - Based on Asset', revisions: '1 Minor Adjustment', deliveryEstimate: '1-2 Days', glowColor: 'cyan' },
        { level: 'Pro', originalPriceUSD: 349, launchPriceUSD: 35, features: ['3 Scenes/Devices', 'Custom Background Options', 'Multiple Angles/Views'], concepts: 'N/A - Based on Assets', revisions: '2 Adjustments', deliveryEstimate: '2-3 Days', glowColor: 'magenta', isMostPopular: true },
        { level: 'Elite', originalPriceUSD: 799, launchPriceUSD: 79, features: ['5+ Scenes/Devices', 'Advanced Scene Composition', 'Subtle Animation (GIF/MP4)', 'Source File (PSD if applicable)'], concepts: 'N/A - Based on Assets', revisions: 'Unlimited Minor Adjustments', deliveryEstimate: '3-5 Days', bonus: 'Social Media Crop Previews', glowColor: 'yellow' },
      ],
    },
    // 8. Social Media Management Graphics (Retainer Example)
     {
      id: 'social-media-management-graphics', name: 'Social Media Mgmt Graphics', description: 'Consistent, high-quality graphics for ongoing social presence.',
      icon: FaShareAlt, previewImage: '/images/portfolio/sample-social-kit.jpg',
      tiers: [
        { level: 'Basic', originalPriceUSD: 499, launchPriceUSD: 49, features: ['10 Graphics/Month', 'Post + Story Mix', 'Platform Optimized', 'Brand Consistency Check'], concepts: 'Monthly Strategy Call', revisions: 'Included within Scope', deliveryEstimate: 'Ongoing Retainer', glowColor: 'cyan' },
        { level: 'Pro', originalPriceUSD: 999, launchPriceUSD: 99, features: ['20 Graphics/Month', 'Includes Basic Video/Animation', 'Content Calendar Input', 'Performance Review'], concepts: 'Monthly Strategy Call', revisions: 'Included within Scope', deliveryEstimate: 'Ongoing Retainer', glowColor: 'magenta', isMostPopular: true },
        { level: 'Elite', originalPriceUSD: 1999, launchPriceUSD: 199, features: ['40+ Graphics/Month', 'Advanced Animation/Video', 'A/B Testing Variants', 'Dedicated Designer', 'Ad Creative Included'], concepts: 'Bi-Weekly Strategy Call', revisions: 'Included within Scope', deliveryEstimate: 'Ongoing Retainer', glowColor: 'yellow' },
      ],
    },
    // 9. Digital Invitations & Announcements
    {
      id: 'invitations-announcements', name: 'Invitations & Announcements', description: 'Elegant digital designs for events or special notices.',
      icon: FaEnvelopeOpenText, previewImage: '/images/portfolio/sample-invitation.jpg',
      tiers: [
        { level: 'Basic', originalPriceUSD: 129, launchPriceUSD: 13, features: ['Single Design Concept', 'Web & Email Format', 'Standard Layout'], concepts: '1 Concept', revisions: '1 Revision', deliveryEstimate: '1-2 Days', glowColor: 'cyan' },
        { level: 'Pro', originalPriceUSD: 299, launchPriceUSD: 29, features: ['2 Design Concepts', 'Printable Version Option', 'Minor Custom Elements', 'Source File (PSD/AI)'], concepts: '2 Concepts', revisions: '2 Revisions', deliveryEstimate: '2-3 Days', glowColor: 'magenta', isMostPopular: true },
        { level: 'Elite', originalPriceUSD: 599, launchPriceUSD: 59, features: ['Multiple Concepts', 'Custom Illustrations/Graphics', 'Animated Version (GIF/MP4)', 'Matching Social Snippets'], concepts: 'Multiple Concepts', revisions: 'Unlimited Minor Revisions', deliveryEstimate: '3-5 Days', bonus: 'Event RSVP Form Styling', glowColor: 'yellow' },
      ],
    },
    // 10. Restaurant Menus
    {
      id: 'restaurant-menus', name: 'Restaurant Menus', description: 'Appetizing menu designs for print or digital display.',
      icon: FaHamburger, previewImage: '/images/portfolio/sample-menu.jpg',
      tiers: [
        { level: 'Basic', originalPriceUSD: 349, launchPriceUSD: 35, features: ['Single Page/Panel Menu', 'Print-Ready PDF', 'Based on Your Text'], concepts: '1 Style Concept', revisions: '1 Content Revision', deliveryEstimate: '2-3 Days', glowColor: 'cyan' },
        { level: 'Pro', originalPriceUSD: 799, launchPriceUSD: 79, features: ['Multi-Page/Panel Menu', 'Custom Layout & Sections', 'Editable Source File (Indd/PSD)', 'Digital Menu Version'], concepts: '2 Style Concepts', revisions: '2 Revisions (Content+Design)', deliveryEstimate: '3-5 Days', glowColor: 'magenta', isMostPopular: true },
        { level: 'Elite', originalPriceUSD: 1599, launchPriceUSD: 159, features: ['Full Menu System Design', 'Custom Icons/Illustrations', 'Table Tent / Specials Card', 'QR Code Integration', 'Photography Styling Advice'], concepts: 'Multiple Concepts', revisions: 'Unlimited Minor Revisions', deliveryEstimate: '5-7+ Days', bonus: 'Matching Coaster Design', glowColor: 'yellow' },
      ],
    },
    // 11. Pitch Deck / Presentation Slides
    {
      id: 'pitch-decks', name: 'Pitch Deck / Presentations', description: 'Compelling slides that secure funding and close deals.',
      icon: FaFilePowerpoint, previewImage: '/images/portfolio/sample-ppt-1.jpg',
      tiers: [
        { level: 'Basic', originalPriceUSD: 699, launchPriceUSD: 69, features: ['Up to 10 Slides Design', 'Template Customization', 'Stock Icons/Images'], concepts: '1 Style Concept', revisions: '1 Revision', deliveryEstimate: '3-4 Days', glowColor: 'cyan' },
        { level: 'Pro', originalPriceUSD: 1799, launchPriceUSD: 179, features: ['Up to 20 Slides Design', 'Custom Template Design', 'Basic Infographics', 'Editable PPT/Keynote'], concepts: '2 Style Concepts', revisions: '2 Revisions', deliveryEstimate: '5-7 Days', glowColor: 'magenta', isMostPopular: true },
        { level: 'Elite', originalPriceUSD: 3999, launchPriceUSD: 399, features: ['Unlimited Slides Design', 'Complex Infographics & Data Viz', 'Custom Illustrations', 'Narrative Consultation', 'Animation Polish'], concepts: 'Multiple Concepts', revisions: 'Unlimited Minor Revisions', deliveryEstimate: '7-10+ Days', bonus: 'Executive Summary 1-Pager', glowColor: 'yellow' },
      ],
    },
    // 12. Custom Business Cards
     {
      id: 'business-cards', name: 'Custom Business Cards', description: 'Cards that make a lasting, premium impression.',
      icon: FaAddressCard, previewImage: '/images/portfolio/sample-card-1.jpg',
      tiers: [
        { level: 'Basic', originalPriceUSD: 149, launchPriceUSD: 15, features: ['1 Design Concept (2 Sided)', 'Standard Size', 'Print-Ready PDF'], concepts: '1 Concept', revisions: '1 Revision', deliveryEstimate: '1-2 Days', glowColor: 'cyan' },
        { level: 'Pro', originalPriceUSD: 349, launchPriceUSD: 35, features: ['2 Design Concepts', 'Multiple Names/Titles (up to 5)', 'Source File (AI/PSD)', 'Premium Finish Suggestion'], concepts: '2 Concepts', revisions: '2 Revisions', deliveryEstimate: '2-3 Days', glowColor: 'magenta', isMostPopular: true },
        { level: 'Elite', originalPriceUSD: 699, launchPriceUSD: 69, features: ['3+ Unique Concepts', 'Die-Cut / Special Finish Prep', 'Unlimited Names/Titles', 'Matching Digital Signature', 'Full Source Files'], concepts: 'Multiple Concepts', revisions: 'Unlimited Minor Revisions', deliveryEstimate: '3-5 Days', bonus: 'LinkedIn Banner Concept', glowColor: 'yellow' },
      ],
    },
    // 13. Custom Requests
    {
      id: 'custom-request', name: 'Custom Requests', description: 'Have a unique vision? Submit your brief. Let’s build it.',
      longDescription: "Don't see exactly what you need? No problem. RaZe thrives on unique challenges. Submit your project details, and we'll provide a custom proposal tailored to your vision and budget. Let's create something extraordinary together.",
      icon: FaQuestionCircle, previewImage: '/images/portfolio/sample-custom.jpg',
      tiers: [], // No standard tiers, link directly to booking form/consultation
    },
];
```
