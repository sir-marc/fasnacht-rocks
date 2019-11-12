import React, { useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import Slider from "./slider";
import Container from "./container";

const LocationSearch = ({
  setLocationFilter,
  distanceValue,
  setDistanceFilter
}) => {
  const [address, setAddress] = useState("");
  const [mapsLoaded, setMapsLoaded] = useState(false);

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        setAddress(results[0].address_components[0].short_name);
        return getLatLng(results[0]);
      })
      .then(setLocationFilter);
  };

  useEffect(() => {
    console.log("use effect called");
    if (!mapsLoaded) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_KEY}&libraries=places`;
      window.document.body.appendChild(script);
      script.addEventListener("load", () => setMapsLoaded(true));
    }
  }, [mapsLoaded]);

  if (!mapsLoaded) {
    // wait until google maps is loaded
    return "";
  }

  return (
    <Container>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        highlightFirstSuggestion={true}
        shouldFetchSuggestions={address.length > 1}
        searchOptions={{
          componentRestrictions: {
            country: "ch"
          }
        }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="input-container">
            <input
              {...getInputProps({
                placeholder: "In welcher Region?",
                className: "location-search-input"
              })}
            />
            {loading && (
              <div className="autocomplete-dropdown-container">Loading...</div>
            )}
            {suggestions.length > 0 && (
              <div className="autocomplete-dropdown-container">
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </PlacesAutocomplete>
      <Slider
        distanceValue={distanceValue || 2}
        setDistanceFilter={setDistanceFilter}
      />
    </Container>
  );
};

export default LocationSearch;
