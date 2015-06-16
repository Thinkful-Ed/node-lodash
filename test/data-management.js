const
  _ = require("lodash")
, chai = require('chai')
, sinon = require('sinon')
, expect = chai.expect
chai.use(require('sinon-chai'));
chai.config.truncateThreshold = 100;
// Data
const
  courses = require('../data/courses')
, skills = require('../data/skills')
, languages = require('../data/languages')

// Source Files
const findCourseByName    = require('../src/01-findCourseByName')
const findCoursesBySkills = require('../src/02-findCoursesBySkills')
const getGroupedCourses   = require('../src/03-getGroupedCourses')
const multiSort           = require('../src/04-multiSort')

describe('Data Management', function(){

  describe('Find Course By Name', function(){
    it('should return a course with the requested name', function(){
      const randomCourse = _.sample(courses)
      expect(findCourseByName(randomCourse.name)).to.eql(randomCourse)
    })
  });

  describe('Find Courses By Skills', function(){
    it('should return courses with the requested skills', function(){
      const randomSkills = _.sample(skills, 2);
      expect(
        findCoursesBySkills(_.pluck(randomSkills, 'name'))
      ).to.eql(
        _.filter(courses, function(course){
          return _.intersection(course.skills, _.pluck(randomSkills, 'id')).length
        })
      )
    })
  });

  describe('Get Grouped Courses By Suitable Language', function(){
    it('should return an array of courses grouped by most suitable languages', function(){
      const sortedLangs = _.sortBy(languages, function(lang){
        return lang.demand + lang.enjoyment + lang.versatility;
      })
      const groupedCourses = getGroupedCourses();
      _.each(sortedLangs, function(lang, idx){
        expect(
          _.first(groupedCourses[idx]).languageId
        ).to.eql(lang.id)
      })
    })
  });

  describe('Multi Sort',function(){
    it('should sort the courses by multiple fields',function(){
      expect(
        multiSort(['name', 'status'])
      ).to.eql(
        _.sortByAll(courses, ['name', 'status'])
      )
      const sortedSkills = _.sortBy(skills, 'name');
      const sortedCourseSkillIds = _(multiSort(['skill']))
                                    .pluck('skills')
                                    .map(_.first)
                                    .uniq()
                                    .value()
      expect(sortedCourseSkillIds).to.eql(
        _.intersection(sortedCourseSkillIds, _.pluck(sortedSkills, 'id'))
      )
    });
  });

})