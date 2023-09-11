import UserAdd from "./UserAdd";
import UserModify from "./UserModify";
import UserDelete from "./UserDelete";
import UserView from "./UserView";
import VlanAdd from "./VlanAdd";
import VlanDelete from "./VlanDelete";
import VlanModify from "./VlanModify";
import ApAdd from "./ApAdd";
import ApDelete from "./ApDelete";
import ApModify from "./ApModify";
import ApView from "./ApView";
import VlanView from "./VlanView";
import Profile from "./profile";

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
        {menuval === 6 && <VlanView></VlanView>}

        {menuval === 7 && <VlanAdd></VlanAdd>}
        {menuval === 8 && <VlanModify></VlanModify>}
        {menuval === 9 && <VlanDelete></VlanDelete>}
        {menuval === 10 && <ApView></ApView>}
        {menuval === 200 && <Profile></Profile>}
        {menuval === 11 && <ApAdd></ApAdd>}
        {menuval === 12 && <ApDelete></ApDelete>}
        {menuval === 13 && <ApModify></ApModify>}
      </div>
    </>
  );
}
export default MiddleCont;
