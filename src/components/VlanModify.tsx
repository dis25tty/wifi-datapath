import { useState } from "react";
import axios from "axios";

// import { Item } from "react-bootstrap/lib/Breadcrumb";

function VlanModify() {
  const [res, setRes] = useState({
    iface: "",
    bip: "",
  });

  // Headers: [{ key: "bip", label: "bip" }];

  const [validate, setvalidate] = useState(0);
  const [bip, setBip] = useState("");
  const [iface, setIface] = useState("");
  const [vid, setVid] = useState("");

  // const [password, setPass] = useState("");

  let fData = new FormData();
  const handleMod = () => {
    // if(bip.length===0)
    console.log(validate);
    console.log(vid);
    const url = "http://localhost/cdot/logged-page/vlanmodify.php";

    fData.append("vid", vid);
    // fData.append("validate", String(validate));
    //we need bcz to check the existance of the vid entered

    if (validate == 0) {
      fData.append("validate", String(validate));

      axios
        .post(url, fData)
        .then((Response) => {
          // alert(Response.data);
          const ob = Response.data;
          const obb = JSON.stringify(ob);
          const obbj = JSON.parse(obb);
          setRes(obbj);
          console.log(res["bip"]);
          setvalidate(1);
          if (typeof res["bip"] != "undefined" && res["bip"].length !== 0) {
            setBip(res["bip"]);
            setIface(res["iface"]);
            console.log(res["bip"].length);
            setvalidate(2);
          } else {
            setvalidate(0);
            if (typeof res["bip"] == "undefined") alert(Response.data);
          }
        })
        .catch((error) => alert(error));
      return;
      //   handleMod();
    }
    // console.log(validate);
    if (validate === 3) {
      fData.append("bip", bip);
      fData.append("iface", iface);
      fData.append("validate", String(validate));

      setvalidate(0);
      setRes({ bip: "", iface: "" });
      // }
      axios
        .post(url, fData)
        .then((Response) => {
          alert(Response.data);
        })
        .catch((error) => alert(error));
    }
  };

  // var vid = document.getElementById("vid");
  // console.log(vid);

  return (
    <>
      <div className="card-body">
        <h3 className="card-title">VLAN MODIFY</h3>
        <br />

        <p className="card-text"></p>
        <form
          className="row g-3"
          onSubmit={() => {
            console.log("jahd");
            if (vid.length !== 0) {
              console.log(vid.length);
              //   setvalidate(1);
              //   console.log(validate);
              handleMod();
            }
          }}
        >
          <div className="col-md-6">
            <label htmlFor="vid" className="form-label">
              VID
            </label>
            <input
              required
              type="vid"
              className="form-control"
              id="vid"
              value={vid}
              onChange={(e) => {
                // setvalidate(0);
                setVid(e.target.value);
              }}
            />
          </div>
          <div className="col-12" style={{ marginLeft: "920px" }}>
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Modify
            </button>
          </div>
        </form>

        {/* //popup */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Delete Confirmation
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">Modify {vid} Account</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleMod}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <a href="#" className="btn btn-primary">
        go somewhere
      </a> */}
      </div>
      <div
        className="card-body"
        style={validate !== 2 ? { display: "none" } : {}}
      >
        <h3 className="card-title">MODIFY THE DETAILS</h3>
        <br />

        <p className="card-text"></p>
        <form
          className="row g-3"
          onSubmit={() => {
            // console.log(validate + "iiiiiiiiiii");
            handleMod();
          }}
        >
          <div className="col-md-6">
            <label htmlFor="bip" className="form-label">
              BridgeIP
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="bip"
              value={bip}
              onChange={(e) => setBip(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="Last Name" className="form-label">
              Interface
            </label>

            <select
              required
              id="vlan"
              value={iface}
              onChange={(e) => setIface(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Select the VLAN</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                required
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Details are VALID
              </label>
            </div>
          </div>
          <div className="col-12" style={{ marginLeft: "880px" }}>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => setvalidate(3)}
            >
              Upadate
            </button>
            {/* <button
              type="reset"
              className="btn btn-primary"
              style={{ marginLeft: "40px" }}
            >
              RESET
            </button> */}
          </div>
        </form>
        {/* <a href="#" className="btn btn-primary">
        go somewhere
      </a> */}
      </div>
      ;
    </>
  );
}

export default VlanModify;
