import { useEffect, useState } from 'react'
import './user_list.css'
import { useNavigate } from 'react-router-dom'
import  fetchData from './shared/http_fetch'
 
const UserList = () => {
	const [userList, setUserList] = useState([])
	let navigate = useNavigate();

	const getUserList = () => {
		fetchData("users", "", 'get')
		.then(res => {
			console.log(res);
			setUserList(res);
		})
	}

	useEffect(() => {
		getUserList();
	}, []);

	const rowClick = (userId) => {
		navigate("/user/" + userId);
	}

	const addUserClicked = () => {
		navigate('/user/add');
	}
	
	return (
		<div className="container">
			<div className="center-align font large header-text-color bold mal mbn capitalize">User List</div>
			<div className="mtx center-align curssor-pointer font medium underline"><a onClick={() => addUserClicked()}>Add User</a></div>
			<div className="user-list box-shadow mtm">
				<div className="row center-align">
					<table>
						<tr className="th_row">
							<th className="font small bold">Name</th>
							<th className="font small bold">Gender</th>
						</tr>
						{userList ? (userList.map((item, index) => (
							<tr className="tbl-row" onClick={() => rowClick(item.id)} key={index}>
								<td className="font small">{item.name}</td>
								<td className="font small">{item.gender}</td>
							</tr>
						))) : ""}
					</table>
				</div>
			</div>
		</div>
	)
}


export default UserList