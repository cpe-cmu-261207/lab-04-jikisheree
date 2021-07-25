let text

const allDiv = document.querySelector("#alldiv")
const todoDiv = document.querySelector("#tododiv")
const doneDiv = document.querySelector("#donediv")

// text = input
const inputCallback = (ev) => {
    text = ev.target.value
}

//click
function clickCallback () {
    if(text == undefined){
        alert("Task cannot be empty!")
    }else if (text.trim() == ""){
        alert("Task cannot be empty!")
    }else{
       addlist();
    }
}


// enter key
function EnterKey(event) {
    var x = event.keyCode;
    if (x == 13) {
        event.preventDefault()
        document.getElementById("myBtn").click()
    }
}

const addlist = () =>{

        const task = document.createElement('div')
        const list = document.createElement('div')
        const deletebtn = document.createElement('button')
        const allbtn = document.createElement('div')
        deletebtn.innerHTML = 'Delete'
        deletebtn.style.visibility = "hidden"
        deletebtn.classList.add("bg-yellow-300","animate-pulse")
        const donebtn = document.createElement('button')
        donebtn.innerHTML = 'Done'
        donebtn.style.visibility = "hidden"
        donebtn.classList.add("bg-red-400","mr-2","ml-5","animate-bounce")
        allDiv.classList.add("justify-end")

        // text
        list.innerHTML = text
        task.append(list)
        // delete button
        deletebtn.addEventListener('click', () =>{
            task.remove()
        })
           // addEventListener to donebutton
        donebtn.addEventListener('click', () =>{
            // create donelist & strike
            let donelist = document.createElement('span')
            var txt = list.innerHTML
            var strike = txt.strike()
      
            donelist.innerHTML =  strike
            donelist.append(document.createElement('br')) 
            // prepend donelist in deletedDiv
            doneDiv.prepend(donelist)
            task.remove()
        })
            
        // append everthing in task, append task in todoDiv
        allbtn.append(donebtn)
        allbtn.append(deletebtn)
        allbtn.classList.add("justify-end")
        task.append(allbtn)
        task.addEventListener("mouseout", () => {
            deletebtn.style.visibility = "hidden"
            donebtn.style.visibility = "hidden"
        })
        task.addEventListener("mouseover", () => {
            deletebtn.style.visibility = "visible"
            donebtn.style.visibility = "visible"
        })
        task.classList.add("flex","bg-blue-100","mb-5","px-10")

        task.append(document.createElement('br'))
        todoDiv.prepend(task)
}