"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useNotifier } from "@/hooks/useNotifier";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [sended, setSended] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { sendMessage } = useNotifier();

  const handleSubmit = async (e: { preventDefault: () => void }): Promise<void> => {
    e.preventDefault();
    if (loading || message.length === 0 || email.length === 0 || sended)
      return;

    setLoading(true);
    
    await sendMessage(`[${email}] says: ${message}`);
    
    setLoading(false);
    setSended(true);
    setEmail("");
    setMessage("");
    
    setTimeout(() => setSended(false), 30000);
  };

  if (sended) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex flex-col items-center justify-center gap-4 p-8 bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl shadow-lg backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle2 className="w-16 h-16 text-cyan-500" />
        </motion.div>
        
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-white">
            Message Sent!
          </h3>
          <p className="text-gray-300">
            Thanks for reaching out! I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="flex flex-col gap-6 p-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Contact me.
          </h3>
          <p className="text-gray-400 text-sm">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-gray-300">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            className="
              w-full px-4 py-3 rounded-lg 
              bg-black/50 text-white
              border border-neutral-700 
              focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20
              transition-all duration-200
              placeholder:text-gray-500
            "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-semibold text-gray-300">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me about your project or question..."
            className="
              w-full px-4 py-3 rounded-lg 
              bg-black/50 text-white
              border border-neutral-700 
              focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20
              transition-all duration-200
              placeholder:text-gray-500
              resize-none
            "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <motion.button
          onClick={ handleSubmit }
          disabled={loading || !email || !message}
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
          className="
            relative bg-cyan-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-cyan-400 
            transition-all duration-200 flex justify-center items-center gap-2
            disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40
          "
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>

        <p className="text-xs text-gray-500 text-center">
          Your information is safe and will never be shared with third parties.
        </p>
      </div>
    </motion.div>
  );
}