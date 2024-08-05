// to store APIs
const charurl = "https://hp-api.onrender.com/api/characters";      
const spellurl = "https://hp-api.onrender.com/api/spells";
const staffurl = "https://hp-api.onrender.com/api/characters/staff";
const studurl = "https://hp-api.onrender.com/api/characters/students";

// to access btn and div tags in html
const btnchar = document.querySelector("#char");
const btnspell = document.querySelector("#spell");
const btnstaff = document.querySelector("#staff");
const btnstud = document.querySelector("#stud");
const div=document.querySelector(".after");

const p =Array;  // to create an array to add the text in html file

// creating fns to get data, convert it to readable format and add a specific part of it in html 
const getchar = async () => {
    let response = await fetch(charurl);
    let data = await response.json();
    for (let i in data) {
        const p=document.createElement('p');
        p.innerText=(`Name : ${data[i].name}`);
        div.append(p);
    }
}

const getspell = async () => {
    let response = await fetch(spellurl);
    let data = await response.json();
    for (let i in data) {
        const p=document.createElement('p');
        p.innerText=(`Name : ${data[i].name}`);
        div.append(p);
    }
}

const getstaff = async () => {
    let response = await fetch(staffurl);
    let data = await response.json();
    for (let i in data) {
        const p=document.createElement('p');
        p.innerText=(`Name : ${data[i].name}`);
        div.append(p);
    }
}

const getstud = async () => {
    let response = await fetch(studurl);
    let data = await response.json();
    for (let i in data) {
        const p=document.createElement('p');
        p.innerText=(`Name : ${data[i].name}`);
        div.append(p);
    }
}

// to  implement the given fns when event occurs
btnchar.addEventListener("click", getchar)
btnspell.addEventListener("click", getspell)
btnstaff.addEventListener("click", getstaff)
btnstud.addEventListener("click", getstud)

// bonus task
const str=prompt("Enter charcter ID");

(async function() {
    let response = await fetch(charurl);
    console.log(response)
    let data = await response.json();
    let c=0;
    for (let i in data) {
        if (str === data[i].id) {
            console.log(data[i]);
            c=1;
            break;
        }
    }
    if (c==0) {
        console.log("Incorrect ID");
    }    
})();