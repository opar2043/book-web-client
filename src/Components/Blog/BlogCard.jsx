import React, { useState } from 'react';
import { FiCalendar, FiArrowRight, FiX } from 'react-icons/fi';

const BlogCard = ({myblog}) => {
    const {title, blog, date} = myblog || {};
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <>
            <div className="group">
                <div className="relative p-6 sm:p-8 rounded-xl bg-white border border-gray-100 hover:border-[#DC0155] hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Decorative Element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#DC0155]/5 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300"></div>
                    
                    {/* Date Badge */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                            <FiCalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>{date || 'Not specified'}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#DC0155] transition-colors duration-300 line-clamp-2 leading-tight">
                        {title || 'Untitled Blog'}
                    </h3>

                    {/* Accent Line */}
                    <div className="w-12 h-1 bg-gradient-to-r from-[#DC0155] to-pink-300 rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>

                    {/* Content */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 mb-5">
                        {blog || 'No content available'}
                    </p>

                    {/* Read More Button */}
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#DC0155] hover:gap-3 transition-all duration-200"
                    >
                        Read More
                        <FiArrowRight className="w-4 h-4" />
                    </button>

                    {/* Hover Border Effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC0155] group-hover:w-full transition-all duration-500"></div>
                </div>
            </div>

            {/* Full Blog Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-slideUp">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-[#DC0155] to-pink-500 text-white p-6 sm:p-8">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
                                aria-label="Close modal"
                            >
                                <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                            
                            <div className="flex items-center gap-2 mb-3 text-pink-100">
                                <FiCalendar className="w-4 h-4" />
                                <span className="text-sm">{date || 'Not specified'}</span>
                            </div>
                            
                            <h2 className="text-2xl sm:text-3xl font-bold pr-12 leading-tight">
                                {title || 'Untitled Blog'}
                            </h2>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
                            <div className="prose prose-sm sm:prose-base max-w-none">
                                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                    {blog || 'No content available'}
                                </p>
                            </div>

                            {/* Close Button at Bottom */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-full sm:w-auto px-6 py-3 bg-[#DC0155] text-white rounded-lg font-semibold hover:bg-[#B8004A] transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default BlogCard;