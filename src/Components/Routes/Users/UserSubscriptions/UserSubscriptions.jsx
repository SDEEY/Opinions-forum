import s from "../Users.module.css";
import {useState} from "react";
import {usersApi} from "../../../../api/api";
import style from "../UserFollowers/UserFollowers.module.css";

function UserSubscriptions(props) {
    const [secondPageOSubscriptionsIsShowed, setSecondPageOfSubscriptionsIsShowed] = useState(false)
    const [subscriptionsIsShowed, setSubscriptionsIsShowed] = useState(false)
    const [subscriptions, setSubscriptions] = useState([])

    const getSubscriptionsOfUser = async () => {
        const response = await usersApi.getSubscriptionsOfUserFromGitHub(props.login)
        setSubscriptions(response)
    }

    return (
        <div>
            <div>
                <button onClick={() => {
                    getSubscriptionsOfUser()
                    setSubscriptionsIsShowed(!subscriptionsIsShowed)
                }}>subscriptions
                </button>
            </div>
            {
                subscriptionsIsShowed ?
                    (
                        !secondPageOSubscriptionsIsShowed ?
                            <div className={s.followersOrSubscriptionsBlock}>
                                {subscriptions.slice(0, 15).map(sub => <div key={sub.id} className={s.users}>
                                    <div className={s.user}>
                                        <div style={{fontSize: '0px'}}>
                                            <img width={'60px'} alt={'userAvatar'} src={sub.avatar_url}/>
                                        </div>
                                        <div>
                                            <h1>{sub.login}</h1>
                                            <span>GitHub: </span>
                                            <a href={sub.html_url} target={'_blank'} without rel="noreferrer">{sub.login}</a>
                                        </div>
                                    </div>
                                </div>)}
                                <div>
                                    <button className={style.buttonMore} onClick={() => setSecondPageOfSubscriptionsIsShowed(true)}>
                                        More
                                        <p>˅</p>
                                    </button>
                                </div>
                            </div> :
                            <div className={s.followersOrSubscriptionsBlock}>
                                {subscriptions.slice(0, 30).map(sub => <div key={sub.id} className={s.users}>
                                    <div className={s.user}>
                                        <div style={{fontSize: '0px'}}>
                                            <img width={'60px'} alt={'followerAvatar'} src={sub.avatar_url}/>
                                        </div>
                                        <div>
                                            <h1>{sub.login}</h1>
                                            <span>GitHub: </span>
                                            <a href={sub.html_url} target={'_blank'} without rel="noreferrer">{sub.login}</a>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                    ) : null
            }
        </div>
    )
}

export default UserSubscriptions