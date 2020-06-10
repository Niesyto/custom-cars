import React from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { colorChanged } from "./redux/actions";

const useStyles = makeStyles({
    selectorButton: {
        minWidth: "unset",
        width: "60px",
        height: "60px",
        backgroundColor: "#dfdfdf",
        color: "#000000",
        fontWeight: "bold",
        lineHeight: "unset",
        fontSize: "15px",
        margin: "3px",
        opacity: 1
    },
    selected: {
        color: "#000000",
        borderWidth: "2px",
        borderStyle: "solid"
    },
    indicator: {
        display: "none"
    }
});

function ColorSelector(props) {
    const classes = useStyles();
    const [selectedOption, setSelectedOption] = React.useState(0);

    const handleClick = (index) => {
        //Set selected tab
        setSelectedOption(index);
        props.colorChanged(props.options[index].name, props.options[index].price);
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
                        style={{ backgroundColor: option.colorValue }}
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


const mapModelDispatchToProps = { colorChanged };

const mapStateToProps = state => {
    return {
        car: state.customCar
    };
};

export const ColorSelectorContainer = connect(mapStateToProps, mapModelDispatchToProps)(ColorSelector); 