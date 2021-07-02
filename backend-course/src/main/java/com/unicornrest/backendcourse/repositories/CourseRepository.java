package com.unicornrest.backendcourse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.unicornrest.backendcourse.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long>{

}
