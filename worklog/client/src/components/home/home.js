import React from 'react';
import {Link} from 'react-router-dom'
import ApiFun from '../../_services/api'
class Home extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            data:''
            
        }
    }
      
   
    componentDidMount(){
   
        var email = JSON.parse(localStorage.getItem('auth'));
        if(!email){
          this.props.history.push('/login-register')
        }else{
        ApiFun.postApi('getTaskDetails',{email:email[0].email})
        .then(json => {
            if(json.data.result.length > 0){
                this.setState({data:json.data.result})
                
            }
            else{
                this.props.history.push('/create')
            }
        }).catch((error)=>{
        console.log("error-----------",error)
        })
    }
    
    }
   render(){
       const data = this.state.data;
     
      return (
        <div className="task">
        <h2>Task Details</h2>
        <div>
            <div className = 'task-wrapper'>
                <div className = 'task-container' style={{width:'40px'}}>S.NO.</div>
                <div className = 'task-container'>Task</div>
                <div className = 'task-container'>Project</div>
                <div className = 'task-container'>Date</div>
                <div className = 'task-container'>Start Time</div>
                <div className = 'task-container'>End Time</div>
            </div>

            { data ?
            data.map((item, ind) => {
                const DATE = item.Date.split('T')[0];
                    return(
                        <div className = 'task-wrapper'>
                            <div className = 'task-container' style={{width:'40px'}}>{ind+1}</div>
                            <div className = 'task-container'>{item.taskName}</div>
                            <div className = 'task-container'>{item.taskType}</div>
                            <div className = 'task-container'>{DATE}</div>
                            <div className = 'task-container'>{item.startTime}</div>
                            <div className = 'task-container'>{item.endTime}</div>
                        </div>
                    )
                }):""
            }
        </div>
        <div className = 'create-task'>
            <Link to="/create"><i>+</i></Link>
        </div>
        </div>
      )
    }
}


export default Home;