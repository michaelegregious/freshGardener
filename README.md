# Urban Forager

_A Hackathon App Built in 3 Days, to Explore the Google Maps API_

One of my favorite things to do with my family in the summertime is to go foraging around our neighborhood for fruit. Are you into foraging for fruit in your neighborhood? Wanna share the location of your favorite fruit tress? Urban Forager is for you!

Most of the fruit trees near us are Serviceberries or Mulberries, but I've taken the liberty of seeding the parkway here with a few other natives that you'll encounter in Chicago.

You can add, edit, remove (if the city comes sadly to take one away).

Happy foraging.

This version of Urban Forager is an MVP to show proof of concept for adding markers with images and related info to Google Maps. It was built using React, Redux and is scaffolded with a PostgreSQL database, but as of right now, the DB isn't connected.

Images are presently added with an image url.

## Setup

To run this app on your local machine, please follow the steps below:

1.  Open your terminal
2.  cd Desktop (if you want to self-title your own folder complete step 3-6, otherwise skip to step 5)
3.  mkdir urban-forager
4.  cd urban-forager
5.  git clone https://github.com/michaelegregious/urban-forager.git
6.  Open in your text editor of choice
7.  npm install
8.  npm start
9.  Open a browswer and navigate to http://localhost:8080/

## Start

Early in the project, I provisioned a database and test database in case I wanted to add users and administors. Before 'npm run start-dev' will spin up, please run 'createdb urban-forager' and 'createdb urban-forager-test'. I used a PostgreSQL database. There is no need to run the seed as I did not use this feature.

Once you have opened the project in your editor of choice, are inside the directory, and have provisioned for the databases, the terminal command npm run start-dev will open the project in the development environment. It will be available in the browser for viewing at localhost:8080
