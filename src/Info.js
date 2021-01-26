import React, { useState, useEffect } from 'react';
import SkelentonElement from './Skelentons/SkelentonElement';

const Info = () => {
    const [Infos, setInfos] = useState(null);
  useEffect(() => {
    setTimeout( async () => {
      const res = await fetch('https://api.enye.tech/v1/challenge/records');
      const {records: {profiles} } = await res.json();
      setInfos(profiles);
  
    })
  }, []);
   
    const [searchTerm, setSearchTerm] = useState('');
    return ( 
        <div className="Infos container text-center ">
             <SkelentonElement theme="skelenton" />
           <h2>Customers Informations</h2>
           <input type="text" class="form-control" placeholder="search by firstname" onChange={(e) => {setSearchTerm(e.target.value)}}/>
            {Infos && Infos.filter((val) => {
               if (searchTerm === '') {
                   return val
               }else if(val.FirstName.toLowerCase().includes(searchTerm.toLowerCase())) {
                   return val
               }
            })
             .map(Info => (
                <div className="container mt-3 text-center" key={Math.random()}>
                   <ul className="list-group">
                      <li className="list-group-item">FirstName: {Info.FirstName}</li> 
                      <li className="list-group-item">LastName: {Info.LastName}</li>
                      <li className="list-group-item">Gender: {Info.Gender}</li>
                      <li className="list-group-item">Latitude: {Info.Latitude}</li> 
                      <li className="list-group-item">Longitude: {Info.Longitude}</li>
                      <li className="list-group-item">CreditCardNumber: {Info.CreditCardNumber}</li>
                      <li className="list-group-item">CreditCardType: {Info.CreditCardType}</li> 
                      <li className="list-group-item">Email: {Info.Email}</li>
                      <li className="list-group-item">Domain: {Info.DomainName}</li>
                      <li className="list-group-item">PhoneNumber: {Info.PhoneNumber}</li> 
                      <li className="list-group-item">MacAddress: {Info.MacAddress}</li>
                      <li className="list-group-item">URL: {Info.URL}</li>
                      <li className="list-group-item">UserName: {Info.UserName}</li>
                      <li className="list-group-item">lastLogin: {Info.LastLogin}</li> 
                      <li className="list-group-item">PaymentMethod: {Info.PaymentMethod}</li>
                   </ul>

                </div>
            ))}

            {!Infos && <div className="alert alert-primary" role="alert">
                          loading just a moment!
                        </div>}
        </div>
     );
}
 
export default Info;