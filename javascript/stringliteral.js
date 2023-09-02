var mname = "Avengers"
var type = "Action"
var rating = 4.5
var ind = "Hollywood"

//es5
var out = "An "+mname+" is an "+type+" movie with rating of "+rating+" from ind "+ind+"."
'An Avengers is an Action movie with rating of 4.5 from ind Hollywood.'

//es6
var out = `An ${mname} is an ${type} movie with rating of ${rating} from ind ${ind}.`
'An Avengers is an Action movie with rating of 4.5 from ind Hollywood.'