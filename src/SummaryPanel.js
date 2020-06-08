import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    textLeft: {
        textAlign: "left"
    },
    textRight: {
        textAlign: "right"
    },
    background: {
        backgroundColor: "black",
        padding: "50px"
    },
    imagePaper: {
        backgroundColor: "white",
        width: "100%",
        height: "300px",
        marginTop: "30px",
        marginBottom: "30px"
    },
    infoPanel: {
        width: "50%",
        display: "inline-block"
    }
});



export function SummaryPanel(props) {
    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Typography variant="h5" className={classes.textRight}>
                Summary
            </Typography>
            <div className={classes.imagePaper}>
            </div>

            <div className={classes.infoPanel}>
                <Typography variant="h6" className={classes.textLeft}>
                    Model
                </Typography>
                <Typography variant="h6" className={classes.textLeft}>
                    Engine
                </Typography>
                <Typography variant="h6" className={classes.textLeft}>
                    Gearbox
                </Typography>
                <Typography variant="h6" className={classes.textLeft}>
                    Color
                </Typography>
                <Typography variant="h6" className={classes.textLeft} style={{ marginTop: "30px" }}>
                    Price
                </Typography>
            </div>
            <div className={classes.infoPanel}>
                <Typography variant="h6" className={classes.textRight}>
                    {props.car.model}
                </Typography>
                <Typography variant="h6" className={classes.textRight}>
                    {props.car.engine}
                </Typography>
                <Typography variant="h6" className={classes.textRight}>
                    {props.car.gearbox}
                </Typography>
                <Typography variant="h6" className={classes.textRight}>
                    {props.car.color}
                </Typography>
                <Typography variant="h6" className={classes.textRight} style={{ marginTop: "30px" }}>
                    ${props.car.totalCost}
                </Typography>
            </div>

        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        car: state.customCar,
    }
};

export const SummaryContainer = connect(mapStateToProps)(SummaryPanel);
