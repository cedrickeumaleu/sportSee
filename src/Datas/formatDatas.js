export function formatData(data, dataType) {
  let formatData = [];
  switch (dataType) {
    case "userInfos":
      break;
    case "activity":
      data.forEach((element, index) => {
        element.id = index + 1;
      });
      return data;

    case "averageSessions":
      const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
      formatData = data.map((element, index) => {
        return {
          ...element,
          id: index + 1,
          day: daysOfWeek[element.day - 1], // Convertir le chiffre du jour en nom de jour
        };
      });
      return formatData;

    case "performance":
      break;
    default:
      break;
  }
}
