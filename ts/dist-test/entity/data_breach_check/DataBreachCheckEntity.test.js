"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('DataBreachCheckEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CheckEMailOrUsernameForADataBreachSDK.test();
        const ent = testsdk.DataBreachCheck();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'data_breach_check.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "date": { "a": true, "h": "Date", "n": "date", "r": true, "sh": "Date of the breach in YYYY-MM format", "t": "`$STRING`", "key$": "date", "index$": 0 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Name of the breached service or database", "t": "`$STRING`", "key$": "name", "index$": 1 } }, "name": "data_breach_check", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /public", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "example@example.com", "k": "query", "n": "check", "or": "check", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/public", "q": { "exist": ["check"] }, "r": {}, "s": [{ "lit": "public" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "data_breach_check", "name__orig": "data_breach_check", "Name": "DataBreachCheck", "name_": "data_breach_check", "name-": "data-breach-check", "NAME": "DATA_BREACH_CHECK", "index$": 0 }, { "active": true, "entity": "data_breach_check", "key$": "BasicDataBreachCheckFlow", "kind": "basic", "name": "BasicDataBreachCheckFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "data_breach_check_ref01" } }], "index$": 0 }] }, 'DataBreachCheck', { "GET /public": { "protocol": "http", "operationId": "checkDataBreach", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "description": "Indicates whether the request was successful", "key$": "success", "type": "boolean" }, "found": { "description": "Number of data breaches found containing the searched credential", "key$": "found", "minimum": 0, "type": "integer" }, "fields": { "description": "List of data fields that were compromised in the breaches", "items": { "type": "string" }, "key$": "fields", "type": "array" }, "sources": { "description": "List of data breach sources where the credential was found", "items": { "properties": { "date": { "description": "Date of the breach in YYYY-MM format", "pattern": "^\\d{4}-\\d{2}$", "type": "string", "key$": "date" }, "name": { "description": "Name of the breached service or database", "type": "string", "key$": "name" } }, "required": ["name", "date"], "type": "object", "index$": 0 }, "key$": "sources", "type": "array" } }, "required": ["success", "found"] }, "examples": { "foundBreaches": { "summary": "Credential found in breaches", "value": { "success": true, "found": 3, "fields": ["username", "first_name", "address"], "sources": [{ "name": "Evony.com", "date": "2016-07" }, { "name": "I-Dressup.com", "date": "2016-08" }, { "name": "Zynga.com", "date": "2019-09" }] } }, "noBreaches": { "summary": "No breaches found", "value": { "success": true, "found": 0, "fields": [], "sources": [] } } } } } }, "400": { "description": "Bad request - invalid input format", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message describing what went wrong" } } } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" } } } } } } }, "parameters": [{ "name": "check", "in": "query", "description": "The value to check for data breaches. Can be:\n- Email address (e.g., example@example.com)\n- Username (minimum 3 characters)\n- Email hash (SHA256, truncated to 24 characters, e.g., 31c5543c1734d25c7206f5fd)", "required": true, "schema": { "type": "string", "minLength": 3, "examples": ["example@example.com", "31c5543c1734d25c7206f5fd", "username123"] }, "example": "example@example.com", "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let data_breach_check_ref01_data = Object.values(setup.data.existing.data_breach_check)[0];
        // LIST
        const data_breach_check_ref01_ent = client.DataBreachCheck();
        const data_breach_check_ref01_match = {};
        const data_breach_check_ref01_list = (await data_breach_check_ref01_ent.list(data_breach_check_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/data_breach_check/DataBreachCheckTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CheckEMailOrUsernameForADataBreachSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['data_breach_check01', 'data_breach_check02', 'data_breach_check03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_DATA_BREACH_CHECK_ENTID': idmap,
        'CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_LIVE': 'FALSE',
        'CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_DATA_BREACH_CHECK_ENTID'];
    const live = 'TRUE' === env.CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_DATA_BREACH_CHECK_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CheckEMailOrUsernameForADataBreachSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CHECK_E_MAIL_OR_USERNAME_FOR_A_DATA_BREACH_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=DataBreachCheckEntity.test.js.map