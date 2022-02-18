const projects = [

    {project_id:1, project_name:"clean house", project_description: "Clean every room in your house to impress your mom",project_completed:false},
    {project_id:2, project_name:"build shed", project_description: "build that storage shed out back", project_completed:false},
    {project_id:3, project_name:"budget finances", project_description: "plan this years spending", project_completed:false}
]

const resources = [

    {resource_id:1, resource_name:"Cam", resource_description: "Cam is a great friend who is very handy"},
    {resource_id:2, resource_name:"Dave", resource_description: "Dave is a great friend who knows a lot about finances"}
]

const tasks = [

    {task_id:1, task_description:"clean upstairs", task_notes:null, task_completed:false, project_id:1},
    {task_id:2, task_description:"clean downstairs", task_notes:null, task_completed:false, project_id:1},
    {task_id:3, task_description:"layout pieces of shed", task_notes:null, task_completed:false, project_id:2},
    {task_id:4, task_description:"fit pieces together", task_notes:null, task_completed:false, project_id:2},
    {task_id:5, task_description:"spreadsheet all spending", task_notes:null, task_completed:false, project_id:3},
    {task_id:6, task_description:"calculate budget", task_notes:null, task_completed:false, project_id:3}
]

const project_resources = [

    {proj_resources_id: 1, project_id:1, resource_id:1},
    {proj_resources_id: 2, project_id:2, resource_id:1},
    {proj_resources_id: 3, project_id:3, resource_id:2},

]

exports.seed = async function (knex) {

    await knex('projects').insert(projects),
    await knex('resources').insert(resources),
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources),

};