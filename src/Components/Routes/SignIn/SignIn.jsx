import {useForm} from "react-hook-form";
import s from "../SignUp/SignUp.module.css";
import {useDispatch, useSelector} from "react-redux";
import {signInWithEmailAndPasswordThunk} from "../../../redux/reducers/auth-reducer";
import {NavLink, Redirect} from "react-router-dom";
import {useState} from "react";

function SignIn(){
    const [buttonIsDisabled, setButtonIsDisabled] = useState(false)

    const {register, formState: {errors}, handleSubmit} = useForm();

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.authReducer.isAuth)

    const signInWithEmailAndPassword = data => {
        dispatch(signInWithEmailAndPasswordThunk(data))
        setButtonIsDisabled(true)
        setTimeout(() => setButtonIsDisabled(false), 1000)
    }

    return(
        isAuth === true ? <Redirect to='/myProfile'/> :
        <div className={s.form}>
            <form onSubmit={handleSubmit(signInWithEmailAndPassword)}>
                <div className={s.errorBlock}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' {...register("email", {required: true})} autoFocus={true}/>
                    </div>
                    <div className={s.error}>
                        {errors.email && "Email is required"}
                    </div>
                </div>
                <div className={s.errorBlock}>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' {...register("password", {required: true, minLength: 6})} />
                    </div>
                    <div className={s.error}>
                        {errors.password && "Password is required, min length 6 symbols"}
                    </div>
                </div>
                <div>
                    <button disabled={buttonIsDisabled} className={s.button} type="submit">Sign in</button>
                    <NavLink to={'signUp'} className={s.navlLink}>Sign up</NavLink>
                </div>
            </form>
        </div>
    )
}

export default SignIn