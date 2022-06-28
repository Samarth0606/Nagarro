// arrays are refernece type
// let arr1 = [1,2,3,4,5]
// undefined
// arr1
// (5) [1, 2, 3, 4, 5]
// arr1 = [7,8,9]
// (3) [7, 8, 9]
// arr1
// (3) [7, 8, 9]
// const arr2 = ["samarth","1",1,2,3,4]
// undefined
// arr2
// (6) ['samarth', '1', 1, 2, 3, 4]
// arr2 = [1,2,3]
// VM329:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:6
// (anonymous) @ VM329:1
// arr2[2]= "111"
// '111'
// arr2
// (6) ['samarth', '1', '111', 2, 3, 4]
// arr2[10] = 0
// 0
// arr2
// (11) ['samarth', '1', '111', 2, 3, 4, empty × 4, 0]
// arr2[9] = 10
// 10
// arr2
// (11) ['samarth', '1', '111', 2, 3, 4, empty × 3, 10, 0]
// arr2 = "parrot"

// const arr2 = [1,2,3,4,5]
// undefined
// const[1] = "samarth"
// VM3378:1 Uncaught SyntaxError: Invalid destructuring assignment target
// arr2[1] = "samarth"
// 'samarth'
// arr2
// (5) [1, 'samarth', 3, 4, 5]
// arr2[7] = "abhishek"
// 'abhishek'
// arr2
// (8) [1, 'samarth', 3, 4, 5, empty × 2, 'abhishek']


// slice method



// arr
// (9) [1, 2, 3, 'sam', 'nagarro', 'aditya sir', undefined, null, Array(4)]0: 11: 22: 33: "sam"4: "nagarro"5: "aditya sir"6: undefined7: null8: (4) [5, 6, 7, Array(3)]length: 9[[Prototype]]: Array(0)
// arr.slice(3,6)
// (3) ['sam', 'nagarro', 'aditya sir']
// arr
// (9) [1, 2, 3, 'sam', 'nagarro', 'aditya sir', undefined, null, Array(4)]
// arr.slice(6,3)
// []
// arr.slice(-5)
// (5) ['nagarro', 'aditya sir', undefined, null, Array(4)]
// arr.slice(-5,-2)
// (3) ['nagarro', 'aditya sir', undefined]
// arr.slice(-5,-6)
// []
// arr.slice(-5,7)
// (3) ['nagarro', 'aditya sir', undefined]
// arr
// (9) [1, 2, 3, 'sam', 'nagarro', 'aditya sir', undefined, null, Array(4)]


// splice
// let arr = [1,2,3,4,5,6,7,8,9,10]
// undefined
// arr
// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr.splice(4,2)
// (2) [5, 6]
// arr
// (8) [1, 2, 3, 4, 7, 8, 9, 10]
// arr
// (8) [1, 2, 3, 4, 7, 8, 9, 10]
// arr[4,0]
// 1
// arr
// (8) [1, 2, 3, 4, 7, 8, 9, 10]
// arr[4,0,5,6]
// 9
// arr
// (8) [1, 2, 3, 4, 7, 8, 9, 10]
// arr.splice(4,0)
// []
// arr
// (8) [1, 2, 3, 4, 7, 8, 9, 10]0: 11: 22: 33: 44: 75: 86: 97: 10length: 8[[Prototype]]: Array(0)
// arr.splice(4,0,5,6)
// []
// arr
// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr.splice(4,0,5,6)
// []
// arr
// (12) [1, 2, 3, 4, 5, 6, 5, 6, 7, 8, 9, 10]

// let arr = [1,2,3,4,5,6,7,8,9,10]
// undefined
// arr
// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr.splice(4,2,"samarth","nagarro", "internship")
// (2) [5, 6]
// arr
// (11) [1, 2, 3, 4, 'samarth', 'nagarro', 'internship', 7, 8, 9, 10]


// split method and join method
// let dialogue = "ek chutki sindoor ki keemat tum kya jaano ramesh baabu"
// undefined
// dialogue
// 'ek chutki sindoor ki keemat tum kya jaano ramesh baabu'
// dialogue.split(' ')
// (10) ['ek', 'chutki', 'sindoor', 'ki', 'keemat', 'tum', 'kya', 'jaano', 'ramesh', 'baabu']
// let url = "https://google.com/search?name:samarth%20/pasword=123"
// undefined
// url
// 'https://google.com/search?name:samarth%20/pasword=123'
// url.split('/')
// (5) ['https:', '', 'google.com', 'search?name:samarth%20', 'pasword=123']
// let sam = url.split('/')
// undefined
// sam
// (5) ['https:', '', 'google.com', 'search?name:samarth%20', 'pasword=123']
// sam.join('+')
// 'https:++google.com+search?name:samarth%20+pasword=123'
// sam
// (5) ['https:', '', 'google.com', 'search?name:samarth%20', 'pasword=123']
// sam.join('----->')
// 'https:----->----->google.com----->search?name:samarth%20----->pasword=123'



// concat method
// let arr = [1,2,3,4,5]
// undefined
// let mohit = [6,7,8,9]
// undefined
// arr.concat(mohit)
// (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr
// (5) [1, 2, 3, 4, 5]
// arr.concat("samarth")
// (6) [1, 2, 3, 4, 5, 'samarth']
// arr.concat([1,2,3,"sam"])
// (9) [1, 2, 3, 4, 5, 1, 2, 3, 'sam']


// includes
// let arr = [1,2,3,"samarth",[4,5],"nagarro"]
// undefined
// arr
// (6) [1, 2, 3, 'samarth', Array(2), 'nagarro']
// let string = "hello ho are you khaana khaake jaaana"
// undefined
// string
// 'hello ho are you khaana khaake jaaana'
// stringng.includes('are')
// VM5827:1 Uncaught ReferenceError: stringng is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM5827:1
// string.includes('are')
// true
// string.includes('aree')
// false
// string.includes('ar')
// true
// arr.includes(3)
// true
// arr.includes('3')
// false
// arr.includes('samarth')
// true
// arr.includes('samart')
// false
// arr.includes([4,5])
// false
// string.indexOf('are')