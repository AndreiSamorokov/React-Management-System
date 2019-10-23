import React, { Component} from 'react';
import { post } from 'axios';

class CustomerAdd extends Component{
    constructor(props){
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        }
    }


    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) =>{
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
        })

    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextChange = {};
        nextChange[e.target.name] = e.target.value;
        this.setState(nextChange);
    }


    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            header: {
                'content-type' : 'multipart/form-data'
            }
        }
        return post( url, formData, config );
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1> Add Members</h1>
                Add image <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br />
                Add Name <input type="text" name="userName" value={this.state.name} onChange={this.handleValueChange } /><br />
                Add Birthday <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange } /><br />
                Add Gender <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange } /><br />
                Add Job <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange } /><br />
                <button type="submit" > ADD NEW MEMBER </button> 

            </form>
        )
    }
}

export default CustomerAdd;