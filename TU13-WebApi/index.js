navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(new Date(position.timestamp));
    console.log(position.coords);
  },
  () => {},
  {}
);

// const watchID = navigator.geolocation.watchPosition((position) => {
//   console.log(new Date(position.timestamp));
//   console.log(position.coords);
// });

// setTimeout(() => {
//   navigator.geolocation.clearWatch(watchID);
// }, 100000);

// navigator.geolocation.getCurrentPosition((position) => {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;
//   console.log(position.coords.accuracy);

//   document.querySelector(
//     'a'
//   ).href = `https://www.openstreetmap.org/#map=19/${latitude}/${longitude}`;
// });
