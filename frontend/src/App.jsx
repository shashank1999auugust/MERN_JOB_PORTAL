import { RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Navbar from './components/shared/Navbar'
import {createBrowserRouter} from "react-router-dom"
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompnayCreate from './components/admin/CompnayCreate'
import CompnaySetup from './components/admin/CompnaySetup'
import AdminJobs from './components/admin/AdminJobs'
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/protectedRoute'


const appRouter= createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },

//admin k lie yha s start
{
  path:'/admin/companies',
  element:<ProtectedRoute><Companies/></ProtectedRoute>
},
{
  path:'/admin/companies/create',
  element:<ProtectedRoute><CompnayCreate/></ProtectedRoute>
},
{
  path:'/admin/companies/:id',
  element:<ProtectedRoute><CompnaySetup/></ProtectedRoute>
}
,
{
  path:'/admin/jobs',
  element:<ProtectedRoute><AdminJobs/></ProtectedRoute>
},
{
  path:'/admin/jobs/create',
  element:<ProtectedRoute><PostJob/></ProtectedRoute> 
},
{
  path:'/admin/jobs/:id/applicants',
  element:<ProtectedRoute><Applicants/></ProtectedRoute> 
}



])

function App() {


  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
