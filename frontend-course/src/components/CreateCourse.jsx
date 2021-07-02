import React, { Component } from 'react';
import CourseService from '../services/CourseService';
import './styles.css' 

class CreateCourse extends Component {
    constructor(props)
    {
        super(props)

        this.state={
            id:this.props.match.params.id,
            name:'',
            duration:'',
            price:'',
            instructor:''
        }

        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeDurationHandler=this.changeDurationHandler.bind(this);
        this.changeInstructorHandler=this.changeInstructorHandler.bind(this);
        this.changePriceHandler=this.changePriceHandler.bind(this);
        this.saveCourse=this.saveCourse.bind(this);
    }
    componentDidMount(){
        console.log(this.state.id)

        if(this.state.id === '_add'){
            return
        }
        else
        {
        CourseService.getCourseById(this.state.id).then((res)=>{
            let course=res.data;
            this.setState({
            name:course.name,
            duration:course.duration,
            price:course.price,
            instructor:course.instructor
    });
        });
    }
   }
   
   getTitle(){

       if(this.state.id=== '_add')
       {
           return <h3 className="text-center">Add Course</h3>
       }
       else{
        return <h3 className="text-center">Update Course</h3>
       }
   }



   saveCourse= (e)=>{
      
      e.preventDefault();

      let course={name:this.state.name,duration:this.state.duration,price:this.state.price,instructor:this.state.instructor};
      

      if(this.state.id === '_add'){
        //  console.log('course=> '+JSON.stringify(course))
            CourseService.createCourse(course).then(res=>{
                this.props.history.push('/courses');
            });
        }

        else{
            console.log('course=> '+JSON.stringify(course))
            CourseService.updateCourse(course,this.state.id).then(res=>{
                this.props.history.push('/courses');
            });
   }
}
   
   changeNameHandler= (event)=>{
       this.setState({name:event.target.value});
   }
   changeDurationHandler= (event)=>{
       this.setState({duration:event.target.value});
   }
   changeInstructorHandler=(event)=>{
       this.setState({instructor:event.target.value});
   }
   changePriceHandler=(event)=>{
       this.setState({price:event.target.value})
   }
   cancel(){
       this.props.history.push('/courses');
   }
    render() {
        return (
            <div>
               {this.getTitle()}
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-d-3 offset-md-3">
                           <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Duration: </label>
                                            <input placeholder="Duration" name="duration" className="form-control" 
                                                value={this.state.duration} onChange={this.changeDurationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Instructor: </label>
                                            <input placeholder="Instructor" name="instructor" className="form-control" 
                                                value={this.state.instructor} onChange={this.changeInstructorHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveCourse}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    
                                         </form>
                                </div>
                </div>
            </div>
            </div>
            </div>
 

        );
    }
}

export default CreateCourse;