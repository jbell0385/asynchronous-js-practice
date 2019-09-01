//Promises

//In ES6 we ahve an alternative mechanism built into the langauage called a _promise_.
//A _promise_ is a _placeholder_ for future value.
//It serves teh same function as callbacks but has a nicer syntax and makes it easier to handle errors.

//Creating a Promise
//We create an instance of a primise by calling 'new' on the 'Promise' class, like so:

// const promise = new Promise((resolve, reject) => {
//   //resolve reject?
// });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Work Complete");
//     resolve();
//   }, 1000);
// });

//Promises usually returned from a function
function doAsyncTask() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Work Complete");
      resolve();
    }, 1000);
  });
  return promise;
}

function doAsyncTask() {
  let error = false;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("async");
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    }, 1000);
  });
  return promise;
}

//promise notifications
doAsyncTask.then(() => console.log("task complete"));

doAsyncTask.then(
  () => {
    console.log("task complete");
  },
  () => {
    console.log("error");
  }
);
