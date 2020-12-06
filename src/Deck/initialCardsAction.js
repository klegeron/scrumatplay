const initialCardsAction = (typeCarte, id) => {
  return {
    name: `${typeCarte} ${id}`,
    path: `/images/${typeCarte}/${id}.png`,
  };
};

export default initialCardsAction;
