import s from './CommentsOfPost.module.css'
import {useState} from "react";
import {postsApi} from "../../../../../api/api";
import {useSelector} from "react-redux";
import TextareaAutosize from 'react-textarea-autosize'

function CommentsOfPost(props) {
    const [comments, setComments] = useState([])

    const [commentsIsShowed, setCommentsIsShowed] = useState(false)

    const nickname = useSelector(state => state.ownProfileReducer.nickname)
    const email = useSelector(state => state.authReducer.email)

    const getPostComments = async () => {
        const response = await postsApi.getPostComments(props.postId)
        setComments(response)
        console.log(response)
    }

    const makeRandomIdForUser = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    const pushCommentInArray = (e) => {
        e.preventDefault()

        const body = e.target[0].value

        if(body){
            const newArrayOfComments = comments.concat(
                {id: makeRandomIdForUser(1000, 1000000), name: nickname, email, body}
            )
            setComments(newArrayOfComments)
        } else {
            alert('empty')
        }
    }

    return (
        <div className={s.commentsContainer}>
            <div className={s.commentsLabel} onClick={() => {
                setTimeout(() => {getPostComments()}, 1)
                setCommentsIsShowed(!commentsIsShowed)
            }}>
                comments
            </div>
            {commentsIsShowed ?
                <div>
                    {comments.map(c => <div key={c.id} className={s.comments}>
                        <div>
                            <div>
                                {c.name}
                            </div>
                            <div>
                                email: {c.email}
                            </div>
                        </div>
                        <div>{c.body}</div>
                    </div>)}
                    <form className={s.form} onSubmit={pushCommentInArray}>
                        <TextareaAutosize autoFocus={true}/>
                        <button type={'submit'}>Send</button>
                    </form>
                </div> : null}
        </div>
    )
}

export default CommentsOfPost