import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { SelectorContainer } from './Selector.js'


//import models from './data/models.json'
//import engines from './data/engines.json'


export default function SelectionPanel() {
    const [models, setModels] = React.useState([]);

    useEffect(() => {
        //Fetch first table once the component first mountss
        async function fetchData() {
            const fetchedData = await fetch('./data/models.json')
                .then(res => res.json())
                .then((result) =>  setModels(result))
        }
        fetchData();
    }, []);




    return (
        <>
            <Typography variant="h5" color="textPrimary" style={{ fontWeight: "bold" }}>
                CKONFIG 5.1
            </Typography>
            {<SelectorContainer name="Model" options={models}>
            </SelectorContainer>
            /* 
            <SelectorContainer name="Engine" options={engines}>
    </SelectorContainer>*/}
            <SelectorContainer name="Gearbox">
            </SelectorContainer>
            <SelectorContainer name="Color">
            </SelectorContainer>
        </>
    );
}

