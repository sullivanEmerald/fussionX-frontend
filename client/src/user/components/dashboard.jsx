
// import Predictions from "../../components/profile/predictions";
import { UserState } from "../States/app-context/appContext";
import { useContext } from "react";

const Regular = () => {
    const { userState } = useContext(UserState)

    console.log(userState.userProfileInformation)
    return (
        <>  

                    <p>Sullivan the greatest software engineer</p>
                    <p>God is great Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, voluptatum eligendi earum praesentium illum voluptate dolorum pariatur? Modi neque quasi, ipsa officiis iusto quaerat, facilis amet officia qui obcaecati doloribus.</p>
                    <p style={{ textAlign : 'center'}}>Lorem consectetur adipisicing elit. Illo, voluptatum eligendi earum praesentium illum voluptate dolorum pariatur? Modi neque quasi, ipsa officiis iusto quaerat, facilis amet officia qui obcaecati doloribus </p>

        </>
    )
}
export default Regular;