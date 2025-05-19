import {Link} from "react-router-dom"

export default function ProductCard({pro})
{
    return(
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded border" >
          <img
            className="card-img-top mx-auto"
            src={pro.images[0].image} alt="img"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              <Link to={'/product/'+pro._id}>{pro.name} </Link>
            </h5>
            <div className="ratings mt-auto">
              <div className="rating-outer">
                <div className="rating-inner" style={{width:`${pro.ratings/5 *100}%`}}>

                </div>
              </div>
            </div>
            <p className="card-text">${pro.price}</p>
            <Link to={'/product/'+pro._id} id="view_btn" className="btn btn-block">View Details</Link >
          </div>
        </div>
      </div>
    )
}