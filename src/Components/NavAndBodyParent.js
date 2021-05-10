import Nav from '../Components/Nav';
import UserBody from '../Components/UserBody';
import './NavAndBodyParent.scss';

const NavAndBodyParent = () => {
    return ( 
        <div className="nav-and-body-parent-wrapper">
            <Nav></Nav>
            <UserBody></UserBody>
        </div>
     );
}
 
export default NavAndBodyParent;