import { useState } from 'react';
import Nav from '../Components/Nav';
import UserBody from '../Components/UserBody';
import AddUser from '../Components/AddUser';
import { UserDataStore } from '../Context/UserDataStore';
import './NavAndBodyParent.scss';

const NavAndBodyParent = () => {
    const [userDetails,setUserDetails] = useState([]);

    const [toggleAddUser, setToggleAddUser] = useState(false);
    return ( 
        <div className="nav-and-body-parent-wrapper">
            <Nav></Nav>
            <UserDataStore.Provider value={{userDetails, toggleAddUser, setToggleAddUser,setUserDetails}}>
                <UserBody></UserBody>
                {toggleAddUser && <AddUser></AddUser>}
            </UserDataStore.Provider>
        </div>
     );
}
 
export default NavAndBodyParent;