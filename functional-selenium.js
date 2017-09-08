webdriver = require('selenium-webdriver');
By        = webdriver.By;

module.exports = {
	
	// Create a new WebDriver
	// browserName :: String -> WebDriver
	makeBrowser: browserName => new webdriver.Builder()
		.forBrowser(browserName)
		.build(),

	// Navigate to a specified URL
	// loadPage :: String -> WebDriver -> WebDriver
	loadPage: url => driver => {
		driver.get(url);
		return driver;
	},

	// Find a DOM Element via a given method
	// getElement :: By => WebDriver => WebElement
	findElement: locator => driver => driver.findElement(locator),

	// Locator method by classname
	// byClassname :: String -> By
	byClassName: className => By.className(className),

	// Locator method by css selector
	// byCss :: String -> By
	byCss: selector => By.css(selector),

	// Locator methd by ID
	// byId :: String -> By
	byId: id => By.id(id),

	// Locator methd by a Javascript expression.
	// The expression must return an element or list of elements.
	// byId :: String -> By
	byJs: (js, ...var_args) => By.js(js, var_args),

	// Locator method by visible link text
	// byLinkText :: String -> By
	byLinkText: text => By.linkText(text),

	// Locator method by HTML name
	// byName :: String -> By
	byName: name => By.name(name),

	// Locator method for an element that contains a given substring
	// byPartialLinkText :: String -> By
	byPartialLinkText: text => By.partialLinkText(text),

	// Locator method by XPath selector
	// byXPath :: String -> By
	byXPath: path => By.xpath(path),

	// Send a series of input keys to an element
	// sendKeys :: String -> WebElement -> WebDriver
	sendKeys: (keys, ...var_args) => elem => {
		elem.sendKeys(keys, var_args);
		return elem.getDriver();
	},

	// Click on an element
	// click :: WebElement -> WebDriver
	click: elem => { 
		elem.click();
		return elem.getDriver();
	},

	// Change the window Selenium is focusing on
	// swapWindow :: Int -> WebDriver -> WebDriver
	swapWindow: idx => driver => {
		driver.getAllWindowHandles().then(handles => {
			driver.switchTo().window(handles[idx]);
			return driver;
		})
	}

};