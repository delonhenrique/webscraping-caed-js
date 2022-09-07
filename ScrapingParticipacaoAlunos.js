let updateTime
let dataStudents
let turma
let prova
let disciplina
Array.from($$("body table tr *")).forEach((el) => {
    el = String(el.innerHTML)
    dataStudents += el;

    if (el.indexOf('Atualizado') === 0) {
        updateTime = "Data: " + el
    } else if(el.length != 0 && el != undefined) {
        console.log(el);
    }

});

console.log(" ");

let selectTurma = document.getElementById('selecty0fuc3bed07cDADOS.VL_FILTRO_ETAPA');
turma = selectTurma.options[selectTurma.selectedIndex].text;
console.log(turma);
dataStudents += turma

console.log(" ");

let selectProva = document.getElementById('selectnn74f9d641c4DADOS.VL_FILTRO_AVALIACAO');
prova = selectProva.options[selectProva.selectedIndex].text;
console.log(prova);
dataStudents += prova


console.log(" ");

let selectDisciplina = document.getElementById('select3lw7fc885326DADOS.VL_FILTRO_DISCIPLINA');
disciplina = selectDisciplina.options[selectDisciplina.selectedIndex].text;
console.log(disciplina);
dataStudents += disciplina


// Array.from($$("body select *")).forEach((el) => {
    

//     if (el.length != 0 && el != undefined) {
//         turma = el.value
//         if (true)
//             console.log(el);
//     }

// });

//Bloco para exportar o arquivo
let blob = new Blob([dataStudents]);
let url = URL.createObjectURL(blob);
let file = document.createElement(`a`);
file.download = `file.json`;
file.href = url;
document.body.appendChild(file);
file.click();
file.remove();
URL.revokeObjectURL(url);


console.log(updateTime);