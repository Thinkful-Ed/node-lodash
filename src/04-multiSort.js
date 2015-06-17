const _ = require('lodash')
const courses = require('../data/courses')
const languages = require('../data/languages')
const skills = require('../data/skills')

/*
Level 4:

function multiSort([fields]) -> [sortedCourses]

This function accepts an array of any of the following strings:
- From courses: `name`, `status`, `suitability`, `created_at`, `level`,
- From languages: `demand`, `enjoyment`, `versatility`, `user_status`, or `skill`.

With this array of strings, it returns the courses sorted by the associated fields, applying the first sorting field and then 'sub-sorting' by the second field, and so on...

The field 'skill' refers to sorting by skill names.
The fields from language data refers to sorting courses according to the field of the language_id they're associated with.
 */

module.exports = function multiSort(by){
	// Your code goes here
}