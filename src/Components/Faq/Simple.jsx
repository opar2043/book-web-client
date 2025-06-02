import React from 'react';
import { FaBook, FaBookOpen, FaBookReader, FaLaptop } from 'react-icons/fa';
import Title from '../Shared/Title';

const Simple = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
        <Title head={'Effective'} head2={'Sides'}></Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
          <div className="mb-4">
            <FaBook className="w-10 h-10 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Textbooks</h3>
          <p className="text-gray-600 mb-4">
            The point of using lorem ipsum is that it has a more-or-less normal.
          </p>
          <button className="text-pink-500 font-semibold hover:underline">READ MORE</button>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
          <div className="mb-4">
            <FaBookOpen className="w-10 h-10 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
          <p className="text-gray-600 mb-4">
            Predefined chunks as necessary, making this the first true generator.
          </p>
          <button className="text-pink-500 font-semibold hover:underline">READ MORE</button>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
          <div className="mb-4">
            <FaBookReader className="w-10 h-10 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Book Fairs</h3>
          <p className="text-gray-600 mb-4">
            Contrary to popular belief, lorem ipsum is not simply random text.
          </p>
          <button className="text-pink-500 font-semibold hover:underline">READ MORE</button>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
          <div className="mb-4">
            <FaLaptop className="w-10 h-10 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">E-Reading</h3>
          <p className="text-gray-600 mb-4">
            Making this the first true generator on the Internet. It uses a dictionary.
          </p>
          <button className="text-pink-500 font-semibold hover:underline">READ MORE</button>
        </div>

      </div>
    </section>
  );
};

export default Simple;
