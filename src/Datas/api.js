import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../Datas/data";

const BASE_URL = "http://localhost:3000/user"; // l'URL de mon API ()

// Fonction utilitaire pour les appels API GET avec fetch
export const getUserById = async (userId) => {
  if (!userId) {
    throw new Error("userId n'est pas défini");
  }

  try {
    const response = await fetch(`${BASE_URL}/${userId}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    return await response.json();
  } catch (error) {
    const userByID = USER_MAIN_DATA.find(
      (element) => element.data.id === userId
    );
    return userByID;
  }
};

export const getActivityUserById = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}/activity`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    return await response.json();
  } catch (error) {
    const userActivityByID = USER_ACTIVITY.find(
      (activity) => activity.data.userId === userId
    );

    return userActivityByID;
  }
};

export const getAverageUserById = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    return await response.json();
  } catch (error) {
    const userAverageByID = USER_AVERAGE_SESSIONS.find(
      (average) => average.data.userId === userId
    );

    return userAverageByID;
  }
};

export const getPerformanceUserById = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}/performance`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    return await response.json();
  } catch (error) {
    const userPerformanceByID = USER_PERFORMANCE.find(
      (performance) => performance.data.userId === userId
    );

    return userPerformanceByID;
  }
};
