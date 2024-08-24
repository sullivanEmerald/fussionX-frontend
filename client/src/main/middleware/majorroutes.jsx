import { Outlet } from "react-router-dom"
import MainNavigateLinks from "../nav/link"

const ShowNavigationRoute = () => {
    return (
        <>
            <MainNavigateLinks />
            <Outlet />
        </>
    )
}

export default ShowNavigationRoute;