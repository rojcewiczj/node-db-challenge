const express = require('express')

const router = express.Router();

const Projects = require('./projects-model');

router.use((req, res, next) => {
    console.log('Projects Router!');
    next();
  })

router.get('/', (req, res) => 
{   
   
    Projects.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    Projects.getById(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id/resources', (req, res) => {
    Projects.getResources(req.params.id)
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
router.get('/:id/tasks', (req, res) => {
    Projects.getTasks(req.params.id)
    
    .then(tasks => {
        if(tasks.completed === false){
            return false
        }
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', [ validateProject ], (req, res) => {


    Projects.add(req.body)
    .then(project => {
        res.status(201).json(req.body)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
router.post('/:id/resources', [ validateProject ], (req, res) => {
    const Resource = { ...req.body, project_id: req.params.id };
    Projects.addResources(Resource)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
router.post('/:id/tasks',[validateTask ], (req, res) => {
    const Task = { ...req.body, project_id: req.params.id };
    Projects.addTasks(Task)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

////////////////middleware/////////////////



function validateProject(req, res, next) {
    const Post = req.body;
    if (Post && Object.keys(Post).length > 0) {
        next();
      } else if (!Post.name ){
        res.status(400).json({ message: 'missing required name field' });
      }
      else {
        res.status(400).json({ message: "missing project data" });
      
        // error handling middleware option:
        // next({ message: "Please include request body" }));
      }
    
};

function validateTask(req, res, next) {
    const Post = req.body;
       
    if (Post && Object.keys(Post).length > 0) {
        next();
      } else if (!Post.description ){
        res.status(400).json({ message: 'missing required description field' });
      }
        
      else {
        res.status(400).json({ message: "missing project data" });
      
        // error handling middleware option:
        // next({ message: "Please include request body" }));
      }
    
};

module.exports = router;