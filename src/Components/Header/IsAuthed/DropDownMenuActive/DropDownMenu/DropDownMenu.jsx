import s from "./DropDownMenu.module.css";
import {NavLink} from "react-router-dom";
import {
    changeEmailThunk,
    changePasswordThunk,
    setEmail,
    setIsAuthToFalse
} from "../../../../../redux/reducers/auth-reducer";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

function DropDownMenu(props) {

    const [editModeEmail, setEditModeEmail] = useState(false)
    const [editModePassword, setEditModePassword] = useState(false)

    const idToken = useSelector(state => state.authReducer.idToken)
    const emailSelector = useSelector(state => state.authReducer.email)

    const dispatch = useDispatch()

    const logout = () => {
        console.log('log out')
        dispatch(setIsAuthToFalse())
    }

    const changeEmail = (e) => {
        e.preventDefault()

        console.log(e.target[1].value)
        console.log('emailSelector')
        const email = e.target[1].value

        emailSelector === email ? alert('same email') :

            dispatch(changeEmailThunk(idToken, email))
        dispatch(setEmail(email))
    }

    const changePassword = (e) => {
        e.preventDefault()
        console.log(e.target[1].value)
        console.log(idToken)
        const password = e.target[1].value
        dispatch(changePasswordThunk(idToken, password))
    }

    return (
        <div className={s.editModeContainer}>
            <div className={s.editMode}>
                <ul>
                    <li>
                        <NavLink className={s.textDecoration} to={'/myProfile'} onBlur={() => props.setEditMode(false)}>
                            My profile
                        </NavLink>
                    </li>
                    <li onMouseOver={() => {
                        setEditModeEmail(true)
                        setEditModePassword(false)
                        props.setEmailAndPasswordBlock(true)
                    }}>Change email
                    </li>
                    <li onMouseOver={() => {
                        setEditModePassword(true)
                        setEditModeEmail(false)
                        props.setEmailAndPasswordBlock(true)
                    }}>Change password
                    </li>
                    <li>
                        <NavLink className={s.textDecoration} to={'/signIn'} onClick={logout}>
                            Sign out
                        </NavLink>
                    </li>
                </ul>
                {props.emailAndPasswordBlock ?
                    <div className={s.relativeFormContainer}>
                    <div className={s.relativeForm}>
                        {editModeEmail && !editModePassword ?
                        <div className={s.formEmail}>
                            <form onSubmit={changeEmail}>
                                <button>save</button>
                                <input type={'email'} autoFocus={true} placeholder={'email'}/>
                            </form>
                        </div> : null}
                        {editModePassword && !editModeEmail ?
                            <div className={s.formPassword}>
                                <form onSubmit={changePassword}>
                                    <button>save</button>
                                    <input type={'text'} autoFocus={true} placeholder={'password'}/>
                                </form>
                            </div> : null}</div>
                </div> : null}
            </div>
        </div>
    )
}

export default DropDownMenu