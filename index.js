// expecting time to be a string in the format like '8:15' or '12:30'

//input is string with format "hh:mm"
//expected outpus it "minutesWord joinWords hourWord"

//the hour range 0 - 12

//hours = 0, minutes = 00 -> midnight



function convertTimeToWords(time) {
  // TODO: real code goes here!

  let [hours, minutes] = time.split(":").map(v=>parseInt(v));
  let minutesWord, joinWord, hourWord;

  let time_map = {
    1: 'one',

    2: 'two',

    3: 'three',

    4: 'four',

    5: 'five',

    6: 'six',

    7: 'seven',

    8: 'eight',

    9: 'nine',

    10: 'ten',

    11: 'eleven',

    12: 'twelve',

    15: 'quarter',

    30: 'half',

    25: 'twenty five',

}

  if (time === '0:00') {
    return 'midnight';
  }

  if(time == '12:00'){
    return 'midday'
  }

  if(minutes == 0){
    return time_map[hours] + " o'clock"
  }
//the minutes less than equal 30, minutesWord = (quarter, half, 30 - minutes) joinWord = (past) hoursWord = hour
//the minutes more than 30, minutesWord = ( 60 - minutes, quarter, half) joinWord = (to) hoursWord = hour + 1

  if(minutes > 30){
    let remainMinutes = 60 - minutes;
    minutesWord =  remainMinutes == 30 ? 'half' : remainMinutes == 15 ? 'quarter' : remainMinutes;
    joinWord = 'to';
    hourWord = time_map[hours+1];
    return `${minutesWord} ${joinWord} ${hourWord}`
  }

   if(minutes <= 30){
    minutesWord = time_map[minutes];
    joinWord = 'past';
    hourWord = time_map[hours];
    return `${minutesWord} ${joinWord} ${hourWord}`
   }

  return 'half past eight';
}
// console.log(convertTimeToWords("11:00"))

module.exports = { convertTimeToWords };