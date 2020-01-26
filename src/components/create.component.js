import React,{useState} from 'react';

export default function Create (){
    const [user_name,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [conf_password,setConfPassword]=useState('');
    const [email,setEmail]=useState('');
    const [designation,setDesignation]=useState('');
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${user_name}`)
    }

    return(
            <div style={{margin:10}}>
                <h3>Create New Customer</h3>
                <form onSubmit = {handleSubmit}>
                    <div className="form-group">
                        <label>Add User Name</label>
                        <input type="text" 
                               className="form-control"
                               value ={user_name}
                               onChange={e=> setUserName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Add Password</label>
                        <input type="Password" 
                               className="form-control"
                               value ={password}
                               onChange={e=> setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="Password" 
                               className="form-control"
                               value ={conf_password}
                               onChange={e=> setConfPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" 
                               className="form-control"
                               value ={email}
                               onChange={e=> setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Designation</label>
                        <input type="text" 
                               className="form-control"
                               value ={designation}
                               onChange={e=> setDesignation(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value ="Register Customer" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )
    
}