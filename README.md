# NCamp'18 - Vue.js Workshop

## Agenda (final (maybe))

### Part 1 - Teaching (~45 minutes)
1. Introduction
    1. What is Vue.js
    2. Requirements / Getting started
    3. CLI, official packages (Core, Router, Vuex)
2. The Vue Instance
    1. Creating a Vue Instance
    2. Data & Methods (& other Props)
    3. Instance Lifecycle
3. Template Syntax
    1. Interpolation
    2. Attribute binding
    3. Directives
    4. Event listener
4. Class and Style bindings
    1. Class and style bindings
    2. Dynamic classes and inline styles
5. Conditional rendering
    1. If, else, else if
    2. Conditional grouping
6. List rendering
    1. Loop over array
    2. Loop over objects
    3. Loop grouping
7. Event handling
    1. Listening to events
    2. Emitting events
    3. [Optional] Event modifiers
8. Form input bindings
    1. Two way binding (v-model)

### Part 2 - Time to pratice (~60 minutes)
1. Presenting the target application
2. Pratice / Hands on (dev environment should be prapared so attendees can focus on coding the Vue application)

### Part 3 - Wrap up & Closing (~15 Minutes)
1. (Optional, if time is left) Introducing components / refactor application using componends
2. What we've learned & discussion
3. Closing words

## ToDo
* @tmaynx Create presentation and code examples (Part 1)
* @noblica Code target application (Part 2)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
The development environment is prepared for you. You have to run 2 commands in 2 separate terminals. The commands are as follows:

```
npm run serve
```
and: 
```
npm run fakeServer
```

The first command will compile the application, and watch the `src/index.js` file, while the second one will create a fake server which will serve our data and our application, on *localhost:3000*.

*Hot reloading is not supported.* So please, when you make changes to the code, refresh the page to see the changes.


A helper file has also been created. The file is `src/dataMethods.js`. You can use it for your CRUD operations, instead of writing them manually.

There are several examples to help you along your way. They are on the following branches in the current repo:

`binding-example` - The example on how to use v-model to bind some data from your input element to your Vue component.

`v-if-example` - An example on how to use v-if to switch element visibility.

`v-for-example` - An example on how to use the v-for Vue directive, to iterate through an array in your view.

`manipulate-elements-example` - An example on how to use Vue to manipulate element properties (like disabling an input, or hiding an element).

All the javascript code is contained in the `src/index.js` file, and all the HTMl is contained in the `public/index.html` file.


The implementation on the `workshop` branch should be done in these files as well.


If anything is unclear, please don't hesitate to ask.

*Happy coding!*
