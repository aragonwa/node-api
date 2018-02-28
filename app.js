import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

// https://next.json-generator.com/EkRHW99vE
mongoose.connect('mongodb://localhost/bookAPI');
import Book from './models/bookModel';
// import data from './data';
// Book.find((err,books)=>{console.log(books.length);
// });
// Book.collection.insertMany(data, (err,r)=>{})

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

import bookRouter from './Routes/bookRoutes';
// Load routes from router using the api route
app.use('/api/books', bookRouter(Book));
// app.use('/api/authors', bookRouter(Author));
// app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port, () => {
  console.log('Running on PORT:', port);
});
