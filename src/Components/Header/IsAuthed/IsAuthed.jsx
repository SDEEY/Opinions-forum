import {NavLink} from "react-router-dom";
import s from '../Navbar/Navbar.module.css'

function IsAuthed() {
    return (
        <div>
            <ul className={s.ul}>
                <li>
                    <NavLink to='/signIn'>
                        SignIn
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/signUp'>
                        SignUp
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default IsAuthed