import express from 'express';
import {BookModel} from "../model/BookModel.js";
const router = express.Router();

// router.get('/', (req, res) => {
//     res.status(200).send("Hello wellcome to my bookstore")
// })

//Post
router.post('/',async (req,res) => {
    try{
        if(
            ! req.body.title ||
            ! req.body.author ||
            ! req.body.publishYear
        ){
           return res.status(400).send("send all required fields")
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        const book = await BookModel.create(newBook);

        return  res.status(200).send(book);
    }
    catch (err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
} )

//Get all books
router.get('/' , async (req, res) => {
    try{
        const books = await BookModel.find({})
        return res.status(200).json({
            count : books.length,
            data : books
        });
    }catch (err) {
        console.log(err.message);
       return res.status(500).send(err.message);
    }
})

//Get book by ID
router.get('/:id' , async (req,res) => {
    try{

        const id = req.params.id
        const book = await BookModel.findById(id)
        res.status(200).json({
            count : book.length,
            data : book
        });

    }catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
})

//Update book by ID
router.put('/:id' , async (req,res) => {
    try{
        if(
            ! req.body.title ||
            ! req.body.author ||
            ! req.body.publishYear
        ){
           return res.status(400).send({message: "send all required fields"})
        }
        const id = req.params.id;
        const book = await  BookModel.findByIdAndUpdate(id,req.body);
        if(!book)
        {
         return res.status(404).json({message: "book not found"})
        }
        else{
           return   res.status(200).send("updated successful");
        }
    }catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
})

//Delete book by ID
router.delete('/:id' , async (req,res) => {
    try{

        const id = req.params.id;
        const book = await BookModel.findByIdAndDelete(id);
        if(!book){
            return res.status(404).json({message: "book not found"})
        }
        else{
           return res.status(200).send(book)
        }

    }catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }

})


export {
    router
}