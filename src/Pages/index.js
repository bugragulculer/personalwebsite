import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './EN/home';
import Blog from './EN/blog';
import Navbar from './EN/navbar';
import Error from './EN/error';
import Newsletter from './EN/newsletter';
import Portfolio from './EN/portfolio';
import Podcast from './EN/podcast';
import Notion from './EN/notion';
import Footer from './EN/footer';
import Home_TR from './TR/home';
import Blog_TR from './TR/blog';
import Navbar_TR from './TR/navbar';
import Newsletter_TR from './TR/newsletter';
import Portfolio_TR from './TR/portfolio';
import Podcast_TR from './TR/podcast';
import Notion_TR from './TR/notion';
import Footer_TR from './TR/footer';
import Error_TR from './TR/error'

const Setup = () => {
    return <Router>

            <Switch>
            <Route exact path='/'>
                <Navbar />
                <Home />
                <Footer/>
            </Route>
            <Route exact path='/blog'>
                <Navbar />
                <Blog />
                <Footer/>
            </Route>
            <Route exact path='/newsletter'>
                <Navbar />
                <Newsletter />
                <Footer/>
            </Route>                
            <Route exact path='/portfolio'>
                <Navbar />
                <Portfolio />
                <Footer/>
            </Route>                
            <Route exact path='/podcast'>
                <Navbar />
                <Podcast />
                <Footer/>
            </Route>
            <Route exact path='/notion'>
                <Navbar />
                <Notion />
                <Footer/>
            </Route>
            <Route exact exact path='/tr'>
                <Navbar_TR/>
                <Home_TR />
                <Footer_TR />
            </Route>
            <Route exact path='/tr/blog'>
                <Navbar_TR/>
                <Blog_TR />
                <Footer_TR />

            </Route>
            <Route exact path='/tr/bulten'>
                <Navbar_TR/>
                <Newsletter_TR />
                <Footer_TR />

            </Route>
            <Route exact path='/tr/portfolyo'>
                <Navbar_TR/>
                <Portfolio_TR />
                <Footer_TR />

            </Route>                
            <Route exact path='/tr/podcast'>
                <Navbar_TR/>
                <Podcast_TR />
                <Footer_TR />

            </Route>
            <Route exact path='/tr/notion'>
                <Navbar_TR/>
                <Notion_TR />
                <Footer_TR />
            </Route>
            <Route exact path='/tr/*'>
                <Error_TR/>
            </Route>
            <Route exact path='*'>
                <Error />
            </Route>
        </Switch>
        
        </Router>
};

export default Setup;
