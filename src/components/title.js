import React, { useEffect, useState } from "react";
import { getUserById } from "../Datas/api.js";

function Title({ userId }) {
  const [userInfos, setUserInfos] = useState({});

  const fetchData = async () => {
    const res = await getUserById(userId);
    setUserInfos(res.data.userInfos);
  };
  useEffect(() => {
    fetchData();
  }, [userId]);

  return (
    <div className="profil-title">
      <div className="title">
        <h1>Bonjour</h1>
        <span>
          <h1>{userInfos.firstName}</h1>
        </span>
      </div>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Title;
