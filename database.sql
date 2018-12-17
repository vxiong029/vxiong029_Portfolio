CREATE TABLE "tags"
(
  "id" SERIAL PRIMARY KEY,
  "category_name" varchar(255) NOT NULL
);

CREATE TABLE "projects"
(
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "description" varchar(2048),
  "thumbnail" varchar(2048),
  "website" varchar(2048),
  "github" varchar(2048),
  "date_completed" date,
  "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags"
  ("category_name")
VALUES
  ('React'),
  ('jQuery'),
  ('Node'),
  ('SQL'),
  ('Redux'),
  ('HTML');

INSERT INTO "projects"
  ("name", "description", "thumbnail",
  "website", "github", "date_completed", "tag_id")
VALUES
  ('Feedback', 'A simple & efficient feedback app for Prime Students to leave their ratings and comments.',
    'images/feedback.png', 'null', 'https://github.com/vxiong029/weekend-challenge-5-feedback', '2018-12-11',
    '5');

INSERT INTO "projects"
  ("name", "description", "thumbnail",
  "website", "github", "date_completed", "tag_id")
VALUES
  ('Gallery App', 'Organizes a stream of photos that users uploaded.',
    'images/gallery.png', 'null', 'https://github.com/vxiong029/weekend-4-gallery', '2018-12-02',
    '1');

INSERT INTO "projects"
  ("name", "description", "thumbnail",
  "website", "github", "date_completed", "tag_id")
VALUES
  ('To-Do List', 'An app that allows users to create tasks to complete or delete.',
    'images/todo.png', 'https://boiling-lowlands-22961.herokuapp.com', 'https://github.com/vxiong029/vega-todo-app-weekend3', '2018-11-26', '4');

INSERT INTO "projects"
  ("name", "description", "thumbnail",
  "website", "github", "date_completed", "tag_id")
VALUES
  ('Salary Calculator', 'A salary form and calculator that lets users add employees, and then calculates total monthly costs.',
    'images/salary.png', 'null', 'https://github.com/vxiong029/Weekend1_Salary_Calc', '2018-11-09', '2');

INSERT INTO "projects"
  ("name", "description", "thumbnail",
  "website", "github", "date_completed", "tag_id")
VALUES
  ('Garage Form App', 'An app that allows users to fill out a form for their type of car in order to organize all cars in garage.',
    'images/garage.png', 'null', 'https://github.com/vxiong029/prime-pw-week-6-assignment', '2018-11-04', '6');
