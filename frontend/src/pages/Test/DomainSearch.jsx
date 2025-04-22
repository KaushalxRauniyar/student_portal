import React, { useState } from 'react';
import './Test.css';

function DomainSearch({ availableDomains, onSelect }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredDomains = availableDomains.filter(domain =>
    domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDomainSelect = (domain) => {
    setSearchTerm(domain);
    setShowDropdown(false);
    onSelect(domain);
  };

  return (
    <div className="domain-search-container">
      <div className="domain-search">
        <div className="input-container">
          <input
            type="text"
            className="domain-input"
            placeholder="Search for a subject (e.g., React, Python)"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
          />
        </div>

        {showDropdown && (
          <div className="domain-dropdown">
            {filteredDomains.map((domain, index) => (
              <div
                key={index}
                className="domain-option"
                onClick={() => handleDomainSelect(domain)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                {domain}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DomainSearch; 