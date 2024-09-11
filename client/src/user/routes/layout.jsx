import UserNavigation from "../dashboard/sidebar";
import AcountInformation from "../dashboard/accountinfo";

const Layout = ({ children }) => (

   <section className="dashboard-layout">

        <UserNavigation />

        <main className="dashboard-header">

            <AcountInformation />

            <section className="dashboard-main-content">

                {children}

            </section>

        </main>
        
    </section>
);

export default Layout;