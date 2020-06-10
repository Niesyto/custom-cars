import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dataLine: {
        display: "flex",
        justifyContent: "space-between"
    }
});

export default function DisplayPartInfo(props) {
    const classes = useStyles();

    return (
        <div className={classes.dataLine}>
            <Typography variant="h6" >
                {props.partName}
            </Typography>
            <Typography variant="h6" >
                {props.partValue}
            </Typography>
        </div>
    )
}