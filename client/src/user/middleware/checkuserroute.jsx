import Layout from "../routes/layout"
import { Outlet } from "react-router-dom"

const IsUserRoute = () => {
    return (
        <>
            <Layout>
            
                <Outlet />

            </Layout>
        </>
    )
}

export default IsUserRoute;