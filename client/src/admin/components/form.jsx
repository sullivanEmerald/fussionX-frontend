import { Form, Button } from 'react-bootstrap';
import '../../admin.css';
import * as yup from 'yup'
import { yupResolver} from '@hookform/resolvers/yup'
import { useForm} from 'react-hook-form'
import {useState} from 'react'
import { usePredictions } from '../../context/predictions';

const PredictionForm = () => {
    const [isProcessing, setIsProcessing] =  useState(false)
    const [error, setError] = useState('')
    const {predictions,setPredictions} =  usePredictions()

    const Schema = yup.object().shape({
    hometeam : yup.string().required('Home team is required'),
    awayteam : yup.string().required('Away team is required'),
    stage : yup.string().required('stage is required'),
    prediction : yup.string().required('Home team is required'),
    date : yup.string().required('Date is required'),
    time : yup.string().required('Time team is required'),
    })

const {register, handleSubmit, formState: { errors }, formState, reset} = useForm({
    resolver : yupResolver(Schema)
})

const { isValid } = formState;

const onSubmit = async (data, event) => {
    event.preventDefault();
    setError('');
    setIsProcessing(true);

    try {
        const response = await fetch('/admin/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorMessage = await response.json();
            setError(errorMessage.error);
        } else {
            const {loadPrediction, msg} = await response.json();
            setPredictions(!predictions.length ? [loadPrediction] : [...predictions, loadPrediction ])
            setError(msg);

            reset();
        }
    } catch (error) {
        console.error('Error during form submission:', error);
        setError('An error occurred during form submission.');
    } finally {
        setIsProcessing(false);
    }
};




  return (
    <div className='Form-sect'>
         <Form onSubmit={handleSubmit(onSubmit)} className='prediction-form'>
            <h1>Admin Prediction</h1>
            <Form.Group className="form-group" controlId="FormHomeTeam">
                <Form.Label className='prediction-label'>Home team</Form.Label>
                <Form.Control type="text" placeholder="Enter home team"  className="prediction-form-inputs" {...register('hometeam')} />
                {errors.hometeam?.message && <p style={{ color: 'red' }}>{errors.hometeam.message}</p>}
            </Form.Group>
        
            <div className="team-versus">
                <p>VS</p>
            </div>

        
            <Form.Group className="form-group" controlId="FormAwayTeam">
                <Form.Label className='prediction-label'>Away team</Form.Label>
                <Form.Control type="text" placeholder="Enter team away" className="prediction-form-inputs" {...register('awayteam')} />
                {errors.awayteam?.message && <p style={{ color: 'red' }}>{errors.awayteam.message}</p>}
            </Form.Group>
        

            <p className='prediction-subheading'>Prediction</p>
        
            <Form.Group className="form-group" controlId="FormGameLevel">
                <Form.Label className='prediction-label'>Game Stage</Form.Label>
                <Form.Control type="text" placeholder="Enter game prediction stage e.g full-time, 10 minutes" className="prediction-form-inputs" {...register('stage')} />
                {errors.stage?.message && <p style={{ color: 'red' }}>{errors.stage.message}</p>}
            </Form.Group>
        
            <Form.Group className="form-group" controlId="FormPrediction">
                <Form.Label className='prediction-label'>Game Actual prediction</Form.Label>
                <Form.Control type="text" placeholder="Enter game prediction e.g Over 1.5, GG, Draw" className="prediction-form-inputs" {...register('prediction')} />
                {errors.prediction?.message && <p style={{ color: 'red' }}>{errors.prediction.message}</p>}
            </Form.Group>
        

   
            <p className='prediction-subheading'>Game Scheduling</p>
        
            <Form.Group className="form-group" controlId="FormDate">
                <Form.Label className='prediction-label'>Date</Form.Label>
                <Form.Control type="date" className="prediction-form-inputs" {...register('date')} />
                {errors.date?.message && <p style={{ color: 'red' }}>{errors.date.message}</p>}
            </Form.Group>
       
            <Form.Group className="form-group" controlId="FormTime">
                <Form.Label className='prediction-label'>Time</Form.Label>
                <Form.Control type="time" className="prediction-form-inputs" {...register('time')} />
                {errors.time?.message && <p style={{ color: 'red' }}>{errors.time.message}</p>}
            </Form.Group>

            {setError !== '' && <p className='error-message'>{error}</p>}    

            <Button disabled={isProcessing || !isValid} className='predict-button' type="submit">
                {isProcessing ? 'Predicting...' : isValid ? 'Predict' : 'Fill ALL Fields'}
            </Button>
        </Form>

    </div> 
   
  );
}

export default PredictionForm;
