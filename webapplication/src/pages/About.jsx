import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 ">
      <div className="w-full max-w-4xl space-y-8">
        {/* Brief Introduction */}
        <div className="backdrop-blur-lg border-2 border-neutral-700/20 shadow-xl p-8 rounded-lg space-y-6">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text text-center">
            Welcome to SkyScanner
          </h1>
          <p className="text-white text-center text-lg leading-relaxed">
            At SkyScanner, we're more than just a flight checker—we're your ultimate travel companion. Founded in 2018 in San Francisco, we've been revolutionizing the way people search, compare, and book flights. Our passion for technology and love for travel drive us to create seamless, intuitive tools that make your journey from dream to destination as smooth as your flight.
          </p>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="backdrop-blur-lg border-2 border-neutral-700/20 shadow-xl p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold text-white">Our Technology</h2>
            <ul className="space-y-2 text-gray-300">
              <li>• React & Next.js for lightning-fast UIs</li>
              <li>• Node.js & GraphQL for robust APIs</li>
              <li>• TailwindCSS for sleek design</li>
              <li>• AWS & Kubernetes for scalability</li>
              <li>• Machine Learning for price predictions</li>
            </ul>
          </div>

          {/* Industry Impact */}
          <div className="backdrop-blur-lg border-2 border-neutral-700/20 shadow-xl p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold text-white">Industry Impact</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-pink-400">50M+ Users Worldwide</h3>
                <p className="text-gray-300">Trusted by travelers from over 150 countries, making us a global leader.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pink-400">$1B+ Saved for Customers</h3>
                <p className="text-gray-300">Our AI-driven price alerts and comparisons save real money.</p>
              </div>
            </div>
          </div>

          {/* Our Team */}
          <div className="backdrop-blur-lg border-2 border-neutral-700/20 shadow-xl p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold text-white">Our Team</h2>
            <div>
              <h3 className="text-lg font-semibold text-pink-400">Alex Chen - CEO & Founder</h3>
              <p className="text-gray-300">Ex-Google engineer, 10+ years in travel tech</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-400">Maria Rodriguez - CTO</h3>
              <p className="text-gray-300">AI expert, previously at OpenAI</p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="backdrop-blur-lg border-2 border-neutral-700/20 shadow-xl p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="text-gray-300">
              To make air travel accessible, affordable, and anxiety-free for everyone. We believe that exploring our world shouldn't be hindered by complex bookings or high costs. Our mission is to use cutting-edge technology to break down these barriers.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
        <Link 
            to="/flightcheck" 
            className="
            p-3 px-8 rounded-full backdrop border-2
            text-white font-bold text-lg flex items-center justify-center
            transition duration-300 ease-in-out
            hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500
            hover:border-transparent hover:border-opacity-0 hover:shadow-lg hover:shadow-pink-500/50
            transform hover:scale-105
            "
          >
            Try Our Flight Checker
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;