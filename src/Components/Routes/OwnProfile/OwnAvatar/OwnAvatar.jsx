import s from './OwnAvatar.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setOwnAvatarThunk} from "../../../../redux/reducers/ownProfile-reducer";

function OwnAvatar() {
    const dispatch = useDispatch()
    const setOwnAvatar = () => dispatch(setOwnAvatarThunk())

    const avatar = useSelector(state => state.ownProfileReducer.avatar)

    return (
        <div className={s.avatarBlock}>
            <div>
                <img src={!avatar ? (dispatch(setOwnAvatarThunk()) && avatar) : avatar} alt={'avatar'}/>
            </div>
            <button onClick={setOwnAvatar}>get a picture</button>
        </div>
    )
}

export default OwnAvatar