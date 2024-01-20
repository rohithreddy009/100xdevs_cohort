// 1

// import React, { lazy, Suspense } from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// const Dashboard = lazy(() => import("./components/Dashboard"));
// const Landing = lazy(() => import("./components/Landing"));

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <AppBar />
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/" element={<Landing />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   );
// }

// function AppBar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button onClick={() => navigate("/Landing")}>Landing</button>
//       <button onClick={() => navigate("/Dashboard")}>Dashboard</button>
//       <hr />
//     </div>
//   );
// }

// export default App;


// 2

// import { useState } from "react"
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
  
//   return (
//     <div>
//       <Count count={count} setCount={setCount} />
//     </div>
//   )
// }

// function Count({count, setCount}) {
//   return <div>
//     <CountRenderer count={count} />
//     <Buttons count={count} setCount={setCount} />
//   </div>
// }

// function CountRenderer({count}) {
//   return <div>
//     {count}
//   </div>
// }

// function Buttons({count, setCount}) {
//   return <div>
//     <button onClick={() => {
//       setCount(count + 1)
//     }}>Increase</button>

//     <button onClick={() => {
//       setCount(count - 1)
//     }}>Decrease</button>
//   </div>
// }

// export default App
