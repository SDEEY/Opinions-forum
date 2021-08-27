import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserDataThunk, setUserPostsThunk} from "../../../redux/reducers/posts-reducer";
import s from './UserProfile.module.css'

function UserProfile() {
    const userId = useSelector(state => state.postsReducer.userId)
    const userData = useSelector(state => state.postsReducer.userData)
    const userPosts = useSelector(state => state.postsReducer.userPosts)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setUserDataThunk(userId))
        dispatch(setUserPostsThunk(userId))
    }, [])
    console.log(userId)
    console.log(userData)
    console.log(userPosts)
    return (userData ?
        <div className={s.userProfile}>
            <div style={{marginBottom: '20px'}}>
                <div className={s.name}>
                    {userData.name}
                </div>
                <div>
                    <span>email:</span> {userData.email}
                </div>
                <div>
                    <span>website:</span> {userData.website}
                </div>
                <div>
                    <span>city:</span> {userData.address.city}
                </div>
                <div>
                    <span>street:</span> {userData.address.street}
                </div>
                <div>
                    <span>company:</span> {userData.company.name}
                </div>
            </div>
            <div>
                {userPosts.map(p => <div key={p.id} style={{marginBottom: '15px'}}>
                    <div><h1>{p.title}</h1></div>
                    <div><p>{p.body}</p></div>
                </div>)}
            </div>
        </div> : <div>{'Error. Sorry...'}</div>
    )
}

export default UserProfile