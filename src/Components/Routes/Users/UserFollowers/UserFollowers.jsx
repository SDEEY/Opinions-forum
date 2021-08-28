import s from "../Users.module.css";
import style from "./UserFollowers.module.css";
import {useState} from "react";
import {usersApi} from "../../../../api/api";

function UserFollowers(props) {
    const [secondPageOfFollowersIsShowed, setSecondPageOfFollowersIsShowed] = useState(false)
    const [followersIsShowed, setFollowersIsShowed] = useState(false)
    const [followers, setFollowers] = useState([])

    const getFollowersOfUser = async () => {
        const response = await usersApi.getFollowersOfUserFromGitHub(props.login)
        setFollowers(response)
    }

    return (
        <div>
            <div>
                <button onClick={() => {
                    getFollowersOfUser()
                    setFollowersIsShowed(!followersIsShowed)
                }}>followers
                </button>
            </div>
            {
                followersIsShowed ?
                    (
                        !secondPageOfFollowersIsShowed ?
                            <div className={s.followersOrSubscriptionsBlock}>
                                {followers.slice(0, 15).map(f => <div key={f.id} className={s.users}>
                                    <div className={s.user}>
                                        <div style={{fontSize: '0px'}}>
                                            <img width={'60px'} alt={'userAvatar'} src={f.avatar_url}/>
                                        </div>
                                        <div>
                                            <h1>{f.login}</h1>
                                            <span>GitHub: </span>
                                            <a href={f.html_url} target={'_blank'} without rel="noreferrer">{f.login}</a>
                                        </div>
                                    </div>
                                </div>)}
                                <div>
                                    <button className={style.buttonMore} onClick={() => setSecondPageOfFollowersIsShowed(true)}>
                                        More
                                        <p>˅</p>
                                    </button>
                                </div>
                            </div> :
                            <div className={s.followersOrSubscriptionsBlock}>
                                {followers.slice(0, 30).map(f => <div key={f.id} className={s.users}>
                                    <div className={s.user}>
                                        <div style={{fontSize: '0px'}}>
                                            <img width={'60px'} alt={'followerAvatar'} src={f.avatar_url}/>
                                        </div>
                                        <div>
                                            <h1>{f.login}</h1>
                                            <span>GitHub: </span>
                                            <a href={f.html_url} target={'_blank'} without rel="noreferrer">{f.login}</a>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                    ) : null
            }
        </div>
    )
}

export default UserFollowers