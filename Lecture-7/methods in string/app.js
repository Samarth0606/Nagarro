// to uppercase,tol owercase , trim (non destructive method)

let s = "Nagarro internship"
// let s2 = s.toUpperCase()
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())


// trim()
// let sap = "                 samarth.            "
// undefined
// sap
// '                 samarth.            '
// sap.trim()
// 'samarth.'
// let saw = samarth
// VM1504:1 Uncaught ReferenceError: samarth is not defined
//     at <anonymous>:1:11
// (anonymous) @ VM1504:1
// let saw = "samarth"
// undefined
// saw.trim()
// 'samarth'
// let sk = "       samarth.  nagarro.       codng blocks.        "
// undefined
// sk
// '       samarth.  nagarro.       codng blocks.        '
// sk.trim()
// 'samarth.  nagarro.       codng blocks.'
// sk
// '       samarth.  nagarro.       codng blocks.        '


// substr
// s
// 'Nagarro internship'
// s.substr()
// 'Nagarro internship'
// s.substr(2)
// 'garro internship'
// s
// 'Nagarro internship'
// s.substr(2,7)
// 'garro i'

// substring + length
// s
// 'Nagarro internship'
// s.substring()
// 'Nagarro internship'
// s.substring(2)
// 'garro internship'
// s.substring(2,6)
// 'garr'
// s
// 'Nagarro internship'
// s.length
// 18


// indexOf
// s[19]
// undefined
// s.substring(7,2)
// 'garro'
// s.substring(-7,2)
// 'Na'
// s.substring(-7,-2)
// ''
// s
// 'Nagarro internship'
// s.indexOf('r')
// 4
// s.indexOf('rrr')
// -1
// s.indexOf('rr')
// 4
// s.indexOf('r', 4)
// 4
// s.indexOf('r', 5)
// 5
// s.indexOf('r', s.indexOf('r')+1)
// 5
// let str= rarar;
// VM1168:1 Uncaught ReferenceError: rarar is not defined
//     at <anonymous>:1:10
// (anonymous) @ VM1168:1
// let str= "rarar";
// undefined
// str.indexOf('r')
// 0
// str.indexOf('r',str.indexOf('r')+1)
// 2
// str.indexOf('r',str.indexOf('r'))
// 0
// str.indexOf('r',str.indexOf('r')+1)
// 2
// str.indexOf('r',str.indexOf('r',str.indexOf('r')+1)+1)
// 4

// replace and replaeAll
// s
// 'Nagarro internship'
// s.replace('r','x')
// 'Nagaxro internship'
// s.replaceAll('r','x')
// 'Nagaxxo intexnship'
// s
// 'Nagarro internship'

//repeat
// s.repeat(2)
// 'Nagarro internshipNagarro internship'

// chainng
// s
// 'Nagarro internship'
// let str = "      nagarroo ka internship.     "
// undefined
// str
// '      nagarroo ka internship.     '
// str.toUpperCase().trim()
// 'NAGARROO KA INTERNSHIP.'
// str.toUpperCase().trim().indexOf('g')
// -1
// str.toUpperCase().trim().indexOf('a')
// -1
// str.toUpperCase().trim().indexOf('A')
// 1
// str.toUpperCase().trim().indexOf('G')
// 2
// str
// '      nagarroo ka internship.     '
// str.indexOf('G')
// -1
// str.indexOf('g')
// 8