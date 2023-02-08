// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Login.css";
// const Login = () => {
//   const [username, setusername] = useState(false);
//   const [userval, setuserval] = useState("");
//   const [password, setpass] = useState(false);
//   const [passval, setpassval] = useState("");
//   useEffect(() => {
//     const checkuser = () => {
//       if (userval.length > 10) {
//         setusername(true);
//       } else setusername(false);
//     };
//     checkuser();
//   }, [userval]);

//   useEffect(() => {
//     const checkpass = () => {
//       if (passval.length > 10) {
//         setpass(true);
//       } else setpass(false);
//     };
//     checkpass();
//   }, [passval]);
//   return (
//     <div className="cont">
//       <div className="login">
//         <div>
//           <label htmlFor="user">User Name:</label>
//           <div>
//             <input
//               type="text"
//               id="user"
//               onChange={(e) => {
//                 setuserval(e.target.value);
//               }}
//               value={userval}
//             />
//           </div>
//           {!username ? (
//             <div style={{ color: "red" }}>
//               Username must be larger than 10 chars
//             </div>
//           ) : (
//             <div style={{ color: "green" }}>UserName Valid</div>
//           )}
//         </div>

//         <div>
//           <label htmlFor="">PassWord:</label>
//           <div>
//             <input
//               type="password"
//               onChange={(e) => {
//                 setpassval(e.target.value);
//               }}
//             />
//           </div>
//           {!password ? (
//             <div style={{ color: "red" }}>
//               Password must be larger than 10 chars
//             </div>
//           ) : (
//             <div style={{ color: "green" }}>password Valid</div>
//           )}
//         </div>
//         {password ? (
//           username ? (
//             <div className="butto">
//               <Link to="/Home">
//                 <button className="btn btn-danger">Login</button>
//               </Link>
//             </div>
//           ) : (
//             <div className="butto">
//               <button className="btn btn-danger">Login</button>
//             </div>
//           )
//         ) : (
//           <div className="butto">
//             <button className="btn btn-danger">Login</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;
