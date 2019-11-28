const router = require('express').Router();

const Students = require('../../helpers/models/studentsModel');
const validateStudentId = require('../../middlewares/validateStudentId');
const { 
    errorMessage, 
    missingStudents, 
    noStudentProjects,
    newEntry,
    deleteEntry
} = require('../../helpers/variables');

router.get('/:id/projects', getStudentProjects);
router.get('/:id', validateStudentId, getStudentById);
router.get('/', getStudents);
router.post('/', validateStudentId, insertNewStudent);
router.delete('/:id', validateStudentId, deleteStudent);

function getStudents(req, res) {
    Students.findAllStudents()
        .then(students => {
            if (students && students.length > 1) {
                res.status(200).json(students);
            } else {
                res.status(401).json({
                    message: missingStudents
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: errorMessage
            });
        });
}

function getStudentById(req, res) {
    const { id } = req.params;

    Students.findStudentById(id)
        .then(student => res.status(200).json(student))
        .catch(error => {
            res.status(500).json({
                message: errorMessage
            });
        }); 
}

function getStudentProjects(req, res) {
    const { id } = req.params;

    Students.findStudentProjectById(id)
        .then(projects => {
        if (projects && projects.length > 0) {
            return projects;
        } else {
            res.status(401).json({
                messages: noStudentProjects(id),
            });
        }
        })
        .then(projects => getDeadlines(projects, req, res))
        .catch(error => {
            res.status(500).json({
                message: errorMessage
            });
        }); 
}

function insertNewStudent(req, res) {
    Students.addStudent(req.body)
        .then(student => {
            res.status(201).json({
                message: newEntry,
                student,
            });
        })
        .catch(error => {
            res.status(500).json({
                message: errorMessage
            });
        }); 
}

function deleteStudent(req, res) {
    const { id } = req.params;

    Students.removeStudent()
        .then(student => {
            res.status(200).json({
                message: deleteEntry(id),
                student,
            });
        })
        .catch(error => {
            res.status(500).json({
                message: errorMessage
            });
        }); 
}

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

module.exports = router;