import express from 'express'

const usersRouter = express.Router()

usersRouter.get("/", async(req,res,next) => {
  try {
    
  } catch (error) {
    next(error)
  }
})
usersRouter.get("/:userId", async(req,res,next) => {
  try {
    
  } catch (error) {
    next(error)
  }
})
usersRouter.post("/", async(req,res,next) => {
  try {
    
  } catch (error) {
    next(error)
  }
})
usersRouter.put("/:userId", async(req,res,next) => {
  try {
    
  } catch (error) {
    next(error)
  }
})
usersRouter.delete("/:userId", async(req,res,next) => {
  try {
    
  } catch (error) {
    next(error)
  }
})


export default usersRouter