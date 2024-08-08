const express = require("express");

const app = express();
//Exscisics 1

app.get("/greetings/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Hello ${username}`);
});

//Exscisics 2
app.get("/roll/:rollNumber", (req, res) => {
  if (isNaN(req.params.rollNumber)) {
    return res.send("You must specify a number.");
  }
  const randomNumber = Math.floor(Math.random() * (parseInt(rollNumber) + 1));

  res.send(`You rolled a ${randomNumber}`);
});
//Exscisics 3

const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

app.get("/collectibles//:index", (req, res) => {
  const index = parseInt(req.params.index, 10);

  if (isNaN(index) || index < 0 || index >= collectibles.length) {
    res.send("This item is not yet in stock. Check back soon!");
  } else {
    const item = collectibles[index];
    res.send(
      `So, you want the ${item.name}? For ${item.price}, it can be yours!`
    );
  }
});
//Exscisics 4

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

app.get("/shoes", (req, res) => {
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;
  const type = req.query.type;
  let FilterShoes = shoes;

  if (minPrice) FilterShoes = shoes.filter((shoe) => shoe.price > minPrice);

  if (maxPrice) FilterShoes = shoes.filter((shoe) => shoe.price < maxPrice);

  if (type) FilterShoes = shoes.filter((shoe) => shoe.type === type);

  let print = "";
  FilterShoes.forEach(
    (shoe) => (print += `${shoe.name} - ${shoe.price}$ - ${shoe.type}<br>`)
  );
  res.send(print);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
