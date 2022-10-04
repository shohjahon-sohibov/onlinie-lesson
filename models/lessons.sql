DROP TABLE IF EXISTS lessons;

CREATE TABLE IF NOT EXISTS lessons (
  id SERIAL PRIMARY KEY,
  title varchar,
  category varchar,
  author varchar,
  duration varchar,
  description varchar,
  price INT
);

INSERT INTO lessons (title, category, author, duration, description, price)
VALUES (
'inglis tili', 
'language', 
'Mr Murphy', 
'2 hr', 
'The English language is an Indo-European language',
150000
);

INSERT INTO lessons (title, category, author, duration, description, price)
VALUES (
'rus tili', 
'language', 
'Andrey', 
'3 hr', 
'The English language is an Indo-European language',
250000
);

INSERT INTO lessons (title, category, author, duration, description, price)
VALUES (
'inglis tili', 
'language', 
'Mr Murphy', 
'2 hr', 
'The English language is an Indo-European language',
140000
);

INSERT INTO lessons (title, category, author, duration, description, price)
VALUES (
'inglis tili', 
'language', 
'Mr Murphy', 
'2 hr', 
'The English language is an Indo-European language',
170000
);

INSERT INTO lessons (title, category, author, duration, description, price)
VALUES (
'inglis tili', 
'language', 
'Mr Murphy', 
'2 hr', 
'The English language is an Indo-European language',
150000
);