import './AddUser.scss';
import { useContext, useState } from 'react';
import { UserDataStore } from '../Context/UserDataStore';

const FormComponent = ()=>{


    //Using the Context State here to bind the data from the 
    //User JSON with the User PopUp Input.
    const {toggleAddUser, setToggleAddUser,userDetails,setUserDetails, counter, setCounter} = useContext(UserDataStore);
    const [email,setEmail] = useState();
    const [role,setRole] = useState();
    const optionValues = ['','ADMIN','USER','OTHER'];

    const addUser = ()=>{
        setCounter(counter + 1);
        let temp = {};
        temp.id = counter;    
        temp.user = email;
        temp.last_signed_in = '__Timestamp';
        temp.role = role;
        userDetails.push(temp);
        setUserDetails(userDetails);
        setToggleAddUser(!toggleAddUser);
    }

    return(
        <div className="form-wrapper">
            <span>User Information</span>
            <div className="form">
                <p>Email Id Of the User</p>
                <input required={true} type="email" onChange={(e)=>setEmail(e.target.value)}></input>
                <p>Role</p>
                <select required onChange={(e)=> setRole(e.target.value)}>
                   {
                       optionValues.map(options=>(
                           <option key={options} value={options}>{options}</option>
                       ))
                   }
                </select>   
            </div>
            <div className="btn-wrapper">
                <button onClick={()=>setToggleAddUser(!toggleAddUser)}>Cancel</button>
                <button onClick={()=> addUser()}>Add</button>
            </div>
        </div>
    )
}

const AddUser = () => {
    
    return ( 
        <div className="add-user-parent">
            <div className="left-detail">
                <img alt="NA" src="data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' version='1.1' width='512' height='512' x='0' y='0' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512' xml:space='preserve' class=''%3E%3Cg%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M367.57,256.909c-9.839-4.677-19.878-8.706-30.093-12.081C370.56,219.996,392,180.455,392,136C392,61.01,330.991,0,256,0 c-74.991,0-136,61.01-136,136c0,44.504,21.488,84.084,54.633,108.911c-30.368,9.998-58.863,25.555-83.803,46.069 c-45.732,37.617-77.529,90.086-89.532,147.743c-3.762,18.066,0.745,36.622,12.363,50.908C25.222,503.847,42.365,512,60.693,512 H307c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H60.693c-8.538,0-13.689-4.766-15.999-7.606 c-3.989-4.905-5.533-11.29-4.236-17.519c20.755-99.695,108.691-172.521,210.24-174.977c1.759,0.068,3.526,0.102,5.302,0.102 c1.793,0,3.578-0.035,5.354-0.104c31.12,0.73,61.05,7.832,89.044,21.14c9.977,4.74,21.907,0.499,26.649-9.478 C381.789,273.582,377.547,261.651,367.57,256.909z M260.878,231.877c-1.623-0.029-3.249-0.044-4.878-0.044 c-1.614,0-3.228,0.016-4.84,0.046C200.465,229.35,160,187.312,160,136c0-52.935,43.065-96,96-96s96,43.065,96,96 C352,187.299,311.555,229.329,260.878,231.877z' fill='%23ffffff' data-original='%23000000' style=''/%3E%3C/g%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M492,397h-55v-55c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v55h-55c-11.046,0-20,8.954-20,20 c0,11.046,8.954,20,20,20h55v55c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20v-55h55c11.046,0,20-8.954,20-20 C512,405.954,503.046,397,492,397z' fill='%23ffffff' data-original='%23000000' style=''/%3E%3C/g%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg'%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A"></img>
                <span>This is a demo challange App for 7C Studios. Add a User here and you can see that in the User table.</span>
            </div>
            <div className="right-detail">
                <FormComponent></FormComponent>
            </div>
        </div>
     );
}
 
export default AddUser;