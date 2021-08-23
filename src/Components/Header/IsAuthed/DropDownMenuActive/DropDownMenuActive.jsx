import AvaAndNickBlockActive from "./AvaAndNickBlockActive/AvaAndNickBlockActive";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

function DropDownMenuActive(props){
    return(
        <div>
            <AvaAndNickBlockActive nickname={props.nickname}
                                   avatar={props.avatar}
                                   setEditMode={props.setEditMode}
                                   setEmailAndPasswordBlock={props.setEmailAndPasswordBlock}
            />
            <DropDownMenu setEditMode={props.setEditMode}
                          emailAndPasswordBlock={props.emailAndPasswordBlock}
                          setEmailAndPasswordBlock={props.setEmailAndPasswordBlock}
            />
        </div>
    )
}

export default DropDownMenuActive