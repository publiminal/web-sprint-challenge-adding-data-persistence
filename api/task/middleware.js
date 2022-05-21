// const db = require('../../data/dbConfig')
const db = require('./model')


/* 
 check if Payload exists and it's properly formed
 return includes the validated payload in req.project  errors as expected 
*/
exports.checkPayload = (req, res, next) => {
 
   const task = req.body
   const isValid = 'task_description' in task && "project_id" in task
   if(!isValid){ res.status(400).json({ message: "task_description and project_id is required" }); return; }
   
   const desc = task.task_description  ? task.task_description.trim() : ''
   const projectId = Number.parseInt(task.project_id)
   const isCompleted =  'task_completed' in task ? Number.parseInt(task.task_completed) : 0    
   const hasinvalidLength = desc.length < 3 || desc.length > 256
   const isOk = !hasinvalidLength && isValid
     
   if(hasinvalidLength){ res.status(400).json({ message: "name of task must be between 3 and 255"}); return; }
   if(isOk){ req.task = { ...task, task_description:desc, task_completed:isCompleted, project_id:projectId}; next() }
   
   }

