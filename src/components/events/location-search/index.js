import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import InputRange from 'react-input-range'
import './index.scss';

const LocationSearch = ({ setLocationFilter, distanceValue, setDistanceFilter }) => {
  const [address, setAddress] = useState('')

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        setAddress(results[0].address_components[0].short_name)
        return getLatLng(results[0])
      })
      .then(setLocationFilter)
  }

  return (
    <div className="location-search">
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
                placeholder: 'In welcher Region?',
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
      <div className="slider">
        <InputRange
          type="range"
          minValue={1}
          maxValue={20}
          value={distanceValue}
          onChange={setDistanceFilter}
          formatLabel={value => `${value}km`}
        />
      </div>
    </div>
  )
}

export default LocationSearch;
