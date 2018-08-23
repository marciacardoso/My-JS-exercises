const monthNumber= 15;
let monthName= null;
let monthDays= null;
let message= monthName + monthDays;

switch (monthNumber) {
    case 1:
    monthName= 'January';
    monthDays= '31 days';
      message = 'January- 31 days';
      break;
    case 2:
    monthName= 'February';
    monthDays= '28 days in a common year and 29 days in leap years';
    message = 'February- 28 days in a common year and 29 days in leap years';
      break;
    case 3:
    monthName= 'March';
    monthDays= '30 days';
    message = 'March - 31 days';
      break;
    case 4:
    monthName= 'April';
    monthDays= '30 days';
    message = 'April- 30 days';
      break;
      case 5:
      monthName= 'May';
    monthDays= '31 days';
    message = 'May- 31 days';
      break;
      case 6:
      monthName= 'June';
    monthDays= '30 days';
    message= 'June -30 days';
      break;
      case 7:
      monthName= 'July';
    monthDays= '31 days';
    message = 'July- 31 days';
      break;
      case 8:
      monthName= 'August';
    monthDays= '31 days';
    message = 'August- 31 days';
      break;
      case 9:
      monthName= 'September';
    monthDays= '30 days';
    message = 'September- 30 days';
      break;
      case 10:
      monthName= 'October';
    monthDays= '31 days';
    message = 'October- 31 days';
      break;
      case 11:
      monthName= 'November';
    monthDays= '30 days';
    message = 'November- 30 days';
      case 12:
      monthName= 'December';
    monthDays= '31 days';
    message = 'December- 31 days';
      break;
    default:
    monthName= null;
    monthDays= null;
    message = 'error message';
  }
  
  console.log(message );
  console.log( monthName +' is the selected month and has ' + monthDays);