import axios from "axios";
import { useState } from "react";
function ApAdd() {
  const [apip, setAip] = useState("");
  const [anam, setap] = useState("");
  const [iface, setInter] = useState("");
  const handleAdd = () => {
    console.log("hhhhhhh");
    let fData = new FormData();

    const url = "http://localhost/cdot/logged-page/apadd.php";

    fData.append("apip", apip);
    fData.append("iface", iface);
    fData.append("anam", anam);
    axios
      .post(url, fData)
      .then((Response) => {
        alert(Response.data);
        console.log(Response.data);
      })
      .catch((error) => alert(error));
  };
  return (
    <>
      <div className="card-body">
        <h3 className="card-title">AP ADD</h3>
        <br />

        <p className="card-text"></p>
        <form className="row g-3" onSubmit={handleAdd}>
          <div className="col-md-6">
            <label htmlFor="iface" className="form-label">
              {" "}
              INTERFACE:
            </label>
            <select
              required
              id="iface"
              value={iface}
              onChange={(e) => setInter(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option> --Select an Interface-- </option> <br />
              <br />
              <option value="lo"> lo </option>
              <option value="enp1s0"> enp1s0 </option>
              <option value="wlp2s0"> wlp2s0 </option>
              <option value="docker0"> docker0 </option>
            </select>
          </div>

          <div className="col-12">
            <label htmlFor="anam" className="form-label">
              AP Name:
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="anam"
              value={anam}
              onChange={(e) => setap(e.target.value)}
              placeholder="Enter an AP name"
            />
          </div>
          <div className="col-12">
            <label htmlFor="apip" className="form-label">
              AP IP:
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="apip"
              value={apip}
              onChange={(e) => setAip(e.target.value)}
              placeholder="Enter the valid AP IP"
            />
          </div>

          {/* <div className="col-md-6">
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
export default ApAdd;
