import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Error from './Error';
import Menu from './Menu';
import User from './User';
import Service from './Service';
import Search from './Search';

const App = () => {
    const Name = () => {
        return <h1> I am Name page</h1>
    }

    return (
        <>
            <Menu />
            <Switch>
                <Route path='/about' component={() => <About name='About' />} />
                <Route exact path='/contact' component={Contact} />
                <Route path='/service' component={Service} />
                <Route path='/search' component={Search} />
                <Route path='/contact/name' component={Name} />
                <Route exact path='/' component={Home} />

                <Route path='/user/:name/:address' component={User} />
                {/* <Route component={Error} /> */}
                <Redirect to='/' />
            </Switch>


        </>

    );

}
export default App;