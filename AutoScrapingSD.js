// Include the chrome driver
require("chromedriver");

var prompt = require('prompt-sync')();

const $ = require('cheerio');

const sleep = (ms) =>
    require("child_process")
        .execSync(`"${process.argv[0]}" -e setTimeout(function(){},${ms})`);

function getByid(id) {
    let promiseElement =
        tab.findElement(swd.By.id(id));
    return promiseElement;
}

function getByText(text) {
    let promiseText = tab.findElement(
        swd.By.linkText(text));
    return promiseText;
}

function fillElement(content, field) {
    let promiseFill =
        field.sendKeys(content);
    return promiseFill;
}

// Include selenium webdriver
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

// Get the credentials from the JSON file
let { username, pass } = require("./credentials.json");

// Step 1 - Opening the SED sign in page
let tabToOpen =
    tab.get("https://sed.educacao.sp.gov.br/");
tabToOpen
    .then(function () {

        // Timeout to wait if connection is slow
        let findTimeOutP =
            tab.manage().setTimeouts({
                implicit: 10000, // 10 seconds
            });
        return findTimeOutP;
    })
    .then(function () {

        // // Step 2 - Finding the username input
        return getByid("name");

    })
    .then(function (usernameBox) {

        // var username = prompt('Informe seu usuário:');

        // Step 3 - Entering the username
        return fillElement(username, usernameBox);

    })
    .then(function () {
        console.log(
            "Username entered successfully in" +
            "'login demonstration' for SED"
        );

        // Step 4 - Finding the password input
        return getByid("senha");

    })
    .then(function (passwordBox) {

        // var pass = prompt('Informe a senha:', {echo: '*'});

        // Step 5 - Entering the password
        return fillElement(pass, passwordBox);

    })
    .then(function () {
        console.log(
            "Password entered successfully in" +
            " 'login demonstration' for SED"
        );

        // Step 6 - Finding the Sign In button
        return getByid("botaoEntrar");

    })
    .then(function (signInBtn) {
        // Step 7 - Clicking the Sign In button
        let promiseClickSignIn = signInBtn.click();
        return promiseClickSignIn;
    })
    .then(function () {

        sleep(1000);

        // Step 7 - Finding the Profile button
        return getByText("PROATEC");
    })
    .then(function (profileBtn) {

        // Step 8 - Clicking the Sign In button
        let promiseClickProfile = profileBtn.click();
        return promiseClickProfile;
    })
    .then(function () {
        console.log("Successfully signed in SED!");

        sleep(1000);

        // Step 9 - Finding the Pedagógico Link button
        
        return getByText("Pedagógico");
    })
    .then(function (pedBtn) {

        // Step 10 - Clicking the Sign In button
        let promiseClickPedBtn = pedBtn.click();
        return promiseClickPedBtn;
    })
    .then(function () {

        sleep(1000);

        // Step 11 - Finding the Pedagógico Link button
        return getByText("Plataforma CAEd");
    })
    .then(function (caedBtn) {

        // Step 12 - Clicking the Sign In button
        let promiseClickCaedBtn = caedBtn.click();
        return promiseClickCaedBtn;
    })
    .then(function () {

        sleep(5000);

        // Step 11 - Finding the Pedagógico Link button
        return getByid("CARD_MONITORAMENTO_ESTUDANTES");

    })
    .then(function (monitoramentoBtn) {

        // Step 12 - Clicking the Sign In button
        let promiseClickMonitoramentoBtn = monitoramentoBtn.click();
        return promiseClickMonitoramentoBtn;
    })
    .then(function () {

        sleep(1000);

        // Step 13 - Finding the Pedagógico Link button
        return getByid("BTN_MENU_PAGINA_CADERNO_DE_ATIVIDADES_MONITORAMENTO_RESULTADO");

    })
    .then(function (partBtn) {

        // Step 14 - Clicking the Sign In button
        let promiseClickPartBtn = partBtn.click();
        return promiseClickPartBtn;
    })
    .then(function () {

        sleep(1000);

        // Step 13 - Finding the Pedagógico Link button
        return getByid("selecty0fuc3bed07cDADOS.VL_FILTRO_ETAPA");

    })
    .then(function (dropdown) {

        // Step 14 - Clicking the Sign In button
        return dropdown.findElement(swd.By.xpath("//option[. = '8° ANO EF']")).click();

    })
    .then(function () {

        sleep(1000);

        // Step 13 - Finding the Pedagógico Link button

        console.log($.html().length);

        console.log($.html());
        
        return "";

    })
    .then(function (el) {

        // Step 14 - Clicking the Sign In button
        return console.log("\n"+el+"\n");

    })
    .then(function () {
        console.log("Terminou com sucesso!");
    })
    .catch(function (err) {
        console.log("Error ", err, " occurred!");
    });