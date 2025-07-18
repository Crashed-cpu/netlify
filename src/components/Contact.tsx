import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    intent: 'Collab',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your message! I\'ll get back to you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          intent: 'Collab',
          message: ''
        });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear any previous messages when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
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
            <form 
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              action="/?success=true"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="mt-1 block w-full bg-gray-800/50 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="mt-1 block w-full bg-gray-800/50 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="intent" className="block text-sm font-medium text-gray-300">
                  I'm reaching out about...
                </label>
                <select
                  id="intent"
                  name="intent"
                  value={formData.intent}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="mt-1 block w-full bg-gray-800/50 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="Collab">Collaboration</option>
                  <option value="Hire">Job Opportunity</option>
                  <option value="Question">Question</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="mt-1 block w-full bg-gray-800/50 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your message..."
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {submitStatus && (
                  <div className={`p-3 rounded-md ${submitStatus.success ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                    {submitStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 px-8 py-3 ${isSubmitting ? 'bg-cyan-600' : 'bg-cyan-500 hover:bg-cyan-400'} text-gray-900 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
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
                    href="https://github.com/Crashed-cpu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 hover:border-cyan-500/50 transition-all duration-200 group"
                    aria-label="GitHub"
                  >
                    <Github size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/the-ayush-factor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 hover:border-cyan-500/50 transition-all duration-200 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                  <a
                    href="https://x.com/Ayushsa82728134"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 hover:border-cyan-500/50 transition-all duration-200 group"
                    aria-label="Twitter"
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