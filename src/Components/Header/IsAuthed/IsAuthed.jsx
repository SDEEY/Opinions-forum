import {NavLink} from "react-router-dom";
import s from '../Navbar/Navbar.module.css'
import style from './IsAuthed.module.css'
import {useSelector} from "react-redux";

function IsAuthed() {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const nickname = useSelector(state => state.ownProfileReducer.nickname)
    const avatar = useSelector(state => state.ownProfileReducer.avatar)

    return (
        isAuth
            ? <NavLink className={style.textDecoration} to={'/myProfile'}>
                <div className={style.avaAndNickBlock}>
                    <div>
                        {nickname}
                    </div>
                    <div>
                        <img src={avatar} alt={'avatar'}/>
                    </div>
                </div>
            </NavLink> :
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