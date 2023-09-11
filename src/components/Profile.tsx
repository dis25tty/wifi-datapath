import { stringify } from "querystring";
import { useState } from "react";

function Profile() {
  const [comps, setComp] = useState([
    {
      firstname: "",
      lastname: "",
      area_work: "",
      city: "",
      state: "",
      phno: "",
      password: "",
      pincode: "",
      email: "",
    },
  ]);
  function compDisplay() {
    fetch("http://localhost/cdot/logged-page/profile.php?email=" + email)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        // console.log(result);
        setComp(result);
      })
      .catch((err) => {
        console.log("Error reading data " + err);
      });
  }
  const myh = new Headers();
  const x = window.location.href;
  var ema = x.split("=");
  ema = ema[1].split("#");
  const email = ema[0];
  email && compDisplay();
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">
            <center> PROFILE </center>
          </h3>
        </div>
      </div>
      <br />
      {comps.map(function (item, index) {
        return (
          <>
            <div className="card">
              <div className="card-body" key={index}>
                {/* <h5 className="card-title">Card title</h5> */}

                <h6 className="card-subtitle mb-2 text">
                  Full Name &nbsp;&nbsp; :&nbsp;&nbsp;
                  {item.firstname + " " + item.lastname}
                </h6>
                <h6 className="card-subtitle mb-2 text">
                  Email ID &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{item.email}
                </h6>
                <h6 className="card-subtitle mb-2 text">
                  Password &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{item.password}
                </h6>
                <h6 className="card-subtitle mb-2 text">
                  Phno &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{item.phno}
                </h6>
                <h6 className="card-subtitle mb-2 text">
                  Address &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{item.area_work}
                </h6>
                <h6 className="card-subtitle mb-2 text">
                  City &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{item.city}
                </h6>
                <h6 className="card-subtitle mb-2 text">
                  State &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{item.state}
                </h6>
                <h6 className="card-subtitle mb-2 text">
                  Pincode &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;{item.pincode}
                </h6>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
export default Profile;
