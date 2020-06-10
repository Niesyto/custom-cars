import React from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import DisplayPartInfo from './DisplayPartInfo.js';

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
        display: "inline-flex",
        minWidth: "172px"
    },
    carIcon: {
        height: "100%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    },
    //Coloring SVG elements is complicated, best solution is using CSS - filter
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

    let imageClass;
    //Evaluate image classes based on Redux state
    switch (props.car.color) {
        case "Red":
            imageClass = [classes.carIcon, classes.filterRed].join(' ');
            break;
        case "Gold":
            imageClass = [classes.carIcon, classes.filterGold].join(' ');
            break;
        case "Silver":
            imageClass = [classes.carIcon, classes.filterSilver].join(' ');
            break;
        default:
            imageClass = classes.carIcon;
            break;
    }


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
                        className={imageClass}
                    />
                    : null}
            </div>
            <div >
                <DisplayPartInfo partName="Model" partValue={props.car.model} />
                <DisplayPartInfo partName="Engine" partValue={props.car.engine} />
                <DisplayPartInfo partName="Gearbox" partValue={props.car.gearbox} />
                <DisplayPartInfo partName="Color" partValue={props.car.color} />
                <DisplayPartInfo partName="Price" partValue={`$${props.car.totalCost}`} style={{ marginTop: "30px" }} />
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
