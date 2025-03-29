import React from 'react';

function InterestButton({ interest, isSelected, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`p-2 text-sm rounded-md transition-colors ${
        isSelected
          ? 'bg-blue-500 text-white shadow-md'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {interest}
    </button>
  );
}

export default InterestButton; 