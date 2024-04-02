
import Aside from "../components/profile/side";
import Header from "../components/profile/header";
import Payment from "../components/authpages/search";


const Search = () => {
    return (
        <>

            <div className="user-profile">
                    <Aside />
                

                <div className="user-main-section">
                    <Header />
                    

                    <Payment />
                </div>
            </div>

        </>
    )
}


export default Search;