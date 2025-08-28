import axios from "axios";
import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";

const DisplayShelf = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://6880ebc1f1dcae717b63f94b.mockapi.io/dailyplanner"
      );
      setBlogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-25 bg-purple-50">
      {blogs.map((blog) => {
        // console.log(blog);
        return <BlogCards key={blog.id} blog={blog} />;
      })}
    </div>
  );
};

export default DisplayShelf;
