import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import ApiFun from '../../_services/api'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            username:'',
            email:'',
            password:'',
            cnfmpassword:'',
            Islogin:'Login'
        }
    }

    handleChange = (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }
    
    getLogin = ()=>{
        console.log(`in login`,this.state.email,this.state.password)
        ApiFun.postApi('login',{email:this.state.email,password:this.state.password})
        .then(json => {
            if(json.data.result && json.data.result.length>0){
                localStorage.setItem('auth',JSON.stringify(json.data.result))
                this.props.history.push('/ ')
            
            }
            else{
                this.props.history.push('/login-register')
            }
        }).catch((error)=>{
            alert('login failed. Try later!')
        })
    }
    
    getRegister=()=>{
        const PostData = {firstName:this.state.firstName,
            lastName:this.state.lastName,
            userName:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        ApiFun.postApi('register',PostData)
        .then(json => {
            console.log(json.data,'response of register api----');
            if(json.data.responseCode==='200'){
                this.props.history.push('/login-register')
                this.setState({Islogin:'Login'})
            }

        }).catch((error)=>{
            console.log(error)
        })
      
    }
    
    login = () => {
        return (
        <div>
            <form>
                <div className='form-container'>
                    <label>Email</label>
                    <input type="email" name="email" className="form-elemant" onChange={this.handleChange} value={this.state.email} />
                </div>
                <div className='form-container'>
                    <label>Password </label>
                    <input type="password" name="password" className="form-elemant" onChange={this.handleChange} value={this.state.password} />
                </div>
                
                <div>
                    <button type="button" className="btn-submit" onClick={this.getLogin}>Login</button>
                    <span>Not registered? </span><span onClick ={() =>{this.setState({Islogin:'Registration'})}} className="login"an>Create  account</span>
                </div>
            </form>
        </div>
        )
    }

    register = () => {
        return (
        <div>
            <form>
                <div className='form-container'>
                    <label>First Name</label>
                    <input type="text" name="firstName" className="form-elemant" onChange={this.handleChange} value={this.state.firstName} />
                </div>
                <div className='form-container'>
                    <label>Last Name</label>
                    <input type="text" name="lastName" className="form-elemant" onChange={this.handleChange} value={this.state.lastName} />
                </div>
                <div className='form-container'>
                    <label>Email</label>
                    <input type="email" name="email" className="form-elemant" onChange={this.handleChange} value={this.state.email} />
                </div>
                <div className='form-container'>
                    <label>Password </label>
                    <input type="password" name="password" className="form-elemant" onChange={this.handleChange} value={this.state.password} />
                </div>
                <div className='form-container'>
                    <label>Confirm Password</label>
                    <input type="username" name="cnfmpassword" className="form-elemant" onChange={this.handleChange} value={this.state.cnfmpassword} />
                </div>
                <div>
                    <button type="button" className="btn-submit" onClick={this.getRegister}>Register</button>
                   <span>Already have an account?</span> <span onClick ={() =>{this.setState({Islogin:'Login'})}} className="login"an>Login</span>
                </div>
        </form>
    </div>
        )
    }
    render(){
        return (
            <div className="form-wrapper">
                <h2>{this.state.Islogin}</h2>
                {
                this.state.Islogin == 'Login' ? this.login() : this.register()
                 
                }
          </div>
            
        )
    }

}

export default withRouter(Login);

