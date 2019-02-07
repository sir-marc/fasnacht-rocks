import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './index.scss';

const LocationSearch = ({ setFilter }) => {
  const [address, setAddress] = useState('')

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        setAddress(results[0].address_components[0].short_name)
        return getLatLng(results[0])
      })
      .then(setFilter)
  }

  return (
    <form className="location-search">
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        highlightFirstSuggestion={true}
        shouldFetchSuggestions={address.length > 1}
        searchOptions={{
          componentRestrictions: {
            country: 'ch'
          }
        }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="input-container">
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            {loading && <div className="autocomplete-dropdown-container">Loading...</div>}
            {suggestions.length > 0 &&
              <div className="autocomplete-dropdown-container">
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      {console.log(suggestion)}
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            }
          </div>
        )}
      </PlacesAutocomplete>
    </form>
  )
}

export default LocationSearch;
