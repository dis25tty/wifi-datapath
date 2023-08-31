function UserView() {
  return (
    <>
      <div className="card">
        <div className="container">
          <img
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            alt="hai there"
            style={{ width: "50%" }}
            width="100px"
          />
          <h2>John Doe</h2>
          <p className="title">CEO & Founder</p>
          <p>Random Company</p>
          <div style={{ margin: " 24px 0" }}>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <p>
            <button>Contact</button>
          </p>
        </div>
      </div>
    </>
  );
}
export default UserView;
