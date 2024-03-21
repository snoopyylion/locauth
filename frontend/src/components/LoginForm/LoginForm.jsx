import { useContext, useState } from "react"
import style from "./LoginForm.module.css"
import { UserContext } from "../../context/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginService } from "../../service/api";

export default function LoginForm() {
    const {user, setUser} = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(email.length <= 0 && password.length <= 0) {
            alert('All field must be filled');
            return;
        }

        loginService({
            email: email,
            password: password
        }).then((res) => {
            console.log(res);
            setUser(res);
            navigate('/');
        }).catch(err => {
            alert('Something went wrong');
            console.log(err);
        })
    };

    if(user.name && user.password && user.email) {
        return <Navigate to={'/'}/>
    }

    return (
        <>
        <div className={style.container}>
            <form className={style.loginform}>
                <label htmlFor="email">
                    <p>Email</p>
                    <input id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>

                <button onClick={onSubmitHandler} className={style.loginBtn}>Login</button>

                <small style={{
                    marginTop: "2rem"
                }}>Do not have an account ? <Link to={"/sign-up"} style={{
                    textDecoration: "none",
                    color: "plum"
                }}>click here</Link></small>
            </form>
        </div>
        </>
    )
}