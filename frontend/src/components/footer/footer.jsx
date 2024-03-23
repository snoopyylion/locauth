import style from './footer.module.css';
import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";


export default function footer() {
  return (
    <div className={style.footer}>
      <div className={style.section__padding}>
        <div className={style.sb__footer_l}>
            <div className={style.sb__footer_l_div}>
                <h4>For Business</h4>
                <Link to={"/login"}  style={{
                    textDecoration: "none",
                    color: "plum"}}>
                    <p>Login</p>
                </Link> 
                <Link to={"/sign-up"}  style={{
                    textDecoration: "none",
                    color: "plum"
                    }}>
                    <p>Sign Up</p>
                </Link>   
                <Link to={"/"}  style={{
                    textDecoration: "none",
                    color: "plum"}}>
                    <p>Check Your Location</p>
                </Link>                
            </div>
            <div className={style.sb__footer_l_div}>
                <h4>For Resources</h4>
            <Link to={"/"}  style={{
                    textDecoration: "none",
                    color: "plum"}}>
                    <p>SLC</p>
            </Link> 
            <Link to={"/"}  style={{
                    textDecoration: "none",
                    color: "plum"}}>
                    <p>DTV</p>
            </Link>
            <Link to={"/"}  style={{
                    textDecoration: "none",
                    color: "plum"}}>
                    <p>FFP</p>
            </Link>   
            </div>
            <div className={style.sb__footer_l_div}>
                <h4>Partners</h4>
                <Link to={"/"}  style={{
                    textDecoration: "none",
                    color: "plum"}}>
                    <p>Hojo Media</p>
                </Link> 
            </div>
            <div className={style.sb__footer_l_div}>
                <h4>Company</h4>
                <Link to={"/"}  style={{
                    textDecoration: "none",
                    color: "plum"}}>
                    <p>About</p>
                </Link> 
                <Link to={"/"}  style={{
                    textDecoration: "none",
                    color: "plum"}}>
                    <p>Career</p>
                </Link> 
            </div>
            <div className={style.sb__footer_l_div}>
                <h4>Company</h4>
                <div className={style.socialmedia}>
                    <p><FaInstagram /></p>
                    <p><FaXTwitter /></p>
                    <p><FaLinkedin /></p>
                </div>
            </div>
        </div>

        <hr />
        <div className={style.sb__footer_below}>
            <div className={style.sb__footer_copyright}>
                <p>
                    @{new Date().getFullYear()} BlockBoyz. All right reserved.
                </p>
            </div>
            <div className={style.sb__footer_below_links}>
            <Link to={"/"}  style={{
                    textDecoration: "none",
                    color: "plum"}}>
                    <p>Term & Condition</p>
            </Link>
            <Link to={"/"}  style={{
                    textDecoration: "none",
                    color: "plum"}}>
                    <p>Privacy</p>
            </Link>
            <Link to={"/"}  style={{
                    textDecoration: "none",
                    color: "plum"}}>
                    <p>Security</p>
            </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
