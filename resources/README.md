## Resources Directory

This directory contains resources that "may" be used. Meaning, these items found here are dependencies that work with a combination of React and non-react DOM items such as JQuery etc.

The resources here are usually updated to keep the latest version of the tools but it's mainly used as a resource reference where parts of these resources may be used in the actual "real" app.

### UPDATES

- [UI Elements](https://github.com/booleanhunter/ReactJS-AdminLTE/tree/master/public/src/pages/ui-elements) turning up.

    [Click here](http://ec2-52-74-208-196.ap-southeast-1.compute.amazonaws.com:8000/UI/general.html) to see it live


- [Timeline](https://github.com/booleanhunter/ReactJS-AdminLTE/tree/master/public/src/pages/timeline-page)

    [Click here](http://ec2-52-74-208-196.ap-southeast-1.compute.amazonaws.com:8000/timeline.html) to see it live


- [Widgets](https://github.com/booleanhunter/ReactJS-AdminLTE/tree/master/public/src/pages/widgets-page)

    [Click here](http://ec2-52-74-208-196.ap-southeast-1.compute.amazonaws.com:8000/widgets.html) to see a live preview!

    ![](https://github.com/booleanhunter/ReactJS-AdminLTE/blob/master/screenshots/widgets.png?raw=true)


#### Instructions to run

Installing on OSX

It's recommended to use homebrew for your package manager on OSX. It makes life easier.

If you do not have homebrew installed then go to:

`http://brew.sh/`

Follow the instructions for installing it.

Update homebrew first

`brew update`

Install Node.js and Yarn (Yarn is a replacement for npm)

`brew install node`

`brew install yarn`

- Install nodejs and yarn (yarn is recommended over npm since it works a lot better)
- Go to the project's root folder from your terminal and run `yarn install`
- Run `node server.js`
- Going to [http://localhost:8000](http://localhost:8000) will render an empty dashboard skeleton in the client-side using ReactJS.
- Go to [http://localhost:8000/widgets.html](http://localhost:8000/widgets.html) to see available widgets in ReactJS.
- Use [React Developer Tools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) to understand the components hierarchy and structure and to track down bugs.


#### For development

- React Hot Loader can be used to ease your development workflow. This can be done by installing dev dependencies from `package.json` file. If you haven't, then
run `yarn install webpack-dev-server` and `yarn install react-hot-loader`.
- You can run `yarn upgrade` to keep your dependencies updated.
- Then in your HTML, change your javascript bundles' source paths to point to the webpack-dev-server proxy in your `script` tags. So if you have something
like this

```html
<script src="/dist/js/vendors.js"></script>
<script src="/dist/js/app.bundle.js"></script>
```

change this to

```html
<script src="http://localhost:8080/dist/js/vendors.js"></script>
<script src="http://localhost:8080/dist/js/app.bundle.js"></script>
```

For a detailed explanation on setting up a workflow using Webpack, check out - [Webpack for The Fast and The Furious](https://medium.freecodecamp.com/webpack-for-the-fast-and-the-furious-bf8d3746adbd#.fptxktah9)
