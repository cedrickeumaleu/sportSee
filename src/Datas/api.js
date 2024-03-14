const BASE_URL = "http://localhost:3000/user"; // l'URL de mon API ()

// Fonction utilitaire pour les appels API GET avec fetch
export const getUserById = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
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
    throw new Error(error.message);
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
    throw new Error(error.message);
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
    throw new Error(error.message);
  }
};
