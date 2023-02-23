import { Link } from "react-router-dom"

function NavItem({ name }) {
    return (
        <>
            <p>
                <Link to={"*"}>
                    {name}
                </Link>
            </p>
        </>
    )
}

export default NavItem