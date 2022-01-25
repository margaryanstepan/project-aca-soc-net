import React, { useState, useEffect } from 'react';
import "./registor.css"

const AddPhoto = () => {
	const [ selectedFiles, setSelectedFiles ] = useState([]);
    // const [nkar, setnkar ] = useState( [] ) 
	 
	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

    // useEffect(()=>{
	//     fetch('http://localhost:8000/users')
	// 	.then( (res) => res.json() )
	// 	.then( (res) => setnkar(res))
	// 	return ()=> setnkar(null) 
	// },[])
    
	
//     useEffect(()=>{
//     if(selectedFiles.length != 0){
//         fetch('http://localhost:8000/Images', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(selectedFiles)

//   })

//     setSelectedFiles([])
//     } 
    

// },[selectedFiles])

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <img className="userImage" src={photo}  key={photo} />;
		});
	};

	return (
		
			<div className="container12">
				<input className="buttonImage" type="file" id="file" multiple onChange={handleImageChange} />
				<div  className="userImage" >{renderPhotos(selectedFiles)}</div>
			</div>
			
		
		
	);
};

export default AddPhoto;