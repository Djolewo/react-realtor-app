import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CreateListing from "./pages/CreateListing";



function App() {
  return (
    <>
        <Router>
          <Header/>
          <Routes>
            <Route path="/profiles" element={<PrivateRoute />}>
              <Route path="/profiles" element={<Profile/>}/>  
            </Route>
          <Route path="/" element={<Home/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/create-listing" element={<CreateListing/>}/>

          </Routes>
        </Router>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
    </>
  
  );
}

export default App;
