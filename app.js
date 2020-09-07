// .....................................................Day 2 Challenge


/////////////////////////////////////////////////////   Level 1   ///////////////////////

// part 1)
var a = "30 Days Of JavaScript";

// part 2)
console.log(a);

// part 3)
console.log(a.length);

// part 4)
console.log(a.toUpperCase());

// part 5)
console.log(a.toLowerCase());

// part 6)
console.log(a.substr(0,1))

// part 7)
console.log(a.substring(3))

// part 8)
console.log(a.includes("Script"))

// part 9)
console.log(a.split())

// part 10)
console.log(a.split(' '))

// part 11)
let c ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(c.split(','))

// part 12)
console.log(a.replace("JavaScript","Python"))

// part 13)
console.log(a.charAt(15))

// part 14)
console.log(a.charCodeAt("J"))

// part 15)
console.log(a.indexOf("a"))

// part 16)
console.log(a.lastIndexOf("a"))

// part 17)
let d = 'You cannot end a sentence with because because because is a conjunction';
console.log(d.indexOf("because"))

// part 18)
console.log(d.lastIndexOf("because"))

// part 19)
console.log(d.search("because"))

// part 20)
let e = '  30 Days Of JavaScript  '
console.log(e.trim())

// part 21)
console.log(a.startsWith('30'))

// part 22)
console.log(a.endsWith('JavaScript'))

// part 23)
console.log(a.match(/a/g))

// part 24)
let f = '30 Days of'
console.log(f.concat(' JavaScript'))

// part 25)
console.log(a.repeat(2))


/////////////////////////////////////////////////////   Level 2   ///////////////////////

// part 1)
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another." )

// part 2)
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// part 3)
var num = "10"
var h = Number(num)

// part 4)
var parseFl = 9.8;
var flaot = Math.ceil(parseFl)
console.log(flaot)

// part 5)
 var stringg = "python and jardon"
 console.log(stringg.match(/on/gi))

// part 6)
let x = "I hope this course is not full of jargon";
console.log(x.search('jargon'))

// part 7)
console.log(Math.random()*101)

// part 8)
console.log((Math.random()*101)+50)

// part 9)
console.log(Math.random()*256)

// part 10)
var m = 'JavaScript'
console.log(Math.random(m))


// part 11)
console.log('1 \t1 \t1 \t1 \t1')

// part 12)
console.log('2 \t1 \t2 \t4 \t8')


// part 13)
console.log('3 \t1 \t3 \t9 \t27 ')

// part 14)
console.log('4 \t1 \t4 \t16 \t64 \n5 \t1 \t5 \t25 \t125')

// part 15)
var z = 'You cannot end a sentence with because because because is a conjunction'
console.log(z.substr(31,23))


/////////////////////////////////////////////////////   Level 3   ///////////////////////

// part 1)
var string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(string.match(/love/gi)) 

// part 2)
var strin = 'You cannot end a sentence with because because because is a conjunction' 
console.log(strin.match(/because/gi))

// part 3)
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
var a = sentence.replace(/%/g,"")
var b = a.replace(/@/g,"")
var c = b.replace(/#/g,"")
var d = c.replace(/\$/g,"")
var e = d.replace(/;/g,"")
var f = e.replace(/&/g,"")
console.log(f)

// part 4)
var sallery = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(`total income ${5000+10000+15000}`)
