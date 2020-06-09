const initialState = {
    //Selected elements' names
    model: "",
    engine: "",
    gearbox: "",
    color: "",
    //Cost of all elements summed
    totalCost: 0,
    //Cost of single element
    modelCost: 0,
    engineCost: 0,
    gearboxCost: 0,
    colorCost: 0,
    imageSource: ""
}

export const customCar = (state = initialState, action) => {
    switch (action.type) {
        case 'MODEL_CHANGED':
            //Return object combining state with passed model
            return Object.assign({}, state, {
                model: action.model,
                modelCost: action.cost,
                totalCost: state.engineCost + state.gearboxCost + state.colorCost + action.cost,
                imageSource: action.imageSource
            });
        case 'ENGINE_CHANGED':
            return Object.assign({}, state, {
                engine: action.engine,
                engineCost: action.cost,
                totalCost: state.modelCost + state.gearboxCost + state.colorCost + action.cost
            });
        case 'COLOR_CHANGED':
            return Object.assign({}, state, {
                color: action.color,
                colorCost: action.cost,
                totalCost: state.engineCost + state.gearboxCost + state.modelCost + action.cost
            });
        case 'GEARBOX_CHANGED':
            return Object.assign({}, state, {
                gearbox: action.gearbox,
                gearboxCost: action.cost,
                totalCost: state.engineCost + state.modelCost + state.colorCost + action.cost
            })
        default:
            return state
    }
}