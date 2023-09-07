// import React, { useState } from "react";
// // import NoImageSelected from "../../assets/no-image-selected.jpg";

// function createMovie() {
//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [stars, setStars] = useState(0);
//   const [description, setDescription] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [thumbnail, setThumbnail] = useState(null);
//   const [submitted, setSubmitted] = useState("");
//   const [image, setImage] = useState(NoImageSelected);

//   const createMoviee = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("title", title);
//     data.append("slug", slug);
//     data.append("stars", stars);
//     data.append("description", description);
//     data.append("category", categories);
//     data.append("thumbnail", thumbnail);
//     console.log(data);
//     try {
//       const res = await fetch("http://localhost:8000/api/movie", {
//         method: "POST",
//         body: data,
//       });

//       if (res.ok) {
//         setTitle("");
//         setSlug("");
//         setSubmitted(true);
//       } else {
//         console.log("Failed to submit data.");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleCategoryChange = (e) => {
//     setCategories(e.target.value.split(",").map((category) => category.trim()));
//   };

//   const onImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(URL.createObjectURL(e.target.files[0]));
//       setThumbnail(e.target.files[0]);
//     }
//   };

//   return (
//     <div>
//       <h1>Create Book</h1>
//       <p>
//         This is where we use NodeJs, Express & MongoDB to grab some data. The
//         data below is pulled from a MongoDB database. create
//       </p>

//       {submitted ? (
//         <p>Data subitted successfully!</p>
//       ) : (
//         <form className="bookdetails" onSubmit={createMoviee}>
//           <div className="col-1">
//             <label>Upload Thumbnail</label>
//             <img src={image} alt="preview image" />
//             <input
//               onChange={onImageChange}
//               type="file"
//               accept="image/gif, image/jpeg, image/png"
//             />
//           </div>
//           <div className="col-2">
//             <div>
//               <label>Title</label>
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>

//             <div>
//               <label>Slug</label>
//               <input
//                 type="text"
//                 value={slug}
//                 onChange={(e) => setSlug(e.target.value)}
//               />
//             </div>

//             <div>
//               <label>Stars</label>
//               <input
//                 type="text"
//                 value={stars}
//                 onChange={(e) => setStars(e.target.value)}
//               />
//             </div>

//             <div>
//               <label>Description</label>
//               <textarea
//                 rows="4"
//                 cols="50"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </div>

//             <div>
//               <label>Categories (comma-seperated)</label>
//               <input
//                 type="text"
//                 value={categories}
//                 onChange={handleCategoryChange}
//               />
//             </div>

//             <input type="submit" />

//             {/* <button>Create</button> */}
//           </div>
//         </form>
//       )}
//     </div>
//   );
// }

// export default createMovie;
