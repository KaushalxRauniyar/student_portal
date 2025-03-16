import React, { useState } from 'react';
import './Book.css';

const AVAILABLE_DOMAINS = [
  'Web Development',
  'HTML & CSS',
  'Database Management Systems (DBMS)',
  'Operating Systems',
  'React',
  'Computer Networks',
  'Machine Learning',
  'Artificial Intelligence',
  'Java Programming',
  'C++ Programming',
  'C Programming',
  'Data Structures and Algorithms (DSA) in C++',
  'Design and Analysis of Algorithms',
  'Cloud Computing',
  'C# Programming',
  'JavaScript Programming',
  'TypeScript Programming',
  'Node.js Programming',
  'Angular Development',
  'Python Programming',
  'Object-Oriented Programming (OOP)',
  'Computer Organization and Architecture (COA)',
  'Automata, Formal Languages, and Computation (AFL)'
];

function DomainSearch({ onSearch }) {
  const [domain, setDomain] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredDomains, setFilteredDomains] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setDomain(value);
    
    // Filter domains based on input
    const filtered = AVAILABLE_DOMAINS.filter(d => 
      d.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDomains(filtered);
    setShowDropdown(true);
  };

  const handleDomainSelect = (selectedDomain) => {
    setDomain(selectedDomain);
    setShowDropdown(false);
    onSearch(selectedDomain);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (domain.trim()) {
      onSearch(domain.trim());
      setShowDropdown(false);
    }
  };

  return (
    <div className="domain-search-container">
      <form onSubmit={handleSubmit} className="domain-search">
        <div className="input-container">
          <input
            type="text"
            value={domain}
            onChange={handleInputChange}
            onFocus={() => setShowDropdown(true)}
            placeholder="Search for a domain (e.g., Web Development)"
            className="domain-input"
          />
          <button type="submit" className="search-button">
            Search Books
          </button>
        </div>
        
        {showDropdown && filteredDomains.length > 0 && (
          <div className="domain-dropdown">
            {filteredDomains.map((d, index) => (
              <div
                key={index}
                className="domain-option"
                onClick={() => handleDomainSelect(d)}
              >
                {d}
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default DomainSearch; 