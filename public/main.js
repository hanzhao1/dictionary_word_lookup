const getButton = document.getElementById('button');
const inputVal = document.getElementById('inputvalues');
const ul = document.getElementById('list');

getButton.addEventListener('click', (event)=>{
  fetch(`/words?word=${inputvalues.value}`)
    .then((response)=>{
      return response.json();
    })
    .then((response)=>{
      response.forEach((ele,idx)=>{
        const li = document.createElement('LI');
        li.innerHTML = ele;
        ul.appendChild(li);
      })
    })
    .catch((err)=>{
      throw err;
    })
})