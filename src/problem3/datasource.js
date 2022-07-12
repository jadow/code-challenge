const url = "https://static.ngnrs.io/test/prices"

async function getFile() {
  let result = await makeRequest("GET", url);
  return result
}

function makeRequest(method, url) {
  return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function () {
          if (this.status >= 200 && this.status < 300) {
              resolve(xhr.response);
          } else {
              reject({
                  status: this.status,
                  statusText: xhr.statusText
              });
          }
      };
      xhr.onerror = function () {
          reject({
              status: this.status,
              statusText: xhr.statusText
          });
      };
      xhr.send();
  });
}

class Datasource {
  getPrices() {
    return new Promise(function (resolve, reject) {
      getFile().then(holder => {
          var obj = JSON.parse(holder);
          obj = obj.data.prices;

          //add function for each object
          for (var i = 0; i < obj.length; i ++) {

            //avoid overflow
            obj[i].mid = function() {
              return this.buy/2 + this.sell/2
            } 
            
            //BTCUSD returns USD
            //BUSD returns USD
            //SD returns ""
            obj[i].quote = function() {
              if(this.pair.length >= 3) {
                    return this.pair.slice(this.pair.length -3)
                  } else {
                    return ""
                  }
            }
          }
          resolve(obj);
        });
    });
  }
}

const ds = new Datasource();

function main() {
  ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.err(error);
    });
}

main();