import React from 'react'
import { Helmet } from 'react-helmet'
export const About = () => {
    var  style1= {
        visibility: "visible; animation-name: fadeIn;"
    }
    var style2 ={
        visibility: "visible; animation-name: fadeIn;"
    }
  return (
  
    <div>
        <Helmet>
  <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png"/>

    
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    
    <link rel="stylesheet" href="css/style.css"/>
    
    <link rel="stylesheet" href="css/versions.css"/>
   
    <link rel="stylesheet" href="css/responsive.css"/>
    
    <link rel="stylesheet" href="css/custom.css"/>
 
  </Helmet>

  
</div>
    
  )
}
