import userData from "./data";
const BASE_URL = "http://localhost:3000/user"; // l'URL de mon API ()

const isApi = true;
// Fonction utilitaire pour les appels API GET avec fetch
export const getUserById = async (userId) => {
  if (isApi) {
    try {
      const response = await fetch(`${BASE_URL}/${userId}`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  } else {
    return (
      userData.id, userData.userInfos, userData.todayScore, userData.keyData
    );
  }
};

export const getActivityUserById = async (userId) => {
  if (isApi) {
    try {
      const response = await fetch(`${BASE_URL}/${userId}/activity`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  } else {
    return userData.activity;
  }
};

export const getAverageUserById = async (userId) => {
  if (isApi) {
    try {
      const response = await fetch(`${BASE_URL}/${userId}/average-sessions`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  } else {
    return userData.averageSessions;
  }
};

export const getPerformanceUserById = async (userId) => {
  if (isApi) {
    try {
      const response = await fetch(`${BASE_URL}/${userId}/performance`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  } else {
    return userData.performance;
  }
};
