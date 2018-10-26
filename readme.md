Boilerplate for a React, Redux, and WebPack/Babel app. There is no data layer set up.

After cloning, run `yarn install`

To start: `yarn start`

To build a production version in `/dist`, `yarn build`

Styles are run through LESS. Add each `.import.less` file to `src/config/less/main.less`

## Routing
The app has `react-router` installed, but it is easy to remove if necessary:

- Remove `<LayoutRouter />` from `AppLayout.jsx` and replace with the SPA.
- Remove `layout/Navbar/` - it is no longer necessary.
- Remove `config/RouterLinks.jsx`

## Routing and S3
To make the routing work elegantly, you need to set up a server side redirect to index.hmtl for each route.
If you host the app on S3, you'll have to do thit by (hijacking 404's with Cloudfront)[http://aserafin.pl/2016/03/23/react-router-on-amazon-s3/].


## LESS
Less has a single entry point (unless you split it up, which is a good idea) in `AppContainer.jsx`. Every `.less` file should be imported into `config/less/main.less`. This way none of the individual LESS files need to worry about importing variables, etc., as long as files are imported into `main.less` in the correct order.

## Code Splitting
Code splitting is done with (`react-loadable`)[https://github.com/jamiebuilds/react-loadable]. All of the loaders are stored in `src/loaders/`, so that they can easily be called from any component. 

The current setup splits along routes (there's nothing else to split), but it works for components too.
- You may want to increase `splitChunks.minSize`; it's set to 100 to get the boilerplate code to split


## Favicon
This is injected through WebPack, so add a `favicon.ico` to the images directory and uncomment the corresponding line in both `webpack.dev.js` and `webpack.prod.js`.


## Static files
Any files you do not want run through the webpack build process should go in `src/static`.