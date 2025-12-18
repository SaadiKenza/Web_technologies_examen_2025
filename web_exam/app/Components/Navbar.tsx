import Link from "next/link";
import { type ReactNode } from "react";

type NavlinksProps ={
    href: string 
    children: ReactNode
}
const Header: React.FC = () => {
  return (
    <div className="header-container">
      <ul className="navbar-list">
        <ul>       
          <li>
            <a href="/booking">Bookings</a>
          </li>
          <li>
            <a href="/booking/id">Booking id</a>
          </li>
          <li>
            <a href="/">Accueil</a>
          </li>
        </ul>
      </ul> 
    </div>
  );
};

export default Header;