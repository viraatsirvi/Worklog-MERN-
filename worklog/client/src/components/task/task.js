import React from 'react';
import ApiFun from '../../_services/api'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

class Task extends React.Component{
    constructor(props){
        super(props);
        this.state={
            taskName:'',
            taskType:'',
            date: new Date(),
            email:'',
            starttimeHH:'',
            starttimeMM:'',
            endtimeHH:'',
            endtimeMM:'',
            color:"#ddd"
        }
    }
    
    taskCreate =() =>{
        var email = JSON.parse(localStorage.getItem('auth'))[0].email;
    
        const PostData = {taskName:this.state.taskName,
            taskType:this.state.taskType,
            date:this.state.date,
            email:email,
            starttime:this.state.starttimeHH +':' + this.state.starttimeMM,
            endtime:this.state.endtimeHH + ':' + this.state.endtimeMM
        }
        if(this.state.taskName && this.state.taskType && this.state.date && this.state.starttimeHH && this.state.starttimeMM && this.state.endtimeHH && this.state.endtimeMM) {
            ApiFun.postApi('taskDetails',PostData)
            .then(json => {
                
                if(json.data.responseCode===200){
                    console.log('done')
                    this.props.history.push('/')
                }
            
            }).catch((error)=>{
            console.log("error-----------",error)
            })
        } else {
        this.setState({color:'red'})
        }
    }

    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }

    
   render(){
    const array = [1,2,3,4,5,6,7];
      return (
        <div className="form-wrapper">
        <h2>Create Task</h2>
        <form>
            <div className='form-container'>
                <label>Task Name</label>
                <input type="text" 
                    style = {{borderColor:this.state.taskName ? '#ddd' : this.state.color}}
                    name="taskName" 
                    className="form-elemant" 
                    onChange={this.handleChange} 
                    value={this.state.taskName} 
               />
            </div>
            <div className='form-container'>
                <label>Project</label>
                <select
                    style = {{borderColor:this.state.taskType ? '#ddd' : this.state.color}}
                    name="taskType" 
                    className="form-elemant" 
                    onChange={this.handleChange} 
                    value={this.state.taskType}
                > 
                    <option vlaue='Indocan'>Indocan</option>
                    <option vlaue='asad'>asad</option>
                    <option vlaue='qaz'>qaz</option>
                    <option vlaue='wsx'>wsx</option>
                    <option vlaue='rfv'>rfv</option>
              
                </select>
            </div>
            <div className='form-container'>
                <label>Date</label>
                <DatePicker showPopperArrow={false}
                   selected={this.state.date}
                   onChange={e => {this.setState({date:e})}}
                   dateFormat="dd/MM/yyyy"
                   className="form-elemant"
                />
            </div>
            <div className='form-container'>
                <input type="hidden" 
                    name="email" 
                    className="form-elemant" 
                    onChange={this.handleChange} 
                    value={this.state.email} 
                />
            </div>
            <div className='form-container'>
                <label>start time </label>
                <div className = "time-container">
                    <input type="text" 
                        style = {{borderColor:this.state.starttimeHH ? '#ddd' : this.state.color}}
                        name="starttimeHH" 
                        className="time-elemant" 
                        placeholder="HH" 
                        onChange={this.handleChange}
                        value={this.state.starttimeHH}   
                   />
                    <span>:</span>
                    <input 
                        type="text" 
                        style = {{borderColor:this.state.starttimeMM ? '#ddd' : this.state.color}}
                        name="starttimeMM" 
                        className="time-elemant" 
                        placeholder="MM" 
                        onChange={this.handleChange} 
                        value={this.state.starttimeMM} 
                    />
                </div>
            </div>
            <div className='form-container'>
                <label>end time</label>
                <div className = "time-container">
                    <input type="text" 
                        style = {{borderColor:this.state.endtimeHH ? '#ddd' : this.state.color}}
                        name="endtimeHH" 
                        className="time-elemant" 
                        placeholder="HH" 
                        onChange={this.handleChange} 
                        value={this.state.endtimeHH} 
                    />
                    <span>:</span>
                    <input type="text" 
                        style = {{borderColor:this.state.endtimeMM ? '#ddd' : this.state.color}}
                        name="endtimeMM"
                        className="time-elemant" 
                        placeholder="MM" 
                        onChange={this.handleChange} 
                        value={this.state.endtimeMM} 
                    />
                </div>
            </div>
            <div>
                <button type="button" className="btn-submit" onClick={this.taskCreate}>Create</button>
               
            </div>
            </form>
        </div>
      )
}
}

export default Task;