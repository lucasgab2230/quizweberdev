import { Flashcard } from "@/types/flashcard";

export const flashcards: Flashcard[] = [
  {
    id: 1,
    question: "What is the difference between == and === in JavaScript?",
    answer: "== checks for equality with type coercion, while === checks for equality without type coercion (strict equality)."
  },
  {
    id: 2,
    question: "What is a closure in JavaScript?",
    answer: "A closure is a function that has access to variables from its outer (enclosing) scope even after the outer function has returned."
  },
  {
    id: 3,
    question: "What is the event loop in JavaScript?",
    answer: "The event loop is a mechanism that continuously checks the call stack and callback queue to move callback functions to the call stack when it's empty."
  },
  {
    id: 4,
    question: "What is the difference between let, const, and var?",
    answer: "var is function-scoped and can be redeclared; let is block-scoped and can be reassigned; const is block-scoped and cannot be reassigned."
  },
  {
    id: 5,
    question: "What is hoisting in JavaScript?",
    answer: "Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during compilation."
  },
  {
    id: 6,
    question: "What is the difference between null and undefined?",
    answer: "null is an assignment value that represents no value, while undefined means a variable has been declared but not assigned."
  },
  {
    id: 7,
    question: "What is the purpose of 'use strict' in JavaScript?",
    answer: "'use strict' enables strict mode which catches common coding mistakes and 'unsafe' actions."
  },
  {
    id: 8,
    question: "What is prototypal inheritance?",
    answer: "Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects."
  },
  {
    id: 9,
    question: "What is the difference between call, apply, and bind?",
    answer: "call and apply invoke a function with a given context, while bind returns a new function with the context permanently set."
  },
  {
    id: 10,
    question: "What is event delegation?",
    answer: "Event delegation is a technique where you attach a single event listener to a parent element to handle events from child elements."
  },
  {
    id: 11,
    question: "What is the difference between synchronous and asynchronous code?",
    answer: "Synchronous code executes line by line, blocking further execution; asynchronous code allows other code to run while waiting for operations to complete."
  },
  {
    id: 12,
    question: "What is a promise in JavaScript?",
    answer: "A promise is an object representing the eventual completion or failure of an asynchronous operation."
  },
  {
    id: 13,
    question: "What is async/await?",
    answer: "async/await is syntactic sugar for working with promises that makes asynchronous code look and behave more like synchronous code."
  },
  {
    id: 14,
    question: "What is the difference between map and forEach?",
    answer: "map returns a new array with transformed elements, while forEach performs an operation on each element and returns undefined."
  },
  {
    id: 15,
    question: "What is the virtual DOM?",
    answer: "The virtual DOM is a lightweight representation of the real DOM that React uses to optimize rendering performance."
  },
  {
    id: 16,
    question: "What is the difference between state and props in React?",
    answer: "Props are read-only data passed from parent to child components, while state is mutable data managed within a component."
  },
  {
    id: 17,
    question: "What are React hooks?",
    answer: "React hooks are functions that allow you to use state and other React features in functional components."
  },
  {
    id: 18,
    question: "What is the purpose of useEffect?",
    answer: "useEffect is a hook that allows you to perform side effects in functional components, such as data fetching or subscriptions."
  },
  {
    id: 19,
    question: "What is the difference between useState and useReducer?",
    answer: "useState is for simple state management, while useReducer is for complex state logic that involves multiple sub-values or complex state transitions."
  },
  {
    id: 20,
    question: "What is memoization in React?",
    answer: "Memoization is an optimization technique that caches the results of expensive function calls to avoid unnecessary re-renders."
  },
  {
    id: 21,
    question: "What is the difference between client-side and server-side rendering?",
    answer: "Client-side rendering generates content in the browser, while server-side rendering generates content on the server and sends HTML to the browser."
  },
  {
    id: 22,
    question: "What is the box model in CSS?",
    answer: "The box model describes how every HTML element is represented as a rectangular box with content, padding, border, and margin."
  },
  {
    id: 23,
    question: "What is the difference between flexbox and grid?",
    answer: "Flexbox is one-dimensional layout for aligning items in a row or column, while CSS Grid is two-dimensional for complex layouts."
  },
  {
    id: 24,
    question: "What is the purpose of CSS preprocessors?",
    answer: "CSS preprocessors like Sass or Less add features like variables, nesting, and functions to make CSS more maintainable."
  },
  {
    id: 25,
    question: "What is responsive web design?",
    answer: "Responsive web design is an approach to make web pages render well on different devices and window sizes."
  },
  {
    id: 26,
    question: "What is the difference between GET and POST HTTP methods?",
    answer: "GET requests data from a server and appends parameters to the URL, while POST sends data to a server in the request body."
  },
  {
    id: 27,
    question: "What is REST API?",
    answer: "REST API is an architectural style for designing networked applications that uses HTTP requests to perform CRUD operations."
  },
  {
    id: 28,
    question: "What is CORS?",
    answer: "CORS (Cross-Origin Resource Sharing) is a security feature that allows or restricts resources on a web page to be requested from another domain."
  },
  {
    id: 29,
    question: "What is authentication vs authorization?",
    answer: "Authentication verifies who a user is, while authorization determines what resources a user has access to."
  },
  {
    id: 30,
    question: "What is JWT?",
    answer: "JWT (JSON Web Token) is a compact, URL-safe means of representing claims between two parties, commonly used for authentication."
  },
  {
    id: 31,
    question: "What is the difference between SQL and NoSQL databases?",
    answer: "SQL databases are relational with structured schemas, while NoSQL databases are non-relational and more flexible in data structure."
  },
  {
    id: 32,
    question: "What is normalization in databases?",
    answer: "Normalization is the process of organizing data to minimize redundancy and improve data integrity in relational databases."
  },
  {
    id: 33,
    question: "What is an index in a database?",
    answer: "An index is a data structure that improves the speed of data retrieval operations on a database table."
  },
  {
    id: 34,
    question: "What is a primary key?",
    answer: "A primary key is a unique identifier for each record in a database table that cannot be null and must be unique."
  },
  {
    id: 35,
    question: "What is a foreign key?",
    answer: "A foreign key is a field in one table that refers to the primary key in another table, establishing a relationship between tables."
  },
  {
    id: 36,
    question: "What is the difference between INNER JOIN and LEFT JOIN?",
    answer: "INNER JOIN returns only matching records from both tables, while LEFT JOIN returns all records from the left table and matching records from the right."
  },
  {
    id: 37,
    question: "What is Git?",
    answer: "Git is a distributed version control system that tracks changes in files and coordinates work among multiple developers."
  },
  {
    id: 38,
    question: "What is the difference between git merge and git rebase?",
    answer: "git merge creates a new commit to combine branches, while git rebase moves commits to the tip of another branch."
  },
  {
    id: 39,
    question: "What is a pull request?",
    answer: "A pull request is a GitHub feature that allows developers to notify team members about changes they've pushed to a repository."
  },
  {
    id: 40,
    question: "What is continuous integration/continuous deployment (CI/CD)?",
    answer: "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development."
  },
  {
    id: 41,
    question: "What is the difference between unit, integration, and end-to-end testing?",
    answer: "Unit tests individual components, integration tests interactions between components, and end-to-end tests the entire application flow."
  },
  {
    id: 42,
    question: "What is the purpose of package.json?",
    answer: "package.json is a file that holds metadata about a Node.js project and lists dependencies and scripts."
  },
  {
    id: 43,
    question: "What is npm?",
    answer: "npm (Node Package Manager) is the default package manager for Node.js that allows developers to install and manage dependencies."
  },
  {
    id: 44,
    question: "What is a callback function?",
    answer: "A callback function is a function passed as an argument to another function and is executed after some operation has been completed."
  },
  {
    id: 45,
    question: "What is the difference between shallow copy and deep copy?",
    answer: "A shallow copy creates a new object but references the same nested objects, while a deep copy creates a new object with new nested objects."
  },
  {
    id: 46,
    question: "What is the difference between function declaration and function expression?",
    answer: "Function declarations are hoisted and can be called before definition, while function expressions are not hoisted and must be defined before use."
  },
  {
    id: 47,
    question: "What is the difference between class and prototype-based inheritance?",
    answer: "Class-based inheritance uses class blueprints to create objects, while prototype-based inheritance directly inherits from other objects."
  },
  {
    id: 48,
    question: "What is the purpose of the 'this' keyword?",
    answer: "The 'this' keyword refers to the object that is executing the current function, and its value depends on how the function is called."
  },
  {
    id: 49,
    question: "What is a pure function?",
    answer: "A pure function is a function that always returns the same output for the same input and has no side effects."
  },
  {
    id: 50,
    question: "What is the difference between imperative and declarative programming?",
    answer: "Imperative programming describes how to achieve a result step-by-step, while declarative programming describes what result is desired."
  }
];
