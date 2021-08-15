import OwnAvatar from "./OwnAvatar/OwnAvatar";
import s from './OwnProfile.module.css'
import OwnInformation from "./OwnInformation/OwnInformation";
import {useSelector} from "react-redux";
import SignIn from "../SignIn/SignIn";

function OwnProfile(){
    const isAuth = useSelector(state => state.authReducer.isAuth)
    return(
        isAuth
        ? <div className={s.ownProfile}>
            <OwnAvatar/>
            <OwnInformation/>
        </div>
        : <SignIn/>
    )
}

export default OwnProfile