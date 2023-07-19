import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <section className="home-cta">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement.
        <br />
        Rent the perfect van to make your perfect road trip.
      </p>
      <Link to={"/vans"}>
        <button className="default-btn">Find your van</button>
      </Link>
    </section>
  );
}
