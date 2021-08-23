import s from "../../DropDownMenuDefault/DropDownMenuDefault.module.css";

function AvaAndNickBlockActive(props){
    return(
        <div className={s.avaAndNickBlock} onClick={() => {
            props.setEditMode(false)
            props.setEmailAndPasswordBlock(false)
        }}>
            <div>{props.nickname}</div>
            <div>
                <img src={props.avatar} alt={'avatar'}/>
            </div>
        </div>
    )
}

export default AvaAndNickBlockActive