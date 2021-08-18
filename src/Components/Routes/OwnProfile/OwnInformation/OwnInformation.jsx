import Nickname from "./Nickname/Nickname";
import City from "./City/City";
import SocialMedia from "./SocialMedia/SocialMedia";

function OwnInformation(){
    return(
        <div>
            <Nickname/>
            <City/>
            <SocialMedia/>
        </div>
    )
}

export default OwnInformation