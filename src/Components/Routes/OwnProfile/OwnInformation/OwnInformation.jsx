import Nickname from "./Nickname/Nickname";
import City from "./City/City";
import SocialMedia from "./SocialMedia/SocialMedia";
import s from './OwnInformation.module.css'

function OwnInformation(){
    return(
        <ul className={s.ul}>
            <li><Nickname/></li>
            <li><City/></li>
            <li><SocialMedia/></li>
        </ul>
    )
}

export default OwnInformation