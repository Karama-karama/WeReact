import React from 'react'; 
import './file-upload.styles.scss'; 
import Uploader from '../uploader/uploader-component';

const FileUpload = () => (

<div className="container mt-4">
  <h4 className= "display-4 text-center mb-4">
     Télécharger document
 </h4>
 <Uploader/>
</div>
)

export default FileUpload ;