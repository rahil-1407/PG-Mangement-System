import React from 'react'
import axios from 'axios'

class Liststudents extends React.Component {
    constructor(){
        super();
        this.state = {
            students : [],
            uid : '',
            uname : '',
            uplace : '',
            uroom : ''
        }
        this.getStudents = this.getStudents.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleOrgUpdate = this.handleOrgUpdate.bind(this)
        this.handleModalUpdate = this.handleModalUpdate.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    getStudents() {
        axios.get('http://localhost:8081/')
        .then(res=>{
            console.log(res);
            this.setState({
                students:res.data
            });
        })
    }

    handleDelete(id) {
        axios.delete(`http://localhost:8081/student/${id}`)
        .then(res=>{
            console.log(res);
            window.location = '/';
        })
    }

    componentDidMount() {
        this.getStudents();
    }

    handleUpdate(e){
        const {name,value} = e.target
        this.setState({
            [name] : value
        })
    }

    handleOrgUpdate(result) {
        this.setState({
            uid : result._id,
            uname : result.name,
            uplace : result.place,
            uroom : result.room
        })
    }

    handleModalUpdate(e){
        console.log(this.state)
        const obj = {
            name : this.state.uname,
            place : this.state.uplace,
            room : this.state.uroom
        }
        axios.put(`http://localhost:8081/student/${this.state.uid}`,obj)
        .then(res=>{
            console.log(res);
            this.setState({
                uid:'',
                uname:'',
                uplace:'',
                uroom:''
            })
            window.location = '/';
        })
    }

    handleClose() {
        this.setState({
            uid:'',
            uname:'',
            uplace:'',
            uroom:''
        })
    }

    render()
    {
        const S = this.state.students.map(result => {
            return(
                <div 
                    key={result._id}
                    class="card" 
                    style={{
                        borderRadius:'10px',
                        padding:'15px',
                        backgroundColor:'whitesmoke',
                        display:'inline-block',
                        marginLeft:'15px',
                        marginTop:'10px'
                }}>
                    <div class="card-body">
                        <h2>Name: {result.name}</h2>
                        <h2>Place: {result.place}</h2>
                        <h2>Room: {result.room}</h2>
                    
                    <div class="container" style={{display:'inline'}}>
                        <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal" onClick={() => this.handleOrgUpdate(result)}>Update</button>

                        <button 
                            style={{marginLeft:'20px'}} 
                            onClick={() => this.handleDelete(result._id)} 
                            class="btn btn-danger">
                            Delete
                        </button>

                        <div class="modal fade" id="myModal" role="dialog">
                            <div class="modal-dialog">

                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">Update</h4>
                                    </div>
                                    <div class="modal-body">
                                        <input 
                                            name="uname"
                                            value={this.state.uname}
                                            onChange={this.handleUpdate}
                                            placeholder="Name"
                                            class="form-control"
                                            style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} />
                                        <input
                                            name="uplace"
                                            value={this.state.uplace}
                                            onChange={this.handleUpdate}
                                            placeholder="Place"
                                            class="form-control"
                                            style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} />
                                        <input
                                            name="uroom"
                                            value={this.state.uroom}
                                            onChange={this.handleUpdate}
                                            placeholder="Room"
                                            class="form-control"
                                            style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} />
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-warning" onClick={this.handleModalUpdate}>Update</button>
                                        <button type="button" class="btn btn-default" data-dismiss="modal"
                                        onClick={this.handleClose}>Close</button>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        
                        </div>

                    </div>
                </div>
            )
        })
        return (
            <div>
                {S}
            </div>
        )
    }
}

export default Liststudents