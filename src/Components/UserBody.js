import { useContext, useEffect } from 'react';
import { UserDataStore } from '../Context/UserDataStore';
import './UserBody.scss';


//This is a Sub-Component to render the delete button and perform actions of Delete the user.

const DeleteUser = (props)=>{
    const {userDetails,setUserDetails} = useContext(UserDataStore);

    const deleteUser=()=>{
        let temp = userDetails.filter(users=>{
            return users.id != props.id;
        });
        setUserDetails(temp);
        
        //Update local storage on delete action
        localStorage.setItem('user',JSON.stringify(userDetails));
    }

    return(
        <button onClick={deleteUser}>
            <img alt="NA" src="data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' version='1.1' width='512' height='512' x='0' y='0' viewBox='0 0 150 150' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Ccircle xmlns='http://www.w3.org/2000/svg' cx='75' cy='75' fill='%23ad4b4b' r='64' data-original='%23334d5c' style='' class=''/%3E%3Cpath xmlns='http://www.w3.org/2000/svg' d='m65.81 47.16v-2.79a1.85 1.85 0 0 1 1.85-1.85h14.68a1.85 1.85 0 0 1 1.85 1.85v2.79h2.88v-2.79a4.73 4.73 0 0 0 -4.73-4.73h-14.68a4.73 4.73 0 0 0 -4.73 4.73v2.79z' fill='%23b7b7ba' data-original='%23b7b7ba' style='' class=''/%3E%3Cpath xmlns='http://www.w3.org/2000/svg' d='m50 52.08 3.2 54.5a4 4 0 0 0 4 3.78h35.63a4 4 0 0 0 4-3.78l3.2-54.5z' fill='%23d5d6db' data-original='%23d5d6db' style='' class=''/%3E%3Crect xmlns='http://www.w3.org/2000/svg' fill='%23e1e6e9' height='9.86' rx='1.74' width='56.1' x='46.95' y='45.85' data-original='%23e1e6e9' style='' class=''/%3E%3Cg xmlns='http://www.w3.org/2000/svg' fill='%23b6b7ba'%3E%3Cpath d='m63.8 62.46a2.06 2.06 0 0 0 -2.06 2.06v37.48a2.07 2.07 0 1 0 4.13 0v-37.48a2.07 2.07 0 0 0 -2.07-2.06z' fill='%23b6b7ba' data-original='%23b6b7ba' style='' class=''/%3E%3Cpath d='m75 62.46a2.06 2.06 0 0 0 -2.06 2.06v37.48a2.06 2.06 0 1 0 4.12 0v-37.48a2.06 2.06 0 0 0 -2.06-2.06z' fill='%23b6b7ba' data-original='%23b6b7ba' style='' class=''/%3E%3Cpath d='m86.2 62.46a2.07 2.07 0 0 0 -2.07 2.06v37.48a2.07 2.07 0 1 0 4.13 0v-37.48a2.06 2.06 0 0 0 -2.06-2.06z' fill='%23b6b7ba' data-original='%23b6b7ba' style='' class=''/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A"></img>
        </button>
    )
}

const CustomTableContents = ()=>{
    const {userDetails} = useContext(UserDataStore);
    return(
        userDetails.map((users)=>(
            <div className="table-data" key={users.id}>
                <span className="id">{users.id}</span>
                <span className="user">{users.user}</span>
                <span className="last-signed-in">{users.last_signed_in}</span>
                <span className="role">{users.role}</span>
                <span className="delete">
                    <DeleteUser id={users.id}></DeleteUser>
                </span>
            </div>
        ))
    )
}

const CustomTable = ()=>{
   return (
        <div className="table-parent">
            <div className="table-header">
                <span className="id">#</span>
                <span className="user">User</span>
                <span className="last-signed-in">Last Signed In</span>
                <span className="role">Role</span>
                <span className="delete">Delete</span>
            </div>
            <CustomTableContents></CustomTableContents>
        </div>
   )
}

const UserBody = () => {
    const {toggleAddUser, setToggleAddUser} = useContext(UserDataStore);
    return ( 
        <div className="user-body-wrapper">
            <button onClick={()=>setToggleAddUser(!toggleAddUser)} disabled={toggleAddUser === true}>Add User</button>
            <div className="table-wrapper">
                <CustomTable></CustomTable>
            </div>
        </div>
     );
}
 
export default UserBody;