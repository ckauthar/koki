import React from 'react';
import CourseList from './CourseList/CourseList';
import Navbar from './Navbar/Navbar';
import { Route, Redirect, Switch } from 'react-router-dom';
import About from './About/About';
import Blog from './Blog/Blog';
import Jobs from './Jobs/Jobs';
import CourseDetails from './CourseDetails/CourseDetails';

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path='/home' exact component={CourseList} />
                <Route path='/about' exact component={About} />
                <Route path='/course/:id' component={CourseDetail} />
                <Route path='/courses' exact component={CourseList} />
                <Route path='/jobs' exact component={Jobs} />
                <Route path='/blog' exact component={Blog} />
                <Redirect from='/' exact to='/home' />
                <Redirect to='/about' />
            </Switch>
        </div>
    ) ;
};

export default App;