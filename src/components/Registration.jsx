import React, { useState } from 'react'
import '../styles/register.css'
import Email from '../template/email';
import { toast } from 'react-toastify';
import axios from 'axios';
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
function Registration() {
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
    
      const sendEmail = async (name, email, mobile) => {
        try {
          let data = Email(name, email, mobile);
          let to = "adarsh@bepracticals.com";
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
    <section className='registration p-1 px-lg-3' id='register'>
           {
        loading ? <LoadingModal/> : null
}
       <div className="registration-form-container text-center sticky top-0">
                <div className="card registration">
                    <div className="card-header text-start bg-faq">
                    <h1 className="card-heading text-black text-900 ">Enroll Our <br />Fullstack internship Program</h1>
            <div className="d-flex align-items-end">
            <h1 className="heading-text text-white mx-2">&#8377;1999</h1>
            <h1 className="heading-subtitle text-black"><del>&#8377; 2999</del></h1>
           
            </div>
                    </div>
                    <div className="card-body">
                        <form action='post' autoComplete='false' onSubmit={submitHandler}>
                            <div className="form-group mt-2">
                                <input type="text" className="form-control p-3" name='name' placeholder='Enter Name' value={reg.name} onChange={readValue} required />
                                <div>
                    { err && nameErr ? <p className="text-danger text-start"> { nameErr } </p> : null }
                             </div>
                            </div>
                            <div className="form-group mt-2">
                                <input type="email" className="form-control p-3" name='email' placeholder='Enter Email'  value={reg.email} onChange={readValue} required/>
                                <div>
                                    { err && emailErr ? <p className="text-danger text-start"> { emailErr } </p> : null }
                              </div>
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" className="form-control p-3"  name='mobile' placeholder='Enter Mobile Number' value={reg.mobile} onChange={readValue} required/>
                                <div>
                    { err && mobileErr ? <p className="text-danger text-start"> { mobileErr } </p> : null }
                                 </div>
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" className="form-control p-3"  name='college' placeholder='Enter Collge Name' value={reg.college} onChange={readValue} required/>
                                <div>
                    { err && collegeErr ? <p className="text-danger text-start"> { collegeErr } </p> : null }
                                 </div>
                            </div>
                            <div className="form-group mt-5">
                               <button type="submit" className='btn-2 text-700 w-100 '>Register <i class="bi bi-hand-index-thumb"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
    </section>
  )
}

export default Registration
