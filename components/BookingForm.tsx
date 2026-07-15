
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    serviceType: '',
    date: '',
    message: ''
  });

  const { content } = useLanguage();
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    const header = "🥂 *Nueva Consulta - Mobile Drinks CR* 🥂";
    const name = `👤 *${content.booking.form.name}:* ${formData.name}`;
    const service = `🍸 *${content.booking.form.service}:* ${formData.serviceType}`;
    const date = `📅 *${content.booking.form.date}:* ${formData.date}`;
    const details = `📝 *${content.booking.form.details}:* ${formData.message}`;
    
    const fullText = `${header}%0A%0A${name}%0A${service}%0A${date}%0A%0A${details}`;
    
    window.open(`https://api.whatsapp.com/send?phone=50660548233&text=${fullText}`, '_blank');
    
    setTimeout(() => {
      setIsSending(false);
      setFormData({
        name: '',
        serviceType: '',
        date: '',
        message: ''
      });
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#001a35]/40 border border-[#C5A021]/10 p-6 md:p-10 rounded-2xl shadow-2xl text-left backdrop-blur-sm max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="space-y-1.5">
          <label className="text-[#C5A021] text-[9px] uppercase tracking-[0.2em] font-bold ml-1 opacity-80">{content.booking.form.name}</label>
          <input 
            required
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={content.booking.form.namePlaceholder}
            className="w-full bg-[#000d1a]/80 border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A021]/40 transition-all placeholder:text-gray-700"
          />
        </div>
        
        <div className="space-y-1.5">
          <label className="text-[#C5A021] text-[9px] uppercase tracking-[0.2em] font-bold ml-1 opacity-80">{content.booking.form.service}</label>
          <select 
            required
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full bg-[#000d1a]/80 border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A021]/40 transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled>{content.booking.form.servicePlaceholder}</option>
            {content.services.items.map(s => (
              <option key={s.name} value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5 md:col-span-2">
          <label className="text-[#C5A021] text-[9px] uppercase tracking-[0.2em] font-bold ml-1 opacity-80">{content.booking.form.date}</label>
          <input 
            required
            type="date" 
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full bg-[#000d1a]/80 border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A021]/40 transition-all"
          />
        </div>

        <div className="md:col-span-2 space-y-1.5">
          <label className="text-[#C5A021] text-[9px] uppercase tracking-[0.2em] font-bold ml-1 opacity-80">{content.booking.form.details}</label>
          <textarea 
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder={content.booking.form.detailsPlaceholder}
            className="w-full bg-[#000d1a]/80 border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A021]/40 transition-all placeholder:text-gray-700 resize-none"
          ></textarea>
        </div>
      </div>

      <button 
        type="submit"
        disabled={isSending}
        className="group relative w-full py-4 bg-[#C5A021] text-black font-bold uppercase tracking-[0.25em] text-[11px] rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(197,160,33,0.3)] disabled:opacity-50 flex items-center justify-center gap-3 active:scale-[0.98]"
      >
        <span className="relative z-10">
          {isSending ? content.booking.form.sending : content.booking.form.button}
        </span>
        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        {!isSending && (
          <svg className="w-4 h-4 text-black relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </button>
    </form>
  );
};

export default BookingForm;
