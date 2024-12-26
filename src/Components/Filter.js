import react from 'react';

const Filter = ({OntitleChange, OnrateChange}) => {
 return(
    <div>
        <input type="text" placeholder="Search for a movie..." onChange={(e) => OntitleChange(e.target.value)}/>
        <input type="number" placeholder="Search by rate..." onChange={(e) => OnrateChange(e.target.value)}/>
    </div>
 );

};

export default Filter;
