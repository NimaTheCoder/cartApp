// import React from 'react';
// import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from './features/counterSlice';
// import LinkTag from './LinkTag';
// import Product from './page'

// function App() {
//   const count = useSelector(state => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//     <Product />
//         <h2>Redux Toolkit Counter App</h2>
//         <div>
//           <button onClick={() => dispatch(increment())}>Increment</button>
//           <span>{count}</span>
//           <button onClick={() => dispatch(decrement())}>Decrement</button>
//         </div>
//         <div>
//           <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
//           <button onClick={() => dispatch(incrementByAmount(-5))}>Decrement by 5</button>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import ApiDataFetcher from "./components/ApiDataFetcher";
import Cart from "./components/Cart";
import Products from "./components/Products"
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:  <ApiDataFetcher  />,
//   },
//   {
//     path: "/product",
//     element:  <Cart/>,
//   },
// ]);

const App = () => {
  return (<>

    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
    <Navbar />
      <Routes>
        
        <Route path="/" element={<ApiDataFetcher />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/products" element={<Cart/>}></Route>
        <Route path="/product" element={<Products/>}></Route>

      </Routes>
    </BrowserRouter>
   </>
    // <Cart />  
  );
};

export default App;
