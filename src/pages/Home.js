import bg from "../img/bg.jpg";
import data from "../data.js";
import { useState } from "react";
import "../App.css";
import Item from "./components/Item.js";

function Home() {
  let [shoes, setShoes] = useState(data);

  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <Item shoes={shoes[i]} />;
          })}
        </div>
        <button
          className="btn btn-danger"
          onClick={() => {
            let copy = [...shoes];
            let cooySorted = copy.sort((a, b) =>
              a.title.localeCompare(b.title)
            );
            setShoes(cooySorted);
            console.log(shoes);
          }}
        >
          정렬
        </button>
      </div>
    </>
  );
}

export default Home;
