import React from "react";

interface Props {
  imgUrl: string;
  name: string;
  descr: string;
  location: string;
}

const CommitteeItem = ({ imgUrl, name, descr, location }: Props) => {
  const profilePhotoStyle: React.CSSProperties = {
    background: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center 0"
  };

  return (
    <div className="committeeItem">
      <div className="profile-photo" style={profilePhotoStyle}></div>
      <h3 className="name">{name}</h3>
      <p className="descr">{descr}</p>
      <span className="location">{location}</span>
    </div>
  );
};

export default CommitteeItem;
