CREATE TABLE language (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE region (
  id SERIAL PRIMARY KEY,
  name TEXT,
  coordinates POINT
);

CREATE TABLE definition (
  id SERIAL PRIMARY KEY,
  definition TEXT
);

CREATE TABLE language_regions (
  id SERIAL PRIMARY KEY,
  language_id INT REFERENCES language(id) ON DELETE RESTRICT,
  region_id INT REFERENCES region(id) ON DELETE RESTRICT
);

CREATE TABLE word (
  id SERIAL PRIMARY KEY,
  language_id INT REFERENCES language(id) ON DELETE RESTRICT,
  region_id INT REFERENCES region(id) ON DELETE RESTRICT,
  definition_id INT REFERENCES definition(id) ON DELETE RESTRICT,
  phonic TEXT,
  audio_link TEXT,
  date_added TIMESTAMP WITH TIME ZONE
);
