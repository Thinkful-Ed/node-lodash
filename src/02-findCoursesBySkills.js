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
- intermediate++

function findCoursesBySkills([skillNamess]) -> [courses]

This function accepts an array of skill names, it then returns an array of courses that offer any of the skills.

 */
module.exports = function findCoursesBySkills(skillsNames){
  return _.filter(courses, function(course){
    return !_(getSkillIds(skillsNames)).intersection(course.skills).isEmpty()
  })
}