import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h2 className='text-2xl text-bold text-green-400'>Q. 01 :What are the different ways to manage a state in a React application?</h2>
                <p className='text-lg'>Answer: There are four main types of state you need to properly manage in your React apps: Local state.Global stat Server state URL state.Local state is data we manage in one or another component.Global state is data we manage across multiple components.Data that comes from an external server that must be integrated with our UI state. </p>
            </div>
            <div>
                <h2 className='text-2xl text-bold text-green-400'>Q.02 :How does prototypical inheritance work?</h2>
                <p className='text-lg'>Answer: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.It is a method by which an object can inherit the properties and methods of another object.Traditionally, in order to get and set the[[Prototype]]of an object, we use Object.getPrototypeOf and Objec  </p>
            </div>
            <div>
                <h2 className='text-2xl text-bold text-green-400'>Q.03 :What is a unit test? Why should we write unit tests?</h2>
                <p className='text-lg'>Answer: Unit Testing is the process of checking small pieces of code to deliver information early and often, speeding your testing strategies, and reducing wasted. The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages  </p>
            </div>
            <div>
                <h2 className='text-2xl text-bold text-green-400'>Q.04 React vs.Angular vs.Vue?:</h2>
                <p className='text-lg'>Answer: Angular, developed by Google, was first released in 2010, making it the oldest of the lot.It is a TypeScript-based JavaScript framework.A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS).Angular 2+ is known as just Angular.Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular <br /> Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript. Further reading: Vue.js Tutorial for Beginner Developers <br />One of the main reasons for the popularity of React is that it works very efficiently with the DOM. Vue also uses the virtual DOM, but compared to React, Vue has better performance and stability. According to this data, Vue and React's performance difference is subtle since it is only a few milliseconds.

                </p>
            </div>
        </div>
    );
};

export default Blog;