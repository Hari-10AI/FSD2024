import React, {useEffect,useState} from "react";
import axios from 'axios';
function DataFetching(){ 
    const [data, setData] = useState([]);

    useEffect(() =>{ 
        const fetchMyData = async () => {
             const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
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
      <th scope="col">UserId</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
  {data.map((dataitem, index) => 
        <tr key = {index}>
        <td>{dataitem.id}</td>
        <td>{dataitem.userId}</td>
        <td>{dataitem.title}</td>
        <td>{dataitem.body}</td>
      </tr>
        
        )}
    
    
  </tbody>
</table>
        
    </div>
)
}
export default DataFetching;

