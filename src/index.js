import React from 'react';
import ReactDOM from 'react-dom/client';
import {MyFirstComponent,MyFirstComponentCopy} from './myFirstComponent';
import Home from './home/home';
import Product from './product/product';
import PractiseColor from './practise/practise';
import Parent from './child-to-parent/parent';
import Form from './forms/form';
import UserList from './user-list/user-list';
import AgeVerification from './conditional-verification/verification';
import VirtualDom from './virtualDom/virtualDom';
import UserSideEffect from './user-sideeffect/user-sideeffect';
import CountryInfo from './user-sideeffect/useEffectWith-dependency';
import LoadingExample from './loading-example/loading';
import FormValidation from './validation/validation';
import Chat from './context-consumers/chat/chat';
import Post from './context-consumers/post/post';
import Comment from './context-consumers/comment/comment';
import NotificationProvider from './context/notification-provider';
import Counter from './context-consumers/counter/counter';
import ToggleTheme from './context-consumers/ToggleTheme/toggle-theme';
import ThemeProvider from './context/theme-provider';
import CounterReducer from './Reducer/counter-with-reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <MyFirstComponent/>
 <MyFirstComponentCopy/> */}
  {/* <Product/> */}
  {/* <Home/> */}
  {/* <Counter/>
  <PractiseColor/>
  <Parent/> */}
  {/* <Form/> */}
  {/* <UserList/> */}
  {/* <AgeVerification/> */}
  {/* <UserSideEffect/>
  <CountryInfo/> */}
  {/* <LoadingExample/> */}
  {/* <Post/> */}
  {/* <FormValidation/> */}
  {/* <ThemeProvider>
    <NotificationProvider>
      <ToggleTheme/>
      <Chat/>
      <Post/>
      <Comment/>
      <Counter/>
    </NotificationProvider>
  </ThemeProvider>
   */}
  <CounterReducer/>
  </div>
 
);


