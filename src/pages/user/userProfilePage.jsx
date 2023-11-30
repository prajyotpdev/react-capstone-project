import React, { useContext } from 'react'
import { db } from '../../server/services/Firebase';

const UserProfilePage = () => {
    
  const { currentUserId } = useContext(AuthContext);
  
  const [imageUrl, setImageUrl] = useState<string | null>(null);


     const onSubmit = async  (event) => {
         event.preventDefault();
 
         const target = event.target;
 
         const data = {
             fname: target.fname.value,
             sname: target.sname.value,
             email: target.email.value,
             edu10: target.edu10.value,
             edu12: target.edu12.value,
             edugrad: target.edugrad.value,
             tel_no: target.tel_no.value,
             projects: target.projects.value,
             profileUrl: imageUrl,
             conditionsAccepted: target.conditionsAccepted.checked,
         };         
         console.log(data);         
    try {     
        const userRef = doc(db, "users", currentUserId);  
        await setDoc(userRef,data);
        console.log('Document written with ID:', userRef.id);
      } catch (error) {
        console.error('Error adding document:', error);
      }

     };
     
  const handleImageUrlChange = (url) => {
    setImageUrl(url);
  };
 
     return (<>
        <h3>Welcome!</h3>
         <form onSubmit={onSubmit}>
             <div >
                 <label htmlFor="fname">First Name</label><label>:</label>
                 <input id="fname" required/>
             </div>
             <div >
                 <label htmlFor="sname">Last Name</label><label>:</label>
                 <input id="sname" required/>
             </div>
             <div >
                 <label htmlFor="email">Email</label><label>:</label>
                 <input type="email" id="email" required/>
             </div>             
             <div >
                 <label htmlFor="tel_no">tel_no</label><label>:</label>
                 <input type="tel" name="phone" pattern="[0-9]{10}" id="tel_no" required/>
             </div>  
             <div className={classNamesMemberForm.edu}>
             <div >
                 <label htmlFor="edu10">10th Marks</label><label>:</label>
                 <input type="text" id="edu10" />
             </div>
             <div >
                 <label htmlFor="edu12">12th Marks</label><label>:</label>
                 <input type="text" id="edu12" />
             </div>
             <div >
                 <label htmlFor="edugrad">Graduation Marks</label><label>:</label>
                 <input type="text" id="edugrad" />
             </div>      
             </div>       
             <div >
                 <label htmlFor="projects">Projects</label><label>:</label>
                 <input type="text" id="projects" />
             </div>
             <div >
             <ImageUpload onImageUrlChange={handleImageUrlChange}/>
             </div>       
             <div >                
             <input type="checkbox" id="conditionsAccepted" />
                 <label htmlFor="conditionsAccepted" >I agree to the terms and conditions</label>
             </div>
             <button type="submit">Publish</button>
         </form>
     </>
     );
}

export default UserProfilePage