import React from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { modelChanged, gearboxChanged, colorChanged, engineChanged } from "./redux/actions";

const useStyles = makeStyles({
    selectorButton: {
        flexGrow: 1,
        backgroundColor: "#dfdfdf",
        color: "#000000",
        fontWeight: "bold",
        lineHeight: "unset",
        fontSize: "15px",
        maxWidth: "unset",
        margin: "10px"
    },
    selected: {
        backgroundColor: "#2b2b2b",
        color: "#d4d4d4",
    },
    indicator: {
        display: "none"
    }
});

function Selector(props) {
    const classes = useStyles();
    const [selectedOption, setSelectedOption] = React.useState(0);

    const handleClick = (index) => {
        //Set selected tab
        setSelectedOption(index);
        switch (props.name) {
            case "Model":
                //Update redux state
                props.modelChanged(props.options[index].name, props.options[index].price);
                break;
            case "Color":
                props.colorChanged(props.options[index].name, props.options[index].price);
                break;
            case "Engine":
                props.engineChanged(props.options[index].name, props.options[index].price);
                break;
            case "Gearbox":
                props.gearboxChanged(props.options[index].name, props.options[index].price);
                break;
            default:
                break;
        }
    }
    //If props don't contain list of options
    if (!props.options)
        return (
            <div >
                <Typography variant="h6" color="textPrimary">
                    {props.name}
                </Typography>
            </div>
        )
    return (
        <div >
            <Typography variant="h6" color="textPrimary">
                {props.name}
            </Typography>
            <Tabs
                value={selectedOption}
                classes={{
                    indicator: classes.indicator
                }}
            >
                
                {props.options.map((option, index) =>
                //Map each option to a single tab
                    <Tab
                        label={option.name}
                        key={index}
                        onClick={handleClick.bind(this, index)}
                        classes={{
                            root: classes.selectorButton,
                            selected: classes.selected
                        }} />
                )}
            </Tabs>
        </div>
    );
}


const mapModelDispatchToProps = { modelChanged, gearboxChanged, colorChanged, engineChanged };

const mapStateToProps = state => {
    return {
        car: state.customCar
    };
};

export const SelectorContainer = connect(mapStateToProps, mapModelDispatchToProps)(Selector); 