function log_phones(msg, phones) {
    let logs = document.getElementById("cscsca-logs");
    let log = document.createElement("p");
    log.innerText = `${msg}:\n${phones}`;
    logs.appendChild(log);
}