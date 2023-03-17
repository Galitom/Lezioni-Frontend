var click=0
console.log(window)
console.log(document)
const anchor = document.getElementById("anchor")
console.log(anchor)
anchor.addEventListener('click', function(){
    click++
    alert(`Giorgio ha cliccato ${click} volt${click===1?'a':'e'}`)
    //alert("Giorgio "+click)
})