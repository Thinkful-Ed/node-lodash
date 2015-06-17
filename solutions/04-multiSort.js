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
          : _.find(languages, {
              id: course.languageId
            })[field];
      }
}

/*
Level 4:

function multiSort([fields]) -> [sortedCourses]

This function accepts an array of any of the following strings:
- From courses: `name`, `status`, `suitability`, `created_at`, `level`
- From languages: `demand`, `enjoyment`, `versatility`, `user_status`
- From skills: `skill`

With this array of strings, it returns the courses sorted by the associated fields, applying the first sorting field and then 'sub-sorting' by the second field, and so on...

The field 'skill' refers to sorting by skill names.
The fields from language data refers to sorting courses according to the field of the language_id they're associated with.
 */

module.exports = function multiSort(by){
  return _.sortByAll(courses, _.map(by, getSortingOption));
}