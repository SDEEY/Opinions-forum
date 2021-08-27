import s from './App.module.css';
import Header from "./Components/Header/Header";
import {Route, Switch} from "react-router-dom";
import SignIn from "./Components/Routes/SignIn/SignIn";
import SignUp from "./Components/Routes/SignUp/SignUp";
import OwnProfile from "./Components/Routes/OwnProfile/OwnProfile";
import News from "./Components/Routes/News/News";
import Posts from "./Components/Routes/Posts/Posts";
import UserProfile from "./Components/Routes/UserProfile/UserProfile";
import Users from "./Components/Routes/Users/Users";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Switch>
                <Route exact path='/' component={News}/>
                <Route path='/signIn' component={SignIn}/>
                <Route path='/signUp' component={SignUp}/>
                <Route path='/myProfile' component={OwnProfile}/>
                <Route path='/posts' component={Posts}/>
                <Route path='/users' component={Users}/>
                <Route path='/user/' component={UserProfile}/>
            </Switch>
        </div>
    );
}

export default App;
