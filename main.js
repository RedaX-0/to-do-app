
function costumTask(message) {
    return `<div class="w-full flex flex-col gap-3 mt-7">
            <div class="louhadi flex w-full gap-3 p-1 transition-colors items-center">
              <button class="checko bg-slate-300 w-10 h-10 rounded-full" onclick="checkTask(this)"><i class="fa-solid fa-check text-xl"></i></button>
              <p class="grow tracking-wider text-xl">${message}</p>
            <div>
              <button class="bg-slate-300 hover:bg-sky-500  duration-1000 w-10 h-10 rounded-full text-xl border" onclick="updateTask(this)"><i class="fa-solid fa-pen"></i></button>
              <button class="bg-slate-300 hover:bg-red-700  duration-1000 w-10 h-10 rounded-full text-xl border" onclick="deleteTask(this)"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div>`
}

function addTask() {
    const inputA = document.querySelector(`input`)
    if(inputA.value == ''){
        alert('you must write something')
    }else { 
    const tasklist = document.querySelector(`.taskList`)
    tasklist.innerHTML += costumTask(inputA.value)
    inputA.value = ""
    }
}

function deleteTask(target) {
    target.parentElement.parentElement.remove()
}

function updateTask(target) {
    const taskito = target.parentElement.previousElementSibling.innerText

    target.parentElement.previousElementSibling.innerHTML = `<input type="text" class="update-input" onblur="saveUpdate(this)" value = ${taskito} />`
  }
function saveUpdate(target) {
  target.parentElement.innerHTML = `<p class="grow tracking-wider text-xl">${target.value}</p>` 
}

function checkTask(target) {
  if(target.classList.contains('bg-slate-300')) {

  target.classList.remove('bg-slate-300')
  target.classList.add('bg-green-600')

  } else {
  target.classList.remove('bg-green-600')
  target.classList.add('bg-slate-300')
  }
}
