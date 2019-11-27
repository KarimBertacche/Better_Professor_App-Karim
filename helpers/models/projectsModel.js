const db = require('../../config/db-config');

module.exports = {
    add,
    findProjectBy,
    findAllProjects,
    findDeadline,
    findDeadlineId,
    removeProject
};

function add(project) {
    return db('Projects').insert(project).returning('id').then(([id]) => {
        return this.findProjectBy({ id });
    });
};

function findProjectBy(filter) {
    return db('Projects').where(filter).first();
};

function findAllProjects() {
    return db('Projects');
};

function findDeadline(student_id) {
    return db('Projects_&_Deadline AS p&d')
        .leftJoin('Projects AS p', 'p.id', 'p&d.project_id')
        .leftJoin('Students_&_Projects AS s&p', 's&p.project_id', 'p.id')
        .where({ 's&p.student_id': student_id });
};

function findDeadlineId(project_id) {
    return db('Projects_&_Deadline AS p&d')
        .select('p&d.deadline_type', 'p&d.deadline')
        .where({ 'p&d.project_id': project_id });
};

function removeProject(project_id) {
    return db('Project').where({ id: project_id }).del();
}