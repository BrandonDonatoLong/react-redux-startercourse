/**
 * Created by Brandon on 7/20/2017.
 */
import React, {PropTypes} from 'react';


class CoursesPage extends React.Component {
    constructor (props, context){
        super(props, context);

        this.state = {
            course:{title:null}
        };
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
            </div>
        );
    }
}

export default CoursesPage;