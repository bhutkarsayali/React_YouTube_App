import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import HooksDemo from "./components/HooksDemo";
import HooksDemo2 from "./components/HooksDemo2";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/demo",
          element: (
            <>
              <HooksDemo />
              <HooksDemo2 />
            </>
          ),
        },
        {
          path: "/demo2",
          element: <HooksDemo2 />,
        },
      ],
    },
  ]);
  return (
    <div className="">
      {/*
       * Head
       * Body
       *	SideBar
       *	MainContainer
       *		ButtonList
       *		VideoContainer
       *			VideoCard
       */}
      <Provider store={appStore}>
        <Head />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
