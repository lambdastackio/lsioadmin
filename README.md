## lsioAdmin

Admin interface for SDS (Software Defined Storage) built using [React](https://facebook.github.io/react/) on the frontend and Rust on the backend.

Initial focus is on Ceph:

```
Object Store
Block Storage
File System
```

### Folder Structure and App Model

We use model structure proposed by facebook by using the [`create-react-app`](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#updating-to-new-releases).

This model allows us to use react-scripts to build and deploy instead of creating and maintaining custom webpack configs.

JavaScript based projects have no real standard which is especially true when looking at React JS built code bases. Because of that we created a document to explain the layout of the project which can also be used for other projects.

[Folder Structure](docs/folder_structure.md)

### React JS

As stated, this project was bootstrapped with React. The process created a `react.md` that provides a number of good links which can be found [here](docs/react.md).

### Offline Fonts

In a corporate environment you usually do not have access to the outside world so fonts, javascript and other assets need to be made available offline. GoogleFonts can be found in the LambdaStack Project repo.

There is a /public/css/fonts.css that contains references to the self-hosted fonts used from GoogleFonts. The Open Font License for the fonts can be found in `OFL.txt`.

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
- Run `npm run stat`
- Going to [http://localhost:3000](http://localhost:3000) will render an empty dashboard skeleton in the client-side using ReactJS.
- Go to [http://localhost:8000](http://localhost:3000) to see local development version
- Use [React Developer Tools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) to understand the components hierarchy and structure and to track down bugs.
