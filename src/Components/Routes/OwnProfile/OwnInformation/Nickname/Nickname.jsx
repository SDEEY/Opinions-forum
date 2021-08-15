import {useSelector} from "react-redux";

function Nickname(){
    const nickname = useSelector(state => state.authReducer.nickname)
    return(
        <div>
            {`nickname: ${nickname}`}
        </div>
    )
}

export default Nickname