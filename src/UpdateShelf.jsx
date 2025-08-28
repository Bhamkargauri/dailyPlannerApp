import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UpdateShelf = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `https://6880ebc1f1dcae717b63f94b.mockapi.io/dailyplanner/${id}`
        );
        setTitle(res.data.title);
        setDate(res.data.date);
        setMessage(res.data.message);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const blog = {
      title,
      date: date,
      message,
    };

    try {
      await axios.put(
        `https://6880ebc1f1dcae717b63f94b.mockapi.io/dailyplanner/${id}`,
        blog
      );
      navigate("/blogs");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-purple-50 flex items-center justify-center  h-auto  mt-0">
      <div className="h-[500px]  bg-purple-50 shadow-xl shadow-xl/30 w-96 p-12 pb-5 ">
        <h1 className="text-3xl font-bold  text-purple-600 mb-6 text-start  flex items-center justify-center">
          Update Task
        </h1>
        <form
          className="flex flex-col gap-4 items-center"
          onSubmit={handleUpdate}
        >
          <input
            type="text"
            className="border   border-purple-100 bg-purple-100  focus:outline-none w-full px-4 py-3 rounded-full shadow focus:shadow-inner m-1"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="Date"
            className="border  border-purple-100 focus:outline-none bg-purple-100 w-full px-4 py-4 rounded-full focus:shadow-inner m-1"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <textarea
            className="border border-purple-100 focus:outline-none bg-purple-100 rounded-xl w-full px-4 py-4 focus:shadow-inner m-1"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className=" w-full border p-1 m-3 rounded-full  border-purple-100 bg-purple-700 text-white px-4 py-3 bg-purple-50focus:outline-none  shadow-xl/20 hover:shadow-lg ">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateShelf;
