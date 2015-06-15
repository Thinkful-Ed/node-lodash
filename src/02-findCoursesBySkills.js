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
function findCoursesBySkills([skills]) -> courses
 */
module.exports = function findCoursesBySkills(skillsNames){
  // return _.filter(courses, function(course){
  //   return !_(getSkillIds(skillsNames)).intersection(course.skills).isEmpty()
  // })
}