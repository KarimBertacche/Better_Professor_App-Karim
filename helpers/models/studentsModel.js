const db = require('../../config/db-config');

module.exports = {
    addStudent,
    findStudent,
    findStudentById,
    findStudentProjectById,
    removeStudent
};

function addStudent(student) {
    return db('Students').insert(student).returning('id').then(([id]) => {
        return this.findStudentById({ id });
    });
}

function findStudent() {
    return db('Students');
}

function findStudentById(student_id) {
    return db('Students').where({ id: student_id }).first();
}

function findStudentProjectById(id) {
    return db('Projects AS p')
        .select('p.id', 'p.name')
        .leftJoin('Students_&_Projects AS s&p', 's&p.project_id', 'p.id')
        .leftJoin('Students AS s', 's.id', 's&p.student_id')
        .where({ 's.id': id });
}

function removeStudent(student_id) {
    return db('Students').where({ id: student_id }).del();
}