import {NavLink, Redirect} from "react-router-dom";
import s from '../Navbar/Navbar.module.css'
import style from './IsAuthed.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {changeEmailThunk, changePasswordThunk} from "../../../redux/reducers/auth-reducer";

function IsAuthed() {
    const [editMode, setEditMode] = useState(false)
    const [emailAndPasswordBlock, setEmailAndPasswordBlock] = useState(false)
    const [editModeEmail, setEditModeEmail] = useState(false)
    const [editModePassword, setEditModePassword] = useState(false)
    const [change, setChange] = useState(false)

    const idToken = useSelector(state => state.authReducer.idToken)
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const nickname = useSelector(state => state.ownProfileReducer.nickname)
    const avatar = useSelector(state => state.ownProfileReducer.avatar)

    const dispatch = useDispatch()

    const changeEmail = (e) => {
        e.preventDefault()

        console.log(e.target[1].value)
        const email = e.target[1].value
        dispatch(changeEmailThunk(idToken, email))
    }
    const changePassword = (e) => {
        e.preventDefault()
        console.log(e.target[1].value)
        console.log(idToken)
        const password = e.target[1].value
        dispatch(changePasswordThunk(idToken, password))
        // window.location.reload()
    }

    return (
        isAuth ?
            (editMode ?
                <div>
                    <div className={style.avaAndNickBlock} onClick={() => {

                        setEditMode(false)
                        setEmailAndPasswordBlock(false)
                    }}>
                        <div>
                            {nickname}
                        </div>
                        <div>
                            <img src={avatar} alt={'avatar'}/>
                        </div>
                    </div>
                    <div className={style.editModeContainer}>
                        <div className={style.editMode}
                        //      onBlur={() => {
                        //     setEditMode(false)
                        //     setEmailAndPasswordBlock(false)
                        // }}
                        >
                            <ul>
                                <li>
                                    <NavLink className={style.textDecoration} to={'/myProfile'} onBlur={() => setEditMode(false)}>
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
                                <li>Sign out</li>
                            </ul>
                            {emailAndPasswordBlock ? <div className={style.relativeFormContainer}>
                                <div className={style.relativeForm}>{editModeEmail && !editModePassword ?
                                    <div className={style.formEmail}>
                                        <form onSubmit={changeEmail}>
                                            <button>save</button>
                                            <input type={'email'} autoFocus={true} placeholder={'email'}/>
                                        </form>
                                    </div> : null}
                                    {editModePassword && !editModeEmail ?
                                        <div className={style.formPassword}>
                                            <form onSubmit={changePassword}>
                                                <button>save</button>
                                                <input type={'text'} autoFocus={true} placeholder={'password'}/>
                                            </form>
                                        </div> : null}</div>
                            </div> : null}
                        </div>
                    </div>
                </div> : <div className={style.avaAndNickBlock} onClick={() => {
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