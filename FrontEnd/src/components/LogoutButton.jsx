import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import {useContext} from 'react'
import { SessionContext } from "../session/SessionProvider";

const LogoutButton = ()=>{
    const {removeCookies} = useContext(SessionContext)
    return(
        <Link to='/login' onClick={()=>{removeCookies('session')}}>
            <Button color="Blue">Log Out</Button>
        </Link>
    )
}

export default LogoutButton