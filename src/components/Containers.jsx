import React, {useEffect, useState} from 'react';
import '../App.css';  
import imgs from '../images/imageLinks';


const Containers = ({data ,dataToParent}) => {

  const [textButton, setTextButton] = useState(null);

  const handleClick = (id) => {
    setTextButton(id); 
  };

    
    return (
        <div className='containers'>

           {data.map((each) => ( 
            <div

              className={`container ${textButton === each.id ? 'selected' : ''}`} 
              key={each.id} 
              onClick={() => {
                dataToParent(each); 
                handleClick(each.id);
            }}>

              <div>   
                  <h2 className='yards-onimage'> {each.size} Yards </h2>
                  <img 
                    className="image"
                    src={imgs[each.id]}
                   />
              </div>

                <h2>{each.hire_period_days} days rent</h2>
                <h2 className='price' >£{each.price_before_vat}</h2>
                <button className="btn" >
                    {textButton === each.id ? '✔ SELECTED for ORDER' : '⇛ Apply for ORDER ⇚'}
                </button>

            </div>
            ))}

        </div>

    );
  };
  
  export default Containers;