## Walkthrough

### Getting Started - Hello World

Create a new application using the `create-react-app` script. I'm using `yarn` so the command is slightly different than theone you might be used to if you are a `npm` user.

```
$ yarn create react-app learning_redux_demo
```

Make sure to `cd` into your newly created application folder and open your application in your code editor. I'm using VSCode with CLI commands enabled, so I can open my project with a single terminal command:

```
$ cd learning_redux_demo
$ code .
```

I would also suggest that you fire up the development server and take a look at your app in the browser. You can actually keep it running while you make changes to your code for the most part. The hot reloding allows you to do that and instantly see your changes come across in thee browser. For most part anyway. Sometimes you DO have to restart your server, so please keep that in mind. More on that later.

I usually take a moment to clean up the scaffolded code. IMO, we should always keep our code base clean and avoid having too many files if we don't need them. I get rid of some of the `css` and `test` files, as well as the `svg` file with the spinning React logo. I suggest that you do the same. As a personal preference, I also change the suffix on the `App` component to `.jsx`. 

Your folder and file structure should look somethiing like this:

```
├── README.md
├── node_modules
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│   └── serviceWorker.js
└── yarn.lock
```
You will note a few errors in your browser as you delete the files. That is, of course, caused by the imports in your `index.js` and `App.jsx`. Make sure that none of the deleted files are being imported in any of these two files. At this stage, I usually also clean up the returned `jsx` by the `App` component.

```javascript

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
```

```javascript
// src/App.jsx
import React from 'react';

function App() {
  return (
    <>
      <h1>
        Hello World
      </h1>
    </>
  );
}

export default App;
```

**At this stage, we have a "Hello World" application, up and running. So far, so good.**

## CSS
We will use Semanic-UI for React to add some styling to our application. You can, of course choose any other CSS framework or totally omit the styling part if you want. I really like the SemanticUI library and the available wroapper for React, so I'll go ahead and use it in this demo.

I'll start by adding the dependencies  using `yarn`:

```
$ yarn add semantic-ui-react semantic-ui-css
```

And as the next step, I'll make the css available in the entry point of the app (`src/index.js`) and import some of the components to my `App` component.

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
```

```javascript
// src/App.jsx
import React from 'react';
import {Container, Header} from 'semantic-ui-react'

function App() {
  return (
    <>
      <Container>
        <Header as='h1'>Hello World</Header>
      </Container>
    </>
  );
}

export default App;
```

** Now, the "Hello World" app has been extended with some css components...**




