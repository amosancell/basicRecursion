// required 4
function triangle(rows) {
  if(rows == 0) {
    return 0;
  }
  return rows + triangle(rows - 1);
}

function fibonacci(n) {
  if(n == 0 || n == 1) {
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

function countHi(str) {
  if(str.length < 2) {
    return 0;
  }
  else if(str.substring(0,2) == "hi") {
    return 1 + countHi(str.substring(2));
  }
  else {
    return countHi(str.substring(1));
  }
}

function sumDigits(n) {
  if(n == 0) {
    return 0;
  }
  return n % 10 + sumDigits(Math.floor(n/10));
}

// 4 of my choice
/*function parenBit(str) {
  if(str.substring(0,1) == "(" && str.substring(str.length-1) == ")") {
    return str;
  }
  else if(!str.substring(0,1) == "(") {
    return parenBit(str.substring(1));
  }
  else {
    return parenBit(str.substring(0,str.length-1));
  }
}*/
function parenBit(str) {
  if(!(str.substring(0,1) == "(")) {
    return parenBit(str.substring(1));
  }
  if(!(str.substring(str.length-1) == ")")) {
    return parenBit(str.substring(0,str.length-1));
  }
  else {
    return str;
  }
}

function countPairs(str) {
  if(str.length < 3) {
    return 0;
  }
  else if(str.substring(0,1) == str.substring(2,3)) {
    return 1 + countPairs(str.substring(1));
  }
  else {
    return countPairs(str.substring(1));
  }
}

function strCount(str, sub) {
  if(str.length < sub.length) {
    return 0;
  }
  else if (str.substring(0,sub.length) == sub) {
    return 1 + strCount(str.substring(sub.length),sub);
  }
  else {
    return strCount(str.substring(1),sub);
  }
}

function strCopies(str, sub, n) {
  if(str.length < sub.length) {
    if(n <= 0) {
      return true;
    }
    return false;
  }
  else if(str.substring(0,sub.length) == sub) {
    return strCopies(str.substring(1),sub,n-1);
  }
  else {
    return strCopies(str.substring(1),sub,n);
  }
}

// functions required for functions UI
function params(func) {
  sFunc = func.toString();
  sFunc = sFunc.split('\n');
  parenParams = parenBit(sFunc[0])
  nameParams = parenParams.substring(1,parenParams.length-1);
  p = nameParams.split(', ');
  return p;
}

//function felixParams(func) {
//  return func.toString.replace(/function [^(]*\(/).replace(/\) {.*/).split(", ")])
//}
