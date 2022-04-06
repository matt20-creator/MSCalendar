var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var calendar = require('node-calendar');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// var calendar = require('node-calendar');

// var cal = new calendar.Calendar(1).monthdayscalendar(2022, calendar.APRIL);
// var yearCalendar = cal.yeardayscalendar(2004);

// console.log(cal)
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// const d = new Date();
// let name = month[d.getMonth()];
// document.getElementById("demo").innerHTML = name;

var today = new Date();
console.log(`Oggi: ${today}`)
var mm_int = today.getMonth() + 1;
console.log(`Mese interno: ${mm_int}`)
var mm = String(mm_int).padStart(2, '0'); //January is 0!
console.log(`Mese con 0 iniziale: ${mm}`)
var yyyy = today.getFullYear();
console.log(`Anno: ${yyyy}`)
today_iso = yyyy + '-' + mm + '-01';

var dd = String(today.getDate()).padStart(2, '0');
console.log(`Giorno: ${dd}`);

today = `${dd}/${mm}/${yyyy}`;

console.log(`Oggi formattato: ${today}`)


//ULTIMO GIORNO DEL MESE
var mos=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']

for (i = 0; i < 12; i++) {
    var lastDate = new Date(2012, i+1, 0);
    // $('body').append('Last day of ' + mos[i] + ' is ' + lastDate.getDate()+'<br>')
    // console.log('Last day of ' + mos[i] + ' is ' + lastDate.getDate()+'<br>')
}


function getAllDaysInMonth(yyyy, mm) {
  const date = new Date(yyyy, mm, 1);

  const dates = [];

  while (date.getMonth() === mm) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

const date = new Date(mm);

// 👇️ All days in March of 2022
console.log(getAllDaysInMonth(date.getFullYear(), date.getMonth()));

