import './App.css';
import React from 'react';
import ListCourseComponent  from './components/ListCourseComponent';
import HeaderComponent  from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' 
import CreateCourse from './components/CreateCourse';
import updateCourseComponent from './components/updateCourseComponent';
import viewCourse from './components/viewCourse';

function App() {
  return (
    <div>
      <Router>
     
        <HeaderComponent/>
    <div className="container">
      <Switch>
          <Route path="/" exact component={ListCourseComponent}></Route>
          <Route path="/courses" component={ListCourseComponent}></Route>
          <Route path="/add-course/:id" component={CreateCourse}></Route>
          <Route path="/view-course/:id/" component={viewCourse}></Route>
         
          {/* <Route path="/update-course/:id" component={updateCourseComponent}></Route> */}
          {/* <ListCourseComponent/> */}
      </Switch>
    </div>
     <FooterComponent/>
    </Router>

    </div>
  );
}

export default App;
