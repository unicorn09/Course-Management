import React, { Component } from 'react';
import CourseService from '../services/CourseService';

class viewCourse extends Component {
    
    constructor(props)
    {
        super(props);
        
        this.state={
          
            id:this.props.match.params.id,
            course:[]
        }
    
    }
    
    componentDidMount(){
CourseService.getCourseById(this.state.id).then(res=>{

     this.setState({course:res.data})
});

    }
   
    render() {
        return (
            <div className="card col-md-6 offset-md-3">
             <h3 className="text-center">View Course</h3>
                <div className="card-body">
                   
                    <div className="row">
                     <label>Course Name : {this.state.course.name}</label>
                    </div>

                    <div className="row">
                     <label>Course Duration : {this.state.course.duration}</label>
                    </div>

                    <div className="row">
                     <label> Course Price : {this.state.course.price}</label>
                    </div>

                    <div className="row">
                     <label> Course Instructor : {this.state.course.instructor}</label>
                    </div>

                    </div> 
            </div>
        );
    }
}

export default viewCourse;