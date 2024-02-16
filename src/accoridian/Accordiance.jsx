import React, { useState } from "react";
import "./accor.css";
import data from "./Data"


const Accordiance = () => {
const [isSelected,setIsSelected]=useState(null);

        function handleShowSingleAns(id){
            if(id===isSelected){

                setIsSelected(null);
                
            }
            else{
                setIsSelected(id);
            }
            
        }

  return (
    <div className="main">
        {
              data &&  data.map((data) => 
              <div key={data.id}>
                <div className="queans"   onClick={() => handleShowSingleAns(data.id)}>
                        <h2>{data.que}</h2>
                          
                {
                          
                    isSelected === data.id ? <div className="ans"> <h2>{data.ans}</h2> </div>:<span>+</span>
                }  
                </div>
                </div>
               
              )

         }
          
    </div>
  )
}

export default Accordiance;