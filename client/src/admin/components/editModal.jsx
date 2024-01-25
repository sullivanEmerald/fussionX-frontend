import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import {useState, useEffect} from 'react'
import { usePredictions } from '../../context/predictions';

const PredictionModal = (props) => {
    const {show, handleClose, _id, stage, prediction, time, date} = props
    const {predictions, setPredictions} =  usePredictions()
    const [isProcessing, setIsProcessing] =  useState(false)
    const [error, setError] = useState('')
    

    const schema = yup.object().shape({
        stage: yup.string().required('Game Stage is required'),
        prediction: yup.string().required('Game Actual prediction is required'),
        date: yup.string().required('Date is required'),
        time: yup.string().required('Time is required'),
      });

      const { register, handleSubmit, formState: { errors } , formState, reset } = useForm({
        resolver: yupResolver(schema),

      });

      const { isValid } = formState;

      const onSubmit = async (data, event) => {
        event.preventDefault();
        setError('');
        setIsProcessing(true);
    
        try {
            const response = await fetch(`/admin/update/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            if (!response.ok) {
                const {error} = await response.json();
                setError(error);
            } else {
                setPredictions(predictions.map((item) => item._id === _id ? {...item, stage : data.stage , prediction : data.prediction, date : data.date, time : data.time} : item))
                const {msg} = await response.json();
                setError(msg);

                const closeModal = () => {
                    const timeoutId = setTimeout(() => {
                        handleClose()
                      }, 5000);
                  
                      return () => clearTimeout(timeoutId);
                }

                closeModal();
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            setError('An error occurred during form submission.');
        } finally {
            setIsProcessing(false);
        }
    };




    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title className='modal-title'>Edit Prediction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit(onSubmit)} className='prediction-edit-form' >
                {error !== '' && <p style={{ color : 'red'}}>{error}</p>}
                <Form.Group className="form-group" controlId="FormGameLevel">
                    <Form.Label className='prediction-label'>Game Stage</Form.Label>
                    <Form.Control type="text" placeholder="Enter game prediction stage e.g full-time, 10 minutes" className="prediction-form-inputs" defaultValue={stage} {...register('stage')} />   
                    {errors.stage?.message && <p style={{ color: 'red' }}>{errors.stage.message}</p>}
                </Form.Group>
            
                <Form.Group className="form-group" controlId="FormPrediction">
                    <Form.Label className='prediction-label'>Game Actual prediction</Form.Label>
                    <Form.Control type="text" placeholder="Enter game prediction e.g Over 1.5, GG, Draw" className="prediction-form-inputs" defaultValue={prediction} {...register('prediction')} />
                    {errors.prediction?.message && <p style={{ color: 'red' }}>{errors.prediction.message}</p>}
                </Form.Group>

                <Form.Group className="form-group" controlId="FormDate">
                <Form.Label className='prediction-label'>Date</Form.Label>
                <Form.Control type="date" className="prediction-form-inputs" defaultValue={date}  {...register('date')} />
                {errors.date?.message && <p style={{ color: 'red' }}>{errors.date.message}</p>}
            </Form.Group>
       
            <Form.Group className="form-group" controlId="FormTime">
                <Form.Label className='prediction-label'>Time</Form.Label>
                <Form.Control type="time" className="prediction-form-inputs" defaultValue={time} {...register('time')} />
                {errors.time?.message && <p style={{ color: 'red' }}>{errors.time.message}</p>}
            </Form.Group>

            <Button disabled={isProcessing || !isValid} className='predict-button' type="submit">
                {isProcessing ? 'Saving...' : isValid ? 'Save Changes' : 'Fill ALL Fields'}
            </Button>

            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
    )
}


export default PredictionModal ;