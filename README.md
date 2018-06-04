# Question Count
### *Package Name*: question-count
### *Child Type*: post import
### *Platform*: all
### *Required*: required

This child module is built to be used by the Brigham Young University - Idaho D2L to Canvas Conversion Tool. It utilizes the standard `module.exports => (course, stepCallback)` signature and uses the Conversion Tool's standard logging functions. You can view extended documentation [Here](https://github.com/byuitechops/d2l-to-canvas-conversion-tool/tree/master/documentation).

## Purpose

Identifies quizzes where the question count is different in Canvas than it was in D2L.

## How to Install

```
npm install question-count
```

## Run Requirements

None

## Options

None

## Outputs

None

## Process

Describe in steps how the module accomplishes its goals.

1. Retrieve quizzes from Canvas course
2. For each quiz, identify it's corresponding D2L export quiz file
3. Get total number of questions from both
4. If the total is different, log it

## Log Categories

List the categories used in logging data in your module.

- Different Question Count
