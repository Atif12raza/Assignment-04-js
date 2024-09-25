// Section 1
// Chapter 15 (Array I)
// Q1
// var emptyArray = [];
// console.log(emptyArray[0]);
//Q2
// var stringArray =[,"Atif raza"]
// console.log(stringArray[1])
//Q3
// var alphabet = ["h","i","j","k"]
// console.log(alphabet[2]);
//Q4
// var alphabet =["h","i","j","k","l","m",
//     "n","o"]
//     var totalLenght =alphabet.length
//     console.log(totalLenght)
//Q5
// var element =["alphabet","totalLenght"]
// console.log(element[1])

//Chapter 16 (Array II)
//Q1
// var string = ["firstName"]
// string.push("lastName")
// console.log(string[1])
//Q2
// var Alphabet=["h","i","j","k"]
// Alphabet.pop()
// console.log(Alphabet)
//Q3
// var alphabet = ["h","i","j","k"]
// alphabet.push(5)
// console.log(alphabet)


//Chapter 16 (Array III)
//Q1
// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// sizes.shift()
// console.log(sizes)
//Q2
// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// sizes.unshift(1,2,3)
// console.log(sizes)
//Q3
// var Arra = ["Apple"]
// Arra.unshift("Banana")
// console.log(Arra[0])
//Q4
// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// sizes.splice(2,0,"l")
// console.log(sizes)
//Q5
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3);

// console.log(regSizes);
//Q6
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1,3);
// pets.splice(1,0,"hamster","rabite");
// console.log(pets)
//Q7
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1,2);
// console.log(pets);
//Q8
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var shermaindehate=pets.slice(3,5);
// console.log (shermaindehate);


// Section 2
// chapter (ARRAYS)
// Q1
// var emptyArray = [];
// emptyArray.push("Atif","Ali","Farooq");
// console.log(emptyArray);
// Q2
// var emptyArray = [];
// emptyArray.push("Atif","Ali","Farooq");
// console.log(emptyArray);
// Q3
// var string =["Atif","Ali","Farooq","Rizwan"];
// console.log(string);
// Q4
// var numbers =[1,2,3,4,5,6,7,8,9,10];
// console.log(numbers);
// Q5
// var boolean =[true,false];
// console.log(boolean);
// Q6
// var mixed = [1,2,3,"Atif","Ali","Farooq",true,false];
// console.log(mixed);
// Q7
// var qualifications= [ "SSC,  HSC, BCS,BS, BCOM, MS, M. Phil., PhD"];
// document.write(qualifications);
// Q8
// var student=["Michael","John","Tony"];
// var Name = prompt("Enter your name");
// var input1 = prompt("Enter your obtaine");
// var input2 = 500;
// var persentage = input1/input2 *100;
// if(Name===student[0]){
//     document.write("Score of"+" "+student[0]+"is"+input1+"percentages"+" "+persentage+"%");
// }
// else if(Name===student[1]){
//     document.write("Score of"+" "+student[1]+"is"+input1+"percentages"+" "+persentage+"%");
// }
// else if(Name===student[2]){
//     document.write("Score of"+" "+student[2]+"is"+input1+"percentages"+" "+persentage+"%");
// }
// else{
//     document.write("No record found");
// }
// Q9
// var color = ["green","yellow","red","orange","white"];
// document.write(color);
// a
// var color = ["green","yellow","red","orange","white"];
// color.unshift("blue")
// document.write(color[0]);
// b
// var color = ["green","yellow","red","orange","white"];
// color.push("Skyblue");
// document.write(color[5]);
// c
// var color = ["green","yellow","red","orange","white"];
// color.unshift("blue","skyblue","pink");
// document.write(color[0]);
// d
// var color = ["green","yellow","red","orange","white"];
// color.shift();
// document.write(color);
// e
// var color = ["green","yellow","red","orange","white"];
// color.pop();
// document.write(color);
// f
// var color=prompt("Enter your color name you want")
// var colorArray=["green","yellow","red","orange","white",color]
// console.log(colorArray);
// g
// var updateed2tarr =[ "red","blue","green","orange","white"]
// var tagetvalue = prompt("Enter the Target value" )
// var Deletevalue = prompt("Enter the Delete value" )
// updateed2tarr.splice(tagetvalue,Deletevalue)
// console.log(updateed2tarr)
// Q10
// var scor = [120, 350, 150, 80, 450, 650, 480, 950];
// scor.sort();
// console.log( scor);
// Q11
// var city = ["karachi","lahore","islamabad","multan","quttea",]
// document.write("Cities lists:"+"<br>"+city + "<br>")
// var cityselecte = city.slice(2,4)
// document.write(" Selected Cities lists:"+"<br>"+cityselecte)
// Q12
// var arr = ["This","is","my", "cat"];

// console.log(arr.join(" "));

// Q13
// var quee = []
// quee.push("keyboard")
// quee.push("mouse")
// quee.push("printer")
// quee.push("monitor")
// console.log("Current Queue:", quee);
// var firstRemove = quee.shift()
// console.log("Current Queue after removing:", quee);
// var firstRemove = quee.shift()
// console.log("Current Queue after removing:", quee);
// var firstRemove = quee.shift()
// console.log("Current Queue after removing:", quee);
// var firstRemove = quee.shift()
// console.log("Current Queue after removing:", quee);

// Q14
// var quee = []
// quee.push("keyboard")
// quee.push("mouse")
// quee.push("printer")
// quee.push("monitor")
// console.log("Current Queue:", quee);
// var firstRemove = quee.pop()
// console.log("Current Queue after removing:", quee);
// var firstRemove = quee.pop()
// console.log("Current Queue after removing:", quee);
// var firstRemove = quee.pop()
// console.log("Current Queue after removing:", quee);
// var firstRemove = quee.pop()
// console.log("Current Queue after removing:", quee);
// Q15
// var Question15 = ["Apple","Samsung","Motorola","One plus","Oppo"]
// document.write(
   
//     "<select>"
//  + "<option>"+Question15[0]+"</option>"
//  + "<option>"+Question15[1]+"</option>"
//  + "<option>"+Question15[2]+"</option>"
//  + "<option>"+Question15[3]+"</option>"
//  + "<option>"+Question15[4]+"</option>"
//  + 
   
 
//  "</slecte>")