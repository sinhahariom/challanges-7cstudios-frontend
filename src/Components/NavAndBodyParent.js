import { useEffect, useState } from 'react';
import Nav from '../Components/Nav';
import UserBody from '../Components/UserBody';
import AddUser from '../Components/AddUser';
import { UserDataStore } from '../Context/UserDataStore';
import './NavAndBodyParent.scss';

const NavAndBodyParent = () => {

    //These are the Context Variables which I have used here and are being distributed 
    //among the child components.
    //This made the data handling easier.
    const [userDetails,setUserDetails] = useState([]);
    const [counter,setCounter] = useState(0);
    const [toggleAddUser, setToggleAddUser] = useState(false);

    //Here, I am checking the window refresh / tab refresh. 
    //If tab is being closed, or so the window, refreshes or closes,
    //the local storage will be set with the Users Data with a key Name.

    //Further, when the user reloads completes, 
    //I am collecting back my data which I have stored in the local storage
    //and populate that to the User table.

    window.onbeforeunload = (event) => {
        const e = event || window.event;
        e.preventDefault();
        if (e) {
            localStorage.setItem('user',JSON.stringify(userDetails));
            e.returnValue = ''; 
        }
        return '';
    };

    window.onload = ()=>{
        if(localStorage.getItem('user')){
            setUserDetails(JSON.parse(localStorage.getItem('user')));
        }
    }

    return (
        
        //Here I am passing the Context to the Childs.
        <div className="nav-and-body-parent-wrapper">
            <Nav></Nav>
            <UserDataStore.Provider value={{counter, setCounter,userDetails, toggleAddUser, setToggleAddUser,setUserDetails}}>
                <UserBody></UserBody>
                {toggleAddUser && <AddUser></AddUser>}
            </UserDataStore.Provider>
        </div>
     );
}
 
export default NavAndBodyParent;