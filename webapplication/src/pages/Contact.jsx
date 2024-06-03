import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="backdrop-blur-lg border-2 border-neutral-700/20 shadow-xl p-8 max-w-md w-full space-y-8">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text text-center">
          Get in Touch
        </h2>

        <div className="space-y-4">
          {/* Contact info remains unchanged */}
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-900/50 border border-pink-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Full Name"
              />
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-900/50 border border-pink-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Email address"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-gray-900/50 border border-pink-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <button
              type="submit"
              className="
              p-2 mt-5 w-56 rounded-full backdrop border-2
              text-white font-bold text-md flex items-center justify-center
              transition duration-300 ease-in-out
              hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500
              hover:border-transparent hover:border-opacity-0 hover:shadow-lg hover:shadow-pink-500/50
              transform hover:scale-105
              "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;