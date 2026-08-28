import { apply_rules } from "./pkg/cscsca";

let logs = [];

function log_phones(msg, phones) {
    logs.push({ "msg": msg, "phones": phones });
}

function log_clear() {
    logs = [];
}