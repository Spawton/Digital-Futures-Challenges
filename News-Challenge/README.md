# News Summary Challenge

### Task

You'll test-drive a single page application in React that send requests to the Guardian API to get Headline and Article data and display them. 

### Serving your app

You'll use React's toolchain to take care of serving your HTML, CSS and JavaScript files.  

## User Stories

Some of these stories will need decomposing if they seem too large.

### Standard
```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

### Extended

```
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```

```
As a busy politician
So I can get a few more details about an important story
I can see click a news article summary title which links to the original article
```

```
As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
```

## Mockups

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

## API

### API request rate limits and stubbing

The Guardian and Aylien text summarisation APIs are severely rate-limited.

**Please stub your tests so you don't exceed the daily limit.  Otherwise, all requests will be rejected and your app will stop working!**

### Guardian API example

**Please stub your tests to avoid exceeding the API rate limit**

If you wanted to get the content of an article from the Guardian API, this is the cURL request you might make.  Notice how it has a query parameter for `api-key`.

```sh
# Search endpoint
curl "https://content.guardianapis.com/search?q=coronavirus&show-fields=body&api-key=API_KEY"
```
```sh
# Single Item endpoint
curl "https://content.guardianapis.com/world/2021/mar/22/link-between-diabetes-and-coronavirus-infections?show-fields=body&api-key=API_KEY"
```

#### Example request data

[Mock Data](./mockNewsData.json) - contains a request to the Guardian API with fields selected that will help you with the challenge.  The actual request made was to:

https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=INSERT_YOUR_KEY_HERE

You will need to replace `INSERT_YOUR_KEY_HERE` with your own Guardian API key.  Use this data whilst developing, serving it from `json-server` - it will help on the request rate limit in the API.

<!-- ### Aylien text summarisation API example

**Please stub your tests to avoid exceeding the API rate limit**

If you wanted to use the Aylien API to summarise an article by Bret Victor, this is the cURL request you might make.  Notice how it has headers to authenticate with the Aylien API.

```
curl "https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html" \
  -H "X-AYLIEN-TextAPI-Application-ID: APPLICATION_ID" \
  -H "X-AYLIEN-TextAPI-Application-Key: SECRET_APPLICATION_KEY"
```
-->

## Resources

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
<!-- * [Aylien text summary API docs](http://docs.aylien.com/docs/summarize) -->
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---
---
---

# Running my React application

```
-Run the dependencies on your root folder :-
-npm install
-Start the server :-
-npm start

```
## Steps to run the server on different port

```
npm install -g json-server
npx json-server --watch -p 3333 .json

```
## Installing axios for the https requests

```
npm i axios

```
## Installing Bootstrap for styling

```
npm i bootstrap

