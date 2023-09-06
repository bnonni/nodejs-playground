const https = require('https');
const fs = require('fs');
/*
  https.get(, (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data));
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

  var options = {
      host: 'jsonplaceholder.typicode.com',
      port: 80,
      path: '/users',
      method: 'GET',
  };
  let data;
  var req = http.request(options, function (res) {
    const chunks = []

    res.on("data", (chunk) => {
        chunks.push(chunk)
    });

    res.on("end", () => {
        const body = Buffer.concat(chunks);
    });
  }) 
*/

const httpGet = url => {
    return new Promise((resolve, reject) => {
        https
            .get(url, (res) => {
                res.setEncoding('utf8');
                let body = '';
                res.on('data', (chunk) => (body += chunk));
                res.on('end', () => resolve(body));
            })
            .on('error', reject);
    });
      
};

const start = async (city, votes, page) => {
  // collect data from each page
  let pages = []
  for(let i = page; i <= 40; i++){
    const resp = await httpGet('https://jsonmock.hackerrank.com/api/food_outlets?page=')
    pages.push(JSON.parse(resp).data)
  }
  return pages
};

finestFoodOutlets ('Miami', 9000, 1).then((body) => {
  // do something with returned page data
  
  for (let obj of body[0]) {
    console.log(obj)
  }
});

// write data to request body

// const http = require('http');

// const options = {
//   hostname: 'jsonplaceholder.typicode.com',
//   port: 80,
//   path: '/users',
//   method: 'GET',
//   rejectunauthorized: false,
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
//   }
// }

//  const req = http.request(options, (res) => {
//    console.log(`STATUS: ${res.statusCode}`);
//    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//    res.setEncoding('utf8');
//    res.on('data', (chunk) => {
//      console.log(`BODY: ${chunk}`);
//    });
//    res.on('end', () => {
//      console.log('No more data in response.');
//    });
//  });

//  req.on('error', (e) => {
//   console.error(`problem with request: ${e.message}`);
// });

/**
  * 
  * 
  const http = require('http');
     
 const postData = JSON.stringify({
   'msg': 'Hello World!'
 });
     
 const options = {
   hostname: 'www.google.com',
   port: 80,
   path: '/upload',
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
     'Content-Length': Buffer.byteLength(postData)
   }
 };
  */
