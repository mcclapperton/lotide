# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @mclap/lotide`

**Require it:**

`const _ : require('@mclap/lotide');`

**Call it:**

`const results : _.tail([1, 2, 3]) // :> [2, 3]`

## Documentation

The following functions are currently implemented:

head(brain):returns first element in an array
tail(end): return new array without the first element
middle(middleArr): returns the center element(s) of an array
assertArraysEqual(firstArr, secondArr):asserts that two input arrays are the same
assertEqual(actual, expected):asserts that two input values are the same
assertObjectsEqual(actual, expected):asserts that two objects are the same
countLetters(letters):returns an object with the key being an element in the string and the value being the number of times it occured
countOnly(allItems, itemsToCount): returns an object containing the elements with truthy values from an array "allItems" and the number of times they appeared in the original array
eqArrays(arr1, arr2):returns true if two arrays are the same
eqObjects(obj1, obj2):returns true if two objects are the same
findKey(object, callback): returns the first key of an object with a truey value based on the "callback" function parameter
findKeyByValue(genre, shows):returns the first key of an object based on the input value
letterPosition(sentence):returns an object with the letters of input string and the value being the indices of when they appear
map(array, callback):returns a new array based on the results of the "callback" function parameter
takeUntil(objects, callback):returns the first element of an array that is true
without(source, itemsToRemove):returns an array with the parameter "itemsToRemove" removed
