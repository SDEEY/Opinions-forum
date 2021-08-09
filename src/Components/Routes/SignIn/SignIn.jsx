import {useForm} from "react-hook-form";
import s from "../SignUp/SignUp.module.css";

function SignIn(){
    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = data => console.log(data)
    return(
        <div className={s.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        <input type='password' {...register("password", {required: true, minLength: 8})} />
                    </div>
                    <div className={s.error}>
                        {errors.password && "Password is required, min length 8 symbols"}
                    </div>
                </div>

                <button className={s.button} type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default SignIn