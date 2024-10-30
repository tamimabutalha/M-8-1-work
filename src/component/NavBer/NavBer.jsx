import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";





const Navber = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:id", name: "UserProfile" }
    ];



    return (
        <nav>
            <div className=" md:hidden" onClick={() => setOpen(!open)}>
              {
                open === true ? 'open' : 'close'
              }
                <RiMenu2Fill className=" text- 2xl"></RiMenu2Fill>
            </div>
            <ul className="md:flex">
                {
                    routes.map(rout => <Link key={rout.id} rout={rout}></Link>)
                }
            </ul>
        </nav >
    );
};

export default Navber;