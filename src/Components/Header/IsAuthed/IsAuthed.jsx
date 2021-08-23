import {NavLink} from "react-router-dom";
import s from '../Navbar/Navbar.module.css'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import DropDownMenuDefault from "./DropDownMenuDefault/DropDownMenuDefault";
import DropDownMenuActive from "./DropDownMenuActive/DropDownMenuActive";

function IsAuthed() {
    const [editMode, setEditMode] = useState(false)
    const [emailAndPasswordBlock, setEmailAndPasswordBlock] = useState(false)


    const isAuth = useSelector(state => state.authReducer.isAuth)
    const nickname = useSelector(state => state.ownProfileReducer.nickname)
    const avatar = useSelector(state => state.ownProfileReducer.avatar)

    useEffect(() => setEmailAndPasswordBlock(false), [])



    return (
        isAuth ?
            (editMode ?
                <DropDownMenuActive nickname={nickname}
                                    avatar={avatar}
                                    setEditMode={setEditMode}
                                    emailAndPasswordBlock={emailAndPasswordBlock}
                                    setEmailAndPasswordBlock={setEmailAndPasswordBlock}


                /> :
                <DropDownMenuDefault nickname={nickname}
                                     avatar={avatar}
                                     setEditMode={setEditMode}
                                     setEmailAndPasswordBlock={setEmailAndPasswordBlock}
                />) :
            <div>
                <ul className={s.ul}>
                    <li>
                        <NavLink to='/signIn'>SignIn</NavLink>
                    </li>
                    <li>
                        <NavLink to='/signUp'>SignUp</NavLink>
                    </li>
                </ul>
            </div>

    )
}

export default IsAuthed