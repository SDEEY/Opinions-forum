import {NavLink} from "react-router-dom";

function IsAuthed() {
    return (
        <div>
            <ul>
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