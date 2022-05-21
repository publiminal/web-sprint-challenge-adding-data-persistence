// const db = require('../../data/dbConfig')
const db = require('./model')


/* 
 check if Payload exists and it's properly formed
 return includes the validated payload in req.project  errors as expected 
*/
exports.checkPayload = (req, res, next) => {
 
    const resource = req.body
    const isValid = 'resource_name' in resource
    if(!isValid){ res.status(400).json({ message: "resource_name is required" }); return; }
   
     const name = resource.resource_name ? resource.resource_name.trim() : ''
    //  const description = resource.resource_description ? resource.resource_description : null
     const hasinvalidName = name.length < 3 || name.length > 128
     const isOk = !hasinvalidName
     
     if(hasinvalidName){ res.status(400).json({ message: "name of resource must be between 3 and 127"}); return; }
     if(isOk){ req.resource = { ...resource, resource_name:name}; next() }
   
   }

   /* 
  checkAccountNameUnique returns a status 400 with a { message: "that name is taken" } 
  if the trimmed req.body.name already exists in the database
*/
  exports.checkResourceNameUnique = (req, res, next) => {
    const name = req.resource.resource_name
    db.getResourceNameById(name)
      .then(resource => {
        if(resource){
          res.status(400).json({message: "that resource's name is taken" });
          return; 
        }else{
          next()
        }
      })
      .catch(err => {
        console.error('resource name error ::', err )
        res.status(500).json({message:'The resource name information could not be saved/retrieved'})
      })
 
  }
