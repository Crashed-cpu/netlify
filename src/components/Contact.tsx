import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import FormInput from './ui/FormInput';
import SocialLinks from './ui/SocialLinks';

interface FormData {
  name: string;
  email: string;
  intent: string;
  message: string;
}

interface ContactInfoItem {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

interface SocialLink {
  icon: React.ComponentType<{ size: number; className: string }>;
  href: string;
  label: string;
}

const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    intent: 'Collab',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any previous messages when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const intentOptions = [
    { value: 'Collab', label: 'Collaboration' },
    { value: 'Hire', label: 'Job Opportunity' },
    { value: 'Question', label: 'Question' },
    { value: 'Other', label: 'Other' }
  ];

  const validateForm = (): boolean => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields.'
      });
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid email address.'
      });
      return false;
    }

    return true;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      intent: 'Collab',
      message: ''
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Show sending message
    setSubmitStatus({
      success: true,
      message: 'Sending your message...'
    });

    try {
      // Create form data
      const formData = new FormData(e.currentTarget);
      const formEntries = Object.fromEntries(formData.entries());
      
      // Submit to Netlify function
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formEntries as Record<string, string>).toString()
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form');
      }
      
      // Handle successful submission
      setSubmitStatus({
        success: true,
        message: result.message || 'Message sent successfully! I\'ll get back to you soon.'
      });
      
      // Reset form on success
      resetForm();
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        success: false,
        message: error instanceof Error 
          ? error.message 
          : 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
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
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-cyan-400/30 transition-all duration-500 overflow-hidden">
            <form 
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6 p-8"
              netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="intent" value={formData.intent} />
              
              {submitStatus && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.success ? 'bg-green-900/30 border border-green-800 text-green-300' : 'bg-red-900/30 border border-red-800 text-red-300'
                } mb-6 transition-all duration-300`}>
                  {submitStatus.message}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  id="name"
                  name="name"
                  type="text"
                  label="Name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <FormInput
                id="intent"
                name="intent"
                label="I'm reaching out about..."
                value={formData.intent}
                onChange={handleChange}
                as="select"
                options={intentOptions}
              />

              <div className="col-span-2">
                <FormInput
                  id="message"
                  name="message"
                  label="Message"
                  value={formData.message}
                  onChange={handleChange}
                  as="textarea"
                  rows={5}
                  placeholder="Your message..."
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="group-hover:animate-pulse" />
                      <span className="group-hover:tracking-wide transition-all duration-300">Send Message</span>
                    </>
                  )}
                </button>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5 border border-gray-700 hover:border-gray-600"
                >
                  <span>View Resume</span>
                </a>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {[
              {
                icon: <Mail className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform" />,
                title: 'Email Me',
                content: (
                  <a 
                    href="mailto:ayushsaini102@gmail.com" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:pl-1 inline-block"
                  >
                    ayushsaini102@gmail.com
                  </a>
                )
              },
              {
                icon: <MapPin className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform" />,
                title: 'Location',
                content: 'New Delhi, India'
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 hover-lift p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/30">
                <div className="p-3 bg-gray-800/50 rounded-lg group-hover:bg-cyan-400/10 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <div className="text-gray-400 transition-colors duration-300 group-hover:text-cyan-400">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-white mb-6">Connect With Me</h3>
              <SocialLinks />
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