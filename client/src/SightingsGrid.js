import SightingCard from "./SightingCard";
import { apiKey } from "./file_to_ignore";


const SightingsGrid = ({sightings, removeSighting}) => {
    const sightingsList = sightings.map((sighting) =>{
        return <SightingCard sighting={sighting} key={sighting._id} removeSighting={removeSighting} />
    });
    
    return (
        <>
            <p>The first key is: {apiKey.firstKey}</p>
            <p>The second key is: {apiKey.secondKey}</p>
            <p>The third key is: {apiKey.thirdKey}</p>
            {sightingsList}
        </>
    );

}

export default SightingsGrid;