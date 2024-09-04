
// import Predictions from "../../components/profile/predictions";
import { UserState } from "../States/app-context/appContext";
import { useContext } from "react";

const Regular = () => {
    const { userState } = useContext(UserState)
    return (
        <>  

                    <p>Sullivan the greatest software engineer</p>
                    { Object.values(userState.userProfileInformation).map((item) => (
                        <>
                            <p>{item._id}</p>
                             <p>{item.name}</p>
                        </>
                    ))}

                    {/* <Predictions /> */}
        </>
    )
}
export default Regular;