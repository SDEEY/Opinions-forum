import OwnAvatar from "./OwnAvatar/OwnAvatar";
import s from './OwnProfile.module.css'
import OwnInformation from "./OwnInformation/OwnInformation";
import {useDispatch, useSelector} from "react-redux";
import SignIn from "../SignIn/SignIn";
import {setIsAuthToFalse} from "../../../redux/reducers/auth-reducer";
import DateData from "./DateData/DateData";
import Articles from "./Articles/Articles";
import Posts from "./Posts/Posts";
import {NavLink} from "react-router-dom";

function OwnProfile() {
    const isAuth = useSelector(state => state.authReducer.isAuth)

    const dispatch = useDispatch()

    const logout = () => dispatch(setIsAuthToFalse())


    return (
        isAuth
            ? <div className={s.ownProfile}>
                <div className={s.ownProfileDivFirstChild}>
                    <OwnAvatar/>
                    <OwnInformation/>
                    <DateData/>
                </div>
                <div className={s.ownProfileDivLastChild}>
                    <Articles/>
                    <Posts/>
                    <div className={s.signOut}>
                        <button onClick={logout}>
                            <NavLink to={'signIn'}>sign out</NavLink>
                        </button>
                    </div>
                </div>
            </div>
            : <SignIn/>
    )
}

export default OwnProfile