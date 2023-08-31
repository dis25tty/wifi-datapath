import { useState } from "react";
import UserAdd from "./UserAdd";
import UserModify from "./UserModify";
import UserDelete from "./UserDelete";
import UserView from "./UserView";
import VlanAdd from "./VlanAdd";

interface Props {
  menuval: number;
}
function MiddleCont({ menuval }: Props) {
  return (
    <>
      <div className="card">
        {/* <h5 className="card-header">Featured</h5> */}
        {menuval === 2 && <UserView></UserView>}
        {menuval === 3 && <UserAdd></UserAdd>}
        {menuval === 4 && <UserModify></UserModify>}
        {menuval === 5 && <UserDelete></UserDelete>}
        {menuval === 6 && <VlanAdd></VlanAdd>}
      </div>
    </>
  );
}
export default MiddleCont;
