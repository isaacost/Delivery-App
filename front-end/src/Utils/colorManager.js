const colorManager = (key) => {
  const states = {
    Pendente: 'pendente',
    'Em Trânsito': 'emTransito',
    Preparando: 'preparando',
    Entregue: 'entregue',
  };

  return states[key];
};

export default colorManager;
