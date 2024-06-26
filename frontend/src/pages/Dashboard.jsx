import { useContext } from "react"
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import Location from "../components/Location/location";
import Footer from "../components/footer/Footer";

export default function Dashboard() {
  const {user} = useContext(UserContext);

  if(!user.email || !user.password) {
    return <Navigate to={'/login'}/>
  }

  return (
    <>  
    <div>
      <h1>Dashboard</h1>
      <div>
        <h1>Here are your information</h1>
        <ul>
          <li>Username: {user.name}</li>
          <li>Password: {user.password}</li>
          <li>Email: {user.email}</li>
        </ul>
        <Location/>
      </div>
    </div>
    <Footer/>
    </>
  )
}
