const _ = require('lodash')
const courses = require('../data/courses')

/*
- beginner

function findCourseByName(name) -> course

This function accepts a course name and returns the course with the matching name.

 */
module.exports = function findCourseByName(name){
  return _.findWhere(courses, { name: name });
}