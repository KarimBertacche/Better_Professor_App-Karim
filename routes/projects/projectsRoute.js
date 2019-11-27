const router = require('express').Router();

const Projects = require('../../helpers/models/projectsModel');
const { errorMessage, missingProject } = require('../../helpers/variables');

router.get('/', getProjects);

function getProject(req, res) {
    Projects.findAllProjects()
        .then(projects => {
            if (projects && projects.length > 0) {
                return projects;
            } else {
                res.status(401).json({
                    message: missingProject
                });
            };
        })
        .then(projects => getDeadlines(projects, req, res))
        .catch(error => {
            res.status(500).json({
                message: errorMessage
            });
        });
};

function getDeadlines(projects, req, res) {
    Project.findDeadline()
        .then(deadlines => {
            if (deadlines && deadlines.length > 0) {
                const projectsWithDeadlines = projects.map(project => {
                    const relevantDeadlines = deadlines.filter(deadline => project.id === deadline.project_id);

                    return {
                        ...project,
                        deadlines: relevantDeadlines.map(deadline => {
                            return { deadline_type: deadline.deadline_type, deadline: deadline.deadline };
                        })
                    };
                });
                
                res.status(200).json(projectsWithDeadlines);
            } else if (deadlines) {
                res.status(200).json(projects);
            }
        })
        .catch(error => {
            res.status(500).json({
                message: errorMessage
            });
        });
}

export.modules = router;