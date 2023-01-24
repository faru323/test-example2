const express = require("express");
const app = express();
const PORT = 8080;
const mongoose = require("mongoose");
const Joi = require("joi");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser());
app.use(cors());

const ProductSchema = new mongoose.Schema({
  price: Number,
  name: String,
  description: String,
});

const ProductModel = mongoose.model("Product", ProductSchema);
mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://Fatima:bAKHE5IN2imOEtCA@nft-cluster.lkpcrzn.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));

const addProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
});

app.get("/api/products", (req, res) => {
  ProductModel.find(null, "name price description", (error, products) => {
    if (error) return res.status(500).send({ error });
    res.send(products);
  });
});

app.post(
  "/api/products",
  (req, res, next) => {
    const { error } = addProductSchema.validate(req.body);

    if (error == null) next();
    else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      res.status(422).json({ error: message });
    }
  },

  (req, res) => {
    let newProduct = new ProductModel({ ...req.body });

    newProduct.save();
    res
      .status(201)
      .send({ message: "Product succesfully added!", product: newProduct });
  }
);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
