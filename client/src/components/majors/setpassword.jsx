import { useContext, useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { ToggleFlips } from "../../App";

const ChangePassword = () => {
    const { isPassword, setIsPassword } = useContext(ToggleFlips);
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
                {isPassword && (
                    <img
                        onClick={() => setIsPassword((prev) => !prev)}
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
