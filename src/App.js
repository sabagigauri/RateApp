import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
// import Submit from "./components/Submit/Submit";
// import Rate from "./components/Rate/Rate";
// import Thanking from "./components/Thanking/Thanking";


function App() {

  // const [submittedRating, setSubmittedRating] = useState(false);

  // const handleRatingSubmit = (value) => {
  //   console.log("Submitted Rating:", value);
  //   setSubmittedRating(value);
  // };

  return (
    <div className="App">
      <Card />
      {/* {!submittedRating ? (
        <Rate onSubmit={handleRatingSubmit} />
      ) : (
        <>
          <Submit/>
          <p className="rate-us">You selected us {submittedRating} out of 5</p>
          <Thanking/>
        </>
      )} */}
    </div>
  );
}

export default App;
