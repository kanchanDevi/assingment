
    const Card =({user_id, status, title })=>{
    return(
        <>
        <div className="container">
           
                  
                         <div className='row'>
                <div className='col'>{user_id}</div>
                <div className='col'>{status}</div>
                <div className='col'>{title}</div>
               </div>
       
                
        </div>
        </>
    )
}
export default Card