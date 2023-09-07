import React, { useState, useEffect } from "react";

import { AiFillGithub } from "react-icons/ai";
import { PiPencilSimpleThin, PiImageThin, PiTrashThin } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";

import { Link } from "react-router-dom";

function blog() {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [stars, setStars] = useState(0);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [submitted, setSubmitted] = useState("");
  const [image, setImage] = useState("/img/panda.png");

  const baseURL = "http://localhost:8000/api/movie/";
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = baseURL;

        if (selectedCategory) {
          url += `?category=${selectedCategory}`;
        }

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError("Error fetching data. Please try again later.");

        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const createMoviee = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", title);
    data.append("slug", slug);
    data.append("stars", stars);
    data.append("description", description);
    data.append("categories", categories);
    data.append("thumbnail", thumbnail);
    console.log(data);
    try {
      const res = await fetch("http://localhost:8000/api/movie", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setOpen(false);
        setTitle("");
        setSlug("");
        setSubmitted(true);
      } else {
        console.log("Failed to submit data.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryChange = (e) => {
    setCategories(e.target.value.split(",").map((category) => category.trim()));
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setThumbnail(e.target.files[0]);
    }
  };
  return (
    // max-w-4xl mx-auto

    <>
      <div className="px-7 ">
        <h1 className="mt-10 text-5xl text-center font-extrabold text-white ">
          My Latest Movie blog post
        </h1>

        <div className="flex justify-center mt-10 gap-x-3">
          <Link to="https://github.com/joscriptt" target="_blank">
            <div className="py-2 px-3 w-fit text-sm transition-colors duration-200 text-[#4A5562] bg-white border rounded-full shadow-md border-[#D1D5DA] hover:bg-[#F3F4F6] flex items-center">
              <AiFillGithub className="text-xl mr-2" /> My GitHub?
            </div>
          </Link>

          <div
            onClick={() => setOpen(!open)}
            className="py-2 px-3 w-fit text-sm transition-colors duration-200 text-[#4A5562] bg-white border rounded-full shadow-md border-[#D1D5DA] hover:bg-[#F3F4F6] flex items-center cursor-pointer"
          >
            <span>Write a Post</span>
            <PiPencilSimpleThin className="text-xl mr-2" />
          </div>

          <div className="">
            <label className="text-white mr-4">Categories</label>
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="">All</option>
              <option value="romance">Romance</option>
              <option value="science">Science</option>
              <option value="crime">Crime</option>
              <option value="football">Football</option>
              <option value="adventure">Adventure</option>
              <option value="thriller">Thriller</option>
              <option value="news">news</option>
              <option value="other">other</option>
            </select>
          </div>
        </div>

        <div>
          <div className="grid sm:grid-cols-1 mt-44 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-4 overflow-hidden p-2  ">
            {data.map((item) => (
              <Link key={item._id} to={`/movie/${item.slug}`}>
                <div
                  key={item._id}
                  className="w-full rounded-xl lg:flex border border-neutral-600/40 mt-8  sm:mt-0  p-3   justify-between cursor-pointer"
                >
                  <div className="flex flex-col justify-between overflow-hidden ">
                    <div className="flex  items-center space-x-2">
                      <p className="px-3 rounded-lg text-neutral-400 ">
                        {item.categories}
                      </p>
                      <p className="text-xs font-bold text-gray-500">
                        1 min ago
                      </p>
                    </div>
                    <div>
                      <p className="lg:text-3xl font-bold my-2 text-lg text-neutral-200">
                        {item.title}
                      </p>
                      <h1 className="text-sm  my-2 text-neutral-400">
                        {title}
                      </h1>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button className=" bg-white text-black rounded-md border px-2 py-1 text-xs  hover:bg-transparent hover:text-white hover:border-gray-400 transition-all duration-500 justify-center mr-3 ">
                        Read full post
                      </button>
                    </div>
                  </div>
                  <img
                    className={`hover:cursor-pointer rounded-lg  lg:w-56 w-full lg:h-64 h-36 mt-5 lg:mt-0  object-cover hover:opacity-75 duration-700 ease-in-out `}
                    src={`http://localhost:8000/uploads/${item.thumbnail}`}
                    alt=""
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {open && (
        <div className="backdrop-blur-md absolute h-screen   z-10 left-0 right-0 top-0 bottom-0 flex justify-center items-center">
          <div className="bg-white rounded-lg p-9 lg:w-1/2  w-full h-auto ">
            <div className="flex justify-between ">
              <div className="flex items-center gap-x-2">
                <PiPencilSimpleThin />
                <h1 className="font-medium text-xl">Create your blog post</h1>
              </div>

              <div className="cursor-pointer" onClick={() => setOpen(false)}>
                <MdOutlineCancel className="text-xl" />
              </div>
            </div>

            <form onSubmit={createMoviee}>
              <div className="flex items-center gap-x-4 my-12">
                <img
                  required
                  className="w-24 h-24 object-cover rounded-full"
                  src={image}
                  alt=""
                />

                <div className="">
                  <button className="border p-2 hover:bg-neutral-100 transition-all ease-in duration-200 font-semibold  w-fit px-4 gap-x-2  rounded-md flex items-center justify-between">
                    <PiImageThin />
                    <label>
                      Change
                      <input
                        required
                        className="hidden"
                        onChange={onImageChange}
                        type="file"
                        accept="image/gif, image/jpeg, image/png"
                      />
                    </label>
                  </button>
                  <button
                    onClick={() => setImage("/img/panda.png")}
                    className="border p-2 lg:mt-3 hover:bg-neutral-100 transition-all ease-in duration-200 font-semibold  w-fit px-4 gap-x-2  rounded-md flex items-center justify-between"
                  >
                    <PiTrashThin />
                    <span>Remove</span>
                  </button>
                </div>
              </div>

              {/* Input Sections */}

              <div className="mt-6 grid grid-cols-2 gap-x-6 leading-8">
                <div>
                  <div>
                    <label>Title</label>
                    <input
                      required
                      className="p-3 rounded-lg w-full border bg-transparent"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Slug</label>
                    <input
                      required
                      className="p-3 rounded-lg w-full border bg-transparent"
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Category</label>
                    <input
                      required
                      className="p-3 rounded-lg w-full border bg-transparent"
                      type="text"
                      value={categories}
                      onChange={handleCategoryChange}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label>Stars</label>
                    <input
                      required
                      className="p-3 rounded-lg w-full border bg-transparent"
                      type="text"
                      value={stars}
                      onChange={(e) => setStars(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Description</label>
                    <textarea
                      required
                      className="p-3 rounded-lg w-full border bg-transparent"
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <button className="border p-2 hover:bg-blue-500 transition-all ease-in duration-200 font-semibold bg-[#0071D8] text-white  w-28 rounded-md ">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default blog;

{
  /* <img
            className="aspect-video rounded-2xl"
            src="/img/img9.png"
            alt=""
          />
          <img
            className="aspect-video rounded-2xl"
            src="/img/img6.png"
            alt=""
          />
          <img
            className="aspect-video rounded-2xl"
            src="/img/img14.png"
            alt=""
          /> */
}
