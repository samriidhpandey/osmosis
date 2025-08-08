import { Link } from "react-router-dom";
function Card({imgsrc,text,content,button,more}){

    return(
        <>

        

              <div className="blog-card" id="main">
                      <Link to={more}>
                 
                    <div className="card-image">
                        {/* <img src={mongodb} alt=""  className="img1"/> */}
{ imgsrc && <img src={imgsrc} alt="" className="img1" width="100%" height="400px"  background-size="cover" />}

                    </div>
                    <h5 className="blog-main-h5">{text}</h5>
                    <p className="blog-main-p">{content}</p>                  
                      <button className="blog-main-btn ">{button}</button>
      </Link>
                </div>
       
       


        </>
    );
}
export default Card;