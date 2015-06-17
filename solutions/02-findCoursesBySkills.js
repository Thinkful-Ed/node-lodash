const _ = require('lodash')
const courses = require('../data/courses')
const skills = require('../data/skills')


function getSkillIds(skillsNames){
  return _.chain(skills)
          .filter(function(skill){
            return _.includes(skillsNames, skill.name)
          })
          .pluck('id')
          .value()
}

/*
Level 2:

function findCoursesBySkills([skillNamess]) -> [courses]

Complete the function below to accept an array of skill names and return an array of courses that cover any of those skills.
 */

module.exports = function findCoursesBySkills(skillsNames){
  return _.filter(courses, function(course){
    return !_(getSkillIds(skillsNames)).intersection(course.skills).isEmpty()
  })
}