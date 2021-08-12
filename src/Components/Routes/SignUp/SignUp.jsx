import {useForm} from "react-hook-form";
import s from './SignUp.module.css'
// import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signUpWithEmailAndPasswordThunk} from "../../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";

function SignUp() {
    const {register, formState: {errors}, handleSubmit} = useForm();

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.authReducer.isAuth)

    const signUpWithEmailAndPassword = data => dispatch(signUpWithEmailAndPasswordThunk(data))

    return (
        isAuth === true ? <Redirect to='/myProfile'/> :
        <div className={s.form}>
            <form onSubmit={handleSubmit(signUpWithEmailAndPassword)}>
                <div className={s.errorBlock}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' {...register("email", {required: true})} />
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

                <button className={s.button} type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default SignUp