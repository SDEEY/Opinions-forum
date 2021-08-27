import s from './Posts.module.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteOneOwnPost, setNewOwnPost, setOwnPosts} from "../../../../redux/reducers/ownProfile-reducer";
import TextareaAutosize from "react-textarea-autosize";

function Posts() {
    const [postFormIsShowed, setPostFormIsShowed] = useState(false)
    const [numberOfElementInArray, setNumberOfElementInArray] = useState(0)

    const ownPosts = useSelector(state => state.ownProfileReducer.ownPosts)
    const nickname = useSelector(state => state.ownProfileReducer.nickname)

    const dispatch = useDispatch()

    const clearFields = (e) => {
        e.target[0].value = ''
        e.target[1].value = ''
    }

    const setNewOwnPostSubmit = (e) => {
        e.preventDefault()

        const title = e.target[0].value
        const body = e.target[1].value

        if(body){
            dispatch(setNewOwnPost({id: numberOfElementInArray, nickname, title, body}))
            setNumberOfElementInArray(numberOfElementInArray + 1)
            clearFields(e)
        } else {
            alert('empty content field')
        }
    }

    return (
        <div className={s.posts}>
            <button onClick={() => {
                setPostFormIsShowed(!postFormIsShowed)
            }}>Posts
            </button>
            {postFormIsShowed ?
                <div>
                    <form onSubmit={setNewOwnPostSubmit}>
                        <div>
                            <TextareaAutosize autoFocus={true} placeholder={'title'}/>
                        </div>
                        <div>
                            <TextareaAutosize placeholder={'content'}/>
                        </div>
                        <button type={'submit'}>Save</button>
                    </form>
                    <div style={{marginBottom: '10px'}}>
                        {ownPosts.map(p => <div className={s.post} key={p.id}>
                            {/*<div>{p.id}</div>*/}
                            {/*<div>{p.nickname}</div>*/}
                            <h1>{p.title}</h1>
                            <p lang={'en'}>{p.body}</p>
                            <button onClick={() => dispatch(deleteOneOwnPost(p.id))}>×</button>
                        </div>)}
                    </div>
                    <button onClick={() => {
                    dispatch(setOwnPosts([]))}
                    }>Delete all</button>
                </div> : null}
        </div>
    )
}

export default Posts