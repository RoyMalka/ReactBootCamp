import React from 'react';
import {Prompt} from 'react-router-dom';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            newContact:{
                name: '',
                phone: '',
                email: ''
            }
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState(prevState => ({
            newContact: {
                ...prevState.newContact,
                [name]: value
            }
        }))
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.setState(() => this.props.history.push('/products'));
      }

  render() {
    return (
        <div className="form-container">
            <h1>Conatct us</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group" >
                    <input value={this.state.newContact.name} onChange={this.handleChange} className="form-control" type="text" name="name" placeholder="Full Name" />
                </div>
                <div className="form-group">
                    <input value={this.state.newContact.description} onChange={this.handleChange} className="form-control" type="text" name="phone" placeholder="Phone"/>
                </div>
                <div className="form-group">
                    <input value={this.state.newContact.email} onChange={this.handleChange} className="form-control" type="text" name="email" placeholder="Email" />
                </div>    
                <div className="form-group">
                    <button className="btn-back">Send</button>
                </div>                   
            </form>
            <Prompt when={this.state.newContact.name !== "" || this.state.newContact.phone !== "" || this.state.newContact.email !== ""} message="Are you sure?" />
        </div>
    );
  }
}


export default Contact;


