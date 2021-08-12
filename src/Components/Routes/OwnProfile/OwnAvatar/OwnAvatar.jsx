import {useState} from "react";

function OwnAvatar(){
    const [avatar, setAvatar] = useState(null)
    const photo = p => {
        setAvatar(p.target.files[0].name)
    }
    return(
        <div>
            <img src={`${avatar}`} alt={'avatar'}/>
            <input type={'file'} onChange={photo}/>
        </div>
    )
}

export default OwnAvatar