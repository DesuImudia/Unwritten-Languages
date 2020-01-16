
import React from 'react';

const theform = props => {

  const { formResponse, handleInputChange, handleSubmit } = props;
  const {
    thePronunciation,
    theTranslation,
    theLanguage,
    theCountry

  } = formResponse


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pronunciation:
          <input
          name="thePronunciation"
          type="text"
          value={thePronunciation}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Translation:
          <input
          name="theTranslation"
          type="text"
          value={theTranslation}
          onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Language:
          <input
          name="theLanguage"
          type="text"
          value={theLanguage}
          onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Country:
          <input
          name="theCountry"
          type="text"
          value={theCountry}
          onChange={handleInputChange} />
      </label>
      <br />
      <input type="submit"
        value="Submit" />
    </form>
  );
}



export default theform;
