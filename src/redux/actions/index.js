export const modelChanged = (model, cost) => ({
  type: 'MODEL_CHANGED',
  model,
  cost
});

export const colorChanged = (color, cost) => ({
  type: 'COLOR_CHANGED',
  color,
  cost
});

export const engineChanged = (engine, cost) => ({
  type: 'ENGINE_CHANGED',
  engine,
  cost
});

export const gearboxChanged = (gearbox, cost) => ({
  type: 'GEARBOX_CHANGED',
  gearbox,
  cost
});