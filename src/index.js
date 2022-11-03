import React from 'react';
import ReactDOM from 'react-dom/client';
import {MyFirstComponent,MyFirstComponentCopy} from './myFirstComponent';
import Home from './home/home';
import Product from './product/product';
import Counter from './counter/counter';
import PractiseColor from './practise/practise';
import Parent from './child-to-parent/parent';
import Form from './forms/form';
import UserList from './user-list/user-list';
import AgeVerification from './conditional-verification/verification';
import VirtualDom from './virtualDom/virtualDom';
import UserSideEffect from './user-sideeffect/user-sideeffect';
import CountryInfo from './user-sideeffect/useEffectWith-dependency';
import LoadingExample from './loading-example/loading';
import Post from './loading-example/post';
import FormValidation from './validation/validation';

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
  <FormValidation/>
  </div>
 
);


