const url = "https://static.ngnrs.io/test/prices"

async function getFile() {
  // await code here
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
    var text = getFile()
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

// class Prices {
//   constructor(pair, timestamp, buy, sell, id) {
//     this.pair = pair;
//     this.timestamp = timestamp;
//     this.buy = buy;
//     this.sell = sell;
//     this.id = id;
//   }

//   mid() {
//     return (buy + sell) / 2
//   }

//   //when ETHSGD will return SGD
//   //when ESGD will return ESGD
//   //when SGD will return SGD
//   //when GD return nothing
//   quote() {
//     if this.pair.length >= 3 {
//       return pair.slice(pair.length -3)
//     } else {
//       return ""
//     }
//   }
// }
