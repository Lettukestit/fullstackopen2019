import React from 'react'

const Notification = ({message}) => {
    if(message) {
    return (
         <div className="alert">
             {message}
         </div>
          )
    } else {
        return null
    }
        
   
  }

  export  default Notification