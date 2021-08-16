import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from './DateData.module.css'
import {setOwnDateDataThunk} from "../../../../redux/reducers/ownProfile-reducer";

function DateData() {
    const dispatch = useDispatch()

    const idToken = useSelector(state => state.authReducer.idToken)
    const createdAt = useSelector(state => state.ownProfileReducer.dateData.createdAt)
    const lastLoginAt = useSelector(state => state.ownProfileReducer.dateData.lastLoginAt)

    useEffect(() => {
        dispatch(setOwnDateDataThunk(idToken))
    }, [])

    return (
        createdAt && lastLoginAt ?
            <div className={s.dataDate}>
                <div>{`Created at: ${createdAt}`}</div>
                <div>{`Last login at: ${lastLoginAt.lastLoginAtSubstr} ${lastLoginAt.hours}:${lastLoginAt.minutes}`}</div>
            </div> :
            <div className={s.dataDate}>
                <div>{`Created at: error`}</div>
                <div>{`Last login at: error`}</div>
            </div>

    )
}

export default DateData