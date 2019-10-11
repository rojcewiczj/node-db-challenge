const db = require('../data/dbConfig');

module.exports = {
    get,
    getById,
    getResources,
    getTasks,
    add,
    addResources,
    addTasks,
}

function get() {
    return db('projects')
}

function getById(id) {
    return db('projects')
    .where({id})
    .first()
}

function getResources(id) {
    console.log({id})
    console.log(id)
    return db('resources')
    .join('projects', 'projects.id', '=', 'resources.project_id')
    .where('resources.project_id', '=', id)
    .select('resources.id','resources.name', "resources.description" )
}
function getTasks(id) {
    console.log({id})
    console.log(id)
    return db('tasks')
    .join('projects', 'projects.id', '=', 'tasks.project_id')
    .where('tasks.project_id', '=', id)
    .select('tasks.id',"resources.description", "tasks.notes", "tasks.completed" )
}

function add(project) {
    return db('projects')
    .insert(project)
}

function addResources(resource) {
    return db('resources')
    .insert(resource)
    .then(ids => {
        return getById(ids[0]);
      });
}
function addTasks(task) {
    return db('tasks')
    .insert(task)
    .then(ids => {
        return getById(ids[0]);
      });
}
