CREATE TABLE submission (
  id SERIAL PRIMARY KEY,
  pronunciation TEXT,
  translation TEXT,
  language TEXT,
  country TEXT,
  audio TEXT,
  dateadded TIMESTAMP WITH TIME ZONE
);


CREATE TABLE language (
  id SERIAL PRIMARY KEY,
  language TEXT REFERENCES submission(language) ON DELETE RESTRICT,
);

CREATE TABLE country (
  id SERIAL PRIMARY KEY,
  country TEXT REFERENCES submission(country) ON DELETE RESTRICT,
  coordinates POINT
);

CREATE TABLE language_country (
  id SERIAL PRIMARY KEY,
  language_id INT REFERENCES language(id) ON DELETE RESTRICT,
  country_id INT REFERENCES country(id) ON DELETE RESTRICT
);
