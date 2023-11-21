export const getTeaQuaffer = () => {
  return "I love to drink herbal tea☕☕";
};

export const getTea = (name = "Camomile") => {
  return {
    drinkType: "Tea",
    name,
  };
};
