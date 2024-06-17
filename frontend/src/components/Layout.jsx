import { NavLink, Outlet } from "react-router-dom";
import logo from '../assets/imgs/pokemon-23.svg';
import "../App.css";


function Layout() {
  return (
    <>
      <nav
        className="flex nav justify-between py-4 px-6 md:px-20 lg:px-28 xl:px-36 2xl:px-60 items-center"
      >
        <img className="w-32" src={logo} alt="pokemon-logo" />
        <div
          className="flex align-middle gap-4 md:gap-8 lg:gap-20 xl:gap-32 2xl:gap-40"
        >
          <NavLink className="navlinks" to="/"> Home </NavLink>
          <NavLink className="navlinks" to="/pokedex"> Pokédex </NavLink>
          <NavLink className="navlinks" to="/fight"> Fight </NavLink>
          <NavLink className="navlinks" to="/FightResults"> Fight Results </NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;