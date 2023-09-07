require("dotenv").config;
const cors = require("cors");
const express = require("express");
const connectDB = require("./mongodb");
const Movies = require("./models/Movies");
const multer = require("multer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(bodyParser.json({ limit: "35mb" }));
app.use(cors({ origin: "http://localhost:5173" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: 50000,
  })
);
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/api/movie", async (req, res) => {
  try {
    const categories = req.query.category;
    // const stars = req.query.stars;
    // console.log(category);

    const filter = {};

    if (categories) {
      filter.categories = categories;
    }

    const data = await Movies.find(filter);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured while fetching Movies" });
  }
});

// Get A Single Movie
app.get("/api/movie/:slug", async (req, res) => {
  try {
    const slugParams = req.params.slug;

    const data = await Movies.findOne({ slug: slugParams });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured while fetching Movies" });
  }
});

// Create A Movie
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/movie", upload.single("thumbnail"), async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    const newMovie = new Movies({
      title: req.body.title,
      slug: req.body.slug,
      stars: req.body.stars,
      description: req.body.description,
      categories: req.body.categories,
      thumbnail: req.file.filename,
    });
    await Movies.create(newMovie);
    res.json("Data Submitted");
  } catch (error) {
    res.status(500).json({ error: "An error occured while creating Movies" });
  }
});

// UPDATE A MOVIE

app.put("/api/movie", upload.single("thumbnail"), async (req, res) => {
  try {
    const movieId = req.body.movieId;

    const updatedMovie = {
      title: req.body.title,
      slug: req.body.slug,
      stars: req.body.stars,
      description: req.body.description,
      categories: req.body.categories,
    };

    if (req.file) {
      updatedMovie.thumbnail = req.file.filename;
    }

    await Movies.findByIdAndUpdate(movieId, updatedMovie);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating  movie." });
  }
});

app.get("*", (req, res) => {
  res.sendStatus("404");
});

// Delete a movie

app.delete("/api/movie/:id", async (req, res) => {
  const movieId = req.params.id;

  console.log(movieId);

  try {
    await Movies.findByIdAndDelete(movieId);
    res.json("You successfully removed it!");
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log(`server is running on  Port ${PORT}`);
});
