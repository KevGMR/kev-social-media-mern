import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

import './profile.css'

const PF = process.env.REACT_APP_PUBLIC_FOLDER

function Profile({profile}) {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={`${PF}/post/3.jpeg`} className="profileCoverImg"  alt="" />
              <img src={`${PF}/post/7.jpeg`} className="profileUserImg"  alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileinfoName" >Kevin Gatamu</h4>
              <span className="profileInfoDesc" >Hello Friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Profile;
