This directory holds all of the loader functions ([`react-loadable`](https://github.com/jamiebuilds/react-loadable#waiting-to-render-on-the-client-until-all-the-bundles-are-loaded)) for the app. Keeping them in a single directory keeps things organized and allows for easy exporting for preloading. 

Each loader contains all of the actions and helpers required by the Component. They are contained in the props `actions` and `helpers` as an object. 

PreLoader files are for when a Loader needs special handling when loading.
