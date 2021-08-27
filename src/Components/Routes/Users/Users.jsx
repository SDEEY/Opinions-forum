import s from './Users.module.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUsersThunk} from "../../../redux/reducers/users-reducer";
import UserFollowers from "./UserFollowers/UserFollowers";
import UserSubscriptions from "./UserSubscriptions/UserSubscriptions";

function Users() {
    const users = useSelector(state => state.usersReducer.users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUsersThunk())
    }, [])

    return (
        <div className={s.usersContainer}>
            {users ?
                users.map(u => <div key={u.id} className={s.users}>
                    <div className={s.user}>
                        <div style={{fontSize: '0px'}}>
                            <img width={'60px'} src={u.avatar_url}/>
                        </div>
                        <div>
                            <h1>{u.login}</h1>
                            <span>GitHub: </span>
                            <a href={u.html_url} target={'_blank'}>{u.login}</a>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <UserFollowers login={u.login}/>
                        <UserSubscriptions login={u.login}/>
                    </div>
                </div>) : <div>error</div>}
        </div>
    )
}

export default Users