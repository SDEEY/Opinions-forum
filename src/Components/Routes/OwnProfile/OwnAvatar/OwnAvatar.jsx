// import {useState} from "react";
// import avatar from './Opinions.png'
import s from './OwnAvatar.module.css'
import {setOwnAvatarThunk} from "../../../../redux/reducers/ownProfile-reducer";
import {useDispatch, useSelector} from "react-redux";


function OwnAvatar() {
    // const [img, setImg] = useState(avatar);
    //
    // const asyncImg = async () => {
    //     const response = await fetch('https://picsum.photos/150')
    //     setImg(response.url)
    // }
    const dispatch = useDispatch()
    const setOwnAvatar = () => dispatch(setOwnAvatarThunk())

    const avatar = useSelector(state => state.ownProfileReducer.avatar)
    return (
        <div className={s.avatarBlock}>
            <div>
                <img src={avatar} alt={'avatar'}/>
            </div>
            <button onClick={setOwnAvatar}>get a picture</button>
        </div>
    )
}

export default OwnAvatar