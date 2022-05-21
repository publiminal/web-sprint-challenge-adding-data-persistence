const db = require('../../data/dbConfig')




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
