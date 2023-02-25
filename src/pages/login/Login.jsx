import React from "react";

export default function Login() {
  return (
    <div className="w-25 mx-auto py-5">
      <form>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input type="text" className="form-control" />
        </div>
        <button className="btn btn-primary">LOGIN</button>
      </form>
    </div>
  );
}
