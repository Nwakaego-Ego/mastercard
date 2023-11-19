// import "./mastercard.css";

// const Counter = () => {
//   return (
//     <>
//       <div>
//         <div>
//           <div className="container">
//             <div>
//               <div className="header">
//                 <img src="./master-logo.png" className="logo" />
//                 <h4 className="masterCard">Kaego's Card</h4>
//                 <img src="./master-chip.png" className="chip" />
//               </div>
//               <div>
//                 <div className="card-valid">
//                   <div>Card Number</div>
//                   <div className="valid vd">Valid thru</div>
//                 </div>
//                 <div className="code">
//                   <div className="number">6024 5893 2438 4801 </div>
//                   <div className="date vd">04/17</div>
//                 </div>
//                 <p className="nwakaego">Nwakaego Nwaekpe</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Counter;

import React from "react";
import "./mastercard.css";

const Mastercard = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="logo-header">
            <img
              src="./master-logo.png"
              className="logo"
              alt="Mastercard Logo"
            />
            <h4 className="masterCard">Kaego's Card</h4>
          </div>
          <img src="./master-chip.png" className="chip" alt="Chip" />
        </div>
        <div className="card-details">
          <div className="card-valid">
            <div>Card Number</div>
            <div className="valid">Valid thru</div>
          </div>
          <div className="code">
            <div className="number">6024 5893 2438 4801</div>
            <div className="date">04/17</div>
          </div>
          <p className="nwakaego">Nwakaego Nwaekpe</p>
        </div>
      </div>
    </div>
  );
};

export default Mastercard;
