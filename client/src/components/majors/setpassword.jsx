import { useContext, useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { ToggleFlips } from "../../App";
import { ACTIONS } from '../../actions/app';

const ChangePassword = () => {
    const { state, dispatch } = useContext(ToggleFlips);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='password-main-section display-profile-setting'>
            <p className='profile-header sub-headers'>Password Setting</p>
            <div className='password-section'>
                <div className='pass-comfirm-profile'>
                    <div>
                        <span>Password</span>
                        <InputGroup className="mb-3">
                            <FormControl
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                            />
                            <InputGroup.Append>
                                <Button 
                                    variant="outline-secondary" 
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <div>
                        <span>Confirm Password</span>
                        <InputGroup className="mb-3">
                            <FormControl
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Confirm your password"
                            />
                            <InputGroup.Append>
                                <Button 
                                    variant="outline-secondary" 
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </div>
                <button className='change-password-button'>Save Changes</button>
                {state.isPassword && (
                    <img
                        onClick={() => dispatch({ type : ACTIONS.SET_IS_PASSWORD })}
                        className='backButton-profile'
                        src='images/dashboard/scrollUp.png'
                        title='back to profile'
                        alt='logo'
                    />
                )}
            </div>
        </div>
    );
};

export default ChangePassword;
