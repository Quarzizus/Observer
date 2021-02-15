class Subject {
    constructor(){
        this.observers = []
    }
    subscribe(observer){
        this.observers.push(observer)
    }
    unsubscribe(o){
        // devuelve el mismo array sin el que desuscribimos
        this.observers = this.observers.filter(obs => obs != 0)
    }
    notify(model){
        // model es el valor nuevo
        this.observers.forEach(observer => 
            observer.notify(model))
    }   
}

class Input extends Subject{
    constructor(){
        super();
        this.text = "";
    }
    notify(text){
        this.text = text 
        super.notify(this)
    }
}

class div1observer {
    notify(subject){
        document.getElementById("div1").innerHTML = subject.text
    }
}
class div2observer {
    notify(subject){
        document.querySelector(".div2").innerHTML = subject.text.length
    }
}


let textSubject = new Input();
let myDiv1 = new div1observer();
let myDiv2 = new div2observer();
textSubject.subscribe(myDiv1)
textSubject.subscribe(myDiv2)



const inputsito = document.getElementById('input')
inputsito.addEventListener("input", () =>{
    textSubject.notify(inputsito.value)
})