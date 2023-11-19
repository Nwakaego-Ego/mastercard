import "./mastercard.css";

const Counter = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div className="container">
            <div className="">
              <div className="header">
                <img src="./master-logo.png" className="logo" />
                <h4 className="masterCard">Kaego's Card</h4>
                <img src="./master-chip.png" className="chip" />
              </div>
              <div>
                <div className="card-valid">
                  <div>Card Number</div>
                  <div className="valid vd">Valid thru</div>
                </div>
                <div className="code">
                  <div className="number">6024 5893 2438 4801 </div>
                  <div className="date vd">04/17</div>
                </div>
                <p className="nwakaego">Nwakaego Nwaekpe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
