import React, { Component } from 'react'
import Poems from './poems.json'
import './css/ListPage.css'
import { Link } from 'react-router-dom'

export default class ListPage extends Component {
  render() {
    return (
      <div>
      <div style={{marginTop:80, textAlign:'center', fontSize:'medium',padding:"10px"}}>
        Wyszukaj wiersz<br/>
        <input
        onChange={e => this.updateInputValue(e)} 
        style={{margin:"10px",backgroundColor:'transparent',borderStyle:"solid",borderWidth:"1px",color:"antiquewhite"}} 
        type="text" id="searchform">
        </input><br/>
        <div id="search" style={{display:"inline-block",textAlign:'left'}}>
        </div>
      </div> 
      <div style={{float:'left',width:'50%',marginTop:20, textAlign:'center', fontSize:'medium'}}>
        Lista wierszy po tytułach:<br/>
        <div style={{display:"inline-block",textAlign:'left'}}>
        <ol className="poemlist">
        {
          Poems.map(record =>{
            return (
              <li key={record.id}>
                <div style={{borderStyle:"solid",borderWidth:"1px", padding:"5px",margin:"5px"}}>
                <Link to={"/poems/" + record.id}>{record.title}</Link>
                </div>
              </li>
            )
          })
        }
        </ol>
        </div>
      </div>
      <div style={{float:'right',width:'50%',marginTop:20, textAlign:'center', fontSize:'medium'}}>
        Nowo dodane<br/>
        <div style={{display:"inline-block",textAlign:'left'}}>
        <ol className="poemlist">
        {
          Poems.slice(0).reverse().map((record,index) =>{
            if(index<=3)
            {
            return (
              <li key={record.id}>
                <div style={{borderStyle:"solid",borderWidth:"1px", padding:"5px",margin:"5px"}}>
                <Link to={"/poems/" + record.id}>{record.title}</Link>
                </div>
              </li>
            )
            }
          })
        }
        </ol>
        </div>
      </div>
      </div>
    )
  }
  updateInputValue(e) {
    document.getElementById("search").innerHTML =  `<ol className="poemlist">`;
    for (var i = 0; i < Poems.length; i++){
      if(Poems[i].title.toLowerCase().includes(document.getElementById("searchform").value.toLowerCase())){
        document.getElementById("search").innerHTML+=`
         <li key=${Poems[i].id}>
          <div style=${{borderStyle:"solid",borderWidth:"1px", padding:"5px",margin:"5px"}}>
          <a href=${"/poems/" + Poems[i].id}>${Poems[i].title}</a>
          </div>
        </li>`
      }
    }
    document.getElementById("search").innerHTML += `</ol>`;
  }
}
