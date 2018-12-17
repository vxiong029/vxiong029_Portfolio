const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET ROUTE connected from my FETCHPROJECTS SAGA
router.get('/', (req, res) => {
  console.log('get route hit');
  
  const queryText = `SELECT to_char("projects".date_completed, 'MM/YYYY'),
					          "projects".id, "projects".name, "projects".description, 
                    "projects".thumbnail, "projects".website, "projects".github,  
                    "tags".category_name FROM "projects" LEFT OUTER JOIN "tags" ON 
                    "projects".tag_id = "tags".id ORDER BY "projects".id ASC;`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT project query', err);
      res.sendStatus(500);
    });
});

// POST_PROJECTS
router.post('/', (req, res) => {
  console.log('post route hit', req.body.newProject);
  
  const newProject = req.body.newProject;

  const projectQueryText = `INSERT INTO projects ("name", "description", "thumbnail", 
                    "website", "github", "date_completed", "tag_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
  const projectQueryValues = [
    newProject.name,
    newProject.description,
    newProject.thumbnail,
    newProject.website,
    newProject.github,
    newProject.date_completed,
    newProject.tags
  ];
  pool.query(projectQueryText, projectQueryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing SELECT project query', err);
      res.sendStatus(500);
    });
});

// DELETE_PROJECTS
router.delete('/:id', (req, res) => {
  const queryText = 'DELETE FROM "projects" WHERE "projects".id=$1;';
  console.log('in server DELETE', req.params.id);
  pool.query(queryText, [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing SELECT project query', err);
      res.sendStatus(500);
    });
});

module.exports = router;
