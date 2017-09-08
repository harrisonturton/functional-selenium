webdriver = require('selenium-webdriver');
By        = webdriver.By;

module.exports = {
	
	// Pressable keys that aren't text,
	// stored in Unicode PUA (Private Use Area) code points
	// Key :: Object
	Key: {
		ADD:		 webdriver.Key.ADD,
		ALT:		 webdriver.Key.ALT,
		ARROW_DOWN:	 webdriver.Key.ARROW_DOWN,
		ARROW_LEFT:	 webdriver.Key.ARROW_LEFT,
		ARROW_RIGHT: webdriver.Key.ARROW_RIGHT,
		ARROW_UP:	 webdriver.Key.ARROW_UP,
		BACK_SPACE:	 webdriver.Key.BACK_SPACE,
		CANCEL:		 webdriver.Key.CANCEL,
		CLEAR:		 webdriver.Key.CLEAR,
		COMMAND:	 webdriver.Key.COMMAND,
		CONTROL:	 webdriver.Key.CONTROL,
		DECIMAL:	 webdriver.Key.DECIMAL,
		DELETE:		 webdriver.Key.DELETE,
		DIVIDE:		 webdriver.Key.DIVIDE,
		DOWN:		 webdriver.Key.DOWN,
		END:		 webdriver.Key.END,
		ENTER:		 webdriver.Key.ENTER,
		EQUALS:		 webdriver.Key.EQUALS,
		ESCAPE:		 webdriver.Key.ESCAPE,
		F1:			 webdriver.Key.F1,
		F10:		 webdriver.Key.F10,
		F11:		 webdriver.Key.F11,
		F12:		 webdriver.Key.F12,
		F2:			 webdriver.Key.F2,
		F3:			 webdriver.Key.F3,
		F4:			 webdriver.Key.F4,
		F5:			 webdriver.Key.F5,
		F6:			 webdriver.Key.F6,
		F7:			 webdriver.Key.F7,
		F8:			 webdriver.Key.F8,
		F9:			 webdriver.Key.F9,
		HELP:		 webdriver.Key.HELP,
		HOME:		 webdriver.Key.HOME,
		INSERT:		 webdriver.Key.INSERT,
		LEFT:		 webdriver.Key.LEFT,
		META:		 webdriver.Key.META,
		MULTIPLY:	 webdriver.Key.MULTIPLY,
		NULL:		 webdriver.Key.NULL,
		NUMPAD0:	 webdriver.Key.NUMPAD0,
		NUMPAD1:	 webdriver.Key.NUMPAD1,
		NUMPAD2:	 webdriver.Key.NUMPAD2,
		NUMPAD3:	 webdriver.Key.NUMPAD3,
		NUMPAD4:	 webdriver.Key.NUMPAD4,
		NUMPAD5:	 webdriver.Key.NUMPAD5,
		NUMPAD6:	 webdriver.Key.NUMPAD6,
		NUMPAD7:	 webdriver.Key.NUMPAD7,
		NUMPAD8:	 webdriver.Key.NUMPAD8,
		NUMPAD9:	 webdriver.Key.NUMPAD9,
		PAGE_DOWN:	 webdriver.Key.PAGE_DOWN,
		PAGE_UP:	 webdriver.Key.PAGE_UP,
		PAUSE:		 webdriver.Key.PAUSE,
		RETURN:		 webdriver.Key.RETURN,
		RIGHT:		 webdriver.Key.RIGHT,
		SEMICOLON: webdriver.Key.SEMICOLON,
		SEPARATOR: webdriver.Key.SEPARATOR,
		SHIFT:		 webdriver.Key.SHIFT,
		SPACE:		 webdriver.Key.SPACE,
		SUBTRACT:	 webdriver.Key.SUBTRACT,
		TAB:		 webdriver.Key.TAB,
		U:			 webdriver.Key.U
	},

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
		return elem;
	},

	// Retrieve the WebDriver instance from a WebElement
	// getDriver :: WebElement -> WebDriver
	getDriver: elem => elem.getDriver(),

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