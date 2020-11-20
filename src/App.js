import './App.css';
import React, {useState, useEffect} from "react";
import Company from "./Company"

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [companies, setCompanies] = useState([]);
  const [query, setQuery] = useState(searchInput);
  const url = "";

  useEffect(() => {
    console.log("effect has been run");
    getCompanies(); 
  }, [query]);

  const getCompanies = async () => {
    // TODO: proper error handling here
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCompanies(data);
    }
    catch (err) {
      console.log(err)
    } 
  }

  const updateSearch = e => {
    setSearchInput(e.target.value);
  }

  const fetchSearch = e => {
    e.preventDefault();
    setQuery(searchInput);
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={fetchSearch}>
        <input className="search-bar" type="text" placeholder="Search.." name="search" value={searchInput} onChange= {updateSearch}/>
        <button className="search-button"> Search </button>
      </form>
      {companies.map(company => (
        <Company
          key={company.id}
          name={company.name}
          perks={company.perks}
          image={company.image}
        />
      ))}
    </div>
  )
}

export default App;
