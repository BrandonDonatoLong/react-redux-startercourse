/**
 * Created by Brandon on 7/20/2017.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
      return (  <div className="jumbotron">
            <h1>Pluralsight Administration</h1>
            <p>react, redux, react router</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div> );
    }
}

export default HomePage;