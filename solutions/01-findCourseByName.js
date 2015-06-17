const _ = require('lodash')
const courses = require('../data/courses')

/*
Level 1

function findCourseByName(name) -> course

Complete the function below to accept a course's name and return the full course object with the matching name.
 */

module.exports = function findCourseByName(name){
  return _.findWhere(courses, { name: name });
}