import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/login",
        {
          username: formData.username,
          password: formData.password,
        },
        { withCredentials: true },
      );

      // if login success → redirect
      if (res.data.success) {
        window.location.href = "http://localhost:5174/";
      }
    } catch (err) {
      window.location.href = "http://localhost:5173/signup";
    }
  };

  return (
    <div className="container p-3">
      <div className="row p-3">
        <div className="text-center mt-4">
          <h3>Open a free demat and trading account online</h3>
          <h4 className="text-muted fs-5 mt-3 mb-4">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </h4>
        </div>
        <div className="col-6 p-3">
          <img src="media/images/signpage.svg" alt="" />
        </div>
        <div className="col-6 p-4">
          <div className="signup-card">
            <h2 className="fs-2">Login Account</h2>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                />
                <label>Username *</label>
              </div>

              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                />
                <label>Password *</label>
              </div>

              <button className="signup-btn">SIGN IN</button>
            </form>

            <p className="signin-text">
              Don't have an account? <a href="/signup">Click here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
