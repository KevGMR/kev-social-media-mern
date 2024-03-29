import './online.css'
const PF = process.env.REACT_APP_PUBLIC_FOLDER

function Online({user}) {
  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={PF+user.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline" ></span>
        </div>
        <span className="rightbarUsername" >{user.username}</span>
    </li>
  );
}

export default Online;
