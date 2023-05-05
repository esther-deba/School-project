import '../styling/DestinationCardPublication.css';
import { PublicationContainer } from './PublicationContainer';
import photo from '../images/place.png';
import { DestinationCard } from './DestinationCard';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { EndPointContext } from '../context/EndPointContext';
import { Footer } from './Footer';
export const DestinationCardPublication = () => {
    const { endpoint } = useContext(EndPointContext)
    const { id } = useParams()
    const [destination, setDestination] = useState()
    const [publications, setPublications] = useState()
    const getDestination = async () => {
        const response = await fetch(`${endpoint}/destination/${id}/`)
        const data = await response.json()
        setDestination(data)
    }
    const fetchPublications = async () => {
        const response = await fetch(`${endpoint}/publications/${id}/`);
        const data = await response.json();
        setPublications(data);
        console.log(data)
    }
    useEffect(() => { // a optimiser 
        fetchPublications();
        getDestination()
    }, [])
    console.log(destination)
    return (
        <div className='destination-card-publication'>
            <DestinationCard destination={destination} />
            <div className='publications-separator'>publications</div>
            <div>
                {publications ? publications.map((publication) => {
                    return <PublicationContainer publication={publication} />
                }) : ""}
            </div>
            <Footer />
        </div>
    );
};