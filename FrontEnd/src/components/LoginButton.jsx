import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const LoginButton = ()=>{
    return(
        <Link to='/login'>
            <Button color="Blue">Log In</Button>
        </Link>
    )
}

export default LoginButton