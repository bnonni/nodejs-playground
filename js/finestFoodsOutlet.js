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