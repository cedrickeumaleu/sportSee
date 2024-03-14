import React, { useEffect, useState } from "react";
import { getUserById } from "../Datas/api.js";

function Title() {
  const [userInfos, setUserInfos] = useState({});

  const loadInfoData = async () => {
    const response = await getUserById(12);
    setUserInfos(response.data.userInfos);
  };
  useEffect(() => {
    loadInfoData();
  }, []);
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
