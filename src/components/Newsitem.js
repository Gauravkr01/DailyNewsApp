import React from 'react'


const Newsitem = (props) =>  {
        let{title , discription , imageUrl , newsUrl , author , publishedAt} = props;
        return (
            <div>


                <div className="card" style={{width:"18rem"}} >
                    <img className="card-img-top" src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2023/12/Sensex_market_Nifty-770x433.jpg":imageUrl} alt="Nothing" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{discription}...</p> 
                        <p><b>By {!author?"unknown":author} : {new Date(publishedAt).toDateString()} at {new Date(publishedAt).toTimeString ()} </b> </p>
                        <a href={newsUrl} rel={"_blank"} className="btn btn-sm btn-primary" style={{color:"black" ,backgroundColor:"lightgreen" }}>Read More </a>
                    </div>  
                </div>
            </div>
        )
    
}

export default Newsitem
