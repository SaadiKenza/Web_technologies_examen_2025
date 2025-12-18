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
            <a href="/visuel">Bookings</a>
          </li>
          <li>
            <a href="/editer">Booking id</a>
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