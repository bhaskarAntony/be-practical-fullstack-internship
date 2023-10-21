import React, { useState } from 'react'
import '../styles/register.css'
import Email from '../template/email';
import { toast } from 'react-toastify';
import axios from 'axios';
import Registration from './Registration';
const URL = "https://email-api-r1kd.onrender.com"

const LoadingModal = () => {
    return (
      <div className="loading-modal">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  };
function Register() {
    const [reg, setReg] = useState({
        name: "",
        email: "",
        mobile: "",
        college: "",
      });
    
      const [err, setError] = useState(false);
      const [nameErr, setNameErr] = useState("");
      const [emailErr, setEmailErr] = useState("");
      const [mobileErr, setMobileErr] = useState("");
      const [collegeErr, setCollegeErr] = useState("");
      const [loading, setLoading] = useState(false);
    
      const readValue = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
          validateName(value);
        }
        if (name === "email") {
          validateEmail(value);
        }
        if (name === "mobile") {
          validateMobile(value);
        }
        if (name === "college") {
          validateCollege(value);
        }
       
        setReg({ ...reg, [name]: value });
        

      };
    
      const validateName = (name) => {
        if (name === "") {
          setError(true);
          setNameErr("Name field cannot be empty");
        } else {
          let regex = /^[a-zA-Z\s]+$/;
          if (regex.test(name) === false) {
            setError(true);
            setNameErr("Please enter a valid name");
          } else {
            setError(false);
            setNameErr(false);
          }
        }
      };
      
      const validateCollege = (college) => {
        if (college === "") {
          setError(true);
          setCollegeErr("College address field cannot be empty");
        } else {
          let regex = /^[a-zA-Z\s]+$/;
          if (regex.test(college) === false) {
            setError(true);
            setNameErr("Please enter a valid address");
          } else {
            setError(false);
            setCollegeErr(false);
          }
        }
      };
    
      const validateMobile = (mobile) => {
        if (mobile === "") {
          setError(true);
          setMobileErr("Mobile field cannot be empty");
        } else {
          let regex = /^[6-9]\d{9}$/;
          if (regex.test(mobile) === false) {
            setError(true);
            setMobileErr("Invalid Mobile number");
          } else {
            setMobileErr("");
            setError(false);
          }
        }
      };
    
      const validateEmail = (email) => {
        if (email === "") {
          setError(true);
          setEmailErr("Email field cannot be empty");
        } else {
          let regex = /^\S+@\S+\.\S+$/;
          if (regex.test(email) === false) {
            setError(true);
            setEmailErr("Invalid Email format");
        //   } else if (EmailValidator.is_email_valid(email) === false) {
        //     setError(true);
        //     setEmailErr("Invalid Email service");
        //   } else {
            setError(false);
            setEmailErr("");
          }
        }
      };
    
      const sendEmail = async (name, email, mobile, college) => {
        try {
          let data = Email(name, email, mobile, college);
          let to = "bhaskarbabucm6@gmail.com";
          let sub = "Internship Registration details";
    
          let final = {
            to,
            subject: sub,
            content: data,
          };
    
          setLoading(true);
    
          await axios
            .post(`${URL}/api/send/mail`, final)
            .then((res) => {
                setLoading(false)
                toast.success("registration is successfull")
                window.location.href = 'https://rzp.io/l/35XuPYYr0';
            
            })
            .catch((err) =>{
                setLoading(false)
                toast.error(err.message)
            });
        } catch (err) {
          console.log(err.message);
        }
      };
      const submitHandler = async (e) => {
        e.preventDefault();
       sendEmail(reg.name, reg.email, reg.mobile, reg.college)     
    };
  return (
   <section className='p-3' id='register'>
      {
        loading ? <LoadingModal/> : null
        }
    <h1 className="banner-heading mb-5">Register for <span className="text-main">Fullstack <br />Internship Program</span></h1>
     <div className='container register p-3 py-3 '>
        <h1 className="card-heading w-100 text-center text-main">Register Now</h1>
    <form  action='post' autoComplete='false' onSubmit={submitHandler}>
    <div className="row">
       <div className="col-12 col-md-12 col-lg-3">
            <div className="form-group mb-2">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name='name' className="form-control" placeholder='Enter your Name' value={reg.name} onChange={readValue} />
                { err && nameErr ? <p className="text-danger text-start"> { nameErr } </p> : null }
            </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
            <div className="form-group mb-2">
                <label htmlFor="name" className="form-label">Email Address</label>
                <input type="email" name='email' className="form-control" placeholder='Enter Email Address' value={reg.email} onChange={readValue}  />
                { err && emailErr ? <p className="text-danger text-start"> { emailErr } </p> : null }
            </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
            <div className="form-group mb-2">
                <label htmlFor="name" className="form-label">Phone Number</label>
                <input type="text" name='mobile' className="form-control" placeholder='Enter Phone Number' value={reg.mobile} onChange={readValue}  />
                { err && mobileErr ? <p className="text-danger text-start"> { mobileErr } </p> : null }
            </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
            <div className="form-group mb-2">
            <label htmlFor="name" className="form-label">College Name</label>
                                <input type="text" className="form-control p-3"  name='college' placeholder='Enter College Name' value={reg.college} onChange={readValue} required/>
                                <div>
                    { err && collegeErr ? <p className="text-danger text-start"> { collegeErr } </p> : null }
                                 </div>
                            </div>
            </div>
            <div className="text-center w-100">
                <button type='submit' className="btn-2  mt-4 py-3 w-100">Register <i class="bi bi-chevron-double-right"></i></button>
            </div>
       </div>
    </form>
        
    </div>
   </section>
  )
}

export default Register
