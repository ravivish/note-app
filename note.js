const fs = require('fs')
const chalk = require('chalk')

// const getNotes=function(){
    const getNotes=() => {
    const allnotes = loadNotes()

    console.log(chalk.green.inverse.bold('Your notes'))

    allnotes.forEach((index) => {
        console.log(index.title)
    });


    // const list = allnotes.filter(function(index){
    //     console.log(index.title)
    //     // return index.title
    // })
    
}

// function to add notes

// const addNotes = function(t,b){
    const addNotes = (t,b) => {
    const allnotes = loadNotes() //loading all notes in the array object

    // const duplicateNoteTitle = allnotes.filter(function(index){
    //     return index.title === t
    // })

    // if(duplicateNoteTitle.length === 0){

    const duplicateNoteTitle = allnotes.find((index) =>  index.title === t )

    if(!duplicateNoteTitle){
        allnotes.push({
            title: t,
            body: b
        })
        //console.log(notes)
        saveNotes(allnotes)    
        console.log(chalk.bold.green.inverse('New note added!'))
    }else{
        console.log(chalk.bold.red.inverse('Note title already exist!'))        
    }
    
}

// function to save notes

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)


}

// function to load all notes

const loadNotes = function(){
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
    
}



const removeNote = function(t){
    const allnotes = loadNotes()
    const notesToKeep = allnotes.filter(function(index){        
        return index.title !== t
    })
    if(allnotes.length === notesToKeep.length){
        console.log(chalk.bold.red.inverse('No Note found!'))
    }else{        
        saveNotes(notesToKeep)
        console.log(chalk.bold.green.inverse('Note removed!'))

    }
    
}

const readNotes = function(t){
    const allnotes = loadNotes()

    // const list = allnotes.filter((index) => index.title === t)
    const list = allnotes.find((index) => index.title === t)
    // if(list.length === 0) { use the if we are using filter method
    if(!list){
        console.log(chalk.red.bold('No note found!'))
    }
    else{
            // use below 4 lines if we are using fliter method because filter 
            //return array and find return a single value
        // list.forEach((index) => {
        // console.log(chalk.red('Title: ')+chalk.blueBright.bold(index.title))
        // console.log(chalk.red('Body: ')+ chalk.white(index.body))
        // })
        console.log(chalk.red('Title: ')+chalk.blueBright.bold(list.title))
        console.log(chalk.red('Body: ')+ chalk.white(list.body))
    }
}



module.exports={
    //(example) variable_name/function_name
    getNotes:getNotes,
    addNotes:addNotes,
    removeNote:removeNote,
    readNote:readNotes
}