import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import CaseStudy from "./components/CaseStudy.jsx";
import Product from "./components/Product.jsx";
import Client from "./components/Client.jsx";
import Insights from "./components/Insights.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
 
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/caseStudy' element={<CaseStudy />}/>
      <Route path='/product' element={<Product />}/>
      <Route path='/client' element={<Client />}/>
      <Route path='insight' element={<Insights />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);
//        ---------React--Syllabus-------

//1...React is a popular JavaScript library for building user interfaces, especially for single-page applications. It helps developers create fast, scalable, and flexible front-end applications.. react is component based which allow us to write clean and reusable code by breking the ui into smaller bits of code. it is developed by facebook

// 2..jsx is a syntax extension for js..jsx stands for js xml it allows us to write html in react it also allowed to embed js code or any other valid js expression inside  curly braces. jsx follows  xml rule so every element must be self closed . in jsx every element must be wrapped by one top level element .u can rener a element conditinaly but if u want to write if statement put it outside the jsx . jsx is not understand by browser so that the babel compiler used to convert the jsx into js code which will be understand by the broser.

// 3..components are building block of react application. it is idependent self bits code . with the help of components we can break the complex ui into smaller code which is easy to maintain and are reusable. there are two types of components- functional components and class based components

//4...key in react helps to identify which items in the list are being changed modified or deleted we cannot pass keys as props to children components ..if there are list of elements with different id we can use that id as key array index are not idle for key as order of array can be changed

//5..controlled components are those components whose state are managed by react with the help of usestates whereas in uncontrolled components state are managed by dom to access the values we can use the useref ..if two fields are handelled by state and other are handled by ref then also it is called uncontrolled components.

// 6..props are properties passed as argumnrt from parent component to children components props are readonly whereas state are used to hold some infromation or data of the components state are internal to component and can be changed and whenevr satet changes it causes thr componets to rerender

// 7..usestate hooks are used to hold data about the comoponents it also provide a function to change the state of the components and whenevr state changes component re render useState accepts an initial state and returns two values:The current state.A function that updates the state.

// 8..lifting state up is a technique ehree the state of the child componets is lifted to nerby parent  anccestor ehich then passed to child with the help of props .....it is useful when u want the componetns to be in synced . ehen the sibling componets wants to communicate with each other

// 9..hoc components are those components which takes components as an arguments and returns enhanced componets

// 10.. hooks allows functional componets to use usestates and other react feature to enhance the functionality of functional componets ..hooks can be called at top of the componet. hooks can be conditional hooks can be called inside functional componets.

// 11...form handling in react are similar to html only difference is that we use camelcase in ract and event handler are placed in curly braces to pass an arguments to event handler we use arrow function. onsubmit are used on form and onclick are used in input

//12...The useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.

//13..context api is used to pass data from one componet to another components which is difficult to pass with the help of props

//14..usecontsxt is hook used to pass data through component tree without having pass it manually at every level

//15..useMemo is used for memoization of function value it is used to cachedd the result of expensive computauon which help to prevent re execution of function if props are not changed

//16..usecallback is used to memoise a function which prevent it form executing at evry render if the props are not changed

//17..usereducer provide an alternate to usestate hokk it is used when the state of components is complex and require more than one state variable to handle it ..it consnsit of state dispatch and reducer state is initial value and set to initialval dispatch is a function used to cahnd=ge the state reudcer is function which holds all the logic hoe the state will be changed

//18..browser cant read jsx because it is not valid js it is a syntax extension that require transpilation into regular js

//19..react performance can be optimized by
//i.. preventing unnecessary re render with react.memo pure component and callbacks
//ii..reducing the initial bundle size with code splitting and lazy loading
//iii...optimizing images assets and fonts

//20..memoization is  optimization technique used to prevent unnecessary re calculation by caching the result of expensive function call. react provide two wyas to apply memoization react.memo and usememo
//i..react.memo is a higher order component thst memoize a functional component. it prevent the components from re rendering unless its props have changed
//    react.memo is used to memoize components.it prevent functional component from re render if its props have not changed.memoize entire component
//ii....usememo is used to memoize values or computation . it return a cached value and only recalculate if the dependancies change

//21..componentdiMount,componentdidUpdate and componentWillUnmount are replaced with useeffect

//22..lazy loading in react is a optimization technique that helps to reuce the initial load by loading component only when they are needed. it improves the user experience for large application by splitting the code
//using react.lazy along with suspense aloow u to implement lazy loading in a simple and efficient way keeping ur app fat and responsive

//23..virtual dom is lightweight copy of actua dom stored in the memory. react uses it to improve user experience by updating the modified parts of actual dom
//when app starts react copt the actual dom and whenever any prop or state changed in app react updates the virtual dom . actual dom is not updated immediately react then compare actual dom with virtual dom using diffing alogirthm and updates only the changed parts

//24..with one way data flow its always clear where data comes from and where it goes.this improves code maintainabilty
//one way data flow in react improves maintainabilty and ,akes it easier to understand debug and optimize

//25..side effect refers to the behaviour and operation that occur after the rendering such as feting data subscription etc and is handlled by useeffect

//27..we can handle forms in react using controlled components and uncontrolled component

//28..there are different way to pass data from child to parent component suchas usecallback context api ,using ref, redux and custom hooks etc.

//29..when u have component logic that needs to be used by many component. we can extract that logic to a custom hook.....custom hook starts with "use"  because without it React can’t realize that it is a custom hook and therefore can’t apply the rules of hooks to it.

//30..when u have to pass props throught nested components is called props drilling

//31..The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.useRef is plain js object with current property

//32..React router allow us to handle client side as well as server side routing in react application . react router is mainly used for creation of single page application that allow navigation without refereshing the page..React Router provides three different kinds of routers: Memory Router. Browser Router. Hash Router

//33..immutability is an object that once created cannot be changed meaning that we can create new version of state or props whereevr we want the change rather than modifying existing one

//33. Redux is a JavaScript library that helps manage the state of your application. .

//action-- are plain js object that have type field
//reducers-- are functions that takes current state and action as arguments and returns new state
//store-- The Redux store is the main, central bucket which stores all the states of an application .  only way to change the state inside it is to dispatch an action on it, which triggers the root reducer function to calculate the new state.
