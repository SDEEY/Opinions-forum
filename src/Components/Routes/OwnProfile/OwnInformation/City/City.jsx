import {useState} from "react";
// import {useEffect} from "react";
import s from './../Nickname/Nickname.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setOwnCity} from "../../../../../redux/reducers/ownProfile-reducer";

function City() {
    const [editMode, setEditMode] = useState(false)

    const city = useSelector(state => state.ownProfileReducer.city)

    const dispatch = useDispatch()

    // useEffect(() => {
    //     if(!city){
    //         dispatch(setOwnCity('-----'))
    //     } else {
    //         dispatch(setOwnCity(city))
    //     }
    // }, [])

    const updateOwnCity = (e) => {
        e.preventDefault()

        const cityValue = e.target[0].value

        if(cityValue.length <= 20 && cityValue){
            dispatch(setOwnCity(cityValue))
            setEditMode(false)
        } else if(!cityValue){
            dispatch(setOwnCity('-----'))
            setEditMode(false)
        } else {
            setEditMode(false)
            alert('max length 20')
        }
    }

    const deactivateEditMode = (e) => {
        const cityValue = e.target.value
        if(cityValue.length <= 20 && cityValue){
            dispatch(setOwnCity(cityValue))
            setEditMode(false)
        } else if(!cityValue){
            dispatch(setOwnCity('-----'))
            setEditMode(false)
        } else {
            alert('max length 20')
        }
    }

    return (
        <div>
            {!editMode ?
            <span className={s.span} onDoubleClick={() => setEditMode(true)}>{`City: ${city}`}</span> :
            <form className={s.form} onSubmit={updateOwnCity}>
                <input type={'text'} onBlur={deactivateEditMode} autoFocus={true}/>
                <button type={'submit'}>save</button>
            </form>}
        </div>
    )
}

export default City