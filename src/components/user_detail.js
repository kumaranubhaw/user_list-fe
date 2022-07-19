import { useEffect, useState } from 'react'
import './user_detail.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router';
import renderIf from './shared/renderif'
import  fetchData from './shared/http_fetch'

 
const UserDetail = () => {
	const { id } = useParams();
	const [userDetailRec, setUserDetailRec] = useState({});
	let navigate = useNavigate();
	let userDetail = {}
	const getUserDetail = () => {
		fetchData("users/" + id, "", "get")
		.then(data => {
			setUserDetailRec(data);
		})
	}

	useEffect(() => {
		getUserDetail();
	}, []);

	const handleBack = () => {
		navigate("/user")
	}

	if(userDetail) {
		return (
				<div className="container mtx">
					{renderIf(userDetailRec, 
						<div>
							<div className="center-align font large header-text-color bold mal mbn capitalize">User Detail
							</div>
							<div className="row mtx">
								<div className="col m6 s12 offset-m3 box-shadow padding-50">
									<div className="row">
										<div className="col s5 font medium"><b>NAME</b>: </div>
										<div className="col s7">{userDetailRec.name}</div>
									</div>
									<div className="row">
										<div className="col s5 font medium"><b>Email</b>: </div>
										<div className="col s7">{userDetailRec.email}</div>
									</div>
									<div className="row">
										<div className="col s5 font medium"><b>Gender</b>: </div> 
										<div className="col s7">{userDetailRec.gender}</div>
									</div>
									<div className="row">
										<div className="col s5 font medium"><b>Status</b>: </div> 
										<div className="col s7">{userDetailRec.status}</div>
									</div>
									
								</div>
							</div>
						</div>
					)}
					<div className="row mtl">
						<div className="col s12 m8 offset-m2">
							<button type="submit" className="btn back-btn font large box-border waves-effect waves-light" onClick={() => handleBack()}>BACK</button>
						</div>
					</div>
				</div>
			)
	} else {
		return 
	}
}

export default UserDetail