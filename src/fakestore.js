import React, {useEffect,useState} from "react";
import axios from 'axios';
function DataFetching3(){ 
    const [data, setData] = useState([]);

    useEffect(() =>{ 
        const fetchMyData = async () => {
             const res = await axios.get("https://fakestoreapi.com/users");
             console.log(res);
             console.log(res.data);
             const resData = await res.data;
             setData(resData);

        }
    fetchMyData();
},[])

return(
    <div>
        Data Fetching
        <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">UserName</th>
      <th scope="col">Phone</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
      <th scope="col">ZipCode</th>




    </tr>
  </thead>
  <tbody>
  {data.map((dataitem, index) => 
        <tr key = {index}>
        <td>{dataitem.id}</td>
        <td>{dataitem.username}</td>
        <td>{dataitem.phone}</td>
        <td>{dataitem.name.firstname}</td>
        <td>{dataitem.name.lastname}</td>
        <td>{dataitem.email}</td>
        <td>{dataitem.address.city}</td>
        <td>{dataitem.address.zipcode}</td>





      </tr>
        
        )}
    
    
  </tbody>
</table>
        
    </div>
)
}
export default DataFetching3;