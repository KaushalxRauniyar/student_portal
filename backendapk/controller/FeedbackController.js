import Feedback from "../model/Feedback.js"

const addFeedback=async(req,res)=>{
    try{
const {name,email,text}=req.body
if(!name||!email||!text)
{
    return res.json({
        success:false,
        message:"some Field is missing"
    })
}

const feedback=new Feedback({
    name,
    email,
    text
})
await feedback.save()

return res.json({
    success:true,
    message:"feedaback sent Successful",
    feedback
})
    }catch(error)
    {
        return res.json({
            success:false,
            message:error.message
        })
    }
}


export default addFeedback