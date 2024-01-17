import React, { Component } from 'react'
import Navbar from './components/Navbar'  
import News from './components/News';
// import Newsitem from './components/Newsitem'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component { 

  state= {
    progress: 0 
  }
  setProgress=(progress)=>{
     this.setState ({progress:progress})
  }
  render() { 
    return (
      <div> 
        <BrowserRouter> 

        <LoadingBar 
        height ={4}
        color='#f11946'
        progress={this.state.progress}
      
      />
         <Navbar />
               <Routes>
                  <Route exact path="/" element={<News setProgress ={this.setProgress} key="business"  category="business"  />}/> 
                  <Route exact path="/general" element={<News  setProgress ={this.setProgress} key="general"  category="general"  />}/> 
                  <Route exact path="/technology" element={<News setProgress ={this.setProgress}  key="technology"  category="technology"  />}/> 
                  <Route exact path="/sports" element={<News  setProgress ={this.setProgress}  key="sports" category="sports"  />}/> 
                  <Route exact path="/science" element={<News  setProgress ={this.setProgress}  key="science"  category="science"  />}/> 
                  <Route exact path="/health" element={<News  setProgress ={this.setProgress}  key="health" category="health"  />}/> 
                  <Route exact path="/entertainment" element={<News  setProgress ={this.setProgress}  key="entertainment" category="entertainment"  />}/> 
                  <Route exact path="/general" element={<News   setProgress ={this.setProgress} key="general"  category="general"  />}/> 
                  <Route exact path="/business" element={<News  setProgress ={this.setProgress}  key="business" category="business"  />}/> 
               </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
