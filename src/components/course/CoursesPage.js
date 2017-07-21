/**
 * Created by Brandon on 7/20/2017.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './courseList';

class CoursesPage extends React.Component {
    constructor (props, context){
        super(props, context);
    }

    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    actions:PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    //mapping automatically using redux helper function bindActionCreators which binds all the actions from courseActions

    return{
        actions: bindActionCreators(courseActions, dispatch)
    };
}

// connect returns a function and thus CoursesPage class/component gets called into the function that is returned by the
// connect function that has some other functions passed to it. That is a mouthful!
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);