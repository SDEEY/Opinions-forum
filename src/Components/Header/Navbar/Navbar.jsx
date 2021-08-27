import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

function Navbar(){
    return(
        <nav>
            <ul className={s.ul}>
                <li>
                    <NavLink to='/'>
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/posts'>
                        Posts
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/users'>
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar