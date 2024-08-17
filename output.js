//Sat Aug 17 2024 19:38:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  getCookies,
  getUserInfoWithX,
  validateCarmeWithType,
  commonNativeRequest,
  wait
} = require("./common.js");
const _0x40a400 = 6;
const _0x2c1095 = process.env.ELE_CARME;
function _0x1a8297(_0x15b570) {
  return Object.values(_0x15b570).length === 0;
}
async function _0x50cf6c(_0x23965f) {
  try {
    const _0x48458f = await commonNativeRequest(_0x23965f, "mtop.koubei.interactioncenter.platform.right.lottery", _0x40a400, 2, "", "mtop.ele.me", process.env.x5sec);
    if (_0x1a8297(_0x48458f.data.data)) {
      console.log(_0x48458f.ret[0]);
    } else {
      if (_0x48458f.data.data.errorMsg) {
        console.log(_0x48458f.data.data.errorMsg);
      } else {
        let _0x5906ef = _0x48458f.data.data.sendRightList[0];
        const _0x5b8f23 = _0x5906ef.materialInfo.description + _0x5906ef.materialInfo.title;
        console.log(_0x5b8f23);
      }
    }
  } catch (_0x429fad) {
    console.log(_0x429fad);
  }
}
async function _0x25caf9(_0x454043) {
  const _0x14ae47 = new Date().getTime();
  const _0x28c746 = {
    time: _0x14ae47
  };
  const _0x334013 = await commonNativeRequest(_0x454043, "mtop.koubei.interactioncenter.sign.component.recordsignin", _0x40a400, 1, _0x28c746);
  if (_0x334013.data.errorMsg) {
    console.log(_0x334013.data.errorMsg);
  } else {
    console.log("签到成功");
  }
}
async function _0x43ec9e(_0x5c2b77) {
  const _0x34a7da = await _0x37e080(_0x5c2b77, 3);
  return _0x34a7da.data.token;
}
async function _0x4daa5f(_0x5a4d46, _0x21043d) {
  const _0x42f1f3 = {
    token: _0x21043d
  };
  const _0x1fdd69 = await _0x37e080(_0x5a4d46, 4, _0x42f1f3);
  if (_0x1fdd69.bizErrorMsg !== "success") {
    console.log(_0x1fdd69.bizErrorMsg);
    return null;
  }
  return _0x1fdd69.data.gameCode;
}
async function _0x351e2f(_0x32144b, _0x5aa18e, _0x113ba4) {
  const _0x4d6177 = {
    gameCode: _0x5aa18e,
    token: _0x113ba4
  };
  const _0x4c8b73 = await _0x37e080(_0x32144b, 5, _0x4d6177);
  if (_0x4c8b73.bizErrorMsg !== "success") {
    console.log(_0x4c8b73.bizErrorMsg);
    return null;
  }
  return _0x4c8b73.data.lastLevelId;
}
async function _0x37e080(_0x73076e, _0x3d4d79, _0x4d1b38) {
  try {
    const _0x3711f2 = await commonNativeRequest(_0x73076e, "mtop.alsc.playgame.mini.game.dispatch", _0x40a400, _0x3d4d79, _0x4d1b38);
    if (_0x3711f2) {
      return JSON.parse(_0x3711f2.data.data);
    }
  } catch (_0x16063f) {
    console.log(_0x16063f);
  }
  return null;
}
async function _0x46cd6b(_0x4ca6bf, _0x372e67) {
  const _0xc4e35d = await _0x4daa5f(_0x4ca6bf, _0x372e67);
  if (_0xc4e35d) {
    const _0x1ea05f = await _0x351e2f(_0x4ca6bf, _0xc4e35d, _0x372e67);
    if (_0x1ea05f !== 3) {
      await _0x46cd6b(_0x4ca6bf, _0x372e67);
    }
  }
}
async function _0x6925c6(_0x104f50) {
  return await _0x37e080(_0x104f50, 6);
}
async function _0x54e7fb(_0x3d7a56) {
  return await _0x37e080(_0x3d7a56, 7);
}
async function _0x4ea8f2(_0x3686eb, _0x3c02ca) {
  const _0x5483ea = {
    num: _0x3c02ca
  };
  return await _0x37e080(_0x3686eb, 8, _0x5483ea);
}
async function _0x9a84ed(_0x2b6174) {
  const _0x2faffc = await _0x6925c6(_0x2b6174);
  const _0x3888b9 = _0x2faffc.passConf;
  const _0x471750 = [];
  for (let _0x5dda9b of Object.values(_0x3888b9)) {
    _0x471750.push(_0x5dda9b.passNum);
  }
  var _0x4ce84e = await _0x54e7fb(_0x2b6174);
  var _0x164a63 = _0x4ce84e.info.todayPass;
  var _0x19b4da = 0;
  while (_0x164a63 <= _0x471750[_0x471750.length - 1]) {
    _0x4ce84e = await _0x54e7fb(_0x2b6174);
    _0x164a63 = _0x4ce84e.info.todayPass;
    console.log("欢乐倒水第" + _0x164a63 + "关闯关成功");
    if (_0x471750.includes(_0x164a63)) {
      _0x19b4da = _0x471750.indexOf(_0x164a63) + 1;
      const _0x28d185 = await _0x4ea8f2(_0x2b6174, _0x19b4da);
      console.log("获得：" + _0x28d185.goldnum + "乐园币");
    }
  }
  console.log("快乐倒水闯关完成");
}
async function _0x18038f() {
  await validateCarmeWithType(_0x2c1095, 1);
  const _0x46dbd4 = getCookies();
  for (let _0x46d9fe = 0; _0x46d9fe < _0x46dbd4.length; _0x46d9fe++) {
    const _0x59e6fa = _0x46dbd4[_0x46d9fe];
    try {
      let _0x2ee1b7 = await getUserInfoWithX(_0x59e6fa);
      if (_0x2ee1b7 && _0x2ee1b7[0]) {
        console.log("第", _0x46d9fe + 1, "账号失效！请重新登录！！！😭");
        continue;
      }
      if (!_0x2ee1b7 || !_0x2ee1b7.userName) {
        continue;
      }
      const _0x450dbf = _0x2ee1b7.localId;
      let _0xbba3cf = _0x2ee1b7.encryptMobile;
      console.log("\n****** #" + (_0x46d9fe + 1), _0xbba3cf, "*********");
      console.log("账号的 id 为", _0x450dbf);
      await _0x25caf9(_0x59e6fa);
      await _0x50cf6c(_0x59e6fa);
      const _0x1089f0 = await _0x43ec9e(_0x59e6fa);
      await _0x46cd6b(_0x59e6fa, _0x1089f0);
      await _0x9a84ed(_0x59e6fa);
      console.log("防止黑号延时1-3秒");
      await wait(_0x269de1(1, 3));
    } catch (_0x1581b8) {
      console.log(_0x1581b8);
    }
  }
  process.exit(0);
}
_0x18038f();
function _0x269de1(_0x26a559, _0x2922c0) {
  return Math.floor(Math.random() * (_0x2922c0 - _0x26a559 + 1) + _0x26a559);
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}