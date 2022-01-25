// function add(a, b) {
//     return a + b;
//   }
function isDateValid(date){

        return checkLength(date) &&
        checkValidDots(date) &&
        checkYear(date) &&
        checkMonth(date) &&
        isDayValid(date);
}

function checkLength(dato){
    if(dato.length == 10){
        return true;
    }
    else return false;
}

function checkValidDots(dato){
    if(dato.charAt(2) === '.' && dato.charAt(5) === '.'){
        return true;
    }
    return false;
    //25.01.2022
}

function checkYear(dato){
    var year = dato.slice(6);
    if(year.length === 4 && year >= '0000' && year <= '9999'){
        return true;
    }
    return false;

}

function checkMonth(dato){
    let month = dato.substr(3,2);
    if(month.length === 2 && month.charAt(1) != '.' && month.charAt(0) != '.' && month>= '01' && month <= '12'){
        return true;
    }
    return false;
}

function isLeapYear(dato)
{
    let year = dato.substr(6);
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function isDayValid(dato){
    var month = dato.substr(3,2);
    var isFewMonth = month === '04' || month === '06' || month === '09' || month === '11';
    var day = dato.substr(0,2);
    return day.length === 2 && day >= '01' && day <= '28' ||
        day === '29' && (month !== '02' || isLeapYear(dato)) ||
        day === '30' && month !== '02' ||
        day === '31' && !isFewMonth && month !== '02';
}

