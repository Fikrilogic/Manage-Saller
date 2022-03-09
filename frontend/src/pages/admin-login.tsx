import React from "react";

function Login() {
  return (
    <div>
      <div className="container-sm">
        <div className="col-lg-5 border border-2 border-primary rounded-3 p-5 mx-auto mt-5">
          <h2 className="mb-3 p-3">Admin Login</h2>

          <form className="col-md-8 mx-auto">
            <div className="form-floating mb-3">
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="admin"
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="password"
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="col-md-7 mx-auto my-4">
              <button className="btn btn-primary" type="submit">
                Submit Form
              </button>
            </div>
          </form>

          <p className="h5 text-danger">Username or Password is Not Match</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
