console.log('timeConverter');

// input AM/PM time, get out military time.

// This is a bad solution, waaay too long, but it took me like 15 minutes.
// Speed vs eqloquence.

test2 = '06:40:03AM';
test3 = '04:59:59AM';

function timeConverter(s) {
  let arr = s.split(':');
  let hour;
  if(arr[2].split('')[2] == 'A'){
    if(parseInt(arr[0]) == 12){
      hour = '00';
    } else {
      if(parseInt(arr[0]) < 10){
        hour = `0${parseInt(arr[0])}`
      } else {
        hour = parseInt(arr[0])
      }
    }
    console.log(`${hour}:${arr[1]}:${arr[2].split('A')[0]}`);
    return (`${hour}:${arr[1]}:${arr[2].split('A')[0]}`);
  } else if(arr[2].split('')[2] == 'P'){
    if(parseInt(arr[0])+12 == 24){
      hour = '12';
    } else {
      hour = parseInt(arr[0])+12;
    }
    console.log(`${hour}:${arr[1]}:${arr[2].split('P')[0]}`);
    return (`${hour}:${arr[1]}:${arr[2].split('P')[0]}`);
  }
}

timeConverter(test2);
timeConverter(test3);