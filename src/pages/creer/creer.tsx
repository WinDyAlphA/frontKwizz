import React, { useState } from "react";
import { Kwizz } from "../jouer/JouerAPI";
import { useNavigate } from 'react-router-dom';

function Creer(){

    type Kwizz = {
        name: string
    }

    const [kwizz, setKwizz] = useState<Kwizz>();
    
    function handleKwizzCreate(kwizzName:string) {
        kwizzName = kwizzName.trim();
        if(kwizzName.length > 0){
            setKwizz({name: kwizzName});
        }
        
    }

    const navigate = useNavigate();

    function handleCreation(){
        if(!kwizz) return null;
        console.log(kwizz)
        fetch(`http://localhost:8080/api/kwizz/create`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(kwizz)
        }).then(() => navigate('/Creer/questions'))
    }

    return(
        <React.Fragment>

                <h2>creer</h2>
                <div>
                    <label>NOM</label>
                    <input type={'text'} name={'name'}
                           placeholder={'nom kwizz'} onChange={(event)=>{handleKwizzCreate(event.target.value)}} />
                </div>
                <button name="btnValid" onClick={handleCreation}>valider</button>

        </React.Fragment>
        
    );
}

export default Creer