import {useDispatch, useSelector} from "react-redux";
import {
    setPostsThunk,
    setPostsUsersThunk
} from "../../../redux/reducers/posts-reducer";
import {useEffect, useState} from "react";
import PostBlock from "./PostBlock/PostBlock";
import s from './Posts.module.css'

function Posts() {
    const [secondPageIsShowed, setSecondPageIsShowed] = useState(false)

    const posts = useSelector(state => state.postsReducer.posts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPostsThunk())
        dispatch(setPostsUsersThunk())
    }, [])
    console.log(posts)
    return (
        !secondPageIsShowed ?
        <div className={s.posts}>
            <div>
                {posts.slice(0, 50).map(p => <PostBlock key={p.id}
                                                        postId={p.id}
                                                        userId={p.userId}
                                                        title={p.title}
                                                        body={p.body}
                />)}
            </div>
            <div className={s.divButton}>
                <button onClick={() => setSecondPageIsShowed(true)}>
                    More
                    <p>˅</p>
                </button>
            </div>
        </div> :
            <div style={{backgroundColor: '#e5e5e5', padding: '20px 25px'}}>
                {posts.slice(0, 100).map(p => <PostBlock key={p.id}
                                                        postId={p.id}
                                                        userId={p.userId}
                                                        title={p.title}
                                                        body={p.body}
                />)}
            </div>

    )
}

export default Posts