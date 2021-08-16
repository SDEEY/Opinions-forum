import OwnAvatar from "./OwnAvatar/OwnAvatar";
import s from './OwnProfile.module.css'
import OwnInformation from "./OwnInformation/OwnInformation";
import {useDispatch, useSelector} from "react-redux";
import SignIn from "../SignIn/SignIn";
import {setIsAuthToFalse} from "../../../redux/reducers/auth-reducer";
import DateData from "./DateData/DateData";

function OwnProfile(){
    const isAuth = useSelector(state => state.authReducer.isAuth)

    const dispatch = useDispatch()

    const logout = () => dispatch(setIsAuthToFalse())


    return(
        isAuth
        ? <div className={s.ownProfile}>
            <OwnAvatar/>
            <OwnInformation/>
            <DateData/>
            <div className={s.signOut}>
                <button onClick={logout}>sign out</button>
            </div>
        </div>
        : <SignIn/>
    )
}

export default OwnProfile