import React, { EventHandler, FormEvent, ChangeEvent } from 'react';
import {Portfolio} from '../../models/Portfolio';
// import ReactDOM from 'react';
// import App from '../../App'
// // import {FormGroup,FormControl,HelpBlock,ControlLabel} from "react-bootstrap";
interface State  {
    portfolio: Portfolio
}

interface Props {
    add: (portfolio: Portfolio) => void;
    selectView: (view: string) => void;

}
export default class NewPortfolio extends React.Component<Props,State> {
    constructor(props: Props) {
        super(props);
        this.state = 
        {
            portfolio:{
                id: '',
                title: '',
                description: '',
                image: ''
            }
        };
    
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    
      handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState(prevState => ({
            portfolio: {
                ...prevState.portfolio,
                [name]: value
            }
        }))
      }
    
      handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        this.state.portfolio.id = this.generateId();
        this.add(this.state.portfolio)
        event.preventDefault();
      }

      generateId() {
          return '_' + Math.random().toString(36).substr(2, 9);
      }

      add(portfolio: Portfolio){
          this.props.add(portfolio);
          
      }
      selectView(view: string) {
          this.props.selectView(view);
      }
  render() {
    return (
        <div className="form-container Portfolio">
            <a className="btn btn-lg btn-info close-btn" onClick={this.selectView.bind(this,"portfolios")}>X</a>
            <h3>Add New Portfolio</h3>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group" >
                    <input value={this.state.portfolio.title} onChange={this.handleChange} className="form-control" type="text" name="title" placeholder="Title" required={true}/>
                </div>
                <div className="form-group">
                    <input value={this.state.portfolio.description} onChange={this.handleChange} className="form-control" type="text" name="description" placeholder="Description"/>
                </div>
                <div className="form-group">
                    <input value={this.state.portfolio.image} onChange={this.handleChange} className="form-control" type="text" name="image" placeholder="Image" required={true}/>
                </div>    
                <div className="form-group">
                    <button className="btn btn-lg btn-primary btn-block">Add</button>
                </div>     
            </form>
        </div>
    );
  }
}



