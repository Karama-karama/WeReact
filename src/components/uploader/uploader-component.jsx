import React, { Fragment, useState } from 'react';
import axios from 'axios';  // npm i axios
//var Server = require('../../server');


const Uploader = ()=> {
const [file, setFile]= useState("");
const [filename, setFilename]= useState("Choisir un fichier");
const [uploadedFile, setUploadedFile]= useState({});

const onChange = e => {
  setFile(e.target.files[0]); 
  setFilename(e.target.files[0].name);  
  console.log(e.target.files[0]); 
 };
// this generates : TypeError: Cannot read property 'prototype' of undefined
// in node modules 
//onSubmit.use('/Server', Server);
// 

 const onSubmit = async e => { // async function because of the use of await
    e.preventDefault();       // to stop the page refresh after submit
    console.log('Button clicked');
    const formData = new FormData(); 
     formData.append('file', file);
     try {
      const res = await axios.post('/upload', formData, {
       headers : {
         'Content-Type': 'multipart/form-data'  
       }   
      });
      const { fileName, filePath} = res.data;
      setUploadedFile({fileName, filePath});
     } 

     catch(err){
         console.log('Uploading error');

  // The following lines generates : Cannot read property 'status' of undefined "response"
       // if (err.response.status===500) { 
       //   console.log ('Problem with the sever');}
       //    else {
        //  setMessage(err.response.data.msg);
      
     }
 };


return (
    <Fragment>
        <form onSubmit={onSubmit}>
   <div className="custom-file">
  <input type="file" className="custom-file-input" id="customFile" onChange={onChange}/>
  <label className="custom-file-label" htmlFor="customFile">
      {filename}
  </label>
</div>
<input type ="submit" value=" Télécharger" className=" btn btn-secondary btn-block t-4"/>
</form>
    </Fragment>
)

}
export default Uploader; 