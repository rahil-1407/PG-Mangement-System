import React from 'react'
import axios from 'axios'
import images from '../images.jpg'

class Inputstudents extends React.Component {
    constructor(){
        super()
        this.state={
            name : '',
            place : '',
            room : ''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const {name,value} = e.target
        console.log(name,value)
        this.setState({
            [name] : value
        })
    }

    handleSubmit() {
        if(this.state.name!='' && this.state.place!='',this.state.room!='') {
            axios.post('http://localhost:8081/students',this.state)
            .then(res=>{
                console.log('Successfully posted');
                this.setState({name:'',place:'',room:''});
            });
            window.location = '/';
        }
    }

    render()
    {
        return (
            <div class="row text-center">
                <div class="col-md-4">
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                            style={{
                                fontSize:'15px',
                                fontFamily:'Cursive,sans-serif,Gugi',
                                borderRadius:'10px',
                                marginLeft:'50px',
                                marginTop:'20px'
                            }}
                            placeholder="Enter your name here..."
                            class="form-control" />
                        <input 
                            name="place"
                            onChange={this.handleChange}
                            value={this.state.place}
                            style={{
                                fontSize:'15px',
                                fontFamily:'Cursive,sans-serif,Gugi',
                                borderRadius:'10px',
                                marginLeft:'50px',
                                marginTop:'20px'
                            }}
                            placeholder="Place of Residence..." 
                            class="form-control" />
                        <input
                            name="room"
                            onChange={this.handleChange}
                            value={this.state.room} 
                            style={{
                                fontSize:'15px',
                                fontFamily:'Cursive,sans-serif,Gugi',
                                borderRadius:'10px',
                                marginLeft:'50px',
                                marginTop:'20px'
                            }}
                            placeholder="Room Alloted..."
                            class="form-control" />

                        <button 
                            style = {{
                                borderRadius:'10px',
                                fontSize:'19px',
                                fontFamily:'Cursive,sans-serif,Gugi',
                                outline:'none',
                                color:'white',
                                backgroundColor:'#000066',
                                marginLeft:'50px',
                                marginTop:'20px',
                                width:'435px'
                            }}
                            class="btn">
                        Add</button>
                    </form>
                </div>

                <div class="col-md-8">
                    <img
                        style={{
                            marginTop:'20px',
                            width:'300px',
                            height:'200px',
                            borderRadius:'20px',
                            outline:'none'
                        }} 
                        src={images} />
                </div>
            </div>
        )
    }
}

export default Inputstudents