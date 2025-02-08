// import React, { useState } from 'react';
// import './login.css';

// const Login = () => {
//   const [active, setActive] = useState(false);

//   const handleRegisterClick = () => {
//     setActive(true);
//   };

//   const handleLoginClick = () => {
//     setActive(false);
//   };

//   return (
//     <div className="login-container" id="login-container">
//       {/* Sign Up Form */}
//       <div className={`form-container sign-up ${active ? 'active' : ''}`}>
//         <form>
//           <h1>Create Account</h1>
//           <div className="social-icons">
//             <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
//           </div>
//           <span>or use your email for registration</span>
//           <input type="text" placeholder="Name" />
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button type="button" onClick={handleRegisterClick}>Sign Up</button>
//         </form>
//       </div>
      
//       {/* Sign In Form */}
//       <div className={`form-container sign-in ${active ? '' : 'active'}`}>
//         <form>
//           <h1>Sign In</h1>
//           <div className="social-icons">
//             <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
//           </div>
//           <span>or use your email and password</span>
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <a href="#">Forget Your Password?</a>
//           <button type="button" onClick={handleLoginClick}>Sign In</button>
//         </form>
//       </div>
      
//       {/* Toggle Container */}
//       <div className={`toggle-container ${active ? 'active' : ''}`}>
//         <div className="toggle">
//           <div className="toggle-panel toggle-left">
//             <h1>Welcome Back!</h1>
//             <p>Enter your personal details to use all site features</p>
//             <button className="hidden" type="button" onClick={handleLoginClick}>Sign In</button>
//           </div>
//           <div className="toggle-panel toggle-right">
//             <h1>Hello, Friend!</h1>
//             <p>Register with your personal details to use all site features</p>
//             <button className="hidden" type="button" onClick={handleRegisterClick}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import './login.css';

function Login() {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={isActive ? "container1 active" : "container1"} id="login">
            <div className="form-container1 sign-up">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <i className="fa-brands fa-google-plus-g" />
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-github" />
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-linkedin-in" />
                        </a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button onClick={handleToggle}>Sign Up</button>
                </form>
            </div>
            <div className="form-container1 sign-in">
                <form>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <i className="fa-brands fa-google-plus-g" />
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-github" />
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-linkedin-in" />
                        </a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forget Your Password?</a>
                    <button onClick={handleToggle}>Sign In</button>
                </form>
            </div>
            <div className="toggle-container1">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all site features</p>
                        <button className="hidden" id="login" onClick={handleToggle}>
                            Sign In
                        </button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all site features</p>
                        <button className="hidden" id="register" onClick={handleToggle}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;