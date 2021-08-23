import s from './App.module.css';
import Header from "./Components/Header/Header";
import {Route, Switch} from "react-router-dom";
import HomePage from "./Components/Routes/HomePage/HomePage";
import Categories from "./Components/Routes/Categories/Categories";
import SignIn from "./Components/Routes/SignIn/SignIn";
import SignUp from "./Components/Routes/SignUp/SignUp";
import OwnProfile from "./Components/Routes/OwnProfile/OwnProfile";
import News from "./Components/Routes/News/News";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/categories' component={Categories}/>
                <Route path='/news' component={News}/>
                <Route path='/signIn' component={SignIn}/>
                <Route path='/signUp' component={SignUp}/>
                <Route path='/myProfile' component={OwnProfile}/>
            </Switch>
        </div>
    );
}

export default App;
