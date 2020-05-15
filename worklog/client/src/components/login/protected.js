import React from 'react';
import { Redirect } from 'react-router-dom'
 function Protected(props) {
     const Cmp = props.component
     var auth= JSON.parse(localStorage.getItem('auth'))

     return <div>
                {auth ? <Cmp /> : <Redirect to='/login' ></Redirect> }
            </div>
 }

 export default Protected;  