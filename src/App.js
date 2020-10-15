import React, { Component} from 'react';
import{BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { Layout } from './Components/Layout';
import { Home }  from "./Pages/HomePage";
import { Students } from './Pages/StudentsPage';
import { Counselors } from './Pages/CounselorsPage';
import { Blog } from './Pages/BlogPage';
import { About } from './Pages/AboutPage';
import { SideMenu } from './Components/Navigation/SideMenu';
import { Footer } from './Components/Footer'


class App extends Component{
  state = {
    sideMenuOpen: false
  };

toggleSideMenu = ()=> {
 this.setState((prevState)=> {
   return {sideMenuOpen: !prevState.sideMenuOpen};
 });
};

menuCloseHandler = ()=> {
 this.setState({sideMenuOpen: false})
};

render() {
 let sideMenu;

   if(this.state.sideMenuOpen) {
     sideMenu = <SideMenu closeHandler={this.menuCloseHandler}/>;
   }
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header clickHandler={this.toggleSideMenu}
                  open= {this.state.sideMenuOpen}/>
                  {sideMenu}
            <Layout>
              <Route exact path="/" component={Home}/>
              <Route path="/StudentsPage" component={Students}/>
              <Route path="/CounselorsPage" component={Counselors}/>
              <Route path="/BlogPage" component={Blog}/>
              <Route path="/AboutPage" component={About}/>
            </Layout>
            <Footer/>
        </React.Fragment>
      </BrowserRouter>
    );
   }
   }

export default App;

