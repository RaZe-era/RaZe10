// components/Footer.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaInstagram, FaPinterest, FaBehance, FaLinkedin, FaCoffee, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socials = [
    { Icon: FaInstagram, href: 'https://www.instagram.com/raze.era1?igsh=MWhxb3VmbDMyN2lyaQ==', name: 'Instagram', color: 'pink' },
    { Icon: FaPinterest, href: '#', name: 'Pinterest', color: 'red' }, // <-- REPLACE #
    { Icon: FaBehance, href: '#', name: 'Behance', color: 'blue' }, // <-- REPLACE #
    { Icon: FaLinkedin, href: '#', name: 'LinkedIn', color: 'cyan' }, // <-- REPLACE #
  ];
  const footerFormAction = "https://formspree.io/f/YOUR_FOOTER_FORM_ID"; // <-- REPLACE if using separate footer form, otherwise remove 'action' and 'method' from form tag below

  return (
    <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="pt-16 pb-8 px-4 bg-gray-900 border-t border-gray-700/50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 text-gray-400">
        {/* Col 1: Brand & Contact */}
        <div> <h3 className="text-xl font-bold text-glow-purple mb-4">RaZe</h3> <p className="text-sm mb-3">Architects of Brand Impact.</p> <p className="text-sm mb-1"><FaEnvelope className="inline mr-1"/> <a href="mailto:official.razeglobal@gmail.com" className="hover:text-white hover:underline">official.razeglobal@gmail.com</a></p> <p className="text-sm">Digital Nomad HQ</p> </div>
        {/* Col 2: Quick Links */}
        <div> <h4 className="font-semibold text-gray-200 mb-3 uppercase text-sm tracking-wider">Explore</h4> <ul className="space-y-2 text-sm"> <li><Link href="#about" legacyBehavior><a className="hover:text-white hover:underline">About RaZe</a></Link></li> <li><Link href="#categories-overview" legacyBehavior><a className="hover:text-white hover:underline">Services</a></Link></li> <li><Link href="#pricing" legacyBehavior><a className="hover:text-white hover:underline">Launch Pricing</a></Link></li> <li><Link href="#testimonials" legacyBehavior><a className="hover:text-white hover:underline">Client Success</a></Link></li> <li><Link href="#booking-form" legacyBehavior><a className="hover:text-white hover:underline">Book Now</a></Link></li> </ul> </div>
        {/* Col 3 & 4: Socials & Mini Form */}
        <div className="md:col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* Socials & Support */}
             <div> <h4 className="font-semibold text-gray-200 mb-3 uppercase text-sm tracking-wider">Connect</h4> <div className="flex space-x-5 mb-6"> {socials.map((s) => ( <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className={`hover:text-${s.color}-400 transition-colors text-glow-${s.color}`}> <s.Icon size={22} /> </a> ))} </div> <a href="https://www.buymeacoffee.com/YOUR_USERNAME" /* <-- REPLACE USERNAME */ target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-4 rounded-md shadow transition-colors"> <FaCoffee className="mr-2"/> Support Our Work </a> </div>
             {/* Mini Form */}
             <div> <h4 className="font-semibold text-gray-200 mb-3 uppercase text-sm tracking-wider">Submit Your Vision</h4>
                 <form action={footerFormAction} method="POST">
                      <label htmlFor="footer-email" className="sr-only">Your Email</label>
                      <input id="footer-email" type="email" name="email" placeholder="Your Email for Quick Contact" required className="w-full p-2 mb-2 bg-gray-700 border border-gray-600 rounded-md text-sm placeholder-gray-500 focus:ring-1 focus:ring-purple-500 focus:border-transparent"/>
                      <label htmlFor="footer-vision" className="sr-only">Your Vision</label>
                      <textarea id="footer-vision" name="vision" rows={2} placeholder="Briefly, what's your idea?" className="w-full p-2 mb-2 bg-gray-700 border border-gray-600 rounded-md text-sm placeholder-gray-500 focus:ring-1 focus:ring-purple-500 focus:border-transparent"></textarea>
                      <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold py-2 px-4 rounded-md shadow hover:opacity-90 transition-opacity"> Send Brief </button>
                 </form>
             </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-gray-700/50 text-center text-xs text-gray-500"> <p>&copy; {new Date().getFullYear()} RaZe Creations. All Rights Reserved. | <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a></p> <p className="mt-1">Built with Power & Precision.</p> </div>
    </motion.footer>
  );
};
export default Footer;
