import { useState } from 'react';
import './Nav.scss';

// A Sub-Functional Component to map the Nav Options we are offering based on Mock Up.

const NavOptions = ({nav})=>{
    return nav.map(navOptions=>(
        <div key={navOptions} className="nav-option">{navOptions}</div>
    ))
}

const Nav = () => {
    
    // Sample Nav Options
    const [nav] = useState(["Products","Demo Script","Customers","Sales Team","Demos","Settings"]);
    return ( 
        <div className="left-nav-parent">
            <NavOptions nav={nav}></NavOptions>
        </div>
     );
}
 
export default Nav;