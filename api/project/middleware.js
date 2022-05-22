const db = require('../../data/dbConfig')

/* 
 check if Payload exists and it's properly formed
 return includes the validated payload in req.project  errors as expected 
*/
exports.checkPayload = (req, res, next) => {
 
 const project = req.body
 const isCompleted =  'project_completed' in project && project.project_completed !== null ? Number.parseInt(project.project_completed) : 0 
 const isValid = 'project_name' in project
 if(!isValid){ res.status(400).json({ message: "project_name is required" }); return; }

  const name = project.project_name ? project.project_name.trim() : ''
  const hasinvalidName = name.length < 3 || name.length > 128
  const isOk = !hasinvalidName
  
  if(hasinvalidName){ res.status(400).json({ message: "name of project must be between 3 and 127"}); return; }
  if(isOk){ req.project = { ...project,  project_name:name, project_completed:isCompleted}; next() }

}


/* 
  checkAccountNameUnique returns a status 400 with a { message: "that name is taken" } 
  if the trimmed req.body.name already exists in the database
*/
  exports.checkAccountNameUnique = (req, res, next) => {
    const name = req.account.name
    db.getAccountNameById(name)
      .then(account => {
        if(account){
          res.status(400).json({message: "that name is taken" });
          return; 
        }else{
          next()
        }
      })
      .catch(err => {
        console.error('checkAccountId error ::', err )
        res.status(500).json({message:'The account information could not be saved/retrieved'})
      })
 
  }


  /* 
    checkAccountId returns a status 404 with a { message: "account not found" } if req.params.id does not exist in the database
  */
  exports.checkAccountId = (req, res, next) => {
    const id = req.params.id
    db.getById(id)
      .then(account => {
        if(account){
          req.account = account
          next()
        }else{
          res.status(404).json({message: "account not found" });
          return; 
        }
      })
      .catch(err => {
        console.error('checkAccountId error ::', err )
        res.status(500).json({message:'The account information could not be saved/retrieved'})
      })

  }
