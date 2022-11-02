// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Dilek');
// fs.appendFileSync('notes.txt', 'data to append');

const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes');

// const getNotes = require('./notes');
// const allNotes = getNotes();
// console.log(allNotes);
// console.log(validator.isEmail("dilekotrk@yopmail.com"));
// console.log(chalk.green('Success!'));

yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
});

console.log(yargs.argv);
