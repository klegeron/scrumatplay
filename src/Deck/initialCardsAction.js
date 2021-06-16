const initialCardsAction = (typeCarte, id) => {
  return {
    name: `${typeCarte} ${id}`,
    path: `/images/Cards/${typeCarte}/${id}.png`,
  };
};

export default initialCardsAction;
