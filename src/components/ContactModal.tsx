import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const send = (email: string) => {
      const data = new FormData(form);
      data.delete('_cc');
      return fetch(`https://formsubmit.co/ajax/${email}`, { method: 'POST', body: data });
    };
    Promise.all([send('skonbardaoui@gmail.com'), send('skander.bardaoui@esprit.tn')]);
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => { setSent(false); onClose(); }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1a1a2e] rounded-2xl p-8 w-full max-w-md border border-white/10 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-2xl font-bold uppercase tracking-wide">Contact Me</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white text-2xl leading-none transition-colors"
              >
                &times;
              </button>
            </div>

            {sent ? (
              <p className="text-green-400 text-center text-lg font-medium">Message sent!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New message from your portfolio" />
                <div>
                  <label htmlFor="name" className="text-gray-300 text-sm uppercase tracking-wider block mb-1.5">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-gray-300 text-sm uppercase tracking-wider block mb-1.5">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-gray-300 text-sm uppercase tracking-wider block mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    placeholder="Your message..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full py-3.5 text-white font-medium uppercase tracking-widest text-sm mt-2"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                    outline: '2px solid white',
                    outlineOffset: '-3px',
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
