import './recorddata.css'
const RecordData = (props) => {

    return(
        <div className="box">
            <img src={props.userDetails.avatar}></img>
          <h2>{props.userDetails.first_name}</h2>
           <h2>{props.userDetails.last_name}</h2>
           <h2>{props.userDetails.email}</h2>          
          
        </div>
    )
}
export default RecordData;