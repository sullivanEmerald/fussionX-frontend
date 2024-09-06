
const Layout = ({ children }) => (
    <div className="page-layout">
      <UserNavigation />
      <div className="main-container">
        <AcountInformation />
        <main className="content-area">
          {children}
        </main>
      </div>
    </div>
  );

export default Layout;