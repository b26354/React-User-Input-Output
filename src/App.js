import React, { Component } from 'react';
import './App.css';
import albums from './albums.json';

class App extends Component {

  // Generic CD Image: https://static.techspot.com/images2/downloads/topdownload/2015/01/CD.png
  
  render() {
    // const style = {
    //   backgroundColor: 'lightgray',
    //   font: 'inherit',
    //   border: '2px solid green', 
    //   padding: '8px'
    // };

    var albumListSize = Object.keys(albums).length;   
    var randomIndex = Math.floor(Math.random() * Object.keys(albums).length);
    var randomAlbum = albums.slice(randomIndex,randomIndex+1);
  
    const featuredAlbum = randomAlbum.map((album) => {
      return(
        <div>
        <table bgcolor="#CCCCCC" width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <td align="center" valign="center" bgcolor="#FFFFFF" width="500"><img src={album.image} alt={album.title}/></td>
          </tr>
          <tr>
            <td align="center" valign="center" bgcolor="#FFFFFF" width="500"><b>{album.name}</b></td>
          </tr>
          <tr>
            <td align="center" valign="center" bgcolor="#FFFFFF" width="500">{album.title}</td>            
          </tr>
          </table>           
        </div>          
      )         
    })  

    const albumList = albums.map((album) => {
      return(
        <div>
        <table bgcolor="#CCCCCC" width="100%" cellpadding="4" cellspacing="4">
        <tr>
            <td align="center" valign="center" bgcolor="#FFFFFF" width="75"><img width='75' height='75' src={album.image} alt={album.title}/></td>
            <td align="left" valign="center" bgcolor="#FFFFFF" width="250">{album.name}</td>
            <td align="left" valign="center" bgcolor="#FFFFFF" width="65%">{album.title}</td>
          </tr>
          </table>           
        </div>          
      )         
    })  

    // const display = Object.keys(albums).map((name,title,image) => {
    //   return(       
    //     <div>
    //     <table>
    //       <tr>
    //         <td><img width='75' height='75' src={image} alt={title}/></td>
    //         <td>{name}</td>
    //         <td>{title}</td>
    //       </tr>
    //     </table>           
    //     </div>
    //   )
    // })

    return(
      <div>
        <ul>
          { featuredAlbum }
        </ul>   
        {/* <ul>Random Index: {randomIndex}</ul> */}
        <ul>
          { albumList }
        </ul>
        <ul>
          TOTAL: { albumListSize }
        </ul>        
      </div>
    );
  }
}

export default App;
