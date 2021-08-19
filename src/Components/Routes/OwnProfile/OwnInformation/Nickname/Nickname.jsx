import {useDispatch, useSelector} from "react-redux";
import {setOwnNicknameThunk, updateOwnNicknameThunk} from "../../../../../redux/reducers/ownProfile-reducer";
import {useEffect, useState} from "react";
import s from './Nickname.module.css'

function Nickname() {
    const [editMode, setEditMode] = useState(false)

    const idToken = useSelector(state => state.authReducer.idToken)
    const nickname = useSelector(state => state.ownProfileReducer.nickname)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setOwnNicknameThunk(idToken))
    }, [])

    const deactivateEditMode = (e) => {
        const displayName = e.target.value
        if(displayName.length <= 20){
            dispatch(updateOwnNicknameThunk(idToken, displayName))
            setEditMode(false)
            console.log(editMode)
        } else {
            alert('max length 20')
        }

    }

    const updateOwnNickname = (e) => {
        e.preventDefault()

        const displayName = e.target[0].value

        if(displayName.length <= 20){
            dispatch(updateOwnNicknameThunk(idToken, displayName))
            setEditMode(false)
        } else {
            setEditMode(false)
            alert('max length 20')
        }
    }

    return (
        <div>
            {!editMode ?
            <span className={s.span} onDoubleClick={() => setEditMode(true)}>{`Nickname: ${nickname}`}</span> :
            <form className={s.form} onSubmit={updateOwnNickname}>
                <input type={'text'} onBlur={deactivateEditMode} autoFocus={true}/>
                <button type={'submit'}>save</button>
            </form>}
        </div>
    )
}

export default Nickname