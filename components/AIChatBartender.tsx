
import React, { useState, useRef, useEffect } from 'react';
import { gemini } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

const AIChatBartender: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: '¡Hola! Qué gusto saludarle. Si tiene dudas sobre el servicio para su evento, con gusto le ayudo por acá.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);
    const history = messages.map(m => ({ role: m.role, parts: [{ text: m.content }] }));
    const response = await gemini.chat(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-[#000d1a] border border-[#002147]/30 w-[350px] sm:w-[380px] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-5 border-b border-[#C5A021]/10 bg-[#001a35] flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C5A021] rounded-full flex items-center justify-center font-bold text-black text-xs">
                MD
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-sm">Equipo Mobile Drinks</h4>
                <p className="text-[10px] text-blue-200/50 uppercase tracking-widest font-semibold">En línea para ayudarle</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-black/40">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#C5A021] text-black font-medium' 
                    : 'bg-[#001a35] text-gray-300 border border-[#C5A021]/10'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#002147]/20 p-3 rounded-xl border border-white/5 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#C5A021] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#C5A021] rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#C5A021] rounded-full animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-[#000d1a] border-t border-white/5">
            <div className="relative flex items-center gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escriba su consulta..."
                className="w-full bg-[#001a35] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C5A021]/50 text-white placeholder:text-gray-600 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-[#C5A021] hover:scale-105 p-3 rounded-lg flex items-center justify-center transition-all disabled:opacity-50"
              >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-[#002147] border border-[#C5A021]/40 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
        >
          <svg className="w-6 h-6 text-[#C5A021]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          <div className="absolute right-16 bg-[#002147] border border-[#C5A021]/30 text-[#C5A021] text-[10px] font-bold px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all uppercase tracking-widest shadow-xl pointer-events-none">
            Hablar con nosotros
          </div>
        </button>
      )}
    </div>
  );
};

export default AIChatBartender;
