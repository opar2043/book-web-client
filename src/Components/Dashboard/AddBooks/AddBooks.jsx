import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-10 px-4">
      <form
        onSubmit={handleaddBook}
        className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
          📚 Add a New Book to Library
        </h2>

        {/* Title & Author */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Book Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="e.g. Underwater Wonders"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Author
            </label>
            <input
              type="text"
              name="author"
              required
              placeholder="e.g. Abdejaber Aouadi"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            rows="3"
            required
            placeholder="Brief overview of the book..."
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Pages, Size, Format */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Pages
            </label>
            <input
              type="number"
              name="pages"
              required
              placeholder="e.g. 110"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Size
            </label>
            <input
              type="text"
              name="size"
              required
              placeholder="e.g. 8.5 x 8.5 inches"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Format
            </label>
            <input
              type="text"
              name="format"
              required
              placeholder="e.g. Paperback"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Features
          </label>
          <textarea
            name="features"
            rows="2"
            required
            placeholder="e.g. Ocean animals, Educational facts..."
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Price, Category, Image URL */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Price($)
            </label>
            <input
              type="number"
              name="price"
              step="0.01"
              required
              placeholder="e.g. 7.49"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Category
            </label>
            <input
              type="text"
              required
              name="category"
              placeholder="e.g. Marine Life"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Image URL
            </label>
            <input
              type="file"
              name="image"
              required
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
