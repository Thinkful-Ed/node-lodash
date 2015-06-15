const _ = require('lodash')
const courses = require('../data/courses')
const skills = require('../data/skills')
const languages = require('../data/languages')

const sampleCourse = _.first(courses);

function getSortingOption(field){
  return ( _.has(sampleCourse, field) )
    ? field
    : function sortingOptionCallback(course){
        return ( field == 'skill' )
          ? _.find(skills, function(skill){
            return _.includes(course.skills, skill.id)
          })['name']
          : _.find(languages, { id: course.languageId })[field];
      }
}

/*
function sort([by]) -> sortedData
 */
module.exports = function multiSort(by){
  return _.sortByAll(courses, _.map(by, getSortingOption));
}