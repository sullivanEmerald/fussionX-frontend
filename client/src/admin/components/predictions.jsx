import '../../admin.css';
import { usePredictions } from '../../context/predictions';
import PredictionTableRow from './predictionrow';
import {useState , useEffect} from 'react'

const AvailablePredictions = () => {
    const{predictions} =  usePredictions()
    const [error, setError] =  useState('')
    // const [getPredictions, setAllPredictions] = useState([])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setError('');
        }, 5000);
    
        return () => clearTimeout(timeoutId);
      }, [error]);


    //   useEffect(() => {
    //     setAllPredictions(predictions.reverse())
    //   }, []);

    return (
        <>
            <div class="table-responsive">
                <table class="table">
                    <thead className="">
                        <tr>
                            <th>Date</th>
                            <th className>Match</th>
                            <th>Prediction</th>
                        </tr>
                        </thead>
                        <tbody className="">
                            {predictions.map((prediction, i) => (
                                <PredictionTableRow key={i } {...prediction} changeState={setError} />
                                ))}
                        </tbody>
                </table>
            </div>

            {error !== '' && (
                <div className="responseBlock">
                    <div className='mainContent'>
                        <p>{error}</p>
                    </div>
                </div>
            )}

        </>
    )
}


export default AvailablePredictions;