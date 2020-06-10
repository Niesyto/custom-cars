import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { SelectorContainer } from './Selector.js'
import { ColorSelectorContainer } from './ColorSelector.js'



export default function SelectionPanel() {
    const [models, setModels] = React.useState([]);
    const [colors, setColors] = React.useState([]);

    useEffect(() => {
        //Fetch color and models tables once the component first mounts
        async function fetchData(file, setFunction) {
            const fetchedData = await fetch(file)
                .then(res => res.json())
                .then((result) => setFunction(result))
        }
        fetchData('./data/models.json', setModels);
        fetchData('./data/colors.json', setColors);
    }, []);


    return (
        <>
            <Typography variant="h5" color="textPrimary" style={{ fontWeight: "bold" }}>
                CKONFIG 5.1
            </Typography>

            <SelectorContainer name="Model" options={models} />
            <SelectorContainer name="Engine" />
            <SelectorContainer name="Gearbox" />
            <ColorSelectorContainer name="Color" options={colors} />
        </>
    );
}

