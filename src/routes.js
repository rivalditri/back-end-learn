const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, detelNoteByIdHandler} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method : 'GET',
        path : '/notes',
        handler : getAllNotesHandler,
    },
    {
        method : 'GET',
        path : '/notes/{id}',
        handler : getNoteByIdHandler,
    },
    {
        method : 'put',
        path : '/notes/{id}',
        handler : editNoteByIdHandler,
    },
    {
        method : 'delete',
        path : '/notes/{id}',
        handler : detelNoteByIdHandler,
    }
];

module.exports = routes;