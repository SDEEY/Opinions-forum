import {useEffect, useState} from "react";
import s from './SocialMedia.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    setOwnInstagram,
    setOwnTelegram,
    setOwnVk
} from "../../../../../redux/reducers/ownProfile-reducer";

function SocialMedia() {
    const [editMode, setEditMode] = useState(false)

    const socialMedia = useSelector(state => state.ownProfileReducer.socialMedia)

    const dispatch = useDispatch()


    useEffect(() => {

    }, [])

    const updateOwnInstagram = (e) => {
        e.preventDefault()

        const instagramValue = e.target[0].value

        if (instagramValue.length <= 50 && instagramValue) {
            dispatch(setOwnInstagram(instagramValue))
        } else if(!instagramValue){
            dispatch(setOwnInstagram(''))
        } else {
            alert('max length 50')
        }
    }

    const updateOwnVk = (e) => {
        e.preventDefault()

        const vkValue = e.target[0].value

        if (vkValue.length <= 50 && vkValue) {
            dispatch(setOwnVk(vkValue))
        } else if(!vkValue){
            dispatch(setOwnVk(''))
        } else {
            alert('max length 50')
        }
    }

    const updateOwnTelegram = (e) => {
        e.preventDefault()

        const telegramValue = e.target[0].value

        if (telegramValue.length <= 50 && telegramValue) {
            dispatch(setOwnTelegram(telegramValue))
        } else if(!telegramValue){
            dispatch(setOwnTelegram(''))
        } else {
            alert('max length 50')
        }
    }

    return (
        <div>
            <span className={s.span} onDoubleClick={() => setEditMode(true)}>SocialMedia:</span>
            {
                !editMode ?
                    <div className={s.socialMediaBlock}>
                        <div>
                            <span>Instagram: </span>
                            <a href={`${socialMedia.instagram}`} target={'_blank'}>{socialMedia.instagram}</a>
                        </div>
                        <div>
                            <span>Vk: </span>
                            <a href={`${socialMedia.vk}`} target={'_blank'}>{socialMedia.vk}</a>
                        </div>
                        <div>
                            <span>Telegram: </span>
                            <a href={`${socialMedia.telegram}`} target={'_blank'}>{socialMedia.telegram}</a>
                        </div>
                    </div> :
                    <div className={s.formsBlock}>
                        <div>
                            <div>
                                <span>Instagram: </span>
                                <a href={`${socialMedia.instagram}`} target={'_blank'}>{socialMedia.instagram}</a>
                            </div>
                            <form onSubmit={updateOwnInstagram}>
                                <input placeholder={'instagram'} type={'text'} autoFocus={true}/>
                                <button>save</button>
                            </form>
                        </div>
                        <div>
                            <div>
                                <span>Vk: </span>
                                <a href={`${socialMedia.vk}`} target={'_blank'}>{socialMedia.vk}</a>
                            </div>
                            <form onSubmit={updateOwnVk}>
                                <input placeholder={'vk'} type={'text'}/>
                                <button>save</button>
                            </form>
                        </div>
                        <div className={s.divLastChild}>
                            <div>
                                <span>Telegram: </span>
                                <a href={`${socialMedia.telegram}`} target={'_blank'}>{socialMedia.telegram}</a>
                            </div>
                            <form onSubmit={updateOwnTelegram}>
                                <input placeholder={'telegram'} type={'text'}/>
                                <button>save</button>
                            </form>
                        </div>
                        <button className={s.closeButton} onClick={() => setEditMode(false)}>×</button>
                    </div>
            }
        </div>
    )
}

export default SocialMedia