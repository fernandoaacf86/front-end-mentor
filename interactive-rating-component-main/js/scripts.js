var nota = ''
function ativarBtn(num) {
    //counting how many childrens ratings have.. so we can change in the future
    var x = document.getElementById('ratings').childElementCount 
    var n = document.getElementById('ratings').children

    //removing btnActive from all childrens of #ratings
    //didnt know how to select the only child that would have the btnActive class
    //in case changing the rating...
    //using the 'for' i could garanty that any of them would have 
    for (let index = 0; index <= (x - 1); index++) {
        n[index].classList.remove('btnActive')  
    }
    //addin the btnActive to the first or new choice
    n[num].classList.add('btnActive')    
    //seting a valor for nota for feedback in classChange()
    nota = num + 1

    //PS: My english is a little bit rusty =')
}



function classChange() {

    //adding display none to section-01
    var section01 = document.getElementById('section-01')
    section01.classList.remove('d-flex')
    section01.classList.add('d-none')

    //removin display none from section-02
    var section02 = document.getElementById('section-02')
    section02.classList.remove('d-none')

    //user feedback
    document.getElementById('nota').innerText = nota    
}
