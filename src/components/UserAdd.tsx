import axios from "axios";
import { useState } from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

function UserAdd() {
  const [first, setfirst] = useState("");
  const [last, setlast] = useState("");
  const [email, setEmail] = useState("");
  // const [vlan, setVlan] = useState("");
  const [phno, setPhno] = useState("");
  const [address, setAdd] = useState("");
  // const [ap, setap] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zip, setzip] = useState("");

  const handleAdd = () => {
    // if(first.length===0)
    // alert("first name must be filled");
    if (
      !first ||
      !last ||
      !email ||
      // !vlan ||
      // !password ||
      !address ||
      // !ap ||
      !city ||
      !state ||
      !zip
    )
      alert("fill all fields");
    else {
      const url = "http://localhost/cdot/logged-page/user.php";
      let fData = new FormData();
      fData.append("first", first);
      fData.append("last", last);
      fData.append("address", address);
      fData.append("email", email);
      // fData.append("vlan", vlan);
      fData.append("phno", phno);
      fData.append("city", city);
      // fData.append("ap", ap);
      fData.append("state", state);
      fData.append("zip", zip);

      axios
        .post(url, fData)
        .then((Response) => alert(Response.data))
        .catch((error) => alert(error));
    }
  };
  return (
    <>
      <div className="card-body">
        <h3 className="card-title">USERADD</h3>
        <br />

        <p className="card-text"></p>
        <form className="row g-3" onSubmit={handleAdd}>
          <div className="col-md-6">
            <label htmlFor="first" className="form-label">
              First Name
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="first"
              value={first}
              onChange={(e) => setfirst(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="Last Name" className="form-label">
              Last Name
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="last"
              value={last}
              onChange={(e) => setlast(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              required
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Phone no.
            </label>
            <input
              type="number"
              className="form-control"
              id="phno"
              value={phno}
              onChange={(e) => setPhno(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Area/Work Station/Dept
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAdd(e.target.value)}
              placeholder="Service to be rendered"
            />
          </div>
          {/* <div className="col-md-6">
            <label htmlFor="vlanselector" className="form-label">
              VLAN
            </label>
            <select
              required
              id="vlan"
              value={vlan}
              onChange={(e) => setVlan(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Select the VLAN</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="APselector" className="form-label">
              AP
            </label>
            <select
              required
              id="ap"
              value={ap}
              onChange={(e) => setap(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Select the AP</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div> */}

          {/* <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div> */}
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              required
              type="text"
              onChange={(e) => setcity(e.target.value)}
              className="form-control"
              id="city"
              value={city}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <input
              type="text"
              id="state"
              className="form-select"
              value={state}
              onChange={(e) => setstate(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              required
              type="text"
              className="form-control"
              onChange={(e) => setzip(e.target.value)}
              id="zip"
              value={zip}
            />
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
            <button type="submit" className="btn btn-primary">
              ADD
            </button>
            <button
              type="reset"
              className="btn btn-primary"
              style={{ marginLeft: "40px" }}
            >
              RESET
            </button>
          </div>
        </form>

        {/* <a href="#" className="btn btn-primary">
            go somewhere
          </a> */}
      </div>
    </>
  );
}
export default UserAdd;
