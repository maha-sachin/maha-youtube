
import './App.css';
import { Provider } from 'react-redux';
import Head from './components/Head';
import Body from './components/Body';
import store from './utils/store';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from "./components/MainContainer"


const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children: [
    {
    path:"/",
    element:<MainContainer/>
  },
    {
    path:"watch",
    element:<WatchPage/>
  },

]
}])
function App() {
  return (
    <Provider store={store}>
    <div className=" font-bold">
      
      <Head/>
      <RouterProvider router={appRouter}/>


    {/**
     * 
     * Header
     * body
     *  sidebar
     *   menu-items
     *  main-container
     *    buttons-list
     *    video-container
     *      video-card
     * 
     */}
    </div>
  </Provider>
  );
}

export default App;
