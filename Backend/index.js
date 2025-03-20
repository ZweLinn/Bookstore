import express from 'express';
import {PORT , DB_URL}from "./config.js";
import mongoose from "mongoose";
import {router} from "./routes/bookRouter.js";
import cors from "cors";

const app = express();

const bookStoreRouter = router;

//middleware
app.use(express.json())
app.use(cors());

//Routing
app.use("/books" ,bookStoreRouter);


app.listen(PORT , () => {
    console.log(`Listening on port ${PORT}`);
})

//DB connecting
mongoose.connect(DB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) =>console.log('DB error', err) );

export default app
