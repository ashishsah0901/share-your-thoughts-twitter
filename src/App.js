import { useEffect } from "react";
import "./App.css";
import Feed from "./component/feed/Feed";
import Sidebar from "./component/sidebar/Sidebar";
import Widgets from "./component/widgets/Widgets";

function App() {
  useEffect(() => {
    console.log(process.env.REACT_APP_PROJECT_ID);
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
