
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate()
    const currentHost = window.location.host;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const response = login({ username, password });
        if (response.status != 200) {
            setError("User name or password not correct!")
        } else {
            setTimeout(() => {
                navigate('/')
            })
        }
    };

    return (
        <div className="container" style={{ backgroundImage: `url(/back.jpg)` }}>
            <form onSubmit={handleSubmit} className="w-50 mx-auto py-5 shadow p-4">
                <h3 className="text-white">Login</h3>
                <hr />
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {
                    username
                }{
                    password
                }
                {error && <div className="alert alert-danger">{error}</div>} {/* Hiển thị lỗi */}

                <div className="mb-3 d-flex">
                    <button type="submit" className="btn btn-success">Login</button>
                    <p className="form-label ms-auto mt-2">Create New Account?</p>
                </div>
            </form>
        </div>
    );
}
