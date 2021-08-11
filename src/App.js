import s from './App.module.css';
import Header from "./Components/Header/Header";
import {Route, Switch} from "react-router-dom";
import HomePage from "./Components/Routes/HomePage/HomePage";
import Categories from "./Components/Routes/Categories/Categories";
import SignIn from "./Components/Routes/SignIn/SignIn";
import SignUp from "./Components/Routes/SignUp/SignUp";
import PersonalProfile from "./Components/Routes/PersonalProfile/PersonalProfile";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/categories' component={Categories}/>
                <Route path='/signIn' component={SignIn}/>
                <Route path='/signUp' component={SignUp}/>
                <Route path='/myProfile' component={PersonalProfile}/>
            </Switch>
        </div>
    );
}

export default App;
