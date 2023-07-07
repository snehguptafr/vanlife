import React from "react";
import { useParams, Link } from "react-router-dom";
import "./VanDetail.css";

export default function VanDetail() {
  const [van, setVan] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);
  console.log(van);

  return (
    <section className="van-detail">
      <div className="vans-link">
        &lt; <Link to="/vans">Back to all vans</Link>
      </div>
      {van.id ?(
      <div className="details">
        <img src={van.imageUrl} alt={van.name} />
        <span className={`van-type ${van.type}`}>
          {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
        </span>
        <h1>{van.name}</h1>
        <h2>${van.price}<span>/day</span></h2>
        <p>{van.description}</p>
        <button className="default-btn">Rent this van</button>
      </div>
      ):(
        <h1>Loading...</h1>
      )}
    </section>
  );
}
