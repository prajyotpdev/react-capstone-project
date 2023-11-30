import React, { useContext } from 'react'
import { Routes,Route, useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../server/auth/auth-context';
import RequireAuth  from '../server/auth/require-auth';
import RegisterationPage from '../pages/registeration/RegisterationPage';
import LoginPage from '../pages/login/loginPage';
import UserProfilePage from '../pages/user/userProfilePage';
import LoadingPage from '../pages/loading/loadingPage';
import HomePage from '../pages/home/homePage';
import DashBoardPage from '../pages/dashboard/dashBoardPage';


const RouteManager = () => {
  
     const { currentUser } = useContext(AuthContext)
     const navigate = useNavigate();
     console.log('User:', !!currentUser);
   
     useEffect(() => {
       if (currentUser) {
         navigate('/react-capstone-project/dashboard')
       }
     }, [currentUser])
     
   
        const [isLoading, setLoading] = useState(true);  
     
        useEffect(() => {
          const timer = setTimeout(() => {
            setLoading(false);
          }, 1000);
          return () => clearTimeout(timer);
        }, []);
        
   
        const profiles = [
         { id: 'event1', name: 'Event 1', date: '2023-09-10', description: 'Description 1' },
         { id: 'event2', name: 'Event 2', date: '2023-09-15', description: 'Description 2' },
         // Add more events from Firebase data
       ];
       
   
   
     return (      
     <Routes>
      <Route path="/react-capstone-project/" element={isLoading ?(
       <LoadingPage/>):(<HomePage/>)}/>
      <Route path="/react-capstone-project/register" element={<RegisterationPage/>}/>
      <Route path="/react-capstone-project/login" element={<LoginPage/>}/>
      {/* <Route path="/react-capstone-project/profiles/:profileId" element={<Portfolio/>} ></Route> */}
      <Route path="/react-capstone-project/dashboard" element={
      <RequireAuth>
       <DashBoardPage/>
      </RequireAuth>}/>   
      <Route path="/react-capstone-project/home" element={isLoading && !currentUser ?(
       <LoadingPage/>):currentUser?(<UserProfilePage/>):(<HomePage/>)}/>
      </Routes>
     )
   }
   
   export default RouteManager 