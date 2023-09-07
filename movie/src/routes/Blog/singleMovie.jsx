import React, { useEffect } from "react";

import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function singleMovie() {
  const urlSlug = useParams();
  const baseURL = `http://localhost:8000/api/movie/${urlSlug.slug}`;
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function StarRating({ numberOfStars }) {
    const stars = [];

    for (let i = 0; i < numberOfStars; i++) {
      stars.push(<span key={i}>⭐</span>);
    }

    return <div>Rating: {stars}</div>;
  }

  return (
    <div className="mt-10 relative">
      <Link
        to={"/blog"}
        className="text-white absolute left-48 text-2xl font-bold "
      >
        Back
      </Link>

      <div className="p-2 rounded-xl max-w-5xl mx-auto overflow-hidden ">
        <div className="lg:flex gap-x-3  ">
          <div className=" lg:w-4/5 h-auto ">
            <img
              className="w-96 h-[500px] object-cover"
              src={`http://localhost:8000/uploads/${data?.thumbnail}`}
              alt={data?.title}
            />
            <Link to={`/editmovie/${data?.slug}`}>
              <span className="text-xl font-bold text-white mt-9">Edit </span>
            </Link>
          </div>
          <div className="text-white lg:w-11/12">
            <h1 className="text-4xl font-extrabold ">{data.title}</h1>
            <p className="text-xl mt-9 ">{data.description}</p>

            <div className="my-7">
              <StarRating numberOfStars={data?.stars} />
            </div>

            <p>Category</p>

            <ul>
              {data?.categories?.map((item, index) => (
                <li key={index} className="text-2xl  font-thin">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {open && (
        <div className="backdrop-blur-md absolute h-screen min-h-screen z-10 left-0 right-0 top-0 bottom-0 flex justify-center items-center">
          <div className="bg-white rounded-lg p-9 w-1/2 h-auto ">
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
                      className="p-3 rounded-lg w-full border bg-transparent"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Slug</label>
                    <input
                      className="p-3 rounded-lg w-full border bg-transparent"
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Category</label>
                    <input
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
                      className="p-3 rounded-lg w-full border bg-transparent"
                      type="text"
                      value={stars}
                      onChange={(e) => setStars(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Description</label>
                    <textarea
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
    </div>
  );
}

export default singleMovie;
