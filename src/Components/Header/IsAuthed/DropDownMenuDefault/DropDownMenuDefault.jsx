import s from "./DropDownMenuDefault.module.css";

function DropDownMenuDefault(props){
    return(
        <div className={s.avaAndNickBlock} onClick={() => {
            props.setEditMode(true)
                props.setEmailAndPasswordBlock(false)
        }}>
            <div>
                {props.nickname}
            </div>
            <div>
                <img src={props.avatar} alt={'avatar'}/>
            </div>
        </div>
    )
}

export default DropDownMenuDefault