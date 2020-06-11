import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    colorSelectorButton: {
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
    selectedColor: {
        color: "#000000",
        borderWidth: "2px",
        borderStyle: "solid"
    },
    colorIndicator: {
        display: "none"
    }
});

export default function ColorSelector(props) {
    const classes = useStyles();
    const [selectedOption, setSelectedOption] = React.useState(false);
    const [options, setOptions] = React.useState([]);

    //Reset selected element after new options are passed
    useEffect(()=>{
        setOptions(props.options);
        setSelectedOption(false);
    },[props.options])



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
        <div >
            <Typography variant="h6" color="textPrimary">
                {props.name}
            </Typography>
            <Tabs
                value={selectedOption}
                classes={{
                    indicator: classes.colorIndicator
                }}
            >

                {options.map((option, index) =>
                    //Map each option to a single tab
                    <Tab
                        style={{ backgroundColor: option.colorValue }}
                        key={index}
                        onClick={handleClick.bind(this, index)}
                        classes={{
                            root: classes.colorSelectorButton,
                            selected: classes.selectedColor
                        }} />
                )}
            </Tabs>
        </div>
    );
}

