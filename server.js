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

app.get("/collectibles/:index", (req, res) => {
  const index = req.params.index;

  if (index >= 0 && index < collectibles.length) {
    const name = collectibles[index].name;
    const price = collectibles[index].price;
    res.send(`<h1>Did you want the ${name}? For $${price}</h1>`);
  } else {
    res.send(`This item is not available`);
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
  const arr1 = [];
  const type = req.query.type;
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;

  shoes.forEach((shoe) => {
    if (
      (!minPrice || shoe.price >= minPrice) &&
      (!maxPrice || shoe.price <= maxPrice) &&
      (!type || shoe.type === type)
    ) {
      arr1.push(shoe);
    }
  });

  if (arr1.length === 0) {
    res.send("not found");
  }

  let items = "";
  for (let i = 0; i < arr1.length; i++) {
    items += ` <h1>  name :${arr1[i].name}  price :${arr1[i].price} type: ${arr1[i].type} </br></h1>  `;
  }

  res.send(items);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
