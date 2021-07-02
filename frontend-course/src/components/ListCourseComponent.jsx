 import axios from 'axios';
import React, { Component } from 'react';
 import CourseService from '../services/CourseService';
 import './styles.css'

 class ListCourseComponent extends Component {
     
    constructor(props)
    {
        super(props)
        this.state={
            courses:[]
        }
        this.addCourse=this.addCourse.bind(this);
        this.editCourse=this.editCourse.bind(this);
        this.deleteCourse=this.deleteCourse.bind(this);
    }
    
    deleteCourse(id)
    {
        CourseService.deleteCourse(id).then(res=>{
        
            this.setState({courses: this.state.courses.filter(course => course.id !== id)});
       
        });
    }

    editCourse(id)
    {
        this.props.history.push(`/add-course/${id}`);   
    }

    componentDidMount(){
      CourseService.getCourses().then((res)=>{
          this.setState({courses:res.data});
      }      
      );

    }

    viewCourse(courseId)
    {
        this.props.history.push(`/view-course/${courseId}`)
    }
    addCourse()
    {
        this.props.history.push('/add-course/_add');
    }
     
    render() {
         return (
             <div>
                 <h2 className="text-center">Courses List</h2>
                 <div className="row">
                     <button className="btn btn-primary" onClick={this.addCourse} style={{width: "150px"}}>Add Course</button>
                 </div>
                 <br/>
                 <div className="row">
                     <table className="table table-striped table-bordered">

                         <thead>
                             <tr>
                                 <th>Course Name</th>
                                 <th>Course Duration</th>
                                 <th>Course Instructor</th>
                                 <th>Course Price</th>
                                 <th>Actions</th>
                             </tr>
                   
                         </thead>

                         <tbody>
                             {
                                 this.state.courses.map(
                                    courses=>
                                    <tr key={courses.id}>
                                    
                                    <td>{courses.name}</td>
                                    <td>{courses.duration}</td>
                                    <td>{courses.instructor}</td>
                                    <td>{courses.price}</td>
                                    <td>
                                        <button onClick={()=>this.editCourse(courses.id)} className="bt btn-info">Update</button>
                                        <button style={{marginLeft:"10px"}} onClick={()=>this.deleteCourse(courses.id)} className="bt btn-danger">Delete</button>
                                        <button style={{marginLeft:"10px"}} onClick={()=>this.viewCourse(courses.id)} className="bt btn-info">View</button>
                                    </td>
                                    </tr>
                                 )
                             }
                         </tbody>
                     </table>
                 </div>
             </div>
         );
     }
 }
 
 export default ListCourseComponent;