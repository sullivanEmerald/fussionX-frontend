import '../../App.css'
import '../../admin.css'
import { usePredictions } from '../../context/predictions';
import PredictionModal from './editModal';
import {useState} from 'react'


const PredictionTableRow = (props) => {
const { away, date, home, prediction, stage, time, won, _id , changeState} = props
const {predictions, setPredictions} = usePredictions()
const [isModalVisible, setVisible] =  useState(false)


  const swapTeams = async (id) => {
    try {
        const response = await fetch(`/prediction/${id}`, {
          method : 'PUT',
          headers : {
            'Content-Type' : 'application/json'
          },
        })

        if(!response.ok){
          const { error} = await response.json()
          changeState(error)
        }else{
          const {msg} = await response.json()
          setPredictions(predictions.map((item) => item._id === id ? { ...item, home: item.away, away: item.home } : item));
          changeState(msg)
        }
    } catch (error) {
      console.error(error)
    }
  } 

  const deletePrediction = async (id) => {
    try {
      const response = await fetch(`/admin/delete/${_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
      const {error} = await response.json();
      changeState(error)
  } else {
    const predictionToDeleteIndex = predictions.findIndex(
      (item) => item._id === id
    );

    if (predictionToDeleteIndex !== -1) {
      predictions.splice(predictionToDeleteIndex, 1);
      setPredictions([...predictions]);
    }
      const {msg} = await response.json();
      changeState(msg);
  }
    } catch (error) {
      console.error(error)
    }
  }

  const showModal = () => {
    setVisible(true)
  }

  const DiableShowModal = () => {
    setVisible(false)
  }
  
  return (
    <>
      
      <tr>
          <td className='first-row'>{`${date} (${time})`}</td>
          <td className='team-row'>
            {home}
            <button onClick={() => swapTeams(_id)} className="rotate-admin-button" title="swap position">
              <img src="/images/sideicons/pay.png" alt="logo" />
            </button>
            {away}
          </td>
          <td  className='last-row'>
            {`${stage} ${prediction}`}
            <label>{prediction.oddValue}</label>
          </td>
          <td>
            <button className='prediction-edit-button' onClick={showModal} >Edit</button>
          </td>
          <td>
            <button className='prediction-delete-button' onClick={() => deletePrediction(_id)}>Delete</button>
          </td> 
          <td>
            <button className='prediction-won-button'>won</button>
          </td> 
      </tr>
      {isModalVisible && <PredictionModal handleClose={DiableShowModal} show={showModal} {...props} />}
    </>
  );
};

export default PredictionTableRow;
