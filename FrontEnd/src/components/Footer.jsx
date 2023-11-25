'use client'
import { Footer } from "flowbite-react"

function footer() {
    return (
        <>
            <Footer container className="absolute bottom-0">
            <Footer.Copyright href="#" by="Flowbite™" year={2023} />
            <Footer.LinkGroup>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
            </Footer>
        </>
    )
}

export default footer