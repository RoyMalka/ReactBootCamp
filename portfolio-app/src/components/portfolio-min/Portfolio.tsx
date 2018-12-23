import React from 'react';
import './Portfolio.css';
import {Image,Thumbnail} from "react-bootstrap";
import { Portfolio } from '../../models/Portfolio';

interface Props {
  portfolio: Portfolio;
  selectView: (view: string) => void;
  delete: (id: string) => void;
  editView: (portfolio: Portfolio) => void;
  fullView: (portfolio: Portfolio) => void;
  view?: string;
}


export default class PortfolioMin extends React.Component<Props,{}> {
  delete(id: string) {
    this.props.delete(id);
  }
  editView(portfolio: Portfolio) {
    this.props.editView(portfolio);
  }
  fullView(portfolio: Portfolio) {
    this.props.fullView(portfolio);
  }
  selectView(view: string)
  {
    this.props.selectView(view);
  }
  render() {
    return (
      <div className="Portfolio">
      <Thumbnail className="portfolio-container">
        <Image src={this.props.portfolio.image} onClick={this.fullView.bind(this,this.props.portfolio)} thumbnail responsive/>
        <hr />
        {this.props.view === 'show'  && <a className="btn btn-lg btn-info close-btn" onClick={this.selectView.bind(this,"portfolios")}>X</a>}
        <h3>{this.props.portfolio.title}</h3>
        <div className="portfolio-buttons" >
          <a className="btn btn-xs btn-danger" onClick={this.delete.bind(this,this.props.portfolio.id)}>Delete</a>
          <a className="btn btn-xs btn-warning" onClick={this.editView.bind(this,this.props.portfolio)}>Edit</a>
        </div>
      </Thumbnail>
      </div>
    );
  }
}


