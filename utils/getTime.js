export const getTime = (timeStamp) => {
  const date = new Date(timeStamp);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + formattedMinutes + " " + ampm;
};
