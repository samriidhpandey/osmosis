import { Link } from "react-router-dom";
function Card({imgsrc,text,content,button,more,isDark}){
const card= {
    backgroundColor: isDark ? "black" : "darkred",
    color: isDark ? "white" : "white",
  }
    return(
        <>

        

              <div className="blog-card" id="main" style={card}>
                      <Link to={more}>
                 
                    <div className="card-image">
                        {/* <img src={mongodb} alt=""  className="img1"/> */}
{ imgsrc && <img src={imgsrc} alt="" className="img1" width="100%" height="400px"  background-size="cover" />}

                    </div>
                    <h5 className="blog-main-h5 text-white mt-2">{text}</h5>
                    <p className="blog-main-p text-white">{content}</p>                  
                      <button className="blog-main-btn bg-white text-black fw-bolder border-0">{button}</button>
      </Link>
                </div>
       
       


        </>
    );
}
export default Card;