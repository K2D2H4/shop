import { useNavigate } from "react-router-dom";

function Item(props) {
  let navigate = useNavigate();

  return (
    <div className="col-md-4">
      {/* <div onClick={() => navigate(`/detail/:${props.shoes.id}`)}> */}
      <div onClick={() => navigate("/detail/:1")}>
        <img src={props.shoes.img} width="80%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </div>
    </div>
  );
}

export default Item;
