import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import Selector from './Selector.js'
import ColorSelector from './ColorSelector.js'
import { modelChanged, gearboxChanged, engineChanged, colorChanged } from "./redux/actions";



function SelectionPanel(props) {
    //All options from API (or .json file in this case)
    const [models, setModels] = React.useState([]);
    const [colors, setColors] = React.useState([]);
    const [engines, setEngines] = React.useState([]);
    const [gearboxes, setGearboxes] = React.useState([]);
    //Available options for current selection
    const [availableEngines, setAvailableEngines] = React.useState([]);
    const [availableGearboxes, setAvailableGearboxes] = React.useState([]);


    useEffect(() => {
        //Fetch parts data tables once the component first mounts
        async function fetchData(file, setFunction) {
            const fetchedData = await fetch(file)
                .then(res => res.json())
                .then((result) => setFunction(result))
        }
        fetchData('./data/models.json', setModels);
        fetchData('./data/colors.json', setColors);
        fetchData('./data/engines.json', setEngines);
        fetchData('./data/gearboxes.json', setGearboxes);
    }, []);

    //Set available engines after model change
    useEffect(() => {
        setAvailableEngines(engines.filter(contains(props.car.model)));
    }, [engines, props.car.model]);

    //Set available gearboxes after engine change
    useEffect(() => {
        setAvailableGearboxes(gearboxes.filter(contains(props.car.engine)));
    }, [gearboxes, props.car.engine]);

    //Higher order function that return callback for array filtering
    function contains(searchedValue) {
        return function (element) {     
            return (element.availableIn.includes(searchedValue));
        }
    }

    return (
        <>
            <Typography variant="h5" color="textPrimary" style={{ fontWeight: "bold" }}>
                CKONFIG 5.1
            </Typography>

            <Selector name="Model" options={models} optionChanged={props.modelChanged} />
            <Selector name="Engine" options={availableEngines} optionChanged={props.engineChanged} />
            <Selector name="Gearbox" options={availableGearboxes} optionChanged={props.gearboxChanged} />
            <ColorSelector name="Color" options={colors} optionChanged={props.colorChanged} />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        car: state.customCar,
    }
};

const mapDispatchToProps = { modelChanged, gearboxChanged, engineChanged, colorChanged };


export const SelectionPanelContainer = connect(mapStateToProps, mapDispatchToProps)(SelectionPanel);
