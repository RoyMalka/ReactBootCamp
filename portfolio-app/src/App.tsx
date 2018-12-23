import React, { Component } from 'react';
import SideNav from './components/side-nav/SideNav';
import Portfolios from "./components/portfolios/Portfolios";
import NewPortfolio from './components/new-portfolio/NewPortfolio';
import About from './components/about/About';
import EditPortfolio from './components/edit/EditPortfolio';
import { Grid, Row, Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Portfolio } from './models/Portfolio';
import './App.css';
import PortfolioMin from './components/portfolio-min/Portfolio';;

library.add(fab, faCheckSquare, faCoffee);
interface State 
{ 
  portfolios :  Portfolio[];
  view: string;
  currentPortfolio: Portfolio;
}

class App extends Component<{},State> {
  constructor(props: any) {
    super(props);
    this.state = {
        portfolios: [
            {
              id: "_xs12cj6wf",
              title: "React", 
              description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              image: "https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png"
            },             
            {
              id: "_l35arjn82",
              title: "Angular", 
              description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
            },
            {
              id: "_ihfohb0iy",
              title: "View", 
              description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              image: "https://vuejs.org/images/logo.png"
            },
        ],
        view: "portfolios",
        currentPortfolio: {
          id: '',
          title: '',
          image: ''
      }
    }
    
}

fullView = (portfolio: Portfolio) => {
  this.setCurrentPortfolio(portfolio);
  this.selectView('show');
}

edit = (portfolio: Portfolio) => {
  let id = portfolio.id;
  let portfolios = this.state.portfolios;
  portfolios[this.findPortfolioById(id)] = portfolio;
  this.setState({
    portfolios: portfolios
  });

  this.selectView('portfolios');
}

editView = (portfolio: Portfolio) => {
  this.setCurrentPortfolio(portfolio);
  this.selectView('edit');
}

setCurrentPortfolio = (portfolio: Portfolio) => {
  this.setState(
    {currentPortfolio: portfolio}
  );
}

selectView = (view: string) => {
  this.setState(
    {view: view}
  );
}

add = (portfolio: Portfolio) => {
  this.setState(prevState => ({
    portfolios: [...prevState.portfolios, portfolio],
    view: "portfolios"  // prevState.portfolios.concat(portfolio)
  }));
}

delete = (id: string) => {
  this.setState(prevState => ({
    portfolios: prevState.portfolios.filter(port => port.id !== id )
  }));

  this.selectView('portfolios');
}

findPortfolioById = (id: string) => {
  let portfolios = this.state.portfolios;
  for (let i = 0; i <  portfolios.length; i++) {
    if(portfolios[i].id === id) {
      return i;
    }  
  }
  return -1;
}

renderMainView() {
  if(this.state.view === 'portfolios') {
    return (
      <Portfolios selectView={this.selectView} fullView={this.fullView} editView={this.editView} delete={this.delete} portfolios={this.state.portfolios}/>
    );
  } else if(this.state.view === 'addNew'){
    return(
      <NewPortfolio selectView={this.selectView} add={this.add} />
    );
  } else if(this.state.view === 'about'){
    return(
      <About selectView={this.selectView}/>
    );
  } else if(this.state.view === 'edit'){
    return(
      <EditPortfolio selectView={this.selectView} edit={this.edit} portfolio={this.state.currentPortfolio} />
    );
  } else if(this.state.view === 'show'){
    return(
      <PortfolioMin view={this.state.view} selectView={this.selectView} fullView={this.fullView} editView={this.editView} delete={this.delete} portfolio={this.state.currentPortfolio}/>
    );
  }
  
}
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col smHidden={true} className="hidden-md" sm={2} md={2} lg={2}>
              <SideNav selectView={this.selectView} />
            </Col>            
            <Col xs={12} sm={12} md={10} lg={10}>
              {this.renderMainView()}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
