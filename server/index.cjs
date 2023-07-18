const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const connectionUrl = process.env.CONNECTION_URL;
const port = process.env.PORT || 3000;
// console.log(connectionUrl, port)

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get("/vans", (req, res) => {
    Van.find({}).then(data => res.send(data));
})
app.get("/vans/:id", (req, res) => {
    const { id } = req.params;
    Van.findById(id).then(data => res.send(data));
})
app.get("/", (req, res) => {
    res.send({message: "Hello"})
})

app.listen(port, () => {
    console.log(`server up on ${port}`);
})

mongoose.connect(connectionUrl)
    .then(()=>console.log("connected to the database"))
    .catch((e)=>console.log("error connecting:\n"+e))

const vanSchema = new mongoose.Schema({
    _id: String,
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["simple", "rugged", "luxury"]
    },
    hostId: {
        type: String,
        required: true
    }
})

const Van = new mongoose.model("Van", vanSchema);

// Van.insertMany([
//     { _id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple", hostId: "123" },
//     { _id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged", hostId: "123" },
//     { _id: "3", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury", hostId: "456" },
//     { _id: "4", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple", hostId: "789" },
//     { _id: "5", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury", hostId: "789" },
//     { _id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged", hostId: "123" }
// ])
//     .then(() => console.log("Entries added"))
//     .catch(e => console.log("Error:\n"+e));

