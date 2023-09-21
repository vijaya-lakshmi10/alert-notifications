// Write your code here
import './index.css'
import {GrFormClose} from 'react-icons/gr'
const Notification=props=>{
    return(
        <div className="notification-container">
        <div className="notification-content">
        {props.children}
        </div>
        <GrFormClose className="close-icon"/>
        </div>
    )
}
export default Notification
