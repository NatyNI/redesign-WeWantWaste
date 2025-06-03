import { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from './services/api';
import Containers from "./components/Containers";



function App() {

  const [data, setData] = useState([]);
  const [dataContainer, setDataContainer] = useState([]);
  const [showBottom, setShowBottom] = useState(false);

  useEffect(()=>{
      fetchData()
      .then((res) =>setData(res))
      .catch((err) => console.error(err))
      }, []);

  const dataFromChild = (data) => {
    setDataContainer(data);
    setShowBottom(true);
  }

  
  return (
    <div className='body'>
      <div className="head">
        <h2>Find Your Ideal Skip Size</h2>
        <h3>Select the most suitable option for your waste volume</h3> 
      </div>

      <div>
        <Containers data={data} dataToParent={dataFromChild} /> 
      </div>

    {showBottom &&(

      <div class="contselected">
      <div class="bar-content">
        <p className='bar-text'>
          <span className='price_bottom'>£{dataContainer.price_before_vat}</span><br/> 
          <span className='detail_bottom'>{dataContainer.size}  Yard Skip</span> <span>➢</span> <span></span>
          <span className='detail_bottom'>{dataContainer.hire_period_days} days rent</span> 
        </p>
        <div class="bar-buttons">
          <button>Back</button>
          <button>Continue</button>
        </div>
      </div>
      </div>
    )}

    </div>  
    
  );
}

export default App;
