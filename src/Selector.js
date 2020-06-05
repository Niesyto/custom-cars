import React from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

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

export default function Selector(props) {
    const classes = useStyles();
    const [selectedOption, setSelectedOption] = React.useState(0);

    const handleClick = (index) => {
        setSelectedOption(index);
    }

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
