import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    selectorButton: {
        backgroundColor: "#dfdfdf",
        color: "#000000",
        fontWeight: "bold",
        lineHeight: "unset",
        fontSize: "15px",
        margin: "5px",
        flexShrink: 1
    },
    selected: {
        backgroundColor: "#2b2b2b",
        color: "#d4d4d4",
    },
    indicator: {
        display: "none"
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
            {options[0].name}

            {options.map((option) => option.name 
            )}

            <Tabs
                value={selectedOption}
                classes={{
                    indicator: classes.indicator
                }}
            >
                {options.map((option, index) =>
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