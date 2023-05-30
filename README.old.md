# recastly_1
# Bare Minimum Requirements
 Inside of src/index.js, render the App component to the DOM and explore the codebase to get an understanding of each component's responsibility
ReactDOM's API Change
The React library gives you the ability to define components but you'll need the ReactDOM library to render those components to the DOM. Version 18+ of the library includes a new API for rendering your root component (e.g. App) to the page.

Check what version of ReactDOM the sprint uses by investigating its dependencies in package.json. (React and ReactDOM are usually given the same version since the libraries are so often used together). Use the appropriate version of the API to complete this requirement.

Latest documentation 
< v18 documentation 

This sort of API change is commonplace in software engineering. Dependency resolution is made easier with tools like NPM but it is on you to ensure you are using the correct tools and searching for / referencing the correct version of documentation when solving problems.

 Use ES6. There are a few new features that play very nicely with React. Insist on using them throughout this sprint when appropriate:
# Import Statement 

## https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

# Export Statement 
## https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

# Classes 
# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 (There is a way to write React components with classes although it is largely considered "legacy" and not explored in the sprint).
Arrow function expressions  , especially to exploit its quality of binding this to the lexical scope
# Shorthand object property and method syntax 
# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

# Template strings 
# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

# Default parameters 
# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

# Destructuring 
# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

<Create a dynamic Video List component>
When building out front-end applications, it can be productive to temporarily ignore the complexity of working with real data, and mock out "fake" data instead. Components make this easy because they render the same with "real" data from a live API or "fake" data from a file.

You're going to use the sample data in src/data/exampleVideoData.js to build out the VideoList and VideoListEntry components.

# Import exampleVideoData.js into your App component so it can be used by your React components
# Pass exampleVideoData into the VideoList component
# Refactor the VideoList component to dynamically render one VideoListEntry component for each video object in exampleVideoData
# Refactor the VideoListEntry component to dynamically render based on the video object it receives
# Make sure the tests for VideoList and VideoListEntry are passing. You can open the tests with npm test
# When it's all set up, you should see the titles, thumbnails, and descriptions of some React Tutorials on the page. If you notice a Warning in the console about a "unique 'key' prop", know that this has to do with React's performance  , but you can ignore it if you wish.

<Create a dynamic Video Player component>
Videos are played by passing a source url to the iframe tag inside the VideoPlayer component. The video associated with the id included after https://www.youtube.com/embed/ will get played. Because this is also a component, we can build it out with our example data.

# Pass a single video from exampleVideoData into VideoPlayer as a prop
# Update VideoPlayer to play the video it is passed and display its title and descriptions
# Make sure the tests for VideoPlayer are passing. You can open the tests with npm test
# Hook together the Video List and Video Player components
# Now it's time to make the components interact. In React, sibling components can not directly access each other, so they need the help of a parent component to manage communication between them. In this case, App is the parent component for the sibling components VideoList and VideoPlayer.

# Before we begin we will review a feature called hooks in react. Read this resource  on the state management hook called useState.
# To help understand the logic behind the syntax of this hook you will want to read up on Array Destructuring.
# Initialize a state in App to keep track of all the videos in the video list.
# Initialize a state in App to keep track of the current video in the player.
# Pass down these states as props to the children components. Continue to use the example data.
# Make it so that when the title of a VideoListEntry is clicked, that video is displayed in the player. Do not add state to any of the children components.
# Make sure all the active tests for App are passing. You can open the tests with npm test
REST Server
Due to the rate limiting of a free YouTube API Key, we set-up a server for you to use that will cache results from YouTube to allow you to make more queries before hitting the daily limit. This is the same server you used for chatterbox, and thus can use the same API key.

NOTE: The server will return an empty array if no videos were stored AND the YouTube API Key you passed in is out of requests for the day. You can overcome this by either searching for items you already queried, OR you can generate a new API key in another project on the Google API and restart your daily limit. *
Obtaining a GITHUB API Key
Our API server authenticates users with github personal access tokens. To obtain a token:

