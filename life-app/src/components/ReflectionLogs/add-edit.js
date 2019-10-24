import React, { useEffect } from 'react';
import { axiosWithAuth } from '../Authentication/axiosWithAuth';

export class Add extends React.Component{
    constructor(props){
        super(props);
        this.state={
            reflection: 'New Reflection'
        }
    }

    setLogs = (input) => {
        this.props.setLogs(input);
    };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: [e.target.value]
        });
    };

    submit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(`/reflection-logs/${localStorage.user}`, {
                "user_id": `${localStorage.userid}`,
                "date":  `${new Date()}`,
                "reflection": `${this.state.reflection}`
            }) 
            .then(res => {
                this.setLogs(res);
                console.log("Successfully Added", res)
            })
            .catch(err => console.log("has not been added: ", err))
    };

    render(){
        return (
            <div className="add-form">
                <h2>Add Reflection</h2>
                <form onSubmit={this.submit}>
                    <input
                        type="text"
                        name="reflection"
                        placeholder={this.state.reflection}
                        onChange={this.handleChange}
                        value={this.state.reflection}
                    />
                    <button onClick={this.submit}>Submit</button>
                </form>
            </div>
        );
    };
};

export class Edit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: props.id,
            reflection: ''
        }
    }

    componentDidMount(){
        axiosWithAuth()
            .get(`/reflection-logs/${localStorage.user}/${localStorage.userid}/${this.props.id}`)
            .then(res => {
                // console.log(res.data.reflectionLog.reflection)
            this.setState({
                reflection: res.data.reflectionLog.reflection
                });
            //   console.log("RES: ", res.data);
            })
            .catch(err => console.log("ERROR IN REFLECTION LOGS AXIOS", err));
    }

    setLogs = log => {
        this.props.setLogs(log);
    };

    handleChange = (e) => {
        return this.setState({
            ...this.state,
            [e.target.name]: [e.target.value]
        });
    };

    redirect = () => {
        this.props.history.push(`/reflections`);
        document.location.reload(true);
    };

    submitEdit(){
        axiosWithAuth()
            .put(`/reflection-logs/${localStorage.user}`, {
                "id": `${this.state.id}`,
                "user_id": `${localStorage.userid}`,
                "date":  `${new Date()}`,
                "reflection": `${this.state.reflection}`
            })
            .then(res => {
                this.setLogs(res);
                console.log("ID " + this.state.id + "Successfully Edited", res)
            })
            .catch(err => console.log("ID " + this.state.id + "has not been deleted: ", err))
        this.redirect()
    }

    render(){
        return (
        <div className="edit-form">
            <h2>Edit Reflection</h2>
            <form onSubmit={this.submitEdit}>
                <input
                    type="text"
                    name="reflection"
                    placeholder={this.state.reflection}
                    onChange={this.handleChange}
                    value={this.state.reflection}
                />
                <button onClick={this.submitEdit}>Submit</button>
            </form>
        </div>
    );}
};
