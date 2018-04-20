Boilerplate for a React, Redux, and WebPack/Babel app. There is no data layer set up.

After cloning, run `yarn install`

To start: `yarn start`

Styles are run through LESS. Add each `.import.less` file to `src/config/less/main.less`

## Routing
The app has `react-router` installed, but it is easy to remove if necessary:

- Remove `<LayoutRouter />` from `AppLayout.jsx` and replace with the SPA.
- Remove `layout/Navbar/` - it is no longer necessary.

## Routing and S3
To make the routing work elegantly, you need to set up a server side redirect to index.hmtl for each route.
If you host the app on S3, you'll have to do thit by (hijacking 404's with Cloudfront)[http://aserafin.pl/2016/03/23/react-router-on-amazon-s3/].