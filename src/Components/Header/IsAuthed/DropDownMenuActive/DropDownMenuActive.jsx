import style from "../IsAuthed.module.css";
import {NavLink} from "react-router-dom";

function DropDownMenuActive(){
    return(
        <div>
            <div className={style.avaAndNickBlock} onClick={() => {

                setEditMode(false)
                setEmailAndPasswordBlock(false)
            }}>
                <div>
                    {nickname}
                </div>
                <div>
                    <img src={avatar} alt={'avatar'}/>
                </div>
            </div>
            <div className={style.editModeContainer}>
                <div className={style.editMode}
                     onBlur={(e) => console.log(e.nativeEvent)}>
                    <ul>
                        <li>
                            <NavLink className={style.textDecoration} to={'/myProfile'} onBlur={() => setEditMode(false)}>
                                My profile
                            </NavLink>
                        </li>
                        <li onMouseOver={() => {
                            setEditModeEmail(true)
                            setEditModePassword(false)
                            setEmailAndPasswordBlock(true)
                        }}>Change email
                        </li>
                        <li onMouseOver={() => {
                            setEditModePassword(true)
                            setEditModeEmail(false)
                            setEmailAndPasswordBlock(true)
                        }}>Change password
                        </li>
                        <li>Sign out</li>
                    </ul>
                    {emailAndPasswordBlock ? <div className={style.relativeFormContainer}>
                        <div className={style.relativeForm}>{editModeEmail && !editModePassword ?
                            <div className={style.formEmail}>
                                <form onSubmit={changeEmail}>
                                    <button>save</button>
                                    <input type={'email'} autoFocus={true} placeholder={'email'}/>
                                </form>
                            </div> : null}
                            {editModePassword && !editModeEmail ?
                                <div className={style.formPassword}>
                                    <form onSubmit={changePassword}>
                                        <button>save</button>
                                        <input type={'text'} autoFocus={true} placeholder={'password'}/>
                                    </form>
                                </div> : null}</div>
                    </div> : null}
                </div>
            </div>
        </div>
    )
}

export default DropDownMenuActive