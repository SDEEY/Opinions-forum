import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

function Navbar(){
    return(
        <nav>
            <ul className={s.ul}>
                <li>
                    <NavLink exact to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/categories'>
                        Categories
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/news'>
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/posts'>
                        Posts
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/articles'>
                        Articles
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar