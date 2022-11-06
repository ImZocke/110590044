function chgBorderA() {
  document.getElementsByTagName('table')[0].style.width = "200px";
}

function chgBorderB() {
  document.getElementsByTagName('table')[0].style.width = "500px";
}

function BorderA() {
  document.getElementsByTagName('table')[0].style.border = "1px solid black";
}

function BorderB() {
  document.getElementsByTagName('table')[0].style.border = "10px solid black";
}

function BorderC() {
  document.getElementsByTagName('table')[0].style.border = "20px solid black";
}

function Green() {
  var tds = document.getElementsByTagName('td');
  for (var i = 0; i < tds.length; i++)
    tds[i].style.backgroundColor = 'Green'
}

function Blue() {
  var tds = document.getElementsByTagName('td');
  for (var i = 0; i < tds.length; i++)
    tds[i].style.backgroundColor = 'Blue'
}

function Purple() {
  var tds = document.getElementsByTagName('td');
  for (var i = 0; i < tds.length; i++)
    tds[i].style.backgroundColor = 'Purple'
}

function Orange() {
  var tds = document.getElementsByTagName('td');
  for (var i = 0; i < tds.length; i++)
    tds[i].style.backgroundColor = 'Orange'
}

function reset() {
  var ths = document.getElementsByTagName('th');
  for (var i = 0; i < ths.length; i++)
    ths[i].style.backgroundColor = 'Navy'
  var tds = document.getElementsByTagName('td');
  for (var i = 0; i < tds.length; i++)
    tds[i].style.backgroundColor = 'Yellow'
  document.getElementsByTagName('table')[0].style.width = "200px";
  document.getElementsByTagName('table')[0].style.border = "1px solid black";
}
