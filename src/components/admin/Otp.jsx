import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const countNumber = (_event) => {
  _event.preventDefault();
  const otpNumber = _event.target.value;

  if (!/^[0-9]+$/.test(otpNumber)) {
    toast.error("Character is not a number");
  }
};

// Function start to here

function Otp() {

    const navigate = useNavigate();

// Check otp function with api
  const handelOtp = (_events) => {
    _events.preventDefault();
    const otpData = new FormData(_events.target);
    const otp = otpData.get('otp');

    if (!/^[0-9]+$/.test(otp)) {
        toast.error("Character is not a number");
    }else{
        const length = otp.length;
        if(length >= 6) {
            toast.warning('Wait for verification');
   
            setTimeout(() => {
                navigate('/admin/dashboard');
            }, 5500);           
           
        }else{
            toast.error("OTP length is must be at least 6");
        }   
    }
  };
  return (
    <>
      <div className="container-fluid test1">
        <div className="">
          <div className="row">            
            <div className="col-sm-4 col-md-4 main-div2">
              <h3 className="heading">OTP</h3>
              <form className="form-group" onSubmit={handelOtp}>
                <div className="row input-type">
                  <div>
                    <ToastContainer />
                  </div>
                  <input
                    name="otp"
                    type="text"
                    className="form-control form-input123"
                    placeholder="Enter OTP"
                    required
                    maxLength={6}
                    onKeyUp={countNumber}
                  />
                </div>

                <div className="col-sm-10 input-type">
                  <button
                    type="reset"
                    className="btn btn-danger mt-2 custome-button"
                  >
                    Reset
                  </button>
                  &nbsp;
                  <button
                    type="submit"
                    className="btn btn-success mt-2 custome-button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-sm-1">
                &nbsp;
            </div>
            <div className="col-sm-5 col-md-3">
              <img src="https://contentstatic.techgig.com/photo/83033475.cms" />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp;
