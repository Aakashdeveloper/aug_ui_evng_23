Es5 > Ecma Script 5
Es6 > Ecma Script 6

String > 'hi' "Hey" '1' "true" 'false' `Test`
Number > 5 656 65657.88  .777
Boolean > true false

//es5
var a = 10;
var b = "Hiii";
var c = true

typeof(a)
'number'
typeof(b)
'string'
typeof(c)
'boolean'
var d = "10"
undefined
typeof(d)
'string'
var e = 10.11
undefined
typeof(e)
'number'


var a = 10
var b = 20
a+b
30
a-b
-10
a*b
200
a/b
0.5
4%2
0
4%3
1
2%4
2
3%4
3

////////////////////////////////
var a = "Hiii"
var b = "JavaScript"

a+b
'HiiiJavaScript'
a-b
NaN (Not a number)
a*b
NaN
a/b
NaN

var c = 10

a+c
'Hiii10'
a-c
NaN
c+a
'10Hiii'

string + string = string
string + number = string
number + string = string
number + number = number

"10"+20+"30"
"1020"+30
'102030'


10+20+"30"
30+"30"
'3030'

"10"+20+30
"1020"+30
'102030'

"10"+20+"30"-1
102029
10+20+"30"-1
3029
"10"+20+30-1
102029

"hii"-1
NaN

"10"-1
9
"2"*"3"
6
"2"/"3"
0.6666666666666666
"2a"/"3"
NaN
"2a"/3
NaN
"2"/"3a"
NaN

var a = true
var b = false
undefined
a+b
1
a-b
1
a+10
11
10/b
Infinity

true is equal to 1
false is equal to 0


var a = "10"
var b = "1"
undefined
a+b
'101'
parseInt(a)+parseInt(b)
11
parseInt(a)
10
var c = "10.22"

parseInt(a)+parseInt(c)
20
parseInt(a)+parseFloat(c)
20.22

//es6
Number(a)+Number(b)
11
Number(a)+Number(c)
20.22


var a = "10a"
parseInt(a)
10

var a = "10a11"
parseInt(a)
10

var a = "10a"
Number(a)
NaN