const chalk = require('chalk')
const yargs = require('yargs')

//Cutomizing yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log('Title: '+argv.title)
        console.log('Body: '+argv.body)
    }
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'Removes a note',
    handler: function(){
        console.log('Removing Note...')
    }
})

//Create read command
yargs.command({
    command:'read',
    describe:'Reads a note',
    handler: function(){
        console.log('Reading Note...')
    }
})

//Create list command
yargs.command({
    command:'list',
    describe:'Lists Notes',
    handler: function(){
        console.log('Listing Notes....')
    }
})

yargs.parse()