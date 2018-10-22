class Contact{
    constructor(name, email, phone, relation, entryNum){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
        this.entryNum = entryNum;
    }
    printMe(){
        console.log(`${this.name}`);
        console.log(`${this.email}`);
    }  
}

class AddressBook {
    constructor(){
        this.contacts=[];
    }
    add(info){
        this.contacts.push(info);
    }

    deleteAt(entryNum) {
            let whichIndex = entryNum - 1; 
            return whichIndex;
    }


     display(whichIndex, delEntry, newContact){
        
        //append latest entry
        if (newContact){
            for (let i = this.contacts.length - 1; i < this.contacts.length; i++){
                const newE = document.createElement(`section${entryNum}`);
                newE.innerHTML = `
                <p class=>Name: ${this.contacts[i].name}</p>
                <p>Email: ${this.contacts[i].email}</p>
                <p>Phone: ${this.contacts[i].phone}</p>
                <p>Relation: ${this.contacts[i].relation}</p> 
                <button id="btn${this.contacts[i].entryNum}" type="button">delete</button>
            `;
            document.body.append(newE);
           }
        }
        window.addEventListener('load', console.log("test"));
        
        //update display if needed
        if (delEntry) {
        this.contacts.splice(whichIndex, 1); 
        //document.body.remove(newE);
        }    
    } 
}

let person = new AddressBook;
//let delEntry = false; 
//let maxEntries = 3;   
let newContact = false;
let btnCount= 0;
let entryNum = btnCount;
//for (let btnCount = 0; btnCount<maxEntries; btnCount++) {
         //set delEntry back to false;
    let delEntry = false;
   
document.querySelector(".Submit").onclick = function() {
       
    btnCount ++;
    entryNum = btnCount;

    newContact = true;
            
    // const whichIndex = btnCount - 1; 
    const name= document.querySelector(".Name").value;
    const email= document.querySelector(".Email").value;
    const phone= document.querySelector(".Phone").value;
    const relation = document.querySelector(".Relation").value;
    person.add(new Contact(name, email, phone, relation, entryNum));
    person.display((person.deleteAt(entryNum)), delEntry, newContact);

       document.querySelector("#btn2").addEventListener("click", function() {
        console.log("sup");
        newContact = false;
        delEntry = true;   
        console.log(`btn${entryNum}`);
        person.display(person.deleteAt(entryNum), delEntry, newContact);
        });
    }