

export default function ClassPage(props)  {
    return (
        <div>
            <h1>{props.coursename}</h1>
            <p>Description: {props.details}</p>
            <p>Overall rating: {props.rating} </p>
            
        </div>
    
    );
  }


