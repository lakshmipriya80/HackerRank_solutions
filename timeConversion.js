// convert normal time to railway time 
//example 1.00.00  means 13.00.00
let s = "07:05:45PM"
function timeConversion(s) {
    
    let [hour, minute, second_meridiem] = s.split(':');

    let [second, meridiem] = second_meridiem.split(/(?=[AP]M)/);
    if (meridiem === 'AM' && hour === '12') {
        hour = '00'; 
    } else if (meridiem === 'PM' && hour !== '12') {
        hour = String(parseInt(hour) + 12);
    }

   
    return `${hour}:${minute}:${second}`;
}
console.log(timeConversion(s));
