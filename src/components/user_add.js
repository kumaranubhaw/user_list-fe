import React, {useState} from "react";
import './user_add.css';
import { useNavigate } from 'react-router-dom';
import  fetchData from './shared/http_fetch';
import renderIf from "./shared/renderif";

const UserAdd = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();

    const handleSubmit = () => {
        if(email !== '' && name !== '' && gender !== "") {
            let payload = {name: name, email: email, gender: gender, status: status}
            fetchData("users", payload, "post")
            .then(res => {
                console.log(res);
                navigate('/user');
            })
        } else {
            setError("Name or Email or Gender is empty");
        }
    }

    const handleNameChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    const handleSelectChange = (event) => {
        event.preventDefault();
        setGender(event.target.value);
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    }

    const handleBack = () => {
		navigate("/user")
	}

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col s12 font large header-text-color bold center-align mtx">Add User</div>
                </div>
                {renderIf(error, 
                    <div className="row">
                        <div className="col s12 font large text-color-red bold center-align mtx">{error}</div>
                    </div>
                )}
                <div className="row box-shadow mtx padding-50">
                    <div className="col s12">
                        <div className="row">
                            <div className="col s3 font medium"><b>NAME</b>: </div>
                            <div className="col s9"><input type="text" name="name" placeholder="Enter Name" required onChange={(event) => handleNameChange(event)} /></div>
                        </div>
                        <div className="row">
                            <div className="col s3 font medium"><b>Email</b>: </div>
                            <div className="col s9"><input type="email" name="email" placeholder="example@domain.com" required onChange={(event) => handleEmailChange(event)} /></div>
                        </div>
                        <div className="row">
                            <div className="col s3 font medium"><b>Gender</b>: </div> 
                            <div className="col s9">
                                <select name="gender" id="gender" onChange={(event) => handleSelectChange(event)}>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s3 font medium"><b>Status</b>: </div> 
                            <div className="col s9" onChange={(event) => handleStatusChange(event)}>
                                <input type="radio" name="status" id="active" value="Active" />
                                <label className="font medium text-color mls">Active</label><br/><br/>
                                <input type="radio" name="status" id="inactive" value="Inactive" />
                                <label className="font medium text-color mls">Inactive</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mtx">
						<div className="col s12 m8 offset-m2">
							<button type="submit" className="btn back-btn font large box-border waves-effect waves-light" onClick={() => handleSubmit()}>SUBMIT</button>
						</div>
					</div>
                    <div className="row mtl">
						<div className="col s12 m8 offset-m2">
							<button type="submit" className="btn back-btn font large box-border waves-effect waves-light" onClick={() => handleBack()}>BACK</button>
						</div>
					</div>
                </div>
            </div>
        </div>
    )
}

export default UserAdd;