import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttonContainer: {
        color: "rgb(255, 255, 255)",
        display: "flex",
        fontFamily: "Roboto, sans-serif",
        fontSize: "32.8px",
        height: "57.975px",
        minHeight: "48px",
        overflowX: "hidden",
        overflowY: "hidden",
    },
    button: {
        alignItems: "center",
        backgroundColor: "rgb(223, 223, 223)",
        borderWidth: "0px",
        cursor: "pointer",
        display: "flex",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        fontSize: "15px",
        fontStretch: "100%",
        fontWeight: "700",
        justifyContent: "center",
        letterSpacing: "0.42855px",
        margin: "5px",
        maxWidth: "264px",
        opacity: "0.7",
        padding: "6px 12px",
        textTransform: "uppercase",
        userSelect: "none",
        minWidth: "72px",
        outline: "none"
    },
    selected: {
        backgroundColor: "#2b2b2b",
        color: "#d4d4d4",
        opacity: 1
    },
    '@media (min-width: 600px)': {
        button: {
            minWidth: "160px"
        }
    }
});

export default function Selector(props) {
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
        switch (props.name) {
            case "Model":
                //Update redux state
                props.optionChanged(options[index].name, options[index].price, options[index].imageSource);
                break;
            case "Engine":
                props.optionChanged(options[index].name, options[index].price);
                break;
            case "Gearbox":
                props.optionChanged(options[index].name, options[index].price);
                break;
            default:
                break;
        }
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
        <div >
            <Typography variant="h6" color="textPrimary">
                {props.name}
            </Typography>

            <div className={classes.buttonContainer}>
                {options.map((option, index) =>
                    //Map each option to a single tab
                    <button
                        key={index}
                        onClick={handleClick.bind(this, index)}
                        //Classname is classes.button if not selected and a combination of classes.button and classes.selected if otherwise
                        className={selectedOption === index ? [classes.selected, classes.button].join(" ") : classes.button} >
                        {option.name}
                    </button>
                )}
            </div>
        </div>
    );
}