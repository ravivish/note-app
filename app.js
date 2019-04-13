const Notes = require('./note.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command : 'add',
    describe : 'add a note!',
    builder:    {
        title: {
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    // handler : function(argv){
    handler(argv){
        
        Notes.addNotes(argv.title,argv.body)    

        // console.log('Title: '+argv.title)
        // console.log('Body: '+argv.body)
    }

})

// Create a remove command
yargs.command({
    command : 'remove',
    describe : 'remove a note!',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    // handler : function(argv){
    handler(argv){
        Notes.removeNote(argv.title)
        // console.log('Title:'+argv.title)
        // console.log('removing a note')
    }

})
yargs.command({
    command : 'read',
    describe : 'read a note!',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    // handler : function(argv){
    handler(argv){
        Notes.readNote(argv.title)
        // console.log('Title:'+argv.title)
        // console.log('reading a note')
    }

})
yargs.command({
    command : 'list',
    describe : 'list all notes!',
    builder:{
        title:{
            describe:'Note Title',
            // demandOption:true,
            type:'string'
        }
    },
    // handler : function(argv){
    handler(){
        Notes.getNotes()
        // console.log('Title:'+argv.title)
        // console.log('listing all notes')
    }

})


// add,remove,read,list
yargs.parse() //console.log(yargs.argv)


// const command=process.argv[2]
// if(command === 'add'){
//     console.log(chalk.green('adding data'))
// } else if(command === 'remove'){
//     console.log(chalk.blue('removing data'))
// }

//const msg=getNotes()
//console.log(msg)

//console.log(validator.isEmail('abc@gmail.com'))
//console.log(validator.isEmail('abc.gmail.com'))

//console.log(validator.isURL('https://ab.c'))
// console.log(validator.isURL('https://ab.com'))

// console.log(chalk.blue.bold('Hello World!'))
// console.log(chalk.bold.green('Hello World!'))

// const log=console.log
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `)

//console.log(process.argv)
//console.log(process.argv[2])

