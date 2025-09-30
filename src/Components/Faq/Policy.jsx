import React from "react";

const Policy = () => {
  return (
    <section className="py-12 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          📖 Our <span style={{ color: "#DC0155" }}>Policy</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          We value our readers and are committed to ensuring a safe, transparent,
          and enjoyable book browsing experience. Please review our policies
          carefully.
        </p>
      </div>

      {/* Policy Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Privacy Policy */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: "#DC0155" }}
          >
            Privacy Policy
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We protect your personal information and never share your data with
            third parties without consent. Your privacy is our priority.
          </p>
        </div>

        {/* Return Policy */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: "#DC0155" }}
          >
            Return Policy
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Books can be returned within 7 days if they are unused and in
            original condition. Refunds will be processed promptly.
          </p>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: "#DC0155" }}
          >
            Terms & Conditions
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            By using our website, you agree to follow our guidelines regarding
            fair usage, secure transactions, and respectful community behavior.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Policy;
