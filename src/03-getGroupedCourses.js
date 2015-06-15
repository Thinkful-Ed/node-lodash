const _ = require('lodash')
const courses = require('../data/courses')
const languages = require('../data/languages')

const sortedLangs = _.sortBy(languages, function(language){
  return language.demand + language.enjoyment + language.versatility;
})
/*
function groupCourseBySuitableLanguage(language) -> [[courses]]
 */
module.exports = function getGroupedCourses(){
  return _.map(sortedLangs, function(lang){
    return _.where(courses, { languageId: lang.id })
  })
}