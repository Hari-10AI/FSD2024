import CardUI from './card';

function CardList() {
    const users = ["Harika", "Nikitha", "Sowjanya", "Arshiya", "Madhu", "varshita"];
    const branches = ["CSE","IT","AI","ECE","Civil","EEE"];
    const years = ["2","3","4","1","3","2"];
    return (
        <div style = {{display: 'flex', flexwrap : 'wrap'}}>
            {
                users.map((user, index) => (
                    <CardUI key = {index} 
                    user = {users[index]}
                    branch = {branches[index]}
                    year = {years[index]}/>
                ))
            }

        </div>
        
    );
}
export default CardList;
