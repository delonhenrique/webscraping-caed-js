const timeElapsed = Date.now();
const today = new Date(timeElapsed);

let updateTime;
let dataStudents = "";
let anoSerie;
let turma;
let prova;
let disciplina;

class AlunoProva {
    constructor(nome, Status, anoSerie, turma, prova, disciplina, modalidadeEnsino, data) {
        this.nome = nome;
        this.Status = Status;
        this.anoSerie = anoSerie;
        this.turma = turma;
        this.prova = prova;
        this.disciplina = disciplina;
        this.modalidadeEnsino = modalidadeEnsino;
        this.data = data;
    }
}

var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        blob = new Blob([data], { type: "ext/csv;charset=utf-8;" }),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());

const atualState = "Finalizado - Digital, Não iniciado, Em progresso - Digital"

function getTurma() {

    let Turma = prompt("Informe a letra da turma atual", "A");
    while (Turma == null || Turma == "") {
        alert("Truma inválida! Por favor, informe uma turma válida.");
        Turma = prompt("Informe a letra da turma atual", "A");
    }
    return Turma;
}
turma = getTurma();

function getCombo(id) {
    let combo = document.getElementById(id);
    let dataComboSelected = combo.options[combo.selectedIndex].text;
    return dataComboSelected;
}

String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

let aluno = new AlunoProva()



function dataMount(data) {
    if (data !== "ESTUDANTE" && data !== "PARTICIPAÇÃO")
        if (!atualState.includes(data)) {

            // console.log(`"${(data + prova + disciplina).hashCode()}":`);
            // dataStudents += `"${(data + prova + disciplina).hashCode()}":\n`;

            // console.log("{");
            // console.log(`"Nome": "${data}"`);
            aluno.nome = data;
            dataStudents += data + ",";
        }
        else {
            // console.log(`"Status": "${data}"`);
            aluno.Status = data;
            dataStudents += data + ",";

            // console.log(`"AnoSerie": "${anoSerie}"`);
            aluno.anoSerie = anoSerie;
            dataStudents += anoSerie + ","
            // console.log(`"Turma": "${turma}"`);
            aluno.turma = turma;
            dataStudents += turma + ","
            // console.log(`"Prova": "${prova}"`);
            aluno.prova = prova;
            dataStudents += prova + ","
            // console.log(`"Dsciplina": "${disciplina}"`);
            aluno.disciplina = disciplina;
            dataStudents += disciplina + ","

            if (turma.includes("EF")) {
                // console.log(`"ModalidadeEnsino": "Fundamental"`);
                aluno.modalidadeEnsino = "Fundamental";
                dataStudents += "Fundamental,"
            }
            else {
                // console.log(`"ModalidadeEnsino": "Médio"`);
                aluno.modalidadeEnsino = "Médio";
                dataStudents += "Médio,"

            }

            // console.log(`"Data": "${today.toLocaleDateString()}"`);
            aluno.data = today.toLocaleDateString();
            dataStudents += today.toLocaleDateString() + "\n"
            // console.log(JSON.stringify(aluno));
            // console.log(aluno);
            // dataStudents += (aluno);
            // dataStudents += ",\n";
            // console.log("},")
        }
}

prova = getCombo('selectnn74f9d641c4DADOS.VL_FILTRO_AVALIACAO')
disciplina = getCombo('select3lw7fc885326DADOS.VL_FILTRO_DISCIPLINA')
anoSerie = getCombo('selecty0fuc3bed07cDADOS.VL_FILTRO_ETAPA')

Array.from($$("body table tr *")).forEach((el) => {
    el = String(el.innerHTML)

    if (el.indexOf('Atualizado') === 0) {
        updateTime = el;
        // console.log("{")
        // dataStudents += "{\n";
        // console.log(`"Update": "${updateTime}",`);
        // dataStudents += `"Update": "${updateTime}",\n`;
    } else if (el.length != 0 && el != undefined) {
        dataMount(el);
    }

});

fileName = `${anoSerie} - ${turma} - ${prova} - ${disciplina}"${JSON.stringify(today).hashCode()}".csv`

saveData(dataStudents, fileName);