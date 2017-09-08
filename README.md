# Functional Selenium

This module provides a small functional wrapper around Selenium's functions allowing for greater composability and shorter, more readable code. Since web testing is inherently full of side-effects, no monads or containers are used to contain IO.

## Getting Started

	const S = require('./functional-selenium.js')
	const R = require('ramda');

Import the module and some functional programming library. We're using [Ramda](http://ramdajs.com/) in this example, but we only need a `compose` function - the specific module is irrelevant.

	const driver = S.makeDriver('chrome')

First create the driver that we'll work with. Note that you'll need to install the relevant remote binaries depending on what browser you wish to use -- see the Selenium documentation for more details.

	// Load the Google search website
	const gotoGoogle = S.loadPage('http://google.com')

The type signature of `loadPage` is `loadPage :: String -> WebDriver -> WebDriver`. So `gotoGoogle` is a function that accepts a `WebDriver` as a parameter, and will return the driver after it has been redirected. We can call this like `gotoGoogle(driver);`.

	// Get & Set the search query
	const getSearchForm = S.findElement(S.byName('q'))
	const setSearchForm = query => R.compose(getDriver, S.sendKeys(query), getSearchForm)

This function, `setSearchForm`, demonstrates the composability of these wrapper functions. It uses `getSearchForm` to retrieve the DOM element, `S.sendKeys(...)` to pass a String, and `getDriver` to retrieve the `WebDriver` instance to allow the composition of this function.

	// Submit the search query
	const submitSearchForm = S.sendKeys(S.Key.RETURN)

	// Compose the app
	var app = R.compose(
		submitSearchForm,
		setSearchForm('Functional Selenium!'),
		gotoGoogle);
    
  app(driver);

This should be self-explanatory -- the testing can now be simplified down into a readable, short composition of functions.


### Prerequisites

- [Selenium](http://www.seleniumhq.org/).

Installation through NPM is simple: `npm install selenium`

What things you need to install the software and how to install them
Install [Selenium](http://www.seleniumhq.org/). Through npm: `npm install selenium`.



These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

