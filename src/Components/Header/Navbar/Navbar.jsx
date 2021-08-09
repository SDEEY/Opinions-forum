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
                        news
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/posts'>
                        posts
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/articles'>
                        articles
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar