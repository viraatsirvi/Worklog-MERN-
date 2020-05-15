const config = require("../Utilities/config").config;
const UserDAO = require('../DAO/userDAO');
const taskLog = require('../DAO/tasklog');
const MD5 = require('md5');

/* API to register new user */
let register = async (req, res) => {
  console.log(req.body,'req body-------');
  if (!req.body.email || !req.body.password) {
    res.status(401).json({message:'Parameters are missing'})
  } else {
    try {
      let criteria = {
        email: req.body.email
      } 
      const checkEmail = await UserDAO.getUsers(criteria);
      if (checkEmail && checkEmail.length==1) {
        res.status(401).json({message:'email already registered'})
      } else {
        let userData = {
          firstName: req.body.firstName ? req.body.firstName : "",
          lastName: req.body.lastName ? req.body.lastName : "",
          email: req.body.email,
          phone: req.body.phone,
          password: MD5(MD5(req.body.password)),
          status: true
        };
        const addUser = await UserDAO.createUser(userData);
        // console
        if (addUser) {
          res.status(200).json({message:'User registered successfully!',
          responseCode:200
        })
        } else {
          res.status(403).json({message:"Something went wrong"});
        }
      }
    } catch (error) {
      res.status(404).json({message:"Something went wrong",error:error});
    }
  }
};


/* API to login user */
let login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(401).json({message:'Parameters are missing'});
  } else {
    try {
      let criteria = {
        email: req.body.email,
        status: true
      };
      const checkEmail = await UserDAO.getUsers(criteria);
      if (checkEmail) {
        let criteria = {
          email: req.body.email,
          password: MD5(MD5(req.body.password))
        };
        const checkPassword = await UserDAO.getUsers(criteria);
        if (checkPassword && checkPassword.length==1) {
          res.status(200).json({message:'Logged in successfully!',result:checkPassword});
        } else {
          res.status(401).json({message:'Incorrect password'});
        }
      } else {
        res.status(401).json({message:'Email not exist!'});
      }
    } catch (error) {
      res.status(401).json({message:'Something went wrong',error:error});
    }
  }
};

let taskDetails = async (req, res) => {
  console.log('qqq',req)
  if (!req.body.taskName || !req.body.taskType || !req.body.starttime || !req.body.endtime || !req.body.date) {
    res.status(401).json({message:'Parameters are missing'});
  } else {
    try {
      let taskData = {
        taskName: req.body.taskName ,
        taskType: req.body.taskType ,
        email: req.body.email,
        Date: req.body.date,
        startTime: req.body.starttime,
        endTime: req.body.endtime,
        status: true
      };
      
      const addTask = await taskLog.createTasks(taskData);
      console.log('tt',addTask)
      if (addTask) {
        res.status(200).json({message:' Task added successfully!',
        responseCode:200})

      } else {
        res.status(403).json({message:"Something went wrong"});
      }
    }catch (error) {
    res.status(404).json({message:"Something worng",error:error});
  }
  }
};

let getTaskDetails = async (req, res) => {
  console.log('email',req)
  if (!req.body.email) {
    res.status(401).json({message:'Parameters are missing'});
  } else {
    try {
        let criteria = {
          email: req.body.email,
        };
        const checkDetails = await taskLog.getTasks(criteria);
        if (checkDetails) {
          res.status(200).json({message:'successfully!',result:checkDetails});
        } else {
          res.status(401).json({message:'Something went wrong'});
        }
    } catch (error) {
      res.status(401).json({message:'Something went wrong',error:error});
    }
  }
};

module.exports = {
  register: register,
  login: login,
  taskDetails: taskDetails,
  getTaskDetails: getTaskDetails
}