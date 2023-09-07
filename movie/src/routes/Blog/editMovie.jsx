import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function editMovie() {
  const navigate = useNavigate();
  const urlSlug = useParams();

  const baseURL = `http://localhost:8000/api/movie/${urlSlug.slug}`;

  const [movieId, setMovieId] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [stars, setStars] = useState(0);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [submitted, setSubmitted] = useState("");
  const [image, setImage] = useState("");

  const upDateMovie = async () => {
    try {
      const res = await fetch(baseURL);
      if (!res.ok) {
        throw new Error("Failed to fetch data.");
      }

      const data = await res.json();
      // console.log(data);
      setMovieId(data._id);
      setTitle(data.title);
      setSlug(data.slug);
      setStars(data.stars);
      setCategories(data.categories);
      setDescription(data.description);
      setThumbnail(data.thumbnail);
    } catch (error) {}
  };

  useEffect(() => {
    upDateMovie();
  }, []);

  const createMovie = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("movieId", movieId);
    data.append("title", title);
    data.append("slug", slug);
    data.append("stars", stars);
    data.append("description", description);
    data.append("categories", categories);

    if (thumbnail) {
      data.append("thumbnail", thumbnail);
    }

    try {
      const response = await fetch("http://localhost:8000/api/movie", {
        method: "PUT",
        body: data,
      });

      if (response.ok) {
        navigate("/movies");
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

  const removeMovie = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:8000/api/movie/" + movieId, {
        method: "DELETE",
      });

      navigate("/blog");
      console.log("Book removed.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex gap-x-3 my-14 ml-5">
        <Link
          to={"/blog"}
          className="text-white  bg-black rounded-xl p-3 text-2xl font-bold "
        >
          Back
        </Link>
        <button
          onClick={removeMovie}
          className="bg-red-700 text-white rounded-xl p-3 "
        >
          Delete Movie
        </button>
      </div>

      <div className="flex justify-center items-center">
        {submitted ? (
          <p>Data subitted successfully!</p>
        ) : (
          <form className="flex gap-x-4" onSubmit={createMovie}>
            <div className="">
              {image ? (
                <img
                  className="w-96 h-[500px] object-cover"
                  src={`${image}`}
                  alt="preview image"
                />
              ) : (
                <img
                  className="w-96 h-[500px] object-cover"
                  src={`http://localhost:8000/uploads/${thumbnail}`}
                  alt="preview image"
                />
              )}
              <input
                onChange={onImageChange}
                type="file"
                accept="image/gif, image/jpeg, image/png"
              />
            </div>
            <div className="">
              <div className="">
                <label className="text-white ">Title</label>
                <input
                  className="p-3 w-full rounded-md"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="my-3">
                <label className="text-white ">Slug</label>
                <input
                  className="p-3 w-full mt-3 rounded-md"
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                />
              </div>

              <div className=" my-3">
                <label className="text-white ">Stars</label>
                <input
                  className="p-3 w-full rounded-md"
                  type="text"
                  value={stars}
                  onChange={(e) => setStars(e.target.value)}
                />
              </div>

              <div className="my-3">
                <label className="text-white ">Description</label>
                <textarea
                  rows="4"
                  className="p-3 w-full rounded-md"
                  cols="50"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div>
                <label className="text-white ">
                  Categories (comma-seperated)
                </label>
                <input
                  className="p-3 w-full rounded-md"
                  type="text"
                  value={categories}
                  onChange={handleCategoryChange}
                />
              </div>

              <button className="p-3 w-full text-white font-bold bg-blue-700 mt-6 rounded-md">
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default editMovie;
