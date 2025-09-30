import React, { useState } from 'react';
import Title from '../Shared/Title';
import { FaChevronDown, FaChevronUp, FaShippingFast, FaUndo, FaCreditCard, FaHeadset } from 'react-icons/fa';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What types of books do you offer?",
      answer: "We offer fiction, non-fiction, fantasy, romance, mystery, and academic books across all genres."
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express options available for faster delivery."
    },
    {
      id: 3,
      question: "What is your return policy?",
      answer: "30-day return policy for books in original condition. Contact support to initiate returns."
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay."
    },
    {
      id: 5,
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide with varying delivery times."
    }
  ];

  const features = [
    {
      icon: <FaShippingFast className="w-6 h-6" />,
      title: "Fast Shipping",
      description: "Free delivery on orders over $50. Express options available."
    },
    {
      icon: <FaUndo className="w-6 h-6" />,
      title: "Easy Returns",
      description: "30-day hassle-free return policy for all books."
    },
    {
      icon: <FaCreditCard className="w-6 h-6" />,
      title: "Secure Payment",
      description: "Your payment information is protected with SSL encryption."
    },
    {
      icon: <FaHeadset className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Our support team is always here to help you."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Title 
            head={'Frequently Asked'} 
            head2={'Questions'}
          />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Get quick answers to your questions and learn more about our services
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - FAQ */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
                Common Questions
              </h3>
              
              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div 
                    key={item.id}
                    className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-200"
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full px-4 py-4 text-left flex justify-between items-center group"
                    >
                      <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors pr-4 text-left">
                        {item.question}
                      </h4>
                      <div className="flex-shrink-0">
                        {activeIndex === index ? (
                          <FaChevronUp className="w-4 h-4 text-blue-500 transition-transform" />
                        ) : (
                          <FaChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        )}
                      </div>
                    </button>
                    
                    {activeIndex === index && (
                      <div className="px-4 pb-4">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            
            {/* Features Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-green-500 rounded-full"></span>
                Why Choose Us
              </h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-200 transition-colors">
                      <div className="text-blue-600">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;