```
## My Solution

I'm going to start by working on completing the standard criteria first and then see if I can complete the extended criteria If I have time.

## General idea of how I will progress

- Start with a mock
- Break the UI into a component hierarchy
- Build a static version in React
- Identify the minimal (but complete) representation of UI state
- Identify where your state should live
- Add inverse data flow

## Start with a mock 

We have been provided with two mocks to work from and we have also been given some mock data in JSON format to use initially before moving on to using the Guardian API. 

## Break the UI into a component heirachy

I will break the mock we were given into a component heirachy. The standard criteria focuses on the first mock (The Headlines page) but I will also create my component heirachy so that I can move on to the extended criteria afterwards (The Article summary page). 

### Headlines page

![Headlines page component heirachy](/images/Headlines.png)

| Components     | Colour                                    |
| -------------- | ----------------------------------------- |
| **App**        | <span style="color: green">Green</span>   |
| **Header**     | <span style="color: red">Red</span>       |
| **AllStories** | <span style="color: purple">Purple</span> |
| **Story**      | <span style="color: yellow">Yellow</span> |
| **Footer**     | <span style="color: blue">Blue</span>     |

### Articles summary page

![Article page component heirachy](/images/Article.png)

| Components    | Colour                                    |
| ------------- | ----------------------------------------- |
| **App**       | <span style="color: green">Green</span>   |
| **Header**    | <span style="color: red">Red</span>       |
| **Story**     | <span style="color: purple">Purple</span> |
| **StoryText** | <span style="color: yellow">Yellow</span> |
| **Article**   | <span style="color: orange">Orange</span> |
| **Footer**    | <span style="color: blue">Blue</span>     |

## Build a static version

I will build a static site using the mock data from the JSON file `mockNewsData.json` I will test the various parts as I go along

I have installed bootstrap as a dependency so that I can use it for my styling using the command `npm install bootstrap`

I will utilise Boostrap 5 for helping with layout and my own css style sheet named 'style.css'

I will make bootstrap CSS available for my project by using the following import
`import "bootstrap/dist/css/bootstrap.min.css";`

## Tests for Header and Footer and App
1) Written a snapshot test for the Header component to assure it renders properly
2) Written a snapshot test for the Footer component to assure it renders properly
   
## Tests for App
1) Tweaked a failing test in App.test.js so that it checks to see if the text 'DFX News' is in the document
2) added a test to the App test file to check that it renders correctly

## Tests for All Stories
1) Test that all news stories have images
2) Test that all news stories have a headline
3) Test that it should create a news object when the contructor is called passing in the arguments
4) Test that it should render the correct number of Stories according to the mock data supplied

## Tests for Article
1) Test that it should render news story content

I have had trouble trying to get my article test to work (testing that the Article page renders the news story content) I have had a look into the React router docs to see if I can find something to help with the test. I have seen there is a section for 'Histories' these allow you to create an in-memory history object that does not interact with the browser URL. This may be the answer to my testing troubles. I shall look through the different options and see if I can implement one of them into my test. 

In the end I wasn't able to match the bodyText to the API bodyText due to my code which adds paragraphs into the text using <br> tags. So I have matched them using a testId tag instead.

## Identify the minimal (but complete) representation of UI state

It looks to me that the **News data** coming from the API will be state within my application. Once I've connected the Guardian API to my application (instead of using the mock data from the JSON file) this data will need to be state as it will be constantly updated by the Guardian and so will change over time. Therefore any **News data** should be kept as state. 

## Identify where your state should live

The **News data** will need to be accessed by the `Story` component and then information from the `Story` component will need to be passed to the `AllStories` component. I can't put state in either of the `AllStories` component or the `Story` component as it needs to go in the highest common parent so that the data can be used by all components (including my new `Article` component) therefore it will need to go in the `App` component.

## Add inverse data flow

Looking at the criteria for this challenge, It doesn't look like there is a need to add inverse data flow with these use of a callback function being passed as a prop to a component.

## Adding responsiveness to my App

I've utilised Bootstrap and some slight css tweaking in my own css file named `style.css` to address this. I believe it is responsive as I have inspected the App in the browser and used the device toolbar to check how the App looks on different device sizes and I'm happy with how it looks. It's very simple but clean. 

## Footnote

I was struggling to find a way to format the text coming from the `bodyText` used in the **Article** component. It was coming out a one massive paragraph which didn't look very pleasing. I asked my fellow cohort if anyone had come up with any snazzy solutions to combat this issue and Evie( GitHub `https://github.com/eingold`) came to my rescue. She managed to find a solution with uses a function to randomly create differently sized paragraphs throughout the text. This is a great and quick solution to use whilst completing this challenge. I have included the code I used from Evie below:

```
function replaceEveryNth(value, search, replacement, nthCount = 1) {
        let matchCount = 0;
        return String(value)
            .split(
                RegExp(`(${search})`)
            )
            .map(str =>
                ((str === search) && (++matchCount % nthCount === 0))
                    ? replacement
                    : str
            )
            .join('');
    }
return
    {replaceEveryNth(articleText, ". ", ".\n", 3).split('\n').map(e => <>{e}<br /><br /></>)}
```  


## Strange warning in the console

I have one strange warning in the console left that I was unable to clear. Orginally it started off with an error which came up in my tests out of nowhere. The error didn't exist for the majority of the coding but came up near the end. It seemed to be an issue with either jest or axios. I tried many ways to clear the error which didnt work. It was stopping me from being able to run my App.test.js tests (even though they had been running fine for quite a while) I eventually saw something online which suggested to `npm install babel` which cleared the error!......however it added a warning which I have been unable to clear. At least all my tests run properly again so that's a start. Hopefully Lucas can find out with the warning was when marking my challenge! 