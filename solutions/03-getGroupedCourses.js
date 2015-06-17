const _ = require('lodash')
const courses = require('../data/courses')
const languages = require('../data/languages')

const sortedLangs = _.sortBy(languages, function(language){
  return language.demand + language.enjoyment + language.versatility;
})

/*
Level 3:

function getGroupedCourses() -> [[courses]]

This function should return an array of arrays. The outer array should contain a list of arrays with each one representing a programming language, with that list sorted by each language's suitability (more suitable first). Suitability is measured by adding `demand`, `enjoyment`, and `versatility`. The inner arrays should contain courses offering that language. In pseudocode: `return [firstLanguageArray, secondLanguageArray, thirdLanguageArray]` (it should work for any number of languages).
*/

module.exports = function getGroupedCourses(){
  return _.map(sortedLangs, function(lang){
    return _.where(courses, { languageId: lang.id })
  })
}