import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


function AdminLogin() {
  const navigate = useNavigate();

  const handelLogin = (events) => {
    events.preventDefault();
    const form = new FormData(events.target);
    const email = form.get("email");
    const password = form.get("password");
    const passwordLength = password.length;
    if (passwordLength >= 4) {
      toast.success("You are login successfully");
      setTimeout(() => {
        navigate("/otp", { replace: true });
      }, 5500);
    } else {
      toast.error("Password must be at least 4 characters");
    }
  };
  return (
    <>
      <div className="container-fluid test1">
        <div className="">
          <div className="row ">
            <div className="col-sm-1 col-md-1">
              <img src="https://contentstatic.techgig.com/photo/83033475.cms" />
            </div>
            <div className="col-sm-4">&nbsp;</div>
            <div className="col-sm-7  main-div">
              <h3 className="heading">Admin Login</h3>
              <form className="form-group" onSubmit={handelLogin}>
                <div className="row input-type">
                  <div>
                    <ToastContainer />
                  </div>
                  <input
                    name="email"
                    type="email"
                    className="form-control form-input123"
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="row input-type">
                  <input
                    name="password"
                    type="password"
                    className="form-control form-input123"
                    placeholder="Enter Password"
                    required
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
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
