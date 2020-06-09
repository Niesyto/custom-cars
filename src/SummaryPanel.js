import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    textRight: {
        display: "inline-block",
        float: "right"
    },
    background: {
        backgroundColor: "black",
        padding: "50px"
    },
    imagePaper: {
        backgroundColor: "white",
        width: "100%",
        height: "275px",
        marginTop: "30px",
        marginBottom: "30px",
        display:"inline-flex",
        minWidth:"172px"
    },
    dataLine: {
        display: "flex",
        justifyContent:"space-between"
    },
    carIcon: {
        height: "100%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    },
    filterRed: {
        filter: "invert(16%) sepia(100%) saturate(6709%) hue-rotate(8deg) brightness(101%) contrast(123%)"
    },
    filterSilver: {
        filter: "invert(100%) sepia(1%) saturate(3497%) hue-rotate(68deg) brightness(119%) contrast(63%)"
    },
    filterGold: {
        filter: "invert(60%) sepia(58%) saturate(454%) hue-rotate(337deg) brightness(90%) contrast(87%)"
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
                {props.car.imageSource ?
                    <img
                        src={props.car.imageSource}
                        alt="car model"
                        className={[classes.carIcon, "classes.filterRed"].join(' ')}
                    />
                    : null}
            </div>
            <div >
                <div className={classes.dataLine}>
                    <Typography variant="h6" >
                        Model
                </Typography>
                    <Typography variant="h6" >
                       {props.car.model}
                    </Typography>
                </div>
                <div className={classes.dataLine}>
                    <Typography variant="h6">
                        Engine
                </Typography>
                    <Typography variant="h6">
                        {props.car.engine}
                    </Typography>
                </div>
                <div className={classes.dataLine}>
                    <Typography variant="h6" >
                        Gearbox
                </Typography>
                    <Typography variant="h6" >
                        {props.car.gearbox}
                    </Typography>
                </div>
                <div className={classes.dataLine}>
                    <Typography variant="h6" >
                        Color
                </Typography>
                    <Typography variant="h6" >
                        {props.car.color}
                    </Typography>
                </div>
                <div className={classes.dataLine} style={{marginTop:"30px"}}>
                    <Typography variant="h6" >
                        Price
                </Typography>
                    <Typography variant="h6" >
                        ${props.car.totalCost}
                    </Typography>
                </div>
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
