import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/appStore";

function App() {
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
        <Body />
      </Provider>
    </div>
  );
}

export default App;
