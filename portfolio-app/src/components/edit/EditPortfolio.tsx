import React, { FormEvent, ChangeEvent } from 'react';
import {Portfolio} from '../../models/Portfolio';
interface State  {
    portfolio: Portfolio
}

interface Props {
    portfolio: Portfolio;
    edit: (portfolio: Portfolio) => void;
    selectView: (view: string) => void;

}

export default class EditPortfolio extends React.Component<Props,State> {
    constructor(props: Props) {
        super(props);
        this.state = 
        {
            portfolio: props.portfolio
        };
    }
    
      handleChange = (event: ChangeEvent<HTMLInputElement> ) => {
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
    
      handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        this.edit(this.state.portfolio)
        event.preventDefault();
       
      }
      edit(portfolio: Portfolio){
          this.props.edit(portfolio);   
      }
      selectView(view: string) {
          this.props.selectView(view);
      }
  render() {
    return (
        <div className="form-container Portfolio" >
            <a className="btn btn-lg btn-info close-btn" onClick={this.selectView.bind(this,"portfolios")}>X</a>
            <h3>Edit '{this.props.portfolio.title}' Portfolio</h3>
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
                    <button className="btn btn-lg btn-warning btn-block">Edit</button>
                </div>     
            </form>
        </div>
    );
  }
}