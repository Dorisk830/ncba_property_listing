import mongoose from 'mongoose'

const userSchema = new mongoose.Schema ({
    username:{
        type:String,
        required:true,
        unique:true,        
    },
    email:{
        type:String,
        required:true,
        unique:true,        
    },
    password:{
        type:String,
        required:true,                
    },
    avatar:{
        type:"String",
        default:"https://www.bing.com/ck/a?!&&p=7451381f2312ba6c37a618d8589dda6617b1df523ea06484f8c55d8f68517ec9JmltdHM9MTczMjA2MDgwMA&ptn=3&ver=2&hsh=4&fclid=0b668484-f1fb-6b16-2a67-9186f0066a08&u=a1L2ltYWdlcy9zZWFyY2g_cT1sYWR5JTIwaW1hZ2UlMjBhdmF0YXImRk9STT1JUUZSQkEmaWQ9OUQ3MkJFMDk3OUQ5QTA1NDJDODJDRDMxNTNEMzIzNUQ2NzdGQjlCMA&ntb=1"
    },
    
}, {timestamp:true})

const User =mongoose.model('User', userSchema);

export default User;
