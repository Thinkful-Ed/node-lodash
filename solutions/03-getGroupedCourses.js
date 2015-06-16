const _ = require('lodash')
const courses = require('../data/courses')
const languages = require('../data/languages')

const sortedLangs = _.sortBy(languages, function(language){
  return language.demand + language.enjoyment + language.versatility;
})
/*
 - intermediate

function getGroupedCourses() -> [[courses]]

This function must sort the languages by how suitable they are, suitability is determined by adding the `demand`, `enjoyment` and `versatility` together. For each of the languages, ordered by most suitable first, return an array of courses offering that language. Wrap these arrays (one for each language) into one outer array and return the said outer array.

 */
module.exports = function getGroupedCourses(){
  return _.map(sortedLangs, function(lang){
    return _.where(courses, { languageId: lang.id })
  })
}