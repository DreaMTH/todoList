export const getCurrentTime = () => {
  const date = new Date();
  const formattedDate = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:`;
  return formattedDate;
};
