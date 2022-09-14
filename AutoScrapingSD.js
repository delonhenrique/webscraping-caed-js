// Include the chrome driver
require("chromedriver");

const { execSync } = require('child_process');

function getByid(id) {
    let promiseElement =
        tab.findElement(swd.By.id(id));
    return promiseElement;
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

        execSync('sleep 1');

        // Step 7 - Finding the Profile button
        let promiseProfileBtn = tab.findElement(
            swd.By.linkText("PROATEC")
        );
        return promiseProfileBtn;
    })
    .then(function (profileBtn) {

        // Step 8 - Clicking the Sign In button
        let promiseClickProfile = profileBtn.click();
        return promiseClickProfile;
    })
    .then(function () {
        console.log("Successfully signed in SED!");

        execSync('sleep 1');

        // Step 9 - Finding the Pedagógico Link button
        let promisePedBtn = tab.findElement(
            swd.By.linkText("Pedagógico")
        );
        return promisePedBtn;
    })
    .then(function (pedBtn) {

        // Step 10 - Clicking the Sign In button
        let promiseClickPedBtn = pedBtn.click();
        return promiseClickPedBtn;
    })
    .then(function () {

        execSync('sleep 1');

        // Step 11 - Finding the Pedagógico Link button
        let promiseCaedBtn = tab.findElement(
            swd.By.linkText("Plataforma CAEd")
        );
        return promiseCaedBtn;
    })
    .then(function (caedBtn) {

        // Step 12 - Clicking the Sign In button
        let promiseClickCaedBtn = caedBtn.click();
        return promiseClickCaedBtn;
    })
    .then(function () {
       
        execSync('sleep 5');

        // Step 11 - Finding the Pedagógico Link button
        return getByid("CARD_MONITORAMENTO_ESTUDANTES");

    })
    .then(function (monitoramentoBtn) {

        // Step 12 - Clicking the Sign In button
        let promiseClickMonitoramentoBtn = monitoramentoBtn.click();
        return promiseClickMonitoramentoBtn;
    })
    .then(function () {

        execSync('sleep 1');

        // Step 13 - Finding the Pedagógico Link button
        return getByid("BTN_MENU_PAGINA_CADERNO_DE_ATIVIDADES_MONITORAMENTO_RESULTADO");

    })
    .then(function (partBtn) {

        // Step 14 - Clicking the Sign In button
        let promiseClickPartBtn = partBtn.click();
        return promiseClickPartBtn;
    })
    .then(function () {
        console.log("Terminou com sucesso!");
    })
    .catch(function (err) {
        console.log("Error ", err, " occurred!");
    });