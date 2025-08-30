import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-light mb-8">Get Started</h3>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to transform your recruitment process? Join the platform that's
          redefining how talent connects with opportunity.
        </p>

        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <button className="w-full bg-white text-black py-3 rounded font-medium hover:bg-gray-100 transition-colors mb-8">
            Request Early Access
          </button>

          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">Or reach us directly:</p>
            <p>hello@recruitingwithoutlimits.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
