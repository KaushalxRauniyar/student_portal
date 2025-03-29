import React from 'react';
import { FaBook, FaChartLine, FaTags } from 'react-icons/fa';

const SuggestionCard = ({ suggestion }) => {
  if (!suggestion) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {suggestion.title || 'Untitled Course'}
          </h3>
          <p className="text-sm text-gray-600">
            Course ID: {suggestion.course_id || 'N/A'}
          </p>
        </div>
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {suggestion.match_score ? `${Math.round(suggestion.match_score * 100)}% Match` : 'N/A'}
        </div>
      </div>

      <p className="text-gray-600 mb-4">
        {suggestion.description || 'No description available'}
      </p>

      {suggestion.skills && suggestion.skills.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Skills Covered:</h4>
          <div className="flex flex-wrap gap-2">
            {suggestion.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {suggestion.prerequisites && suggestion.prerequisites.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Prerequisites:</h4>
          <div className="flex flex-wrap gap-2">
            {suggestion.prerequisites.map((prereq, index) => (
              <span
                key={index}
                className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm"
              >
                {prereq}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          Credits: {suggestion.credits || 'N/A'}
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SuggestionCard; 