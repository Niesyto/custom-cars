import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Selector from './Selector.js'
import op from './data/models.json'


export default function SelectionPanel() {
    const [options, setOptions] = React.useState([]);




    return (
        <>
            <Typography variant="h5" color="textPrimary" style={{ fontWeight: "bold" }}>
                CKONFIG 5.1
            </Typography>
            <Selector name="Model" options={op}>
            </Selector>
            <Selector name="Engine">
            </Selector>
            <Selector name="Gearbox">
            </Selector>
            <Selector name="Color">
            </Selector>
        </>
    );
}

