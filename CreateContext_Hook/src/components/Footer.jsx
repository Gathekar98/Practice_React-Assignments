import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Footer = () => {
  const {phone} = useContext(AppContext);
  return (
    <div>
      <h2>Footer</h2>
      <h4> Phone : {phone}</h4>
    </div>
  )
}

export default Footer;
