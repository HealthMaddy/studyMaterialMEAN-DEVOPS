// create promises 

const promise1Rejected = new Promise((reject)=>{
    setTimeout(()=>{
        reject('failed to load promise')
    }, 1000)
})

const promise2Resolved = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('successfully loaded promise')
    }, 1000)
}) 

const promise1 = Promise.resolve('Resolved value 1');
const promise2 = Promise.reject('Rejected value');
const promise3 = Promise.resolve('Resolved value 3');


// consume promises

 // resolves all promises if any fails it stops all execution
Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log('All promises resolved:', results);
  })
  .catch(error => {
    console.error('One of the promises rejected:', error);
  });


   // settles all promises if any fails it doesent stops all execution it gives all res along with error response
  Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    console.log('All promises settled:', results);
  })
  .catch(error => {
    console.error('One of the promises rejected:', error);
  });


  // gives response of whichever promise settles (can be either reject or resolve) first
  Promise.race([promise1, promise2, promise3])
  .then(results => {
    console.log('All promises settled:', results);
  })
  .catch(error => {
    console.error('One of the promises rejected:', error);
  });

  //gives response of whichever promise resolves first
  Promise.any([promise1, promise2, promise3])
  .then(results => {
    console.log('All promises settled:', results);
  })
  .catch(error => {
    console.error('One of the promises rejected:', error);
  });

  // example of chaining promises 

  const whereAmI = function () {
    getPosition()
      .then(pos => {
        const { latitude: lat, longitude: lng } = pos.coords;
  
        return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
      })
      .then(res => {
        if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.countryCode}`);
  
        return fetch(`https://restcountries.com/v2/name/${data.countryCode}`);
      })
      .then(res => {
        if (!res.ok) throw new Error(`Country not found (${res.status})`);
  
        return res.json();
      })
      .then(data => renderCountry(data[0]))
      .catch(err => console.error(`${err.message} 💥`));
  };