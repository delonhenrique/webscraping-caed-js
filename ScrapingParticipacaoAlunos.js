let updateTime
let dataStudents
let turma
let prova
let disciplina

function getCombo(id, jsonAtrib) {
    let combo = document.getElementById(id);
    let dataComboSelected = combo.options[combo.selectedIndex].text;
    console.log(JSON.stringify(jsonAtrib) + ": " + JSON.stringify(dataComboSelected));
    return dataComboSelected
}

prova = getCombo('selectnn74f9d641c4DADOS.VL_FILTRO_AVALIACAO', 'Avaliacao')

console.log(" ");

disciplina = getCombo('select3lw7fc885326DADOS.VL_FILTRO_DISCIPLINA', 'Disciplina')

console.log(" ");

turma = getCombo('selecty0fuc3bed07cDADOS.VL_FILTRO_ETAPA', 'AnoSerie')

console.log(" ");

Array.from($$("body table tr *")).forEach((el) => {
    el = String(el.innerHTML)
    dataStudents += el;

    if (el.indexOf('Atualizado') === 0) {
        updateTime = el
    } else if (el.length != 0 && el != undefined) {
        console.log(el);
    }

});
console.log(updateTime);

console.log(JSON.stringify({prova: prova, disciplina: disciplina, turma: turma}))

//Bloco para exportar o arquivo
// let blob = new Blob([dataStudents]);
// let url = URL.createObjectURL(blob);
// let file = document.createElement(`a`);
// file.download = `file.json`;
// file.href = url;
// document.body.appendChild(file);
// file.click();
// file.remove();
// URL.revokeObjectURL(url);


