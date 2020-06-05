import React from 'react';
import Typography from '@material-ui/core/Typography';



export default function SummaryPanel() {
    return (
        <div style={{ backgroundColor: "black", padding: "50px" }}>
            <Typography variant="h5" style={{ textAlign: "right" }}>
                Summary
            </Typography>
            <div style={{ backgroundColor: "white", width:"100%", height:"300px",marginTop:"30px", marginBottom:"30px" }}>

            </div>

            <div style={{ width: "50%", display: "inline-block" }}>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                    Model
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                    Engine
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                    Gearbox
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                    Color
                </Typography> 
                <Typography variant="h6" style={{ textAlign: "left", marginTop:"30px" }}>
                    Price
                </Typography>
            </div>
            <div style={{ width: "50%", display: "inline-block" }}>
                <Typography variant="h6" style={{ textAlign: "right" }}>
                    b
                </Typography>
            </div>

        </div>
    );
}

