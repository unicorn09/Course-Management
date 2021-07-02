package com.unicornrest.backendcourse.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.unicornrest.backendcourse.exception.ResourceNotFoundException;
import com.unicornrest.backendcourse.model.Course;
import com.unicornrest.backendcourse.repositories.CourseRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CourseController {

	@Autowired
	private CourseRepository courseRepository;
	
	@GetMapping("/courses")
	public List<Course> getAllCourses(){
		return courseRepository.findAll();
	}
 	 
	@PostMapping("/courses")
	public Course createCourse(@RequestBody Course course) {
		return courseRepository.save(course);
	}
	
	@GetMapping("/courses/{id}")
	public ResponseEntity<Course> getCourseById(@PathVariable Long id)
	{
		Course course=courseRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Course with id "+id+" Not Found"));
		return ResponseEntity.ok(course);
		
	}
	
	@PutMapping("/courses/{id}")
	public ResponseEntity<Course> updateCourse(@PathVariable Long id,@RequestBody Course course)
	{
		Course course1=courseRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Course with id "+id+" Not Found"));
	    
		course1.setName(course.getName());
		course1.setDuration(course.getDuration());
		course1.setPrice(course.getPrice());
		course1.setInstructor(course.getInstructor());
		
		Course updaedCourse=courseRepository.save(course1);
		
		return ResponseEntity.ok(updaedCourse);
	
	}
	
	@DeleteMapping("/courses/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteCourse(@PathVariable Long id){
		
		Course course1=courseRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Course with id "+id+" Not Found"));
	    
		
		courseRepository.delete(course1);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
}
