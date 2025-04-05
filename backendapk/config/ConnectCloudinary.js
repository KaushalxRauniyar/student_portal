import {v2 as cloudinary} from 'cloudinary'

const ConnectCloud=async ()=>{
    cloudinary.config({
        cloud_name:"dkc7quf1f",
        api_key:"874385191687511",
        api_secret:"VzMaLkXI-8EDUYl2m4pEY10SUtE"
    })
}

export default ConnectCloud