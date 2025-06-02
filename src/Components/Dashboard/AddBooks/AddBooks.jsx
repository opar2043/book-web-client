import React from 'react';

const AddBooks = () => {

  function handleaddBook(e){
     e.preventDefault()
     const point = e.target;
     const title = point.title.value;
     const author = point.author.value;
     const description = point.description.value;
     const pages = point.pages.value;
     const features = point.features.value;
     const price = point.price.value;
     const category = point.category.value;
     const image= point.image.value;

     const objBook = {
     title ,
     author ,
     description ,
     pages,
     features,
     price,
     category,
     image
     }

     console.log(objBook);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-10 px-4">
      <form onSubmit={handleaddBook} className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
          📚 Add a New Book to Library
        </h2>

        {/* Title & Author */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Book Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Underwater Wonders"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Author</label>
            <input
              type="text"
              name="author"
              placeholder="e.g. Abdejaber Aouadi"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Brief overview of the book..."
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Pages, Size, Format */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Pages</label>
            <input
              type="number"
              name="pages"
              placeholder="e.g. 110"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Size</label>
            <input
              type="text"
              name="size"
              placeholder="e.g. 8.5 x 8.5 inches"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Format</label>
            <input
              type="text"
              name="format"
              placeholder="e.g. Paperback"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Features</label>
          <textarea
            name="features"
            rows="2"
            placeholder="e.g. Ocean animals, Educational facts..."
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Price, Category, Image URL */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">image($)</label>
            <input
              type="number"
              name="price"
              step="0.01"
              placeholder="e.g. 7.49"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              placeholder="e.g. Marine Life"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Image URL</label>
            <input
              type="file"
              name="image"
              placeholder="https://via.placeholder.com/150"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
<button
  type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 transition"
>
  📥 Save Book
</button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
