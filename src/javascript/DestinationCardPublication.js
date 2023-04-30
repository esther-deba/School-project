import '../styling/DestinationCardPublication.css';
import { PublicationContainer } from '../javascript/PublicationContainer';
import photo from '../images/place.png';

export const DestinationCardPublication = () => {
  return (
    <div className='destination-card-publication'>
      <div className='separator'>
        <div className='lign left'></div>
        <div className='text'>publications</div>
        <div className='lign right'></div>
      </div>
      <div>
        <PublicationContainer
          destinationImage={photo}
          username={'Esther'}
          usernameImg={photo}
          description={
            'lac noir is a natural lake, located in the Akfadou forest in the town of Adekar at an altitude of 1,260 m, has an area of ​​about 3 hectares and one meter deep.An artificial dyke was built on one side of the lake to maintain an appreciable water level. '
          }
          date={'29 / 04 / 2023'}
        />
      </div>
    </div>
  );
};
