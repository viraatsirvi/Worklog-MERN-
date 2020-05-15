import React from 'react'
import {Link, Redirect} from 'react-router-dom'

class Navbar extends React.Component{
    constructor(props){
        super();
        this.state = {
            login:'Logout'
        }
    }
    
    logout = () => {
        localStorage.clear();
        this.setState({login:'Login'})

    }
    render() {
        const loginData = JSON.parse(localStorage.getItem('auth'));
        if(!loginData){
            return <Redirect to='/login-register' />
        }

            return(
                <div className="nav-wrapper">    
                    <div className="right">
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/create">Create</Link></div>
                    </div>
                    <div className = 'left'>
                        <div >{JSON.parse(localStorage.getItem('auth')) ? JSON.parse(localStorage.getItem('auth'))[0].firstName :''}</div>
                        <div onClick = {this.logout}>{this.state.login}</div>
                    </div>
               </div>
            )
        

    }
}

export default Navbar;