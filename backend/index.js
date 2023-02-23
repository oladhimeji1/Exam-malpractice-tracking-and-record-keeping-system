const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const multer = require('multer')
const path = require('path');
const fs = require('fs')
const Malpractice = require('./model')

const PORT = process.env.PORT || 5000;
const app = express();
const dbURI = 'mongodb+srv://ola:oladimeji2a@exammalpractice.we3g5we.mongodb.net/exammalpractice?retryWrites=true&w=majority';

// Connecting to mongodb database
mongoose.set('strictQuery', false);
mongoose.connect(dbURI)
    .then(result => {
        console.log('Connected to mongodb online');
        app.listen(PORT,() => console.log(`Running on port ${PORT}`))
    })
    .catch(err=>console.log(err))

// app.listen(PORT,() => {
//     console.log(`Running on port ${PORT}`);
//     if(!fs.existsSync('./data')){
//         fs.mkdir('./data', err =>{
//             if(err){
//                 console.log(err)
//             }else{console.log('Created')}
//         })
//     }
// })

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

// Sending data to the database
app.post('/add-student', (req, res)=>{
    // console.log(req.body);
    const malpractice = new Malpractice(req.body);
    malpractice.save()
        .then(result=>{
            res.send(result)
            console.log('Saved to mongodb database')
        })
        .catch(err => console.log(err))
})


//  app.listen(PORT,() => console.log(`Running on port ${PORT}`))

// Setting up file upload storage
const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb)=>{
        cb(null, 'ola' + '_' + Date.now() + 
        path.extname(file.originalname));
    }
});

// Handle upload and check file size, extension
const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
    fileFilter: (req, file, cb)=>{
        console.log(file)
        checkFileType(file, cb)
    }
}).single('file');

// Checking file extention
function checkFileType(file, cb){
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(
        path.extname(file.originalname).toLocaleLowerCase());
    const mimetype  = filetypes.test(file.mimetype)
    if(mimetype && extname){
        return cb(null, true)
    } else{
        return cb('Error: Images only!')
    }
}

// Handle file upload request
app.post('/upload', (req, res)=>{
    console.log(req.body, req.file)
    upload(req, res, (err)=>{
        if(err){
            console.log('err')
        } else{
            if(req.file == undefined){
                console.log('undefined');
            } else {
                console.log('done');
            }
        }
    })
})


// Reading all data from the database
app.get('/loadrec', (req, res)=>{
    Malpractice.find()
        .then(result=>{
            console.log('Read all rec from mongodb database');
            res.send(result);
        })
        .catch(err => console.log(err))
})
// Reading all data from the database
app.post('/readone', (req, res)=>{
    Malpractice.find(req.body)
        .then(result=>{
            console.log('Read a rec from mongodb database');
            res.send(result);
        })
        .catch(err => console.log(err))
})

// Reading all data from the database
app.post('/search', (req, res)=>{
    console.log(req.body)
    Malpractice.find(req.body)
        .then(result=>{
            console.log('Searched a record from mongodb database');
            res.send(result);
            // console.log(result);
        })
        .catch(err => console.log(err))
})

// Read JSON data
app.get('/read', (req, res)=>{
    fs.readFile('./data/data.json', (err, data) => {
        if(err){
            console.log(err)
        }else{
            // console.log(data.toString())
        }
    })
})