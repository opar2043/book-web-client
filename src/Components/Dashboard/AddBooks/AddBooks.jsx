import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import { FiBook, FiUser, FiFileText, FiDollarSign, FiTag, FiImage } from "react-icons/fi";

const img_api_key =
  "https://api.imgbb.com/1/upload?key=188918a9c4dee4bd0453f7ec15042a27";

const AddBooks = () => {
  const axiosSecure = useAxios();

  function handleaddBook(e) {
    e.preventDefault();
    const point = e.target;
    const title = point.title.value;
    const author = point.author.value;
    const description = point.description.value;
    const pages = point.pages.value;
    const features = point.features.value;
    const price = point.price.value;
    const category = point.category.value;
    const size = point.size.value;
    const format = point.format.value;
    const image = point.image.files[0];

    const data = new FormData();
    data.append("image", image);

    fetch(img_api_key, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Upload success:", data);
        const objBook = {
          title,
          author,
          description,
          pages,
          features,
          price,
          category,
          size,
          format,
          image: data.data.url,
        };

        axiosSecure
          .post("/books", objBook)
          .then((res) => {
            Swal.fire({
              title: "Books Added!",
              text: "Your Book was successfully added.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              title: "Something Happen Wrong",
              icon: "error",
              draggable: true,
            });
          });

        console.log(objBook);
      });

    point.reset();
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Add New Book
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Fill in the details to add a new book to your library
        </p>
      </div>

      <form
        onSubmit={handleaddBook}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6"
      >
        {/* Title & Author */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <FiBook className="w-4 h-4 text-[#DC0155]" />
                Book Title
              </div>
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter book title"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4 text-[#DC0155]" />
                Author
              </div>
            </label>
            <input
              type="text"
              name="author"
              required
              placeholder="Enter author name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <FiFileText className="w-4 h-4 text-[#DC0155]" />
              Description
            </div>
          </label>
          <textarea
            name="description"
            rows="3"
            required
            placeholder="Brief overview of the book"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm resize-none"
          ></textarea>
        </div>

        {/* Pages, Size, Format */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pages
            </label>
            <input
              type="number"
              name="pages"
              required
              placeholder="e.g. 110"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Size
            </label>
            <input
              type="text"
              name="size"
              required
              placeholder="e.g. 8.5 x 8.5 inches"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Format
            </label>
            <input
              type="text"
              name="format"
              required
              placeholder="e.g. Paperback"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm"
            />
          </div>
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Features
          </label>
          <textarea
            name="features"
            rows="2"
            required
            placeholder="e.g. Ocean animals, Educational facts"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm resize-none"
          ></textarea>
        </div>

        {/* Price, Category, Image */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <FiDollarSign className="w-4 h-4 text-[#DC0155]" />
                Price ($)
              </div>
            </label>
            <input
              type="number"
              name="price"
              step="0.01"
              required
              placeholder="e.g. 7.49"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <FiTag className="w-4 h-4 text-[#DC0155]" />
                Category
              </div>
            </label>
            <input
              type="text"
              required
              name="category"
              placeholder="e.g. Marine Life"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <FiImage className="w-4 h-4 text-[#DC0155]" />
                Book Image
              </div>
            </label>
            <input
              type="file"
              name="image"
              required
              accept="image/*"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC0155] focus:border-transparent transition-all text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-[#DC0155] hover:file:bg-pink-100"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-[#DC0155] hover:bg-[#B8004A] text-white font-semibold py-3.5 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base"
          >
            Add Book to Library
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;