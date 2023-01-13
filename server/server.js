const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
let idCount = 5;
let products = [
  {
    id: 0,
    name: "Kylynn Brock",
    price: 2000,
    description: "Eos aute voluptatem voluptatem voluptatem aute ",
    imgUrl:
      "https://dlcdnwebimgs.asus.com/gain/aad81170-e69a-4054-9db1-006a85588c9d/",
  },
  {
    id: 1,
    name: "Kylynn Brock",
    price: 1500,
    description: "Eos aute voluptatem voluptatem voluptatem aute ",
    imgUrl:
      "https://dlcdnwebimgs.asus.com/gain/d895a2b9-233a-4f11-91fd-b22788ac973f/",
  },
  {
    id: 2,
    name: "Kylynn Brock",
    price: 3000,
    description: "Eos aute voluptatem voluptatem voluptatem aute ",
    imgUrl:
      "https://dlcdnwebimgs.asus.com/gain/7449fc82-c00d-474e-8eed-89e2586d5b2e/",
  },
  {
    id: 3,
    name: "Kylynn Brock",
    price: 2800,
    description: "Eos aute voluptatem voluptatem voluptatem aute ",
    imgUrl:
      "https://www.asus.com/media/global/gallery/vat73rr6tsw3q8dz_setting_xxx_0_90_end_2000.png",
  },
  {
    id: 4,
    name: "Kylynn Brock",
    price: 2330,
    description: "Eos aute voluptatem voluptatem voluptatem aute ",
    imgUrl:
      "https://www.asus.com/media/global/gallery/vat73rr6tsw3q8dz_setting_xxx_0_90_end_2000.png",
  },
];

app.use(cors());
app.use(bodyParser.json());

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const selectProduct = products.find((product) => product.id == id);
  if (selectProduct) {
    res.send(selectProduct);
  } else {
    res.status(404).json({ message: "there is no such user..." });
  }
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter((element) => element.id != id);
  res.status(200).json({ message: "deleted product" });
});

app.post("/products", (req, res) => {
  const productsObj = {
    id: idCount++,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
  };
  products.push(productsObj);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/products`);
});
