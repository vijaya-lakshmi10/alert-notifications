// Write your code here
import './index.css'
import Notification from '../Notification'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning,MdInfo} from 'react-icons/md'
const AlertNotifications=()=>{
    const displaySuccessNotificationInfo=()=>(
        <Notification>
        <AiFillCheckCircle className="icon success"/>
        <div className="message-container">
        <h1 className="message-heading success">Success</h1>
        <p className="message-desc">You can access all the files in the folder</p>
        </div>
        </Notification>
    )

    const displayErrorNotificationInfo=()=>(
        <Notification>
        <RiErrorWarningFill className="icon error"/>
        <div className="message-container">
        <h1 className="message-heading error">Error</h1>
        <p className="message-desc">Sorry, you are not authorized to have access to delete the file</p>
        </div>
        </Notification>
    )

    const displayWarningNotificationInfo=()=>(
        <Notification>
        <MdWarning className="icon warning"/>
        <div className="message-container">
        <h1 className="message-heading warning">Warning</h1>
        <p className="message-desc">Viewers of this file can see comments and suggestions</p>
        </div>
        </Notification>
    )

    const displayInfoNotificationInfo=()=>(
        <Notification>
        <MdInfo className="icon info"/>
        <div className="message-container">
        <h1 className="message-heading info">Info</h1>
        <p className="message-desc">Anyone on the internet can view these files</p>
        </div>
        </Notification>
    )

    return(
        <div className="main-container">
        <div className="sub-container">
        <h1 className="heading">Alert Notifications</h1>
        {displaySuccessNotificationInfo()}
        {displayErrorNotificationInfo()}
        {displayWarningNotificationInfo()}
        {displayInfoNotificationInfo()}
        </div>
        </div>
    )
}
export default AlertNotifications
