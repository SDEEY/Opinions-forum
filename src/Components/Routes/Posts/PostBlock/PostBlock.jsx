import {useDispatch, useSelector} from "react-redux";
import {setUserId} from "../../../../redux/reducers/posts-reducer";
import {NavLink} from "react-router-dom";
import s from './PostBlock.module.css'
import CommentsOfPost from "./CommentsOfPost/CommentsOfPost";

function PostBlock(props){
    const numberOfUsersArray = parseInt(props.userId) - 1

    const user = useSelector(state => state.postsReducer.users[numberOfUsersArray])

    const dispatch = useDispatch()

    return(
        <div className={s.postBlock}>
            <div>
                <NavLink to={`user/${props.userId}`} onClick={() => dispatch(setUserId(props.userId))}>{user.name}</NavLink>
            </div>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <p>{props.body}</p>
            </div>
            <CommentsOfPost postId={props.postId}/>
        </div>
    )
}

export default PostBlock