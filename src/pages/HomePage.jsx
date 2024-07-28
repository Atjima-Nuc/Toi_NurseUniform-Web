import Map from "../components/Map";
import useAuth from "../hooks/useAuth";
import Hero from "../layouts/Hero";
import Nav from "../layouts/Nav";
import NavAdmin from "../layouts/NavAdmin";
import Portfolio from "../layouts/Portfolio";

function HomePage() {
  const { authUser } = useAuth();
  // console.log("authUser", authUser.role);

  return (
    <div>
      {authUser?.role === "ADMIN" ? <NavAdmin /> : <Nav />}
      <Hero />
      <Portfolio />
      <Map />
    </div>
  );
}

export default HomePage;
