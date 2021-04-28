const File = require('./models/file');
const fs = require('fs');
const connectDB = require('./config/db');
connectDB();
//S7vQ90df6DsnhZTk 
async function deleteData(){
    const pastDate = new Date(Date.now() - 24*60*60*1000);
     const files =await File.find({ createdAt: { $lt: pastDate}});

     if(files.length){
         for(const file of files){
           try{
            fs.unlinkSync(file.path);
            await file.remove();
            console.log(`successfully deleted ${file.filename}`);
           }catch(err){
               console.log(`error while deleting file ${err}`);
           }
         }
         console.log('job done');
     }else{
         console.log('no files are there');
     }
}

deleteData().then(process.exit);