# Go to: https://github.com/settings/tokens
# Click Generate new token
# Give the Token a Description (Hackreactor API, or whatever is most descriptive to you)
# Under Select Scopes: Select the following: (You may select more for more featuers this API will offer down the road)
# read:org
# user
# read:user
# user:email
# user:follow
# Generate Token
#  This key should go in the API_KEY variable in src/config.js.
# Set up interactions with the YouTube API
# ** YOU MUST ALSO COMPLETE THIS STEP TO OBTAIN A KEY **

You'll need a developer key in order to access videos from the YouTube Data API. This is common practice with third party APIs because they want to keep track of who is accessing their data, enforce rate limits, and even sometimes make money. Access to the YouTube API is free, all you need is a Google Account.

#  Go to Google's YouTube API 
#  If prompted, select a project or create a new one. It doesn't matter what you name a new project
#  Click Enable and then Credentials in the left menu
#  Click Create Credentials
#  Select API key from the drop-down and then copy your API key
#  Make your key available to the rest of your application from a new file, src/config/config.js
# Create a reusable API helper
# To search for YouTube videos, you'll use the API's videos endpoint https://app-hrsei-api.herokuapp.com/api/recastly/videos. To help keep your code organized, write a helper function that is solely responsible for interacting with this endpoint. In lib/searchYouTube.js fill out the searchYouTube function. It should:

 Use axios to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
 Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
 Accept an q string to search for
 Make sure all the tests for searchYouTube are passing. You can open the tests with npm test
Note: the API also accepts a query param of youtube_api_key with your YouTube API key to get additional searches once our key reaches its daily limit.
Initialize the app with live data
Before integrating live data, you should take a minute to appreciate how far you got with the exampleVideoData. Now you can tackle the complexity of starting to use actual data in isolation, and assuming the shape of the live data is the same as the data you mocked out, everything will continue working. If you made your helper correctly, this following section should be simple.

 As you've done with other modules, make searchYouTube available for consumption and pass it as a prop to your app
 Replace exampleVideoData from the initial states of App with empty initial values, appropriate to the type of values it is expecting
 Time to research another hook called useEffect found at this resource  . Now this hook is a tricky one so make sure to take close attention to the details.
 Utilize the useEffect hook to render your app with live videos returned from searchYouTube
 Remove the x from the pending tests in AppSpec.jsx, and make sure all the App tests are passing. You can open the tests with npm test
Implement live-search
Build out Search and update other components:

 As a user types into the input box, the VideoList and VideoPlayer components are updated with videos from the YouTube data API that match the value of the input
 Debounce ajax requests triggered by the Search component to occur at most once every 500ms. (Imagine if YouTube's API wasn't free :O)
 Make sure all the tests for Search are passing. You can open the tests with npm test
Advanced Content
Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer. The following problem is no exception, and you may have to do a fair amount of work to get enough context to get started on the problem itself.

 Create a VideoDetails component that makes another request to the YouTube API and renders more complete video information to the page
 Create an auto-play toggle button that will automatically start playing the video selected from VideoList
 Give each video it's own unique url with the help of React Router 
 Handle pagination of search results via the YouTube API
 Refactor searchYouTube to use the fetch  function to make HTTP requests, instead of $.ajax
 Refactor your application to use Redux 
 Integrate with the parse server from the chatterbox-client sprint to create a Twitch-like experience. You will need to build additional models, collections and views. (Don't let yourself be blocked by XSS, solve the XSS problem before it starts!)
 Initially, use a single chat feed for the app.
 Then, refactor the chat feature so there is one chat room per video. When you select a video, that video's chat history loads. Only the currently selected video should be updating its chat messages. All others should only load when selected.
 Use a module loader like webpack  , or SystemJS  instead adding them as script tags
<Resources>

# Javascript Modules 
# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

# Import Statement
# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

# Export Statement
# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

# ES6 Features 
# https://github.com/lukehoban/es6features

# Facebook's React Tutorial 
# https://legacy.reactjs.org/tutorial/tutorial.html

# YouTube API 
# https://developers.google.com/youtube/v3/getting-started?hl=fr

# React Hooks Documentation 
# https://react.dev/reference/react

# Intro to Redux 
# https://app.egghead.io/playlists/fundamentals-of-redux-course-from-dan-abramov-bd5cc867