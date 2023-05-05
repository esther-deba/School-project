
import React from "react";
import profile from '../images/profile.svg'
import { useState } from "react";
export const UserInfo = ({ name, bio, limit }) => {
  const [expanded, setexpanded] = useState(false);
  const [readMore, setreadMore] = useState(true);

  const isexpanded = () => {
    setexpanded(!expanded)
  }
  const readMoreLess = () => {
    setreadMore(!readMore);
  }

  return (
    <>
      <div className="userinfo" >
        <div className="info">
          <div className="name">{name}</div>
          <div className="bio">{bio.length > limit ? (
            <div>
              {expanded ? (
                <div className="biotext">{bio}<button className="readbtn" onClick={isexpanded}>Read Less</button></div>
              ) : (
                <div className="biotext">
                  {bio.slice(0, limit)}
                  ...<button className="readbtn" onClick={isexpanded}>Read More</button>
                </div>
              )}
            </div>
          ) : (
            <div>{bio}</div>
          )}
          </div>

        </div>
        <img src={profile} alt="jhvuyu" className="profile" />
      </div>
    </>
  );
}