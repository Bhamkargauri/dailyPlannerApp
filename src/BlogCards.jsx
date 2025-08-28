import axios from "axios";
import { useNavigate } from "react-router";

const BlogCards = ({ blog }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://6880ebc1f1dcae717b63f94b.mockapi.io/dailyplanner/${blog.id}`
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full relative hover:shadow-2xl transition">
      <p className="text-xl font-bold text-purple-700 mb-2 truncate">
        {blog.title}
      </p>
      <span className="absolute top-4 right-6 text-gray-400 text-sm">
        {blog.date}
      </span>
      <p className="text-gray-600 mb-4">{blog.message}</p>
      <div className="flex gap-3 mt-4">
        <button
          className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition"
          onClick={() => navigate(`/update/${blog.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCards;
