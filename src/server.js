// This file is not communicating with the app
// Uploader component isn't functional

// Static server solution for App using node :
// npm install -g serve
// serve -s build   => will serve the site on port 5000
// 

const express = require ('express'); 
const fileUpload = require ('express-fileupload');

const Server = express();
Server.use(fileUpload() ); 
// upload endpoint

Server.post ('/upload', (req, res) => {
  if ( req.files === null) {
    return res.status(400).json ({ msg : 'No file uploaded'});
   } else{
    const file = req.files.file;
 file.mv(`${__dirname}/wereact/public/uploads/${file.name}`, err => {
 if (err) {
     console.error(err);  
     return res.status(500).send(err);
 }

 res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
 console.log('uploaded');

})}

});

Server.listen(5000, ()=> console.log ('Server Started...') );
