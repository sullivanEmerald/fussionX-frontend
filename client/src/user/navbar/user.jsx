import AcountInformation from "../dashboard/accountinfo"
import UserNavigation from "../dashboard/sidebar"

const UserProfileHeaderAndSideBar = () => {
    return (
        <>
            <AcountInformation />

            <UserNavigation />
        </> 
    )
}

export default UserProfileHeaderAndSideBar;