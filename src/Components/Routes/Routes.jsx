import {Switch, Route} from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import {useDispatch, useSelector} from "react-redux";
import {setTextAC} from "../../redux/reducers/mainPageReducer";

export default function Routes() {
    return (
        <Switch>
            <Route path='/' component={MainPage} exact/>
            <Route path='/SignIn' component={SignIn}/>
            <Route path='/SignUp' component={SignUp}/>
        </Switch>
    )
}

function MainPage() {
    const text = useSelector(state => state.mainPageReducer.text)

    const dispatch = useDispatch()
    const stAC = () => dispatch(setTextAC())

    return (
        <div>
            <h1>
                {text}
            </h1>
            <button onClick={stAC}>qwe</button>
        </div>
    )
}
