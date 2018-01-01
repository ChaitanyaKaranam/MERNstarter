const mongoose = require('mongoose');

const sampleSchema = mongoose.Schema({
    id:Number,
    name:String
});

const sampleModel = mongoose.model('test',sampleSchema,'test');

function getTasks(filter,callback){
    sampleModel.find(filter,callback);
}

function addTask(data,callback){
    var task = new sampleModel(data);
    task.save(callback);
}

function deleteTask(id,callback){
    sampleModel.remove({_id:id},callback);
}

function saveMultipleTasks(data,callback){
    sampleModel.insertMany(data,callback);    
}

const SampleModel ={
    getTasks,
    addTask,
    deleteTask,
    saveMultipleTasks
};

module.exports=SampleModel;