import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { storage } from "../../../server/services/Firebase";
import { CircularProgressbar } from "react-circular-progressbar";

   

   const ImageUpload = ({ onImageUrlChange }) => {
     
//   const { currentUserId } = useContext(AuthContext);
    // State to store uploaded file
    const [file, setFile] = useState<File | null>(null);
    const [percent, setPercent] = useState(0);

    function handleChange(event) {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]); 
        }
    }

    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
            return;
        }

        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {    
                    console.log("URL is getting passed")   
                    onImageUrlChange(url);
                });
            }
        );
    };

    return (
        <div>
            <input type="file" onChange={handleChange} accept="image/*" />
            <button onClick={handleUpload}>Upload </button>
            {/* <CircularProgress variant="determinate" value={percent} /> */}
            <CircularProgressbar value={percent} text={percent} />
             <p>{percent} % done</p>
        </div>
    );
}

export default ImageUpload;
