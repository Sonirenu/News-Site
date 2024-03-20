import image from '../assets/news.jpeg'

const NewsItem = ({title, description, src, url}) => {

  return (

    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-3" style={{maxWidth:"345px"}}>

    <img src={src?src:image} style={{height:"200px",width:"360px" }} className="card-img-top" alt="..."/>

    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):"News API is to search through every article published by over 80,000 news sources and blogs in the last 5 years. Think of us as Google News that you can interact with programmatically!"}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
    
  </div>
  )
}

export default NewsItem