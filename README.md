# Productiv

## Description

A Rails backend, web API that supports a frontend React application. An application that can help users keep their lives in order and have more productive days. This application enables different users to make a profile, have a selection of different habits to choose from, create priorities to be placed on a priority bar and todos on a todo list.

## Getting Started

### Environment Setup

#### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

#### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Prerequisites

    Installation

      - Clone the repo, run `$ git clone https://github.com/jwh917/productiv` .


      - Then run `$ bundle install` To install the gems.


      - Then run `$ rails db:create` To create the database.
      
    
      - Set up the database by running `$ rails db:migrate seed` .

      - Then run `$ npm install --prefix client` To install all dependencies

      You can use the following commands to run the application:

      - `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
      - `npm start --prefix client`: run the frontend on
        [http://localhost:4000](http://localhost:4000)

### Usage

    A user has a one-to-one relationship with a profile 

    - Every user would have one, and only one, profile.
    - Every profile would have one, and only one, user.

    A profile has a one-to-many relationship with habits

    - Every profile can have many habits
    - All habits belong to a profile

    A user has a one-to-many relationship with todos and priorities

    - Every user can have many todos
    - All todos belong to a user
    - Every user can have many priorities
    - All priorities belong to a user

    A user also has a many-to-many relationship with todo categories
    and priority levels using `has_many :through`

    - A user has many todo categories through todos and each todo category can have many todos.
    - similarly, a user has many priority levels through priorities and priority level can have many priorities.


    The application uses Active Record to interact with the database and API routes built with Sinatra handle several different CRUD actions.

