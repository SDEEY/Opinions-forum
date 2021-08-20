import style from "../IsAuthed.module.css";

function DropDownMenuDefault(){
    return(
        <div className={style.avaAndNickBlock} onClick={() => {
            setEditMode(true)
            setEmailAndPasswordBlock(false)
        }}>
            <div>
                {nickname}
            </div>
            <div>
                <img src={avatar} alt={'avatar'}/>
            </div>
        </div>
    )
}

export default DropDownMenuDefault