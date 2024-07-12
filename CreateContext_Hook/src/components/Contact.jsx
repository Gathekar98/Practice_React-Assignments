import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Contact = () => {
  const {phone , address} = useContext(AppContext);
 
  return (
    <div>
      <h2>Contact</h2>
      <h4> Phone : {phone}</h4>
      <p>Address : {address}</p>
    </div>
  )
}

export default Contact
