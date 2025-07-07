import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    intent: 'Collab',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform complexity into clarity? Let's connect and create something remarkable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="intent" className="block text-sm font-medium text-gray-300 mb-2">
                  Intent
                </label>
                <select
                  id="intent"
                  name="intent"
                  value={formData.intent}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="Collab">Collaboration</option>
                  <option value="Hiring">Hiring</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <Send size={18} />
                  Send Message
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold rounded-lg transition-all duration-200 border border-gray-700 hover:border-gray-600"
                >
                  View Resume
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-cyan-400" />
                  <span className="text-gray-300">Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-cyan-400" />
                  <a 
                    href="mailto:the.ayush.factor@gmail.com" 
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    the.ayush.factor@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/ayushsaini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 hover:border-cyan-500/50 transition-all duration-200 group"
                  >
                    <Github size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com/in/ayushsaini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 hover:border-cyan-500/50 transition-all duration-200 group"
                  >
                    <Linkedin size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                  <a
                    href="https://twitter.com/ayushsaini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 hover:border-cyan-500/50 transition-all duration-200 group"
                  >
                    <Twitter size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8">
              <h4 className="text-lg font-semibold text-white mb-3">Philosophy</h4>
              <blockquote className="text-cyan-300 italic">
                "Systems should feel intelligent, not intimidating. Modularity is how I bring calm to complexity."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;