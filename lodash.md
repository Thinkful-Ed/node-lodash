## Fast and Readable Functional Programming with Lodash

Level: Intermediate
Time Estimate: 
Topics: 
- Functional styled JavaScript
- Data management of Collections and Objects
- Composition and Combinators

### blurb
This project tasks you with practicing some of the functional programming library's most useful features, such as its collection methods (find, where, pluck, pick) and its function methods (throttle, debounce, delay, partial, wrap, once, bindAll).

## External Material
short -- 
https://egghead.io/lessons/core-javascript-introduction-to-lodash
bit more in depth --
https://blog.codecentric.de/en/2013/01/functional-javascript-lo-dash-underscore-js-alternative/
fantastic --
https://leanpub.com/lodashcookbook/read
book --
https://books.google.co.uk/books?id=t-VrBgAAQBAJ&lpg=PA1&ots=8h36jCNRSl&dq=introduction%20to%20lodash.js&pg=PP1#v=onepage&q&f=false


## Things

- data manipulation is a vital part of many JavaScript systems
    + filtering and sorting search results
    + displaying analytical information about data
    + manipulating collections of items
    + parsing data

- at it's heart - JS is functional language
    + functions are first class
- lodash embraces this to give a developer tools for writing clean, fast and effective code 
- 

## Brief

Node:
- Need to provide functions:
    - search by 
    - sorting courses by 2 columns at a time:
        + name, suitability, level, demand, enjoyment, versatility, risk, interest
    - filter by same options
```js
function findCourseByName(name) -> course
function findCoursesBySkills([skills]) -> course
function groupCoursesBySuitableLanguage(name) -> course

function sort([by]) -> sortedData
```

Client:
    - two types of request builder functions
```js
function getDefaultParams(params){
    return _.defaults({}, params || {}, {
        bust: Date.now()
    })
}
function getDefaultHeaders(headers){
    return _.defaults({}, headers || {}, {
        Authorization: Math.random()
    })
}

function makePublicRequester(method, getDefaultParams)
    -> function request(endpoint, data, params={bust}, headers)

function makeAuthedRequester(method, getDefaultHeaders)
    -> function request(endpoint, data, params, headers={Authorisation})
```

*scenarios*
+ Thinkful
    * date with a programming language
        - type some personal interests
        - shows some programming courses

