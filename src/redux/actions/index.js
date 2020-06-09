export const modelChanged = (model, cost, imageSource) => ({
  type: 'MODEL_CHANGED',
  model,
  cost,
  imageSource
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