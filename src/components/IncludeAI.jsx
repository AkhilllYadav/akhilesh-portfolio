
import React from "react";

const IncludeAI = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-10 rounded-2xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center">
        Implement AI & ML into Your Business
      </h2>
      <p className="text-lg text-gray-300 mb-6 text-center max-w-2xl">
        Leverage the power of Artificial Intelligence & Machine Learning to automate processes, enhance decision-making, and drive business growth.
      </p>
      <ul className="text-gray-300 list-disc list-inside mb-6">
        <li>Boost efficiency with AI-driven automation</li>
        <li>Gain valuable insights through predictive analytics</li>
        <li>Improve customer engagement with AI chatbots</li>
        <li>Optimize operations with machine learning algorithms</li>
      </ul>
      <div className="mt-6 text-center">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-lg transition-all shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default IncludeAI;
