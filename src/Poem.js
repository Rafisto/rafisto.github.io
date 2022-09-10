import React from 'react'
import Poems from './poems.json'
import { useParams } from 'react-router-dom';
import './css/Poem.css';
import { Link } from 'react-router-dom';


export default function Poem() {
  const { id } = useParams();
  return (
    <div style={{marginTop:80, textAlign:'center'}}>
        <div style={{display:"inline-block",textAlign:'left'}}>
        {
            Poems.map((record,index) => {
                if(record.id===parseInt(id)){
                    return (
                        <div key={"Poem"+index} >
                        <p className="poemtitle">{record.title}</p>
                        <p className="poemdateauthor">{record.date} Rafał Włodarczyk</p>
                        {
                        record.content.map((line, index) => {
                            var text= "";
                            if (index+1 % 5 === 1) {
                                text = String(index+1)+" ";
                            } 
                            else {
                                text = "  ";
                            }
                            return(
                                <div key={index} >
                                <p key={index} className="poemline"><span className="poemindex">{text}</span>{line}</p>  
                                </div>         
                            )
                        })
                        }
                        </div>
                    )
                }
            })
        }
        <div>
              <Link to="/list"><p className="listlink">Przejdź do listy wierszy</p></Link>
        </div>
        </div>

    </div>
  )
}
