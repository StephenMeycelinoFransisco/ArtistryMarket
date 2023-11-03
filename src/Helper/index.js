export const formatTimestamp = (timestamp) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return timestamp.toDate().toLocaleDateString("en-US", options);
};
