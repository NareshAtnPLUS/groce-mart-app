const { grocemartApi } = require('./server');

grocemartApi.listen(grocemartApi.get('port'),()=>{
    console.log(`Server Started Running at ${grocemartApi.get('port')}`);
});