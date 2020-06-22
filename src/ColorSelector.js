import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttonContainer: {
        color: "rgb(255, 255, 255)",
        display: "flex",
        minHeight: "70px",
        overflowX: "hidden",
        overflowY: "hidden",
    },
    button: {
        minWidth: "unset",
        width: "60px",
        height: "60px",
        backgroundColor: "#dfdfdf",
        color: "#000000",
        margin: "3px",
        opacity: 1,
        alignItems: "center",
        borderWidth: "0px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        letterSpacing: "0.42855px",
        maxWidth: "264px",
        padding: "6px 12px",
        textTransform: "uppercase",
        outline: "none"
    },
    selected: {
        backgroundColor: "#2b2b2b",
        opacity: 1,
        borderColor: "#000000",
        borderWidth: "2px",
        borderStyle: "solid"
    },
});

export default function ColorSelector(props) {
    const classes = useStyles();
    const [selectedOption, setSelectedOption] = React.useState(false);
    const [options, setOptions] = React.useState([]);

    //Reset selected element after new options are passed
    useEffect(() => {
        setOptions(props.options);
        setSelectedOption(false);
    }, [props.options])



    const handleClick = (index) => {
        //Set selected tab
        setSelectedOption(index);
        props.optionChanged(options[index].name, options[index].price);
    }

    //If props don't contain list of options
    if (!options)
        return (
            <div >
                <Typography variant="h6" color="textPrimary">
                    {props.name}
                </Typography>
            </div>
        )
    return (
        <div style={{minHeight:"70px"}}>
            <Typography variant="h6" color="textPrimary">
                {props.name}
            </Typography>
            <div className={classes.buttonContainer}>
                {options.map((option, index) =>
                    <button
                        style={{ backgroundColor: option.colorValue }}
                        key={index}
                        onClick={handleClick.bind(this, index)}
                        className={selectedOption === index ? [classes.selected, classes.button].join(" ") : classes.button}
                    >
                    </button>)}
            </div>
        </div>
    );
}

