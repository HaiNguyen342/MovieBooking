import React, { useState } from "react";
import { loginApi } from "../../services/user";

export default function Login() {
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await loginApi(state);
  };

  return (
    <div className="w-25 mx-auto py-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="form-control"
            name="taiKhoan"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="text"
            className="form-control"
            name="matKhau"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">LOGIN</button>
      </form>
    </div>
  );
}
