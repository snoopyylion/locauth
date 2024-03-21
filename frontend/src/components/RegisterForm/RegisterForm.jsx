import { Link, useNavigate } from "react-router-dom";
import style from "./RegisterForm.module.css"
import { useState } from "react";
import { signUpService } from "../../service/api";

export default function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(name.length <= 0 && email.length <= 0 && password.length <= 0) {
            alert('All field must be filled');
            return;
        }

        signUpService({
                name: name,
                email: email,
                password: password
            }).then(() => {
                alert('account created successfully');
                navigate('/login');
            }).catch(err => {
                alert('Something went wrong');
                console.log(err);
            })
    }

    return (
    <div className={style.container}>
        <form className={style.loginform}>
            <label htmlFor="name">
                <p>Name</p>
                <input type="text" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <label htmlFor="email">
                <p>Email</p>
                <input type="email" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            <label htmlFor="password">
                <p>Password</p>
                <input type="password" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>

            <button onClick={onSubmitHandler} className={style.loginBtn}>Sign Up</button>

                <small style={{
                    marginTop: "2rem"
                }}>Do not have an account ? <Link to={"/login"} style={{
                    textDecoration: "none",
                    color: "plum"
                }}>click here</Link></small>
        </form>
    </div>
    );
}