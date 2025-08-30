import React from "react";

const Platform = () => {
  return (
    <section id="platform" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-light mb-6">The Platform</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Four pillars that redefine how recruitment works in the modern
            economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="text-center">
            <div className="w-1 h-12 bg-black mx-auto mb-8"></div>
            <h4 className="text-xl font-medium mb-4">Revenue Sharing</h4>
            <p className="text-gray-600 leading-relaxed">
              Transparent compensation model that aligns success across the
              entire ecosystem.
            </p>
          </div>

          <div className="text-center">
            <div className="w-1 h-12 bg-black mx-auto mb-8"></div>
            <h4 className="text-xl font-medium mb-4">Marketing Engine</h4>
            <p className="text-gray-600 leading-relaxed">
              Automated tools that amplify reach and streamline candidate
              acquisition at scale.
            </p>
          </div>

          <div className="text-center">
            <div className="w-1 h-12 bg-black mx-auto mb-8"></div>
            <h4 className="text-xl font-medium mb-4">Broker Community</h4>
            <p className="text-gray-600 leading-relaxed">
              Competitive ecosystem where top performers collaborate and drive
              industry excellence.
            </p>
          </div>

          <div className="text-center">
            <div className="w-1 h-12 bg-black mx-auto mb-8"></div>
            <h4 className="text-xl font-medium mb-4">AI Learning</h4>
            <p className="text-gray-600 leading-relaxed">
              Intelligent platform that continuously learns to optimize matching
              and outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
