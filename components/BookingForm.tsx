```typescript
// components/BookingForm.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPaperPlane, FaInfoCircle } from 'react-icons/fa';
import { setHours, setMinutes } from 'date-fns';

// Structure for the selected booking info prop
interface SelectedBookingInfo {
    serviceId: string;
    serviceName: string;
    tierLevel: string; // 'Basic', 'Pro', 'Elite', or 'Custom'
    launchPriceUSD?: number; // Optional for 'Custom'
}

interface BookingFormProps {
  selectedBookingInfo: SelectedBookingInfo | null;
}

const BookingForm: React.FC<BookingFormProps> = ({ selectedBookingInfo }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Default to null, let user pick
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Reset form fields when selectedBookingInfo changes (optional UX improvement)
  useEffect(() => {
    setSelectedDate(null);
    setName('');
    setEmail('');
    setMessage('');
    setSubmitStatus(null);
  }, [selectedBookingInfo]);

  // --- YOUR FORMSPREE ENDPOINT ---
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqapnpav"; // Your confirmed endpoint

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Basic client-side validation
    if (!email || !name || (selectedBookingInfo?.tierLevel !== 'Custom' && !selectedDate) || (selectedBookingInfo?.tierLevel === 'Custom' && !message)) {
        alert("Please fill in all required fields."); // Simple alert, use better validation UI if needed
        return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    const formData = new FormData(event.target as HTMLFormElement);

    // Append selection details
    if (selectedBookingInfo) {
        formData.append('selected_service', selectedBookingInfo.serviceName);
        formData.append('selected_tier', selectedBookingInfo.tierLevel);
        if (selectedBookingInfo.launchPriceUSD !== undefined) {
            formData.append('selected_launch_price_usd', selectedBookingInfo.launchPriceUSD.toString());
        }
        formData.append('service_id_ref', selectedBookingInfo.serviceId);
    } else {
        formData.append('inquiry_type', 'General Consultation Request');
    }

    if (selectedDate) { formData.append('preferred_datetime', selectedDate.toLocaleString()); }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
      if (response.ok) {
        setSubmitStatus('success');
        // Optionally clear fields after success
        // setSelectedDate(null); setName(''); setEmail(''); setMessage('');
      } else { setSubmitStatus('error'); }
    } catch (error) { console.error("Form submission error:", error); setSubmitStatus('error'); }
    finally { setIsSubmitting(false); }
  };

  // --- Calendar Configuration ---
  const includeTimes = [ /* Specific time slots */
      setHours(setMinutes(new Date(), 0), 9), setHours(setMinutes(new Date(), 30), 9),
      setHours(setMinutes(new Date(), 0), 10), setHours(setMinutes(new Date(), 30), 10),
      setHours(setMinutes(new Date(), 0), 11), setHours(setMinutes(new Date(), 30), 11),
      setHours(setMinutes(new Date(), 0), 13), setHours(setMinutes(new Date(), 30), 13),
      setHours(setMinutes(new Date(), 0), 14), setHours(setMinutes(new Date(), 30), 14),
      setHours(setMinutes(new Date(), 0), 15), setHours(setMinutes(new Date(), 30), 15),
      setHours(setMinutes(new Date(), 0), 16), setHours(setMinutes(new Date(), 30), 16),
  ];
  const filterWeekdays = (date: Date) => date.getDay() !== 0 && date.getDay() !== 6; // Disable Sat/Sun

  return (
    <motion.section id="booking-form" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-indigo-900/10 to-gray-900 px-4 scroll-mt-16">
      <div className="container mx-auto max-w-3xl">
        {/* Dynamic Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-glow-purple">
          {selectedBookingInfo?.tierLevel === 'Custom' ? 'Submit Your Custom Project Brief' :
           selectedBookingInfo ? `Book: ${selectedBookingInfo.tierLevel} ${selectedBookingInfo.serviceName}` :
           'Request a Consultation'}
        </h2>

        {/* Display Selection Info */}
        {selectedBookingInfo && (
             <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 mb-8 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-lg border border-purple-500/50 text-center shadow-md">
                 <p className="font-semibold text-lg text-white flex items-center justify-center gap-2"> <FaInfoCircle className="text-purple-300"/> Your Selection: <span className={`font-bold text-${selectedBookingInfo.tierLevel === 'Elite' ? 'yellow' : selectedBookingInfo.tierLevel === 'Custom' ? 'purple' : 'indigo'}-400`}>{selectedBookingInfo.tierLevel} {selectedBookingInfo.serviceName}</span> </p>
                 {selectedBookingInfo.launchPriceUSD !== undefined && ( <p className="text-2xl font-bold text-white my-1"> Launch Price: ${selectedBookingInfo.launchPriceUSD} USD </p> )}
                 <p className="text-sm text-gray-400 mt-1">{selectedBookingInfo.tierLevel === 'Custom' ? "Provide details below. We'll follow up with a custom quote." : "Confirm details & select preferred time below."}</p>
             </motion.div>
          )}

        {/* --- Form JSX --- */}
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Calendar */}
            <div className="relative">
                <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-300 mb-1">Preferred Date & Time {selectedBookingInfo?.tierLevel !== 'Custom' && <span className='text-red-500'>*</span>}</label>
                 <div className="relative flex items-center"> <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> <FaClock className="absolute left-9 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <DatePicker
                        selected={selectedDate} onChange={(date: Date | null) => setSelectedDate(date)}
                        showTimeSelect minDate={new Date()} filterDate={filterWeekdays} //includeTimes={includeTimes} // Uncomment to restrict times
                        dateFormat="MMMM d, yyyy h:mm aa" className="pl-16 w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400 text-white"
                        placeholderText="Select date and time" wrapperClassName="w-full" required={selectedBookingInfo?.tierLevel !== 'Custom'}
                    />
                </div>
            </div>
            {/* Name */}
            <div className="relative"> <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name <span className='text-red-500'>*</span></label> <FaUser className="absolute left-3 top-[calc(50%+4px)] transform -translate-y-1/2 text-gray-400" /> <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full pl-10 p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400 text-white" placeholder="Your Name"/> </div>
            {/* Email */}
            <div className="relative"> <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address <span className='text-red-500'>*</span></label> <FaEnvelope className="absolute left-3 top-[calc(50%+4px)] transform -translate-y-1/2 text-gray-400" /> <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full pl-10 p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400 text-white" placeholder="you@example.com"/> <input type="hidden" name="_replyto" value={email} /> </div>
            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    {selectedBookingInfo?.tierLevel === 'Custom' ? 'Project Details / Brief' : 'Project Notes / Questions'} {selectedBookingInfo?.tierLevel === 'Custom' && <span className='text-red-500'>*</span>}
                </label>
                 <textarea id="message" name="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required={selectedBookingInfo?.tierLevel === 'Custom'} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400 text-white" placeholder={selectedBookingInfo?.tierLevel === 'Custom' ? 'Describe your vision, goals, timeline, budget range...' : 'Any specific requirements or questions?'}></textarea>
             </div>
             {/* Submit Status */}
            <div className="text-center min-h-[24px]">
                {submitStatus === 'success' && <motion.p initial={{ opacity: 0}} animate={{ opacity: 1}} className="mb-4 text-green-400 text-glow-green">Thanks for your request! We'll be in touch shortly.</motion.p>}
                {submitStatus === 'error' && <motion.p initial={{ opacity: 0}} animate={{ opacity: 1}} className="mb-4 text-red-400 text-glow-red">Oops! Error submitting. Please try again or contact us directly.</motion.p>}
            </div>
             {/* Submit Button */}
            <div className="text-center">
                 <motion.button type="submit" disabled={isSubmitting || submitStatus === 'success'} whileHover={{ scale: 1.05, filter: 'brightness(1.1)', transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }} className={`relative inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isSubmitting || submitStatus === 'success' ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-xl'}`}>
                     <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 hover:opacity-20 transition-opacity duration-500"></span>
                     <span className="relative z-10 flex items-center">
                         {isSubmitting ? (
                            <> <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle> <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg> Submitting... </>
                         ) : submitStatus === 'success' ? (
                            <> <FaCheckCircle className="mr-2"/> Submitted! </>
                         ) : (
                             <> <FaPaperPlane className="mr-2"/> {selectedBookingInfo?.tierLevel === 'Custom' ? 'Submit Brief' : 'Request Booking'} </>
                         )}
                     </span>
                 </motion.button>
             </div>
        </form>
      </div>
    </motion.section>
  );
};

export default BookingForm;
```
