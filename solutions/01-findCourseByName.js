const _ = require('lodash')
const courses = require('../data/courses')

/*
- beginner

function findCourseByName(name) -> course

This function accepts a course's name and returns the full course object with the matching name.

 */
module.exports = function findCourseByName(name){
  return _.findWhere(courses, { name: name });
}