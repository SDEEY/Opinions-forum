import {useForm} from "react-hook-form";
import s from './SignUp.module.css'

function SignUp() {
    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = data => console.log(data)

    console.log(errors)
    return (
        <div className={s.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.errorBlock}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type='text' {...register("username", {
                            required: true,
                            maxLength: 15,
                            pattern: /^[A-Za-z0-9]+$/i
                        })} />
                    </div>
                    <div className={s.error}>
                        {errors.username && "Username is required, max length 15 symbols"}
                    </div>
                </div>
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

                <button className={s.button} type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default SignUp