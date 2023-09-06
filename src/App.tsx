import NavComp from "./components/NavComp";
import { useState } from "react";
import Slide from "./components/Slide";
import NestedNav from "./components/NestedNav";
import VerticalTab from "./components/VerticalTab";
import MiddleCont from "./components/MiddleCont";
import "./App.css";
function App() {
  const [a, setA] = useState(-1);
  const handleClick = (num: number) => {
    if (num == 100) {
      document.location = "http://localhost/cdot/logged-page/index2.php";
    } else if (num == -1) {
      location.reload();
    } else {
      console.log(num);
      setA(num);
    }
    // a = num;
  };
  return (
    <>
      <div id="entierpg">
        <div id="navtab">
          <NavComp onClick={handleClick}></NavComp>
        </div>
        <div id="vertab">
          <VerticalTab onClick={handleClick}></VerticalTab>
        </div>
        <div id="content">
          <div id="aboutcont">
            <center>{a <= 1 ? <Slide></Slide> : ""}</center>
            {a <= 1 ? <NestedNav></NestedNav> : ""}
          </div>

          {a > 1 ? <MiddleCont menuval={a}></MiddleCont> : ""}
        </div>
      </div>
    </>
  );
}
export default App;
