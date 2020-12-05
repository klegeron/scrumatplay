const initialCardsAction = (id) => {
  return {
    name: `Action ${id}`,
    path: `/images/0_${id}.png`,
  };
};

export default initialCardsAction;
