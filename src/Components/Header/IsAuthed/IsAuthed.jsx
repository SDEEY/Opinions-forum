import {NavLink} from "react-router-dom";
import s from '../Navbar/Navbar.module.css'
import style from './IsAuthed.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {changeEmailThunk, changePasswordThunk, setEmail, setIsAuthToFalse} from "../../../redux/reducers/auth-reducer";

function IsAuthed() {
    const [editMode, setEditMode] = useState(false)
    const [emailAndPasswordBlock, setEmailAndPasswordBlock] = useState(false)
    const [editModeEmail, setEditModeEmail] = useState(false)
    const [editModePassword, setEditModePassword] = useState(false)

    const idToken = useSelector(state => state.authReducer.idToken)
    const emailSelector = useSelector(state => state.authReducer.email)
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const nickname = useSelector(state => state.ownProfileReducer.nickname)
    const avatar = useSelector(state => state.ownProfileReducer.avatar)

    const dispatch = useDispatch()

    useEffect(() => setEmailAndPasswordBlock(false), [])

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
        isAuth ?
            (editMode ?
                // DropDown menu active ////////////////////////////////////////////////
                // Nickname and Avatar block ////////////////////////////////////////////////
                <div>
                    <div className={style.avaAndNickBlock} onClick={() => {
                        setEditMode(false)
                        setEmailAndPasswordBlock(false)
                    }}>
                        <div>{nickname}</div>
                        <div>
                            <img src={avatar} alt={'avatar'}/>
                        </div>
                    </div>
                    {/*DropDown menu ////////////////////////////////////////////////*/}
                    <div className={style.editModeContainer}>
                        <div className={style.editMode}>
                            <ul>
                                <li>
                                    <NavLink className={style.textDecoration} to={'/myProfile'}>
                                        My profile
                                    </NavLink>
                                </li>
                                <li onMouseOver={() => {
                                    setEditModeEmail(true)
                                    setEditModePassword(false)
                                    setEmailAndPasswordBlock(true)
                                }}>Change email
                                </li>
                                <li onMouseOver={() => {
                                    setEditModePassword(true)
                                    setEditModeEmail(false)
                                    setEmailAndPasswordBlock(true)
                                }}>Change password
                                </li>
                                <li onClick={logout}>
                                    <NavLink to={'signIn'} style={{textDecoration: 'none'}}>Sign out</NavLink>
                                </li>
                            </ul>
                            {emailAndPasswordBlock ?
                                <div className={style.relativeFormContainer}>
                                    <div className={style.relativeForm}>
                                        {/*Change email ////////////////////////////////////////////////*/}
                                        {editModeEmail && !editModePassword ?
                                            <div className={style.formEmail}>
                                                <form onSubmit={changeEmail}>
                                                    <button>save</button>
                                                    <input type={'email'} autoFocus={true} placeholder={'email'}/>
                                                </form>
                                            </div> : null}
                                        {/*Change password ////////////////////////////////////////////////*/}
                                        {editModePassword && !editModeEmail ?
                                            <div className={style.formPassword}>
                                                <form onSubmit={changePassword}>
                                                    <button>save</button>
                                                    <input type={'text'} autoFocus={true} placeholder={'password'}/>
                                                </form>
                                            </div> : null}
                                    </div>
                                </div> : null}
                        </div>
                    </div>
                </div> :
                // DropDown menu inactive ////////////////////////////////////////////////
                // Nickname and Avatar block ////////////////////////////////////////////////
                <div className={style.avaAndNickBlock} onClick={() => {
                    setEditMode(true)
                    setEmailAndPasswordBlock(false)
                }}>
                    <div>
                        {nickname}
                    </div>
                    <div>
                        <img src={avatar} alt={'avatar'}/>
                    </div>
                </div>) :
            // Sign in and sign up block ////////////////////////////////////////////////
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