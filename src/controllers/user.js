const User = require('../models/user')

const addUser = async(req, res) => {

  try{
    const user = new User(req.body)

    await user.save()

    res.status(200).send({
      state:true,
      message:"User Added Successfully",
      data: user
    })

  }catch(e){
    res.status(401).send(e.message)
  }
}

const getAllUser = async(req, res) => {
  try{
    const users = await User.find({ createdAt : - 1 })
    res.status(200).send(users)
  }catch(e){
    res.status(401).send(e.message)
  }
}

const getUser = async(req, res) => {
  try{
  //  const user = await User.filter((user) => user._id === req.params.id )
    const user = await User.findById(req.params.id)

    if(!user) return res.status(401).send({ message: 'Not found user '})

    res.status(200).send(user)
  }catch(e){
    res.status(400).send(e.message)
  }
}

const updateUser = async(req, res) => {
  try{
    const user = await User.findById(req.params.id)
    console.log(user)
    if(!user) return res.status(401).send('Not found user')

  await User.findByIdAndUpdate(user._id, req.body, {new: true})

    res.status(200).send({state: true, message:'User updated Successfully'})

  }catch(e){
    res.status(401).send(e.message)
  }
}

const deleteUser = async(req, res) => {
  try{
    const user = await User.findById(req.params.id)

    if(!user) return res.status(401).send('Not found user')

    await User.findOneAndDelete(user._id)

    res.status(200).send({
      state:true,
      message:"User deleted Successfully",
    })

  }catch(e){
    res.status(401).send(e.message)
  }
}


module.exports = { addUser, getAllUser, updateUser, deleteUser, getUser }
