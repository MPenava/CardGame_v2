import "./App.css";

import Details from "./components/Details"
import Controls from "./components/Controls";
import Overview from "./components/Overview";


function App() {
  return (
    <>
      <main className="flex flex-col md:flex-row space-x-0 md:space-x-5 mx-5">
        <Details/>
        <Controls/>
      </main>
      <Overview/>
    </>
  );
}

export default App;
