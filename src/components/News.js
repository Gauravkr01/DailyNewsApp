import React , {Component} from 'react'
import Newsitem from './Newsitem'
export default class News extends Component{ 
 
  // static defaultProps={
  //  country:'in',
  //  pageSize:8,
  //  category:general,
  // }
  // static propTypes={
  //   country:"PropTypes.string",
  //   pageSize:"PropTypes.number",
  //   category:"PropTypes.string" ,
  // }
   
    constructor(props){
        super(props);
        this.state = { 
         articles: [],
         loading : false,
         page:1,
        
        }
    }


  async componentDidMount(){
      // let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b5e6d3b550f04179abaaba3269d0e5f1&page=1" ;
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7fbcd13665c54a689dedd809e229dd33&page=1&pageSize=6`
      this.setState({loading:true})
           
       
      let data =  await fetch(url);
      let parsedData = await data.json(); 

     
      // console.log(parsedData);
      this.setState({loading:false})
      // console.log("page ", this.state.page) 
      
      this.setState({articles:parsedData.articles,
        totalResults:parsedData.totalResults ,
        category:parsedData.category
      }); 
  
      this.props.setProgress(100);
  }

  handleprevChange = async ()=>{
   
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b5e6d3b550f04179abaaba3269d0e5f1&page=${this.state.page - 1}&pageSize=20`;
   
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=&${this.props.category}&apiKey=7fbcd13665c54a689dedd809e229dd33&page=${this.state.page -1}&pageSize=5`;
     
    this.setState({loading:true})
    let data =  await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
     this.setState({
      page:this.state.page - 1,
        articles:parsedData.articles,
        loading:false
    })
  }

  handlenextChange = async()=>{

    // if(Math.ceil(this.state.page + 1 >this.state.totalResults/20)){}

    // else{
// console.log("totalResults", Math.ceithis.state.totalResults/20)
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b5e6d3b550f04179abaaba3269d0e5f1&page=${this.state.page + 1}&pageSize=20`;

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7fbcd13665c54a689dedd809e229dd33&page=${this.state.page + 1}&pageSize=5`;
    this.setState({loading:true});
    let data =  await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
     this.setState({
      page:this.state.page + 1,
        articles:parsedData.articles,
        loading:false
        
    })
  } 

render(){
    return (
        <div className="container mx-10" >

            <h2 className='text-center my-3'>Daily News Analysis - TOP headlines({this.props.category})</h2> 

           {/* //loading spinner   */}
        {  this.state.loading &&  <div className="container text-center">
          <img src={require('./loading.gif')} alt="my-gif" />
          </div>
        }


         { !this.state.loading  &&  <div className="row">
                {this.state.articles.map((element)=>{
                    
                       return  <div className="col-md-4"  key={element.url}>
                   <Newsitem title = {element.title} discription={element.description}  imageUrl={element.urlToImage} newsUrl={element.url } author={element.author} publishedAt={element.publishedAt}/>
                              </div>
                 })}
            </div>
         } 
            {/* button ---------*/}
            <div className='container d-flex justify-content-between my-4'>
            <button disabled={this.state.page<=1} type="button" className="btn btn-secondary float" style={{backgroundColor:"green"}} onClick={this.handleprevChange} >&larr;Prev </button>

            <button disabled ={this.state.page >= Math.ceil(this.state.totalResults/5)}type="button"style={{backgroundColor:"green"}}  className="btn btn-secondary float" onClick={this.handlenextChange} >Next&rarr;</button>
            </div>

        </div>
    )
}

}