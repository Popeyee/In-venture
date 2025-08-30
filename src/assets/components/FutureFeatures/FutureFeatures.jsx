import React from "react";

const FutureFeatures = () => {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-light mb-6">What's Next</h3>
          <p className="text-lg text-gray-600">
            Envisioning the future of community-driven, AI-powered recruitment.
          </p>
        </div>

        <div className="space-y-16">
          <div className="border border-gray-200 rounded-lg p-8">
            <h4 className="text-2xl font-light mb-4">Community Dashboard</h4>
            <p className="text-gray-600 mb-6">
              Real-time performance tracking, peer networking, and collaborative
              deal-sharing in a gamified environment that rewards excellence and
              knowledge sharing.
            </p>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              Coming Soon
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-8">
            <h4 className="text-2xl font-light mb-4">
              Predictive Intelligence
            </h4>
            <p className="text-gray-600 mb-6">
              Machine learning algorithms that analyze successful patterns,
              predict candidate fit, and provide personalized optimization
              strategies based on comprehensive data analysis.
            </p>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              In Development
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-8">
            <h4 className="text-2xl font-light mb-4">
              Automated Workflow Engine
            </h4>
            <p className="text-gray-600 mb-6">
              Smart automation that handles routine tasks, schedules interviews,
              sends follow-ups, and manages the entire recruitment pipeline
              while maintaining the human touch where it matters most.
            </p>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              Roadmap 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureFeatures;
