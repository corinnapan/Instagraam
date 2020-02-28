funny cheetahs: https://media.giphy.com/media/tHpd417AsZvXlgzZ5g/giphy.gif

Title: A working title for your app. (Feel free to have some fun with this.) "Instagraam" 

Description: 4 to 5 sentences in non-technical speak summarizing the features, functions, and goals.
Andre gave me the idea of stretching my initial idea--

(to create a webpage where people could navigate to a home page and click from a list of genres of photos to be directed to a new page with photos from that genre. They could also click on a "random" button that would allow them to see a randomly generated image from the Unsplash API collection)

--and suggested that I do a mock-up of Instagram. Voila! That is what I strived to do.

Wireframes: Mockups of your app on desktop, tablet, and mobile.


Component Heirarchy: A visual tree of your components, depicting the parent/child relationships, as well as an indication of which will be class components, requiring state, and which will be functional components, taking props.


LEGEND FOR COMPONENTS:
class = *
function = ^

                          App.js (parent)*

-Header(child)^   -Home(child)^   -About(child)^   -NoMatch(child)^    -Stream(child)*
                                           
                                                                        -UserPage*(child)


API: The API you will be using and a link to the documentation.
Unsplash API

https://unsplash.com/documentation

MVP: Your goals for MVP, including the minimum, need-to-have features of your app.
Welcome Page
a live stream
when you click on a picture in the live stream, you are then directed to user's public profile

Post-MVP: Write out what your goals are for post-MVP, including nice-to-have features that you would like to implement once your MVP is complete. (If you plan to use a component library, please link that here as well.)
i would like to build on this project and add a "random user" page and add a button on the stream for users to insert their own captions for photos in the stream. 

SWOT Analysis: Heading into project week and with all your planning in mind, consider your Strengths, Weaknesses, Opportunities, and Threats as they relate to your final project. How will you overcome your weaknesses and threats?


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


