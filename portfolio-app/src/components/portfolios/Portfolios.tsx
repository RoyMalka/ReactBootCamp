import React from 'react';
import './Portfolios.css';
import { Grid, Row, Col } from 'react-bootstrap';
import PortfolioMin from '../portfolio-min/Portfolio';
import { Portfolio } from '../../models/Portfolio';

interface Props {
    portfolios: Portfolio[];
    delete: (id: string) => void;
    editView: (portfolio: Portfolio) => void;
    fullView: (portfolio: Portfolio) => void;
    selectView: ( view: string) => void;
}

class Portfolios extends React.Component<Props,{}> {
    delete = (id: string) => {
        this.props.delete(id);
    }
    editView = (portfolio: Portfolio) => {
        this.props.editView(portfolio);
    }
    fullView = (portfolio: Portfolio) => {
        this.props.fullView(portfolio);
    }
    selectView = (view: string) => {
        this.props.selectView(view);
    } 
  render() {
    return (
        <Grid >
          <Row className="show-grid Portfolios" >
          {
          this.props.portfolios.map((portfolio)=> {
            return  <Col xs={12} sm={12} md={12} lg={4} key={portfolio.id}>
                        <PortfolioMin selectView={this.selectView} fullView={this.fullView} editView={this.editView} delete={this.delete} portfolio={portfolio} />
                    </Col>      
          })
          }
          </Row>
        </Grid>
    );
  }
}

export default Portfolios

