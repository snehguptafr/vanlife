import { Link } from "react-router-dom";
import React from "react";
import "./Vans.css";
 

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("https://vanlife-mern.vercel.app/vans/")
      .then((res) => res.json())
      .then(data => setVans(data))
      .catch(err => console.log("Some error occurred:\n"+err))
  }, []);

  const vanCards = vans.map((van) => {
    return (
      <div key={van._id} className="van-card">
        <Link to={`/vans/${van._id}`}>
          <img className="van-img" src={van.imageUrl} alt={van.name} />
        </Link>
        <div className="van-info">
          <Link to={`/vans/${van._id}`}>
            <span className="van-name">{van.name}</span>
          </Link>
          <span className="van-price">${van.price}</span>
        </div>
        <small>/day</small>
        <span className={`van-type ${van.type}`}>
          {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
        </span>
      </div>
    );
  });

  return (
    <section className="vans">
      <h1>Explore our van options</h1>
      {vans.length === 0 && <h1>Loading...</h1>}
      <div className="vans-list">{vanCards}</div>
    </section>
  );
}