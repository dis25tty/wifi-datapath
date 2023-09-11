import { useState } from "react";

function VlanView() {
  const [comps, setComp] = useState([
    {
      vid: "",
      iface: "",
      bip: "",
    },
  ]);
  function compDisplay() {
    fetch("http://localhost/cdot/logged-page/vlanview.php")
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
  compDisplay();
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">VLAN VIEW</h3>
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
                  VLAN ID &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;
                  {item.vid}
                </h6>

                <h6 className="card-subtitle mb-2 text">
                  Bridge IP &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.bip}
                </h6>
                <h6 className="card-subtitle mb-2 text">
                  Interface
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  :&nbsp;&nbsp;
                  {item.iface}
                </h6>
              </div>
            </div>
            <br />
          </>
        );
      })}
    </>
  );
}
export default VlanView;
