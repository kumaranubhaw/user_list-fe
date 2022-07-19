import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
import renderIf from "./shared/renderif";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();

    const handleSubmit = () => {
        if(username !== "" && password !== "") {
            navigate('/user');
        } else {
            setError("Username or Password is empty");
        }
        
    }

    const handleUsernameChange = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col s12 font large header-text-color bold center-align mtx">LOGIN PLEASE!!</div>
                </div>
                {renderIf(error, 
                    <div className="row">
                        <div className="col s12 font large text-color-red bold center-align mtx">{error}</div>
                    </div>
                )}
                <div className="row mtx ">
                    <div className="col s8 offset-s2 box-shadow padding-50">
                        <div className="row">
                            <div className="col s8 offset-s2"><input type="text" name="username" placeholder="Username" onChange={(event) => handleUsernameChange(event)} /></div>
                        </div>
                        <div className="row">
                            <div className="col s8 offset-s2"><input type="password" name="password" placeholder="Password" onChange={(event) => handlePasswordChange(event)}/></div>
                        </div>
                        <div className="row mtx">
                            <div className="col s12 m8 offset-m2">
                                <button type="submit" className="btn back-btn font large box-border waves-effect waves-light" onClick={() => handleSubmit()}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Login;