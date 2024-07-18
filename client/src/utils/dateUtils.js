export const newDateToSql = () =>
  new Date().toISOString().slice(0, 19).replace("T", " ");
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().slice(0, 19).replace("T", " ");
};
