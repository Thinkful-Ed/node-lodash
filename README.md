## Project Brief

These days, lonely coders rely on online learning to get to know new languages. But let's be honest: "one-app stands" with the wrong language can lead to recurring bugs. Gone are the days of swiping left and right for the next best thing. Programmers are looking for languages they can trust.

You're the lead developer for Java Meets Bagel, a service that takes a user's personal interests and matches them with courses that help them get to know new languages in a deeper, more authentic way.

After a chat with the lead architect, you agreed on a series of unit tests that will guide the functions you should write. Use a lodash method in each function – in each case, doing so will save you time and hassle. Each function will either manage data with Node (used to respond to API requests) or will make a request from the client using AJAX.

Functional programming will help improve the consistency of how your applications perform whilst improving their testability and code semantics. To read more about functional programming take a look at [this](http://www.smashingmagazine.com/2014/07/02/dont-be-scared-of-functional-programming/) article.

## Milestones

### Milestone 1: Getting to Know You
1. Clone [this starter repository](https://github.com/Thinkful-Ed/node-lodash) containing a starter point and some unit tests.

2. Install the project by running `npm install`.

3. Run the test suite using `npm test` to see which tests are implemented and which is the next test to complete.

### Milestone 2: You Pass!

Go through the `/src/` files starting with `01-*.js` and implement each function one at a time by passing the tests. Read the comments in each file describing the signature in more detail.

1. `findCourseByName` - This function will be used for selecting a course from the list. Take a look at [`_.find`](https://lodash.com/docs#find).

2. `findCoursesBySkills` - This function will need to select a list of courses that all offer the provided skill names. Take a look at [`_.chain`](https://lodash.com/docs#chain), [`_.filter`](https://lodash.com/docs#filter) and [`_.pluck`](https://lodash.com/docs#pluck) and [`_.intersection`](https://lodash.com/docs#intersection).

3. `getGroupedCourses` - This function will return a nested array of courses grouped by language and sorted by the suitability of the language. Take a look at [`_.sortBy`](https://lodash.com/docs#sortBy) and [`_.where`](https://lodash.com/docs#where)

4. `multiSort` - This function will return a list of courses sorted by multiple fields. Take a look at [`_.sortByAll`](https://lodash.com/docs#sortByAll) and [`_.includes`](https://lodash.com/docs#includes).

5. `requestAdapter` - This function will expose 5 functions and you'll need to write 3 of them. Two of these functions will make use of the first. The first function is a requestAdapter that returns functions. Read up on [Partial Application and Composition](http://benalman.com/news/2012/09/partial-application-in-javascript/) and then take a look at [`_.partial`](https://lodash.com/docs#partial) and [`_.bind`](https://lodash.com/docs#bind).
 
Keep running the tests with `npm test` to see if your functions meet the requirements. If you get stuck, remember to log things out.  You can play with various lodash functions in the console by opening your dev tools on the [lodash docs page](https://lodash.com/docs).

### Milestone 3: Strictly Functional

Once your tests are passing, keep your hipster stakeholders happy by refactoring your code to be as eloquent and purely functional as possible.

Don't sneak a peak at the `/solutions/` folder until after you've refactored your code. If you do anyway - try to implement the solutions in a different way! Happy hacking!

## Resources

[Thinkful Lodash Course](https://reader.thinkful.com/rapid-lodash/918/course-overview) - A video series going through various methods and techniques using lodash.

[Don't be scared of Functional Programming](http://www.smashingmagazine.com/2014/07/02/dont-be-scared-of-functional-programming/) - An in detail article describing functional programming.

[Lodash Documentation](https://lodash.com/docs) - The fluffing lodash manual.

[Lodash Cookbook](https://leanpub.com/lodashcookbook/read) - Free on-line book containing many techniques and tips for working with this amazing library.

[Partial Application and Composition](http://benalman.com/news/2012/09/partial-application-in-javascript/) - Detailed article on partial application and composition methods in JavaScript.
