require("dotenv").config({
  path: "D:/Shreya_Variya/MERN_Stack_Development/MAJOR_PROJECT/.env",
});
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("D:/Shreya_Variya/MERN_Stack_Development/MAJOR_PROJECT/models/listing.js");

// const mongo_url = "mongodb://127.0.0.1:27017/tripadvisor";

const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("Connected to Database.");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "687f914a5d15a983eb1cbdf2",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized.");
};

initDB();
