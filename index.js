    var item2={
    name :"Thobani",
    surname : "Zondi",
    initials:"Mr",
    age:"26" ,
    Id: "98031102194786",
    price:"R1m",
    cellphone:"073821176",
    }
    // itemA=[...itemA,item2]
    // console.log(itemA)

    function now(){
    var name= document.getElementById("name").value
    var surname= document.getElementById("Surname").value
    var initials= document.getElementById("initials").value
    var age= document.getElementById("Age").value
    var Id= document.getElementById("ID").value
    var cellphone= document.getElementById("Cellphone").value
    var Email= document.getElementById("Email").value


    var studentnumber= document.getElementById("studentnumber").value  
    var Provinces= document.getElementById("Provinces").value
    var provinces= document.getElementById("provinces").value
    var homddress= document.getElementById("homddress").value
    var Alternatenumber= document.getElementById("Alternatenumber").value
    var Schoolname= document.getElementById("Schoolname").value

    var HighestGrade= document.getElementById("HighestGrade").value
    var yearin= document.getElementById("yearin").value
    var yearout= document.getElementById("yearout").value
    var examnumber= document.getElementById("examnumber").value
    var Strims= document.getElementById("Strims").value
    var fuculty= document.getElementById("fuculty").value
    var sports= document.getElementById("sports").value
    var Qualification= document.getElementById("Qualification").value
    var Cellphone= document.getElementById("Cellphone").value

    
        document.getElementById("d1").style.display = "none"
        document.getElementById("butin").style.display = "block"
        // document.getElementById("butin").style.display = "block"


    var item = {
        name : name,
        surname : surname,
        initials:initials,
        age: age,
        Id: Id,
        cellphone:cellphone,
        studentnumber:studentnumber,
        Provinces:Provinces,
        provinces:provinces,
        homddress:homddress,
        Alternatenumber:Alternatenumber,
        Schoolname:Schoolname,
        HighestGrade:HighestGrade,
        yearin:yearin,
        yearout:yearout,
        examnumber:examnumber,
        status: question1,
        gender: question2,
        employment:question3,
        Email:Email
    }
    const url = "https://formspree.io/f/mbjnlvdv"
    let send = JSON.stringify(item)

    fetch(url, {
        method: "POST",
        body: send,
        headers:{'CONTent-TYPE': 'application/json'}
    })

    .catch(function(error){console.log(error)})

    console.log(item)
    }

        var question1,question2,question3;

    function status(value){
    question1 = value
    }
    function gender(value){
    question2 = value
    }
    function employment(value){
    question3 = value
    }




// const now = function(){
// let response1 = "question1:" +question1 + "/nquestin2" + question2 + "/nquestion3" + question3;   ;
// console.log(response1)
// }

// function gender(value){
//     question2 = value
// }