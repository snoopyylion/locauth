import style from "./navBar.module.css"

export default function Navbar() {
  return (
    <header className={style.header}>
        <a className={style.logo} href="/">Zidio <span>App</span></a>
    <nav className={style.navbar}>
        <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/sign-up">Register</a></li>
            <li><a href="">About</a></li>
            <li></li>
        </ul>
    </nav>
    </header>
  )
}
