leStandsJS backend
==============
This branch is the light backend for the backboneJS app that is on the `master` branch.

# Tools used
 * NodeJS
 * Restify module
 * pg modules

# Deployment
## Production
Deployed to heroku at [lestands-api.herokuapp.com](http://lestands-api.herokuapp.com).

## Staging
Deployed to heroku at [staging-lestands-api.herokuapp.com](http://staging-lestands-api.herokuapp.com).

## How to run locally
 * switch to `backend` branch
 * in the code directory, run `npm install`
 * then run `npm start`

## How to deploy to heroku
 # First, you need to be added to the respective heroku repositories. Contact @drewrwilson or @techieshark to be added.

 # Then you need to add the two remote repos to your git. Add the production one like this:

`git remote add production https://git.heroku.com/lestands-api.git`

 # Add the staging API like this:

`git remote add staging https://git.heroku.com/staging-lestands-api.git`

 # You can push to heroku staging with this:

`git push staging backend:master`

 # Push to heroku production server with this:

`git push production backend:master`

# API Routes
Currently the API routes are:
## GET routes
 * [/stands](http://lestands-api.herokuapp.com/stands) (`GET`)- returns json of all stands and their attributes
 * [/stands/:standID](http://lestands-api.herokuapp.com/stands/1) (`GET`) - returns json for a stand with a given `standID`. Returns attributes like `name` `description` `geoLat` `geoLong` and also an array of `updates`
 * [/stands/:standID/updates](http://lestands-api.herokuapp.com/stands/1) (`GET`) - returns json array of updates for a stand with a given `standID`.
 * [/stands/:standID/updates/:updateID](http://lestands-api.herokuapp.com/stands/1/updates/1) (`GET`) - returns json array of attributes for a single update with `standID` which is for specific stand with `standID`.


# Misc notes
While in development, we're just using one dyno on heroku for production and staging APIs. So it may take a minute or so for the the API to load the first time you hit it.
