import { useState } from 'react';
import Nav from '../Components/Nav';
import UserBody from '../Components/UserBody';
import { UserDataStore } from '../Context/UserDataStore';
import './NavAndBodyParent.scss';

const NavAndBodyParent = () => {
    const [userDetails,setUserDetails] = useState([
        {
            "id": 1,
	        "user": "Hariom",
	        "last_signed_in": "",
	        "role": ""
        },
        {
            "id": 2,
	        "user": "Sinha",
	        "last_signed_in": "",
	        "role": ""
        },
    ]);
    return ( 
        <div className="nav-and-body-parent-wrapper">
            <Nav></Nav>
            <UserDataStore.Provider value={{userDetails}}>
                <UserBody></UserBody>
            </UserDataStore.Provider>
        </div>
     );
}
 
export default NavAndBodyParent;