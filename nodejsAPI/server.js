
returnCode = {
    "returnCode":"success to logging"
  };

  errorCode = {
    "returnCode":"fail to this request"
  };
  
  const corsOptions = {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: '*',
  };
  
  const apiDomain = 'http://localhost:5000';
  const express = require('express');
  const cors = require('cors');
  const bodyParser = require('body-parser');
  const fs = require('fs'); 
  
  var app = express();
  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  
  
  app.post('/testlogging', function (req, res, next) {
      console.log('POST ' + apiDomain + '/testlogging');
      console.log(req.body.name);

      if (req.body.name == 'keyword'){
        fs.appendFile(`${'log'+'/'+new Date().getFullYear()+'_'+(new Date().getMonth()+1)+'_'+new Date().getDate()}.txt`, `${JSON.stringify(req.body)+'\n'}`, function (err) {
            if (err)
                console.log(err);
            else
                console.log('Append operation complete.');
        });
    
    
          res.json(returnCode.returnCode);

      }else {
         res.json(errorCode.returnCode) 
      }
    //   fs.writeFile(`${'log'+'/'+new Date().getFullYear()+'_'+(new Date().getMonth()+1)+'_'+new Date().getDate()}.txt`, `${'\n'+JSON.stringify(req.body)}`, function (err) {
    //     if (err)
    //         console.log(err);
    //     else
    //         console.log('Write operation complete.');
    // });

    // fs.appendFile(`${'log'+'/'+new Date().getFullYear()+'_'+(new Date().getMonth()+1)+'_'+new Date().getDate()}.txt`, `${JSON.stringify(req.body)+'\n'}`, function (err) {
    //     if (err)
    //         console.log(err);
    //     else
    //         console.log('Append operation complete.');
    // });


    //   res.json(returnCode);
  });
  
  app.listen(5000); //dedault port
  console.log('Node.js web server at port 5000 is running..')
  