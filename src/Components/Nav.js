import { useState } from 'react';
import './Nav.scss';

const NavOptions = ({nav})=>{
    return nav.map(navOptions=>(
        <div className="nav-option">{navOptions}</div>
    ))
}

const Nav = () => {

    const [nav] = useState(["Products","Demo Script","Customers","Sales Team","Demos","Settings"]);
    return ( 
        <div className="left-nav-parent">
            <NavOptions nav={nav}></NavOptions>
        </div>
     );
}
 
export default Nav;