
const express = require('express')

const app = express()
//Exscisics 1

app.get('/greetings/:username',(req,res)=>{
    res.send(`Hello ${req.params.username}`  )
    const name =req.params.name
    res.send
 })



//Exscisics 2
 app.get('/roll/:rollNumber',(req,res)=>{
    if (isNaN(req.params.rollNumber)) {
        return res.send("You must specify a number.");
    }
    const randomNumber = Math.floor(Math.random() * (parseInt(rollNumber) + 1));

    res.send(`You rolled a ${randomNumber}`);
})
//Exscisics 3

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/collectibles//:collectiblesNumbers',(req,res)=>{

    const item = collectibles.values();
   for (const value of item) {
    if (req.params.collectiblesNumbers===value.name){
     res.send(`So, you want the ${value.name} For${value.price} , it can be yours!`)
    }
    else{
        res.send('This item is not yet in stock. Check back soon!')
    }
   }
    //Exscisics 4
    
    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];


 })




 app.listen(3000,()=>{
    console.log('Listening on port 3000')

})