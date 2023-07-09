import React from 'react'
import ReactPlayer from 'react-player'
import { useState } from 'react';
import './App.css'




function App() {

  const [currentUrl, setCurrentUrl] = useState('https://www.youtube.com/watch?v=CsOsmgUmT9U')
  const [ hover,setHover]=useState(false)
  
  const urls = [
    {
      url: 'https://www.youtube.com/watch?v=M9DblLvu7Sc',
      thumbnail: 'https://img.youtube.com/vi/M9DblLvu7Sc/maxresdefault.jpg'
    },
    {
      url: 'https://www.youtube.com/watch?v=bYRdtCGmviM',
      thumbnail:'https://img.youtube.com/vi/bYRdtCGmviM/maxresdefault.jpg'
    },
     {
      url: 'https://www.youtube.com/watch?v=CsOsmgUmT9U',
      thumbnail:'https://img.youtube.com/vi/CsOsmgUmT9U/maxresdefault.jpg'
    },
      {
      url: 'https://www.youtube.com/watch?v=bYRdtCGmviM',
      thumbnail:'https://img.youtube.com/vi/bYRdtCGmviM/maxresdefault.jpg'
    },
       {
      url: 'https://www.youtube.com/watch?v=bYRdtCGmviM',
      thumbnail:'https://img.youtube.com/vi/bYRdtCGmviM/maxresdefault.jpg'
    },
        {
      url: 'https://www.youtube.com/watch?v=bYRdtCGmviM',
      thumbnail:'https://img.youtube.com/vi/bYRdtCGmviM/maxresdefault.jpg'
        }
        , {
      url: 'https://www.youtube.com/watch?v=bYRdtCGmviM',
      thumbnail:'https://img.youtube.com/vi/bYRdtCGmviM/maxresdefault.jpg'
    }, {
      url: 'https://www.youtube.com/watch?v=bYRdtCGmviM',
      thumbnail:'https://img.youtube.com/vi/bYRdtCGmviM/maxresdefault.jpg'
    }, {
      url: 'https://www.youtube.com/watch?v=bYRdtCGmviM',
      thumbnail:'https://img.youtube.com/vi/bYRdtCGmviM/maxresdefault.jpg'
    }, {
      url: 'https://www.youtube.com/watch?v=bYRdtCGmviM',
      thumbnail:'https://img.youtube.com/vi/bYRdtCGmviM/maxresdefault.jpg'
    }
  ]
  return (
    <div className="App" >
      
      <ReactPlayer url={currentUrl} />
   
      <div className='thumbnail' onMouseOver={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} style={{ width: '650px', display:'flex', flexDirection:'row', overflowX:'scroll'}} >
       
        {hover?urls.map((item,index) => {
          return (
            
              <img key={String(index)} alt='thumbnail' src={ item.thumbnail}style={{width:'100px',borderRadius:'50%'}} onClick={()=>{setCurrentUrl(item.url)}} />
            
          )
        }):null}
      </div>
    </div>
  );
}

export default App;
