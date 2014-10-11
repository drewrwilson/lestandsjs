lestandsJS
==========

## What is leStands?
[leStands](http://lestands.com) is a web application that helps volunteers all over the country track the performance of free literature stands.

This is a new javascript version of [lestands](http://lestands.com). leStands is primarily a frontend application with a lightweight API backend.

Made by Drew and Peter.

### Tools used
* Frontend: The frontend uses BackboneJS, UnderscoreJS, jQuery, Bootstrap, FontAwesome, and HandlebarsJS.
* Backend: Right now the backend is a static mockup of an RESTful json API. In the future it will be a NodeJS Express application. We have not yet decided what kind of datastore we will use.

## How do I run application locally?
1. clone the repo to your local machine:

  `git clone xxx `
2. change directories to your new directory:

  `cd xxx`
3. run a local server

  ` python -m SimpleHTTPServer 8000 `
4. open your brower and point it to: http://localhost:8000/

# How can I help?
## Tell us about a bug or suggest a feature
This project is using the issue tracker on this github repo as the main source for issues, bugs, and features. If you have a feature idea or if you have noticed a bug, please don't hesitate to file an issue.

# How do I deploy this application so my changes end up on the live site?
This is the process that we use to integrate new changes into the code:
1. Make a change locally and commit it to a branch. Please try to name your branch with some detail about the feature or bug that it addresses.
2. Push your commits to branch on this repo and start a pull request.
3. Peter or Drew will review the pull request and either leave comments or merge it into the master branch.
4. When we have a new set of features that we want to launch, we will deploy the code to heroku and all changes will appear on [leStands](http://leStands.com).
