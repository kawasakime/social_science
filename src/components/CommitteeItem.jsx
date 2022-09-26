import React from "react";

const CommitteeItem = ({ imgUrl, name, descr, location }) => {
  const profilePhotoStyle = {
    background: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center 0"
  };

  return (
    <div className="committeeItem">
      {/* <img src={imgUrl} alt="" /> */}
      <div className="profile-photo" style={profilePhotoStyle}></div>
      <h3 className="name">{name}</h3>
      <p className="descr">{descr}</p>
      <span className="location">{location}</span>
    </div>
  );
};

export default CommitteeItem;
