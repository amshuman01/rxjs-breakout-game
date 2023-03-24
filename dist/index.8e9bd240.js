// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6AjTz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "78fcd0ac8e9bd240";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1jwFz":[function(require,module,exports) {
var _rxjs = require("rxjs");
var _operators = require("rxjs/operators");
var _htmlRenderer = require("./html-renderer");
const gamePipe = (x, y)=>({
        x,
        y,
        checked: false
    });
const gameSize = 10;
const createPipes = (y)=>((random)=>Array.from(Array(gameSize).keys()).map((e)=>gamePipe(e, y)).filter((e)=>e.x < random || e.x > random + 2))(Math.floor(Math.random() * Math.floor(gameSize)));
const gamePipes$ = (0, _rxjs.interval)(500).pipe((0, _operators.scan)((acc)=>(acc.length < 2 ? [
        ...acc,
        createPipes(gameSize)
    ] : acc).filter((c)=>c.some((e)=>e.y > 0)).map((cols)=>cols.map((e)=>gamePipe(e.x, e.y - 1))), [
    createPipes(gameSize / 2),
    createPipes(gameSize)
]));
const fly = (xPos)=>xPos > 0 ? xPos -= 1 : xPos;
const fall = (xPos)=>xPos < gameSize - 1 ? xPos += 1 : gameSize - 1;
const bird$ = (0, _rxjs.merge)((0, _rxjs.interval)(300), (0, _rxjs.fromEvent)(document, "keydown")).pipe((0, _operators.scan)((xPos, curr)=>curr instanceof KeyboardEvent ? fly(xPos) : fall(xPos), gameSize - 1));
const updateGame = (bird, pipes)=>((game)=>(pipes.forEach((col)=>col.forEach((v)=>game[v.x][v.y] = 2)), game[bird][0] = 1, game))(Array(gameSize).fill(0).map((e)=>Array(gameSize).fill(0)));
const valueOnCollisionFor = (pipes)=>({
        when: (predicate)=>!pipes[0][0].checked && predicate ? (pipes[0][0].checked = true, 1) : 0
    });
(0, _rxjs.combineLatest)(bird$, gamePipes$).pipe((0, _operators.scan)((state, [bird, pipes])=>({
        bird: bird,
        pipes: pipes,
        lives: state.lives - valueOnCollisionFor(pipes).when(pipes.some((c)=>c.some((c)=>c.y === 0 && c.x === bird))),
        score: state.score + valueOnCollisionFor(pipes).when(pipes[0][0].y === 0)
    }), {
    lives: 3,
    score: 0,
    bird: 0,
    pipes: []
}), (0, _operators.tap)((state)=>(0, _htmlRenderer.paint)(updateGame(state.bird, state.pipes), state.lives, state.score)), (0, _operators.takeWhile)((state)=>state.lives > 0)).subscribe();

},{"rxjs":"6zoQ7","rxjs/operators":"h5Xn7","./html-renderer":"7gpxq"}],"6zoQ7":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observable", ()=>(0, _observable.Observable));
parcelHelpers.export(exports, "ConnectableObservable", ()=>(0, _connectableObservable.ConnectableObservable));
parcelHelpers.export(exports, "GroupedObservable", ()=>(0, _groupBy.GroupedObservable));
parcelHelpers.export(exports, "observable", ()=>(0, _observable1.observable));
parcelHelpers.export(exports, "Subject", ()=>(0, _subject.Subject));
parcelHelpers.export(exports, "BehaviorSubject", ()=>(0, _behaviorSubject.BehaviorSubject));
parcelHelpers.export(exports, "ReplaySubject", ()=>(0, _replaySubject.ReplaySubject));
parcelHelpers.export(exports, "AsyncSubject", ()=>(0, _asyncSubject.AsyncSubject));
parcelHelpers.export(exports, "asap", ()=>(0, _asap.asap));
parcelHelpers.export(exports, "asapScheduler", ()=>(0, _asap.asapScheduler));
parcelHelpers.export(exports, "async", ()=>(0, _async.async));
parcelHelpers.export(exports, "asyncScheduler", ()=>(0, _async.asyncScheduler));
parcelHelpers.export(exports, "queue", ()=>(0, _queue.queue));
parcelHelpers.export(exports, "queueScheduler", ()=>(0, _queue.queueScheduler));
parcelHelpers.export(exports, "animationFrame", ()=>(0, _animationFrame.animationFrame));
parcelHelpers.export(exports, "animationFrameScheduler", ()=>(0, _animationFrame.animationFrameScheduler));
parcelHelpers.export(exports, "VirtualTimeScheduler", ()=>(0, _virtualTimeScheduler.VirtualTimeScheduler));
parcelHelpers.export(exports, "VirtualAction", ()=>(0, _virtualTimeScheduler.VirtualAction));
parcelHelpers.export(exports, "Scheduler", ()=>(0, _scheduler.Scheduler));
parcelHelpers.export(exports, "Subscription", ()=>(0, _subscription.Subscription));
parcelHelpers.export(exports, "Subscriber", ()=>(0, _subscriber.Subscriber));
parcelHelpers.export(exports, "Notification", ()=>(0, _notification.Notification));
parcelHelpers.export(exports, "NotificationKind", ()=>(0, _notification.NotificationKind));
parcelHelpers.export(exports, "pipe", ()=>(0, _pipe.pipe));
parcelHelpers.export(exports, "noop", ()=>(0, _noop.noop));
parcelHelpers.export(exports, "identity", ()=>(0, _identity.identity));
parcelHelpers.export(exports, "isObservable", ()=>(0, _isObservable.isObservable));
parcelHelpers.export(exports, "ArgumentOutOfRangeError", ()=>(0, _argumentOutOfRangeError.ArgumentOutOfRangeError));
parcelHelpers.export(exports, "EmptyError", ()=>(0, _emptyError.EmptyError));
parcelHelpers.export(exports, "ObjectUnsubscribedError", ()=>(0, _objectUnsubscribedError.ObjectUnsubscribedError));
parcelHelpers.export(exports, "UnsubscriptionError", ()=>(0, _unsubscriptionError.UnsubscriptionError));
parcelHelpers.export(exports, "TimeoutError", ()=>(0, _timeoutError.TimeoutError));
parcelHelpers.export(exports, "bindCallback", ()=>(0, _bindCallback.bindCallback));
parcelHelpers.export(exports, "bindNodeCallback", ()=>(0, _bindNodeCallback.bindNodeCallback));
parcelHelpers.export(exports, "combineLatest", ()=>(0, _combineLatest.combineLatest));
parcelHelpers.export(exports, "concat", ()=>(0, _concat.concat));
parcelHelpers.export(exports, "defer", ()=>(0, _defer.defer));
parcelHelpers.export(exports, "empty", ()=>(0, _empty.empty));
parcelHelpers.export(exports, "forkJoin", ()=>(0, _forkJoin.forkJoin));
parcelHelpers.export(exports, "from", ()=>(0, _from.from));
parcelHelpers.export(exports, "fromEvent", ()=>(0, _fromEvent.fromEvent));
parcelHelpers.export(exports, "fromEventPattern", ()=>(0, _fromEventPattern.fromEventPattern));
parcelHelpers.export(exports, "generate", ()=>(0, _generate.generate));
parcelHelpers.export(exports, "iif", ()=>(0, _iif.iif));
parcelHelpers.export(exports, "interval", ()=>(0, _interval.interval));
parcelHelpers.export(exports, "merge", ()=>(0, _merge.merge));
parcelHelpers.export(exports, "never", ()=>(0, _never.never));
parcelHelpers.export(exports, "of", ()=>(0, _of.of));
parcelHelpers.export(exports, "onErrorResumeNext", ()=>(0, _onErrorResumeNext.onErrorResumeNext));
parcelHelpers.export(exports, "pairs", ()=>(0, _pairs.pairs));
parcelHelpers.export(exports, "partition", ()=>(0, _partition.partition));
parcelHelpers.export(exports, "race", ()=>(0, _race.race));
parcelHelpers.export(exports, "range", ()=>(0, _range.range));
parcelHelpers.export(exports, "throwError", ()=>(0, _throwError.throwError));
parcelHelpers.export(exports, "timer", ()=>(0, _timer.timer));
parcelHelpers.export(exports, "using", ()=>(0, _using.using));
parcelHelpers.export(exports, "zip", ()=>(0, _zip.zip));
parcelHelpers.export(exports, "scheduled", ()=>(0, _scheduled.scheduled));
parcelHelpers.export(exports, "EMPTY", ()=>(0, _empty.EMPTY));
parcelHelpers.export(exports, "NEVER", ()=>(0, _never.NEVER));
parcelHelpers.export(exports, "config", ()=>(0, _config.config));
var _observable = require("./internal/Observable");
var _connectableObservable = require("./internal/observable/ConnectableObservable");
var _groupBy = require("./internal/operators/groupBy");
var _observable1 = require("./internal/symbol/observable");
var _subject = require("./internal/Subject");
var _behaviorSubject = require("./internal/BehaviorSubject");
var _replaySubject = require("./internal/ReplaySubject");
var _asyncSubject = require("./internal/AsyncSubject");
var _asap = require("./internal/scheduler/asap");
var _async = require("./internal/scheduler/async");
var _queue = require("./internal/scheduler/queue");
var _animationFrame = require("./internal/scheduler/animationFrame");
var _virtualTimeScheduler = require("./internal/scheduler/VirtualTimeScheduler");
var _scheduler = require("./internal/Scheduler");
var _subscription = require("./internal/Subscription");
var _subscriber = require("./internal/Subscriber");
var _notification = require("./internal/Notification");
var _pipe = require("./internal/util/pipe");
var _noop = require("./internal/util/noop");
var _identity = require("./internal/util/identity");
var _isObservable = require("./internal/util/isObservable");
var _argumentOutOfRangeError = require("./internal/util/ArgumentOutOfRangeError");
var _emptyError = require("./internal/util/EmptyError");
var _objectUnsubscribedError = require("./internal/util/ObjectUnsubscribedError");
var _unsubscriptionError = require("./internal/util/UnsubscriptionError");
var _timeoutError = require("./internal/util/TimeoutError");
var _bindCallback = require("./internal/observable/bindCallback");
var _bindNodeCallback = require("./internal/observable/bindNodeCallback");
var _combineLatest = require("./internal/observable/combineLatest");
var _concat = require("./internal/observable/concat");
var _defer = require("./internal/observable/defer");
var _empty = require("./internal/observable/empty");
var _forkJoin = require("./internal/observable/forkJoin");
var _from = require("./internal/observable/from");
var _fromEvent = require("./internal/observable/fromEvent");
var _fromEventPattern = require("./internal/observable/fromEventPattern");
var _generate = require("./internal/observable/generate");
var _iif = require("./internal/observable/iif");
var _interval = require("./internal/observable/interval");
var _merge = require("./internal/observable/merge");
var _never = require("./internal/observable/never");
var _of = require("./internal/observable/of");
var _onErrorResumeNext = require("./internal/observable/onErrorResumeNext");
var _pairs = require("./internal/observable/pairs");
var _partition = require("./internal/observable/partition");
var _race = require("./internal/observable/race");
var _range = require("./internal/observable/range");
var _throwError = require("./internal/observable/throwError");
var _timer = require("./internal/observable/timer");
var _using = require("./internal/observable/using");
var _zip = require("./internal/observable/zip");
var _scheduled = require("./internal/scheduled/scheduled");
var _config = require("./internal/config");

},{"./internal/Observable":"jfynZ","./internal/observable/ConnectableObservable":false,"./internal/operators/groupBy":false,"./internal/symbol/observable":"6YJAq","./internal/Subject":false,"./internal/BehaviorSubject":false,"./internal/ReplaySubject":false,"./internal/AsyncSubject":false,"./internal/scheduler/asap":false,"./internal/scheduler/async":"fLneT","./internal/scheduler/queue":false,"./internal/scheduler/animationFrame":false,"./internal/scheduler/VirtualTimeScheduler":false,"./internal/Scheduler":"3oTyf","./internal/Subscription":"6K2jD","./internal/Subscriber":"kpS17","./internal/Notification":false,"./internal/util/pipe":"35htl","./internal/util/noop":"4PFes","./internal/util/identity":"gxakv","./internal/util/isObservable":false,"./internal/util/ArgumentOutOfRangeError":false,"./internal/util/EmptyError":false,"./internal/util/ObjectUnsubscribedError":false,"./internal/util/UnsubscriptionError":"cAnDM","./internal/util/TimeoutError":false,"./internal/observable/bindCallback":false,"./internal/observable/bindNodeCallback":false,"./internal/observable/combineLatest":"16wHx","./internal/observable/concat":false,"./internal/observable/defer":false,"./internal/observable/empty":false,"./internal/observable/forkJoin":false,"./internal/observable/from":"8eI7u","./internal/observable/fromEvent":"eiXJM","./internal/observable/fromEventPattern":false,"./internal/observable/generate":false,"./internal/observable/iif":false,"./internal/observable/interval":"9DiSm","./internal/observable/merge":"hZiON","./internal/observable/never":false,"./internal/observable/of":false,"./internal/observable/onErrorResumeNext":false,"./internal/observable/pairs":false,"./internal/observable/partition":false,"./internal/observable/race":false,"./internal/observable/range":false,"./internal/observable/throwError":false,"./internal/observable/timer":false,"./internal/observable/using":false,"./internal/observable/zip":false,"./internal/scheduled/scheduled":"95k2n","./internal/config":"f9d8E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jfynZ":[function(require,module,exports) {
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observable", ()=>Observable);
var _canReportError = require("./util/canReportError");
var _toSubscriber = require("./util/toSubscriber");
var _observable = require("./symbol/observable");
var _pipe = require("./util/pipe");
var _config = require("./config");
var Observable = /*@__PURE__*/ function() {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) this._subscribe = subscribe;
    }
    Observable.prototype.lift = function(operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function(observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = (0, _toSubscriber.toSubscriber)(observerOrNext, error, complete);
        if (operator) sink.add(operator.call(sink, this.source));
        else sink.add(this.source || (0, _config.config).useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        if ((0, _config.config).useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function(sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            if ((0, _config.config).useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if ((0, _canReportError.canReportError)(sink)) sink.error(err);
            else console.warn(err);
        }
    };
    Observable.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function(value) {
                try {
                    next(value);
                } catch (err) {
                    reject(err);
                    if (subscription) subscription.unsubscribe();
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function(subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[0, _observable.observable] = function() {
        return this;
    };
    Observable.prototype.pipe = function() {
        var operations = [];
        for(var _i = 0; _i < arguments.length; _i++)operations[_i] = arguments[_i];
        if (operations.length === 0) return this;
        return (0, _pipe.pipeFromArray)(operations)(this);
    };
    Observable.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var value;
            _this.subscribe(function(x) {
                return value = x;
            }, function(err) {
                return reject(err);
            }, function() {
                return resolve(value);
            });
        });
    };
    Observable.create = function(subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}();
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) promiseCtor = (0, _config.config).Promise || Promise;
    if (!promiseCtor) throw new Error("no Promise impl found");
    return promiseCtor;
}

},{"./util/canReportError":"cF5fd","./util/toSubscriber":"eZHqn","./symbol/observable":"6YJAq","./util/pipe":"35htl","./config":"f9d8E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cF5fd":[function(require,module,exports) {
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canReportError", ()=>canReportError);
var _subscriber = require("../Subscriber");
function canReportError(observer) {
    while(observer){
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) return false;
        else if (destination && destination instanceof (0, _subscriber.Subscriber)) observer = destination;
        else observer = null;
    }
    return true;
}

},{"../Subscriber":"kpS17","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kpS17":[function(require,module,exports) {
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subscriber", ()=>Subscriber);
parcelHelpers.export(exports, "SafeSubscriber", ()=>SafeSubscriber);
var _tslib = require("tslib");
var _isFunction = require("./util/isFunction");
var _observer = require("./Observer");
var _subscription = require("./Subscription");
var _rxSubscriber = require("../internal/symbol/rxSubscriber");
var _config = require("./config");
var _hostReportError = require("./util/hostReportError");
var Subscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch(arguments.length){
            case 0:
                _this.destination = (0, _observer.empty);
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = (0, _observer.empty);
                    break;
                }
                if (typeof destinationOrNext === "object") {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    } else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[0, _rxSubscriber.rxSubscriber] = function() {
        return this;
    };
    Subscriber.create = function(next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function(value) {
        if (!this.isStopped) this._next(value);
    };
    Subscriber.prototype.error = function(err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function() {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function() {
        if (this.closed) return;
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function(value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function(err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function() {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function() {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}((0, _subscription.Subscription));
var SafeSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if ((0, _isFunction.isFunction)(observerOrNext)) next = observerOrNext;
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== (0, _observer.empty)) {
                context = Object.create(observerOrNext);
                if ((0, _isFunction.isFunction)(context.unsubscribe)) _this.add(context.unsubscribe.bind(context));
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function(value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!(0, _config.config).useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) this.__tryOrUnsub(this._next, value);
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) this.unsubscribe();
        }
    };
    SafeSubscriber.prototype.error = function(err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = (0, _config.config).useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                } else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            } else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) throw err;
                (0, _hostReportError.hostReportError)(err);
            } else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                } else (0, _hostReportError.hostReportError)(err);
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function() {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function() {
                    return _this._complete.call(_this._context);
                };
                if (!(0, _config.config).useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                } else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            } else this.unsubscribe();
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function(fn, value) {
        try {
            fn.call(this._context, value);
        } catch (err) {
            this.unsubscribe();
            if ((0, _config.config).useDeprecatedSynchronousErrorHandling) throw err;
            else (0, _hostReportError.hostReportError)(err);
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function(parent, fn, value) {
        if (!(0, _config.config).useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
        try {
            fn.call(this._context, value);
        } catch (err) {
            if ((0, _config.config).useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            } else {
                (0, _hostReportError.hostReportError)(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function() {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber);

},{"tslib":"j8TBX","./util/isFunction":"gyncl","./Observer":"1lzbH","./Subscription":"6K2jD","../internal/symbol/rxSubscriber":"kD4xv","./config":"f9d8E","./util/hostReportError":"jXrF8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j8TBX":[function(require,module,exports) {
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
parcelHelpers.export(exports, "__spread", ()=>__spread);
parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gyncl":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
function isFunction(x) {
    return typeof x === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1lzbH":[function(require,module,exports) {
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "empty", ()=>empty);
var _config = require("./config");
var _hostReportError = require("./util/hostReportError");
var empty = {
    closed: true,
    next: function(value) {},
    error: function(err) {
        if ((0, _config.config).useDeprecatedSynchronousErrorHandling) throw err;
        else (0, _hostReportError.hostReportError)(err);
    },
    complete: function() {}
};

},{"./config":"f9d8E","./util/hostReportError":"jXrF8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9d8E":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling (value){
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) /*@__PURE__*/ console.log("RxJS: Back to a better error behavior. Thank you. <3");
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling () {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXrF8":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hostReportError", ()=>hostReportError);
function hostReportError(err) {
    setTimeout(function() {
        throw err;
    }, 0);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6K2jD":[function(require,module,exports) {
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subscription", ()=>Subscription);
var _isArray = require("./util/isArray");
var _isObject = require("./util/isObject");
var _isFunction = require("./util/isFunction");
var _unsubscriptionError = require("./util/UnsubscriptionError");
var Subscription = /*@__PURE__*/ function() {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function() {
        var errors;
        if (this.closed) return;
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) _parentOrParents.remove(this);
        else if (_parentOrParents !== null) for(var index = 0; index < _parentOrParents.length; ++index){
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
        }
        if ((0, _isFunction.isFunction)(_unsubscribe)) {
            if (_ctorUnsubscribe) this._unsubscribe = undefined;
            try {
                _unsubscribe.call(this);
            } catch (e) {
                errors = e instanceof (0, _unsubscriptionError.UnsubscriptionError) ? flattenUnsubscriptionErrors(e.errors) : [
                    e
                ];
            }
        }
        if ((0, _isArray.isArray)(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while(++index < len){
                var sub = _subscriptions[index];
                if ((0, _isObject.isObject)(sub)) try {
                    sub.unsubscribe();
                } catch (e) {
                    errors = errors || [];
                    if (e instanceof (0, _unsubscriptionError.UnsubscriptionError)) errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                    else errors.push(e);
                }
            }
        }
        if (errors) throw new (0, _unsubscriptionError.UnsubscriptionError)(errors);
    };
    Subscription.prototype.add = function(teardown) {
        var subscription = teardown;
        if (!teardown) return Subscription.EMPTY;
        switch(typeof teardown){
            case "function":
                subscription = new Subscription(teardown);
            case "object":
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== "function") return subscription;
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                } else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [
                        tmp
                    ];
                }
                break;
            default:
                throw new Error("unrecognized teardown " + teardown + " added to Subscription.");
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) subscription._parentOrParents = this;
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) return subscription;
            subscription._parentOrParents = [
                _parentOrParents,
                this
            ];
        } else if (_parentOrParents.indexOf(this) === -1) _parentOrParents.push(this);
        else return subscription;
        var subscriptions = this._subscriptions;
        if (subscriptions === null) this._subscriptions = [
            subscription
        ];
        else subscriptions.push(subscription);
        return subscription;
    };
    Subscription.prototype.remove = function(subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) subscriptions.splice(subscriptionIndex, 1);
        }
    };
    Subscription.EMPTY = function(empty) {
        empty.closed = true;
        return empty;
    }(new Subscription());
    return Subscription;
}();
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function(errs, err) {
        return errs.concat(err instanceof (0, _unsubscriptionError.UnsubscriptionError) ? err.errors : err);
    }, []);
}

},{"./util/isArray":"8lyov","./util/isObject":"4BZjK","./util/isFunction":"gyncl","./util/UnsubscriptionError":"cAnDM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8lyov":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArray", ()=>isArray);
var isArray = /*@__PURE__*/ function() {
    return Array.isArray || function(x) {
        return x && typeof x.length === "number";
    };
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4BZjK":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObject", ()=>isObject);
function isObject(x) {
    return x !== null && typeof x === "object";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cAnDM":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnsubscriptionError", ()=>UnsubscriptionError);
var UnsubscriptionErrorImpl = /*@__PURE__*/ function() {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
            return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
}();
var UnsubscriptionError = UnsubscriptionErrorImpl;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kD4xv":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rxSubscriber", ()=>rxSubscriber);
parcelHelpers.export(exports, "$$rxSubscriber", ()=>$$rxSubscriber);
var rxSubscriber = /*@__PURE__*/ function() {
    return typeof Symbol === "function" ? /*@__PURE__*/ Symbol("rxSubscriber") : "@@rxSubscriber_" + /*@__PURE__*/ Math.random();
}();
var $$rxSubscriber = rxSubscriber;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZHqn":[function(require,module,exports) {
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toSubscriber", ()=>toSubscriber);
var _subscriber = require("../Subscriber");
var _rxSubscriber = require("../symbol/rxSubscriber");
var _observer = require("../Observer");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof (0, _subscriber.Subscriber)) return nextOrObserver;
        if (nextOrObserver[0, _rxSubscriber.rxSubscriber]) return nextOrObserver[0, _rxSubscriber.rxSubscriber]();
    }
    if (!nextOrObserver && !error && !complete) return new (0, _subscriber.Subscriber)((0, _observer.empty));
    return new (0, _subscriber.Subscriber)(nextOrObserver, error, complete);
}

},{"../Subscriber":"kpS17","../symbol/rxSubscriber":"kD4xv","../Observer":"1lzbH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6YJAq":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observable", ()=>observable);
var observable = /*@__PURE__*/ function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"35htl":[function(require,module,exports) {
/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pipe", ()=>pipe);
parcelHelpers.export(exports, "pipeFromArray", ()=>pipeFromArray);
var _identity = require("./identity");
function pipe() {
    var fns = [];
    for(var _i = 0; _i < arguments.length; _i++)fns[_i] = arguments[_i];
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) return 0, _identity.identity;
    if (fns.length === 1) return fns[0];
    return function piped(input) {
        return fns.reduce(function(prev, fn) {
            return fn(prev);
        }, input);
    };
}

},{"./identity":"gxakv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gxakv":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity);
function identity(x) {
    return x;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fLneT":[function(require,module,exports) {
/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "asyncScheduler", ()=>asyncScheduler);
parcelHelpers.export(exports, "async", ()=>async);
var _asyncAction = require("./AsyncAction");
var _asyncScheduler = require("./AsyncScheduler");
var asyncScheduler = /*@__PURE__*/ new (0, _asyncScheduler.AsyncScheduler)((0, _asyncAction.AsyncAction));
var async = asyncScheduler;

},{"./AsyncAction":"6gca2","./AsyncScheduler":"8eLwR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6gca2":[function(require,module,exports) {
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncAction", ()=>AsyncAction);
var _tslib = require("tslib");
var _action = require("./Action");
var AsyncAction = /*@__PURE__*/ function(_super) {
    _tslib.__extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (this.closed) return this;
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) this.id = this.recycleAsyncId(scheduler, id, delay);
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && this.delay === delay && this.pending === false) return id;
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function(state, delay) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) return error;
        else if (this.pending === false && this.id != null) this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    };
    AsyncAction.prototype._execute = function(state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        } catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function() {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) actions.splice(index, 1);
        if (id != null) this.id = this.recycleAsyncId(scheduler, id, null);
        this.delay = null;
    };
    return AsyncAction;
}((0, _action.Action));

},{"tslib":"j8TBX","./Action":"htZXH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"htZXH":[function(require,module,exports) {
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Action", ()=>Action);
var _tslib = require("tslib");
var _subscription = require("../Subscription");
var Action = /*@__PURE__*/ function(_super) {
    _tslib.__extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        return this;
    };
    return Action;
}((0, _subscription.Subscription));

},{"tslib":"j8TBX","../Subscription":"6K2jD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8eLwR":[function(require,module,exports) {
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncScheduler", ()=>AsyncScheduler);
var _tslib = require("tslib");
var _scheduler = require("../Scheduler");
var AsyncScheduler = /*@__PURE__*/ function(_super) {
    _tslib.__extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) now = (0, _scheduler.Scheduler).now;
        var _this = _super.call(this, SchedulerAction, function() {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) return AsyncScheduler.delegate.now();
            else return now();
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) delay = 0;
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) return AsyncScheduler.delegate.schedule(work, delay, state);
        else return _super.prototype.schedule.call(this, work, delay, state);
    };
    AsyncScheduler.prototype.flush = function(action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while (action = actions.shift());
        this.active = false;
        if (error) {
            while(action = actions.shift())action.unsubscribe();
            throw error;
        }
    };
    return AsyncScheduler;
}((0, _scheduler.Scheduler));

},{"tslib":"j8TBX","../Scheduler":"3oTyf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3oTyf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scheduler", ()=>Scheduler);
var Scheduler = /*@__PURE__*/ function() {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) now = Scheduler.now;
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) delay = 0;
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function() {
        return Date.now();
    };
    return Scheduler;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4PFes":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop);
function noop() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"16wHx":[function(require,module,exports) {
/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "combineLatest", ()=>combineLatest);
parcelHelpers.export(exports, "CombineLatestOperator", ()=>CombineLatestOperator);
parcelHelpers.export(exports, "CombineLatestSubscriber", ()=>CombineLatestSubscriber);
var _tslib = require("tslib");
var _isScheduler = require("../util/isScheduler");
var _isArray = require("../util/isArray");
var _outerSubscriber = require("../OuterSubscriber");
var _subscribeToResult = require("../util/subscribeToResult");
var _fromArray = require("./fromArray");
var NONE = {};
function combineLatest() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    var resultSelector = undefined;
    var scheduler = undefined;
    if ((0, _isScheduler.isScheduler)(observables[observables.length - 1])) scheduler = observables.pop();
    if (typeof observables[observables.length - 1] === "function") resultSelector = observables.pop();
    if (observables.length === 1 && (0, _isArray.isArray)(observables[0])) observables = observables[0];
    return (0, _fromArray.fromArray)(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
var CombineLatestOperator = /*@__PURE__*/ function() {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}();
var CombineLatestSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function(observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function() {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) this.destination.complete();
        else {
            this.active = len;
            this.toRespond = len;
            for(var i = 0; i < len; i++){
                var observable = observables[i];
                this.add((0, _subscribeToResult.subscribeToResult)(this, observable, undefined, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function(unused) {
        if ((this.active -= 1) === 0) this.destination.complete();
    };
    CombineLatestSubscriber.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) this._tryResultSelector(values);
            else this.destination.next(values.slice());
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function(values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}((0, _outerSubscriber.OuterSubscriber));

},{"tslib":"j8TBX","../util/isScheduler":"lll8k","../util/isArray":"8lyov","../OuterSubscriber":"3gKZa","../util/subscribeToResult":"iyftm","./fromArray":"fuDN5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lll8k":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isScheduler", ()=>isScheduler);
function isScheduler(value) {
    return value && typeof value.schedule === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3gKZa":[function(require,module,exports) {
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OuterSubscriber", ()=>OuterSubscriber);
var _tslib = require("tslib");
var _subscriber = require("./Subscriber");
var OuterSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function(error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function(innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}((0, _subscriber.Subscriber));

},{"tslib":"j8TBX","./Subscriber":"kpS17","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iyftm":[function(require,module,exports) {
/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToResult", ()=>subscribeToResult);
var _innerSubscriber = require("../InnerSubscriber");
var _subscribeTo = require("./subscribeTo");
var _observable = require("../Observable");
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
    if (innerSubscriber === void 0) innerSubscriber = new (0, _innerSubscriber.InnerSubscriber)(outerSubscriber, outerValue, outerIndex);
    if (innerSubscriber.closed) return undefined;
    if (result instanceof (0, _observable.Observable)) return result.subscribe(innerSubscriber);
    return (0, _subscribeTo.subscribeTo)(result)(innerSubscriber);
}

},{"../InnerSubscriber":"7X3En","./subscribeTo":"3FFM5","../Observable":"jfynZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7X3En":[function(require,module,exports) {
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InnerSubscriber", ()=>InnerSubscriber);
var _tslib = require("tslib");
var _subscriber = require("./Subscriber");
var InnerSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function(error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}((0, _subscriber.Subscriber));

},{"tslib":"j8TBX","./Subscriber":"kpS17","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3FFM5":[function(require,module,exports) {
/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeTo", ()=>subscribeTo);
var _subscribeToArray = require("./subscribeToArray");
var _subscribeToPromise = require("./subscribeToPromise");
var _subscribeToIterable = require("./subscribeToIterable");
var _subscribeToObservable = require("./subscribeToObservable");
var _isArrayLike = require("./isArrayLike");
var _isPromise = require("./isPromise");
var _isObject = require("./isObject");
var _iterator = require("../symbol/iterator");
var _observable = require("../symbol/observable");
var subscribeTo = function(result) {
    if (!!result && typeof result[0, _observable.observable] === "function") return (0, _subscribeToObservable.subscribeToObservable)(result);
    else if ((0, _isArrayLike.isArrayLike)(result)) return (0, _subscribeToArray.subscribeToArray)(result);
    else if ((0, _isPromise.isPromise)(result)) return (0, _subscribeToPromise.subscribeToPromise)(result);
    else if (!!result && typeof result[0, _iterator.iterator] === "function") return (0, _subscribeToIterable.subscribeToIterable)(result);
    else {
        var value = (0, _isObject.isObject)(result) ? "an invalid object" : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected." + " You can provide an Observable, Promise, Array, or Iterable.";
        throw new TypeError(msg);
    }
};

},{"./subscribeToArray":"fewY5","./subscribeToPromise":"aTuxc","./subscribeToIterable":"l6eYj","./subscribeToObservable":"kNY76","./isArrayLike":"bOfm6","./isPromise":"1kyC9","./isObject":"4BZjK","../symbol/iterator":"i6XsA","../symbol/observable":"6YJAq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fewY5":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToArray", ()=>subscribeToArray);
var subscribeToArray = function(array) {
    return function(subscriber) {
        for(var i = 0, len = array.length; i < len && !subscriber.closed; i++)subscriber.next(array[i]);
        subscriber.complete();
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aTuxc":[function(require,module,exports) {
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToPromise", ()=>subscribeToPromise);
var _hostReportError = require("./hostReportError");
var subscribeToPromise = function(promise) {
    return function(subscriber) {
        promise.then(function(value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function(err) {
            return subscriber.error(err);
        }).then(null, (0, _hostReportError.hostReportError));
        return subscriber;
    };
};

},{"./hostReportError":"jXrF8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l6eYj":[function(require,module,exports) {
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToIterable", ()=>subscribeToIterable);
var _iterator = require("../symbol/iterator");
var subscribeToIterable = function(iterable) {
    return function(subscriber) {
        var iterator = iterable[0, _iterator.iterator]();
        do {
            var item = void 0;
            try {
                item = iterator.next();
            } catch (err) {
                subscriber.error(err);
                return subscriber;
            }
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) break;
        }while (true);
        if (typeof iterator.return === "function") subscriber.add(function() {
            if (iterator.return) iterator.return();
        });
        return subscriber;
    };
};

},{"../symbol/iterator":"i6XsA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6XsA":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSymbolIterator", ()=>getSymbolIterator);
parcelHelpers.export(exports, "iterator", ()=>iterator);
parcelHelpers.export(exports, "$$iterator", ()=>$$iterator);
function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) return "@@iterator";
    return Symbol.iterator;
}
var iterator = /*@__PURE__*/ getSymbolIterator();
var $$iterator = iterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNY76":[function(require,module,exports) {
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToObservable", ()=>subscribeToObservable);
var _observable = require("../symbol/observable");
var subscribeToObservable = function(obj) {
    return function(subscriber) {
        var obs = obj[0, _observable.observable]();
        if (typeof obs.subscribe !== "function") throw new TypeError("Provided object does not correctly implement Symbol.observable");
        else return obs.subscribe(subscriber);
    };
};

},{"../symbol/observable":"6YJAq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bOfm6":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArrayLike", ()=>isArrayLike);
var isArrayLike = function(x) {
    return x && typeof x.length === "number" && typeof x !== "function";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1kyC9":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPromise", ()=>isPromise);
function isPromise(value) {
    return !!value && typeof value.subscribe !== "function" && typeof value.then === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fuDN5":[function(require,module,exports) {
/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromArray", ()=>fromArray);
var _observable = require("../Observable");
var _subscribeToArray = require("../util/subscribeToArray");
var _scheduleArray = require("../scheduled/scheduleArray");
function fromArray(input, scheduler) {
    if (!scheduler) return new (0, _observable.Observable)((0, _subscribeToArray.subscribeToArray)(input));
    else return (0, _scheduleArray.scheduleArray)(input, scheduler);
}

},{"../Observable":"jfynZ","../util/subscribeToArray":"fewY5","../scheduled/scheduleArray":"3tiUI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3tiUI":[function(require,module,exports) {
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleArray", ()=>scheduleArray);
var _observable = require("../Observable");
var _subscription = require("../Subscription");
function scheduleArray(input, scheduler) {
    return new (0, _observable.Observable)(function(subscriber) {
        var sub = new (0, _subscription.Subscription)();
        var i = 0;
        sub.add(scheduler.schedule(function() {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) sub.add(this.schedule());
        }));
        return sub;
    });
}

},{"../Observable":"jfynZ","../Subscription":"6K2jD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8eI7u":[function(require,module,exports) {
/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "from", ()=>from);
var _observable = require("../Observable");
var _subscribeTo = require("../util/subscribeTo");
var _scheduled = require("../scheduled/scheduled");
function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof (0, _observable.Observable)) return input;
        return new (0, _observable.Observable)((0, _subscribeTo.subscribeTo)(input));
    } else return (0, _scheduled.scheduled)(input, scheduler);
}

},{"../Observable":"jfynZ","../util/subscribeTo":"3FFM5","../scheduled/scheduled":"95k2n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"95k2n":[function(require,module,exports) {
/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduled", ()=>scheduled);
var _scheduleObservable = require("./scheduleObservable");
var _schedulePromise = require("./schedulePromise");
var _scheduleArray = require("./scheduleArray");
var _scheduleIterable = require("./scheduleIterable");
var _isInteropObservable = require("../util/isInteropObservable");
var _isPromise = require("../util/isPromise");
var _isArrayLike = require("../util/isArrayLike");
var _isIterable = require("../util/isIterable");
function scheduled(input, scheduler) {
    if (input != null) {
        if ((0, _isInteropObservable.isInteropObservable)(input)) return (0, _scheduleObservable.scheduleObservable)(input, scheduler);
        else if ((0, _isPromise.isPromise)(input)) return (0, _schedulePromise.schedulePromise)(input, scheduler);
        else if ((0, _isArrayLike.isArrayLike)(input)) return (0, _scheduleArray.scheduleArray)(input, scheduler);
        else if ((0, _isIterable.isIterable)(input) || typeof input === "string") return (0, _scheduleIterable.scheduleIterable)(input, scheduler);
    }
    throw new TypeError((input !== null && typeof input || input) + " is not observable");
}

},{"./scheduleObservable":"1y5BB","./schedulePromise":"d3CnE","./scheduleArray":"3tiUI","./scheduleIterable":"b6x4q","../util/isInteropObservable":"bnTa2","../util/isPromise":"1kyC9","../util/isArrayLike":"bOfm6","../util/isIterable":"digKz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1y5BB":[function(require,module,exports) {
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleObservable", ()=>scheduleObservable);
var _observable = require("../Observable");
var _subscription = require("../Subscription");
var _observable1 = require("../symbol/observable");
function scheduleObservable(input, scheduler) {
    return new (0, _observable.Observable)(function(subscriber) {
        var sub = new (0, _subscription.Subscription)();
        sub.add(scheduler.schedule(function() {
            var observable = input[0, _observable1.observable]();
            sub.add(observable.subscribe({
                next: function(value) {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.next(value);
                    }));
                },
                error: function(err) {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.error(err);
                    }));
                },
                complete: function() {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.complete();
                    }));
                }
            }));
        }));
        return sub;
    });
}

},{"../Observable":"jfynZ","../Subscription":"6K2jD","../symbol/observable":"6YJAq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3CnE":[function(require,module,exports) {
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "schedulePromise", ()=>schedulePromise);
var _observable = require("../Observable");
var _subscription = require("../Subscription");
function schedulePromise(input, scheduler) {
    return new (0, _observable.Observable)(function(subscriber) {
        var sub = new (0, _subscription.Subscription)();
        sub.add(scheduler.schedule(function() {
            return input.then(function(value) {
                sub.add(scheduler.schedule(function() {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function() {
                        return subscriber.complete();
                    }));
                }));
            }, function(err) {
                sub.add(scheduler.schedule(function() {
                    return subscriber.error(err);
                }));
            });
        }));
        return sub;
    });
}

},{"../Observable":"jfynZ","../Subscription":"6K2jD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6x4q":[function(require,module,exports) {
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleIterable", ()=>scheduleIterable);
var _observable = require("../Observable");
var _subscription = require("../Subscription");
var _iterator = require("../symbol/iterator");
function scheduleIterable(input, scheduler) {
    if (!input) throw new Error("Iterable cannot be null");
    return new (0, _observable.Observable)(function(subscriber) {
        var sub = new (0, _subscription.Subscription)();
        var iterator;
        sub.add(function() {
            if (iterator && typeof iterator.return === "function") iterator.return();
        });
        sub.add(scheduler.schedule(function() {
            iterator = input[0, _iterator.iterator]();
            sub.add(scheduler.schedule(function() {
                if (subscriber.closed) return;
                var value;
                var done;
                try {
                    var result = iterator.next();
                    value = result.value;
                    done = result.done;
                } catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) subscriber.complete();
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}

},{"../Observable":"jfynZ","../Subscription":"6K2jD","../symbol/iterator":"i6XsA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bnTa2":[function(require,module,exports) {
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isInteropObservable", ()=>isInteropObservable);
var _observable = require("../symbol/observable");
function isInteropObservable(input) {
    return input && typeof input[0, _observable.observable] === "function";
}

},{"../symbol/observable":"6YJAq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"digKz":[function(require,module,exports) {
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isIterable", ()=>isIterable);
var _iterator = require("../symbol/iterator");
function isIterable(input) {
    return input && typeof input[0, _iterator.iterator] === "function";
}

},{"../symbol/iterator":"i6XsA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eiXJM":[function(require,module,exports) {
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromEvent", ()=>fromEvent);
var _observable = require("../Observable");
var _isArray = require("../util/isArray");
var _isFunction = require("../util/isFunction");
var _map = require("../operators/map");
var toString = /*@__PURE__*/ function() {
    return Object.prototype.toString;
}();
function fromEvent(target, eventName, options, resultSelector) {
    if ((0, _isFunction.isFunction)(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) return fromEvent(target, eventName, options).pipe((0, _map.map)(function(args) {
        return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
    return new (0, _observable.Observable)(function(subscriber) {
        function handler(e) {
            if (arguments.length > 1) subscriber.next(Array.prototype.slice.call(arguments));
            else subscriber.next(e);
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function() {
            return source_1.removeEventListener(eventName, handler, options);
        };
    } else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function() {
            return source_2.off(eventName, handler);
        };
    } else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function() {
            return source_3.removeListener(eventName, handler);
        };
    } else if (sourceObj && sourceObj.length) for(var i = 0, len = sourceObj.length; i < len; i++)setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
    else throw new TypeError("Invalid event target");
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === "function" && typeof sourceObj.removeListener === "function";
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === "function" && typeof sourceObj.off === "function";
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === "function" && typeof sourceObj.removeEventListener === "function";
}

},{"../Observable":"jfynZ","../util/isArray":"8lyov","../util/isFunction":"gyncl","../operators/map":"l45v5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l45v5":[function(require,module,exports) {
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>map);
parcelHelpers.export(exports, "MapOperator", ()=>MapOperator);
var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== "function") throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ function() {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}();
var MapSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function(value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}((0, _subscriber.Subscriber));

},{"tslib":"j8TBX","../Subscriber":"kpS17","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9DiSm":[function(require,module,exports) {
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interval", ()=>interval);
var _observable = require("../Observable");
var _async = require("../scheduler/async");
var _isNumeric = require("../util/isNumeric");
function interval(period, scheduler) {
    if (period === void 0) period = 0;
    if (scheduler === void 0) scheduler = (0, _async.async);
    if (!(0, _isNumeric.isNumeric)(period) || period < 0) period = 0;
    if (!scheduler || typeof scheduler.schedule !== "function") scheduler = (0, _async.async);
    return new (0, _observable.Observable)(function(subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, {
            subscriber: subscriber,
            counter: 0,
            period: period
        }));
        return subscriber;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({
        subscriber: subscriber,
        counter: counter + 1,
        period: period
    }, period);
}

},{"../Observable":"jfynZ","../scheduler/async":"fLneT","../util/isNumeric":"g8DqL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g8DqL":[function(require,module,exports) {
/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumeric", ()=>isNumeric);
var _isArray = require("./isArray");
function isNumeric(val) {
    return !(0, _isArray.isArray)(val) && val - parseFloat(val) + 1 >= 0;
}

},{"./isArray":"8lyov","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hZiON":[function(require,module,exports) {
/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "merge", ()=>merge);
var _observable = require("../Observable");
var _isScheduler = require("../util/isScheduler");
var _mergeAll = require("../operators/mergeAll");
var _fromArray = require("./fromArray");
function merge() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if ((0, _isScheduler.isScheduler)(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === "number") concurrent = observables.pop();
    } else if (typeof last === "number") concurrent = observables.pop();
    if (scheduler === null && observables.length === 1 && observables[0] instanceof (0, _observable.Observable)) return observables[0];
    return (0, _mergeAll.mergeAll)(concurrent)((0, _fromArray.fromArray)(observables, scheduler));
}

},{"../Observable":"jfynZ","../util/isScheduler":"lll8k","../operators/mergeAll":"4gl6z","./fromArray":"fuDN5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4gl6z":[function(require,module,exports) {
/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeAll", ()=>mergeAll);
var _mergeMap = require("./mergeMap");
var _identity = require("../util/identity");
function mergeAll(concurrent) {
    if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
    return (0, _mergeMap.mergeMap)((0, _identity.identity), concurrent);
}

},{"./mergeMap":"4PgYD","../util/identity":"gxakv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4PgYD":[function(require,module,exports) {
/** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeMap", ()=>mergeMap);
parcelHelpers.export(exports, "MergeMapOperator", ()=>MergeMapOperator);
parcelHelpers.export(exports, "MergeMapSubscriber", ()=>MergeMapSubscriber);
parcelHelpers.export(exports, "flatMap", ()=>flatMap);
var _tslib = require("tslib");
var _map = require("./map");
var _from = require("../observable/from");
var _innerSubscribe = require("../innerSubscribe");
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
    if (typeof resultSelector === "function") return function(source) {
        return source.pipe(mergeMap(function(a, i) {
            return (0, _from.from)(project(a, i)).pipe((0, _map.map)(function(b, ii) {
                return resultSelector(a, b, i, ii);
            }));
        }, concurrent));
    };
    else if (typeof resultSelector === "number") concurrent = resultSelector;
    return function(source) {
        return source.lift(new MergeMapOperator(project, concurrent));
    };
}
var MergeMapOperator = /*@__PURE__*/ function() {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function(observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}();
var MergeMapSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function(value) {
        if (this.active < this.concurrent) this._tryNext(value);
        else this.buffer.push(value);
    };
    MergeMapSubscriber.prototype._tryNext = function(value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result);
    };
    MergeMapSubscriber.prototype._innerSub = function(ish) {
        var innerSubscriber = new (0, _innerSubscribe.SimpleInnerSubscriber)(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = (0, _innerSubscribe.innerSubscribe)(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) destination.add(innerSubscription);
    };
    MergeMapSubscriber.prototype._complete = function() {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) this.destination.complete();
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function() {
        var buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) this._next(buffer.shift());
        else if (this.active === 0 && this.hasCompleted) this.destination.complete();
    };
    return MergeMapSubscriber;
}((0, _innerSubscribe.SimpleOuterSubscriber));
var flatMap = mergeMap;

},{"tslib":"j8TBX","./map":"l45v5","../observable/from":"8eI7u","../innerSubscribe":"3J6Nw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3J6Nw":[function(require,module,exports) {
/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_util_subscribeTo PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SimpleInnerSubscriber", ()=>SimpleInnerSubscriber);
parcelHelpers.export(exports, "ComplexInnerSubscriber", ()=>ComplexInnerSubscriber);
parcelHelpers.export(exports, "SimpleOuterSubscriber", ()=>SimpleOuterSubscriber);
parcelHelpers.export(exports, "ComplexOuterSubscriber", ()=>ComplexOuterSubscriber);
parcelHelpers.export(exports, "innerSubscribe", ()=>innerSubscribe);
var _tslib = require("tslib");
var _subscriber = require("./Subscriber");
var _observable = require("./Observable");
var _subscribeTo = require("./util/subscribeTo");
var SimpleInnerSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SimpleInnerSubscriber, _super);
    function SimpleInnerSubscriber(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
    }
    SimpleInnerSubscriber.prototype._next = function(value) {
        this.parent.notifyNext(value);
    };
    SimpleInnerSubscriber.prototype._error = function(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    SimpleInnerSubscriber.prototype._complete = function() {
        this.parent.notifyComplete();
        this.unsubscribe();
    };
    return SimpleInnerSubscriber;
}((0, _subscriber.Subscriber));
var ComplexInnerSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ComplexInnerSubscriber, _super);
    function ComplexInnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        return _this;
    }
    ComplexInnerSubscriber.prototype._next = function(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
    };
    ComplexInnerSubscriber.prototype._error = function(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    ComplexInnerSubscriber.prototype._complete = function() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return ComplexInnerSubscriber;
}((0, _subscriber.Subscriber));
var SimpleOuterSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SimpleOuterSubscriber, _super);
    function SimpleOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleOuterSubscriber.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
    };
    SimpleOuterSubscriber.prototype.notifyError = function(err) {
        this.destination.error(err);
    };
    SimpleOuterSubscriber.prototype.notifyComplete = function() {
        this.destination.complete();
    };
    return SimpleOuterSubscriber;
}((0, _subscriber.Subscriber));
var ComplexOuterSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ComplexOuterSubscriber, _super);
    function ComplexOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComplexOuterSubscriber.prototype.notifyNext = function(_outerValue, innerValue, _outerIndex, _innerSub) {
        this.destination.next(innerValue);
    };
    ComplexOuterSubscriber.prototype.notifyError = function(error) {
        this.destination.error(error);
    };
    ComplexOuterSubscriber.prototype.notifyComplete = function(_innerSub) {
        this.destination.complete();
    };
    return ComplexOuterSubscriber;
}((0, _subscriber.Subscriber));
function innerSubscribe(result, innerSubscriber) {
    if (innerSubscriber.closed) return undefined;
    if (result instanceof (0, _observable.Observable)) return result.subscribe(innerSubscriber);
    var subscription;
    try {
        subscription = (0, _subscribeTo.subscribeTo)(result)(innerSubscriber);
    } catch (error) {
        innerSubscriber.error(error);
    }
    return subscription;
}

},{"tslib":"j8TBX","./Subscriber":"kpS17","./Observable":"jfynZ","./util/subscribeTo":"3FFM5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h5Xn7":[function(require,module,exports) {
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "audit", ()=>(0, _audit.audit));
parcelHelpers.export(exports, "auditTime", ()=>(0, _auditTime.auditTime));
parcelHelpers.export(exports, "buffer", ()=>(0, _buffer.buffer));
parcelHelpers.export(exports, "bufferCount", ()=>(0, _bufferCount.bufferCount));
parcelHelpers.export(exports, "bufferTime", ()=>(0, _bufferTime.bufferTime));
parcelHelpers.export(exports, "bufferToggle", ()=>(0, _bufferToggle.bufferToggle));
parcelHelpers.export(exports, "bufferWhen", ()=>(0, _bufferWhen.bufferWhen));
parcelHelpers.export(exports, "catchError", ()=>(0, _catchError.catchError));
parcelHelpers.export(exports, "combineAll", ()=>(0, _combineAll.combineAll));
parcelHelpers.export(exports, "combineLatest", ()=>(0, _combineLatest.combineLatest));
parcelHelpers.export(exports, "concat", ()=>(0, _concat.concat));
parcelHelpers.export(exports, "concatAll", ()=>(0, _concatAll.concatAll));
parcelHelpers.export(exports, "concatMap", ()=>(0, _concatMap.concatMap));
parcelHelpers.export(exports, "concatMapTo", ()=>(0, _concatMapTo.concatMapTo));
parcelHelpers.export(exports, "count", ()=>(0, _count.count));
parcelHelpers.export(exports, "debounce", ()=>(0, _debounce.debounce));
parcelHelpers.export(exports, "debounceTime", ()=>(0, _debounceTime.debounceTime));
parcelHelpers.export(exports, "defaultIfEmpty", ()=>(0, _defaultIfEmpty.defaultIfEmpty));
parcelHelpers.export(exports, "delay", ()=>(0, _delay.delay));
parcelHelpers.export(exports, "delayWhen", ()=>(0, _delayWhen.delayWhen));
parcelHelpers.export(exports, "dematerialize", ()=>(0, _dematerialize.dematerialize));
parcelHelpers.export(exports, "distinct", ()=>(0, _distinct.distinct));
parcelHelpers.export(exports, "distinctUntilChanged", ()=>(0, _distinctUntilChanged.distinctUntilChanged));
parcelHelpers.export(exports, "distinctUntilKeyChanged", ()=>(0, _distinctUntilKeyChanged.distinctUntilKeyChanged));
parcelHelpers.export(exports, "elementAt", ()=>(0, _elementAt.elementAt));
parcelHelpers.export(exports, "endWith", ()=>(0, _endWith.endWith));
parcelHelpers.export(exports, "every", ()=>(0, _every.every));
parcelHelpers.export(exports, "exhaust", ()=>(0, _exhaust.exhaust));
parcelHelpers.export(exports, "exhaustMap", ()=>(0, _exhaustMap.exhaustMap));
parcelHelpers.export(exports, "expand", ()=>(0, _expand.expand));
parcelHelpers.export(exports, "filter", ()=>(0, _filter.filter));
parcelHelpers.export(exports, "finalize", ()=>(0, _finalize.finalize));
parcelHelpers.export(exports, "find", ()=>(0, _find.find));
parcelHelpers.export(exports, "findIndex", ()=>(0, _findIndex.findIndex));
parcelHelpers.export(exports, "first", ()=>(0, _first.first));
parcelHelpers.export(exports, "groupBy", ()=>(0, _groupBy.groupBy));
parcelHelpers.export(exports, "ignoreElements", ()=>(0, _ignoreElements.ignoreElements));
parcelHelpers.export(exports, "isEmpty", ()=>(0, _isEmpty.isEmpty));
parcelHelpers.export(exports, "last", ()=>(0, _last.last));
parcelHelpers.export(exports, "map", ()=>(0, _map.map));
parcelHelpers.export(exports, "mapTo", ()=>(0, _mapTo.mapTo));
parcelHelpers.export(exports, "materialize", ()=>(0, _materialize.materialize));
parcelHelpers.export(exports, "max", ()=>(0, _max.max));
parcelHelpers.export(exports, "merge", ()=>(0, _merge.merge));
parcelHelpers.export(exports, "mergeAll", ()=>(0, _mergeAll.mergeAll));
parcelHelpers.export(exports, "mergeMap", ()=>(0, _mergeMap.mergeMap));
parcelHelpers.export(exports, "flatMap", ()=>(0, _mergeMap.flatMap));
parcelHelpers.export(exports, "mergeMapTo", ()=>(0, _mergeMapTo.mergeMapTo));
parcelHelpers.export(exports, "mergeScan", ()=>(0, _mergeScan.mergeScan));
parcelHelpers.export(exports, "min", ()=>(0, _min.min));
parcelHelpers.export(exports, "multicast", ()=>(0, _multicast.multicast));
parcelHelpers.export(exports, "observeOn", ()=>(0, _observeOn.observeOn));
parcelHelpers.export(exports, "onErrorResumeNext", ()=>(0, _onErrorResumeNext.onErrorResumeNext));
parcelHelpers.export(exports, "pairwise", ()=>(0, _pairwise.pairwise));
parcelHelpers.export(exports, "partition", ()=>(0, _partition.partition));
parcelHelpers.export(exports, "pluck", ()=>(0, _pluck.pluck));
parcelHelpers.export(exports, "publish", ()=>(0, _publish.publish));
parcelHelpers.export(exports, "publishBehavior", ()=>(0, _publishBehavior.publishBehavior));
parcelHelpers.export(exports, "publishLast", ()=>(0, _publishLast.publishLast));
parcelHelpers.export(exports, "publishReplay", ()=>(0, _publishReplay.publishReplay));
parcelHelpers.export(exports, "race", ()=>(0, _race.race));
parcelHelpers.export(exports, "reduce", ()=>(0, _reduce.reduce));
parcelHelpers.export(exports, "repeat", ()=>(0, _repeat.repeat));
parcelHelpers.export(exports, "repeatWhen", ()=>(0, _repeatWhen.repeatWhen));
parcelHelpers.export(exports, "retry", ()=>(0, _retry.retry));
parcelHelpers.export(exports, "retryWhen", ()=>(0, _retryWhen.retryWhen));
parcelHelpers.export(exports, "refCount", ()=>(0, _refCount.refCount));
parcelHelpers.export(exports, "sample", ()=>(0, _sample.sample));
parcelHelpers.export(exports, "sampleTime", ()=>(0, _sampleTime.sampleTime));
parcelHelpers.export(exports, "scan", ()=>(0, _scan.scan));
parcelHelpers.export(exports, "sequenceEqual", ()=>(0, _sequenceEqual.sequenceEqual));
parcelHelpers.export(exports, "share", ()=>(0, _share.share));
parcelHelpers.export(exports, "shareReplay", ()=>(0, _shareReplay.shareReplay));
parcelHelpers.export(exports, "single", ()=>(0, _single.single));
parcelHelpers.export(exports, "skip", ()=>(0, _skip.skip));
parcelHelpers.export(exports, "skipLast", ()=>(0, _skipLast.skipLast));
parcelHelpers.export(exports, "skipUntil", ()=>(0, _skipUntil.skipUntil));
parcelHelpers.export(exports, "skipWhile", ()=>(0, _skipWhile.skipWhile));
parcelHelpers.export(exports, "startWith", ()=>(0, _startWith.startWith));
parcelHelpers.export(exports, "subscribeOn", ()=>(0, _subscribeOn.subscribeOn));
parcelHelpers.export(exports, "switchAll", ()=>(0, _switchAll.switchAll));
parcelHelpers.export(exports, "switchMap", ()=>(0, _switchMap.switchMap));
parcelHelpers.export(exports, "switchMapTo", ()=>(0, _switchMapTo.switchMapTo));
parcelHelpers.export(exports, "take", ()=>(0, _take.take));
parcelHelpers.export(exports, "takeLast", ()=>(0, _takeLast.takeLast));
parcelHelpers.export(exports, "takeUntil", ()=>(0, _takeUntil.takeUntil));
parcelHelpers.export(exports, "takeWhile", ()=>(0, _takeWhile.takeWhile));
parcelHelpers.export(exports, "tap", ()=>(0, _tap.tap));
parcelHelpers.export(exports, "throttle", ()=>(0, _throttle.throttle));
parcelHelpers.export(exports, "throttleTime", ()=>(0, _throttleTime.throttleTime));
parcelHelpers.export(exports, "throwIfEmpty", ()=>(0, _throwIfEmpty.throwIfEmpty));
parcelHelpers.export(exports, "timeInterval", ()=>(0, _timeInterval.timeInterval));
parcelHelpers.export(exports, "timeout", ()=>(0, _timeout.timeout));
parcelHelpers.export(exports, "timeoutWith", ()=>(0, _timeoutWith.timeoutWith));
parcelHelpers.export(exports, "timestamp", ()=>(0, _timestamp.timestamp));
parcelHelpers.export(exports, "toArray", ()=>(0, _toArray.toArray));
parcelHelpers.export(exports, "window", ()=>(0, _window.window));
parcelHelpers.export(exports, "windowCount", ()=>(0, _windowCount.windowCount));
parcelHelpers.export(exports, "windowTime", ()=>(0, _windowTime.windowTime));
parcelHelpers.export(exports, "windowToggle", ()=>(0, _windowToggle.windowToggle));
parcelHelpers.export(exports, "windowWhen", ()=>(0, _windowWhen.windowWhen));
parcelHelpers.export(exports, "withLatestFrom", ()=>(0, _withLatestFrom.withLatestFrom));
parcelHelpers.export(exports, "zip", ()=>(0, _zip.zip));
parcelHelpers.export(exports, "zipAll", ()=>(0, _zipAll.zipAll));
var _audit = require("../internal/operators/audit");
var _auditTime = require("../internal/operators/auditTime");
var _buffer = require("../internal/operators/buffer");
var _bufferCount = require("../internal/operators/bufferCount");
var _bufferTime = require("../internal/operators/bufferTime");
var _bufferToggle = require("../internal/operators/bufferToggle");
var _bufferWhen = require("../internal/operators/bufferWhen");
var _catchError = require("../internal/operators/catchError");
var _combineAll = require("../internal/operators/combineAll");
var _combineLatest = require("../internal/operators/combineLatest");
var _concat = require("../internal/operators/concat");
var _concatAll = require("../internal/operators/concatAll");
var _concatMap = require("../internal/operators/concatMap");
var _concatMapTo = require("../internal/operators/concatMapTo");
var _count = require("../internal/operators/count");
var _debounce = require("../internal/operators/debounce");
var _debounceTime = require("../internal/operators/debounceTime");
var _defaultIfEmpty = require("../internal/operators/defaultIfEmpty");
var _delay = require("../internal/operators/delay");
var _delayWhen = require("../internal/operators/delayWhen");
var _dematerialize = require("../internal/operators/dematerialize");
var _distinct = require("../internal/operators/distinct");
var _distinctUntilChanged = require("../internal/operators/distinctUntilChanged");
var _distinctUntilKeyChanged = require("../internal/operators/distinctUntilKeyChanged");
var _elementAt = require("../internal/operators/elementAt");
var _endWith = require("../internal/operators/endWith");
var _every = require("../internal/operators/every");
var _exhaust = require("../internal/operators/exhaust");
var _exhaustMap = require("../internal/operators/exhaustMap");
var _expand = require("../internal/operators/expand");
var _filter = require("../internal/operators/filter");
var _finalize = require("../internal/operators/finalize");
var _find = require("../internal/operators/find");
var _findIndex = require("../internal/operators/findIndex");
var _first = require("../internal/operators/first");
var _groupBy = require("../internal/operators/groupBy");
var _ignoreElements = require("../internal/operators/ignoreElements");
var _isEmpty = require("../internal/operators/isEmpty");
var _last = require("../internal/operators/last");
var _map = require("../internal/operators/map");
var _mapTo = require("../internal/operators/mapTo");
var _materialize = require("../internal/operators/materialize");
var _max = require("../internal/operators/max");
var _merge = require("../internal/operators/merge");
var _mergeAll = require("../internal/operators/mergeAll");
var _mergeMap = require("../internal/operators/mergeMap");
var _mergeMapTo = require("../internal/operators/mergeMapTo");
var _mergeScan = require("../internal/operators/mergeScan");
var _min = require("../internal/operators/min");
var _multicast = require("../internal/operators/multicast");
var _observeOn = require("../internal/operators/observeOn");
var _onErrorResumeNext = require("../internal/operators/onErrorResumeNext");
var _pairwise = require("../internal/operators/pairwise");
var _partition = require("../internal/operators/partition");
var _pluck = require("../internal/operators/pluck");
var _publish = require("../internal/operators/publish");
var _publishBehavior = require("../internal/operators/publishBehavior");
var _publishLast = require("../internal/operators/publishLast");
var _publishReplay = require("../internal/operators/publishReplay");
var _race = require("../internal/operators/race");
var _reduce = require("../internal/operators/reduce");
var _repeat = require("../internal/operators/repeat");
var _repeatWhen = require("../internal/operators/repeatWhen");
var _retry = require("../internal/operators/retry");
var _retryWhen = require("../internal/operators/retryWhen");
var _refCount = require("../internal/operators/refCount");
var _sample = require("../internal/operators/sample");
var _sampleTime = require("../internal/operators/sampleTime");
var _scan = require("../internal/operators/scan");
var _sequenceEqual = require("../internal/operators/sequenceEqual");
var _share = require("../internal/operators/share");
var _shareReplay = require("../internal/operators/shareReplay");
var _single = require("../internal/operators/single");
var _skip = require("../internal/operators/skip");
var _skipLast = require("../internal/operators/skipLast");
var _skipUntil = require("../internal/operators/skipUntil");
var _skipWhile = require("../internal/operators/skipWhile");
var _startWith = require("../internal/operators/startWith");
var _subscribeOn = require("../internal/operators/subscribeOn");
var _switchAll = require("../internal/operators/switchAll");
var _switchMap = require("../internal/operators/switchMap");
var _switchMapTo = require("../internal/operators/switchMapTo");
var _take = require("../internal/operators/take");
var _takeLast = require("../internal/operators/takeLast");
var _takeUntil = require("../internal/operators/takeUntil");
var _takeWhile = require("../internal/operators/takeWhile");
var _tap = require("../internal/operators/tap");
var _throttle = require("../internal/operators/throttle");
var _throttleTime = require("../internal/operators/throttleTime");
var _throwIfEmpty = require("../internal/operators/throwIfEmpty");
var _timeInterval = require("../internal/operators/timeInterval");
var _timeout = require("../internal/operators/timeout");
var _timeoutWith = require("../internal/operators/timeoutWith");
var _timestamp = require("../internal/operators/timestamp");
var _toArray = require("../internal/operators/toArray");
var _window = require("../internal/operators/window");
var _windowCount = require("../internal/operators/windowCount");
var _windowTime = require("../internal/operators/windowTime");
var _windowToggle = require("../internal/operators/windowToggle");
var _windowWhen = require("../internal/operators/windowWhen");
var _withLatestFrom = require("../internal/operators/withLatestFrom");
var _zip = require("../internal/operators/zip");
var _zipAll = require("../internal/operators/zipAll");

},{"../internal/operators/audit":false,"../internal/operators/auditTime":false,"../internal/operators/buffer":false,"../internal/operators/bufferCount":false,"../internal/operators/bufferTime":false,"../internal/operators/bufferToggle":false,"../internal/operators/bufferWhen":false,"../internal/operators/catchError":false,"../internal/operators/combineAll":false,"../internal/operators/combineLatest":false,"../internal/operators/concat":false,"../internal/operators/concatAll":false,"../internal/operators/concatMap":false,"../internal/operators/concatMapTo":false,"../internal/operators/count":false,"../internal/operators/debounce":false,"../internal/operators/debounceTime":false,"../internal/operators/defaultIfEmpty":false,"../internal/operators/delay":false,"../internal/operators/delayWhen":false,"../internal/operators/dematerialize":false,"../internal/operators/distinct":false,"../internal/operators/distinctUntilChanged":false,"../internal/operators/distinctUntilKeyChanged":false,"../internal/operators/elementAt":false,"../internal/operators/endWith":false,"../internal/operators/every":false,"../internal/operators/exhaust":false,"../internal/operators/exhaustMap":false,"../internal/operators/expand":false,"../internal/operators/filter":false,"../internal/operators/finalize":false,"../internal/operators/find":false,"../internal/operators/findIndex":false,"../internal/operators/first":false,"../internal/operators/groupBy":false,"../internal/operators/ignoreElements":false,"../internal/operators/isEmpty":false,"../internal/operators/last":false,"../internal/operators/map":"l45v5","../internal/operators/mapTo":false,"../internal/operators/materialize":false,"../internal/operators/max":false,"../internal/operators/merge":false,"../internal/operators/mergeAll":"4gl6z","../internal/operators/mergeMap":"4PgYD","../internal/operators/mergeMapTo":false,"../internal/operators/mergeScan":false,"../internal/operators/min":false,"../internal/operators/multicast":false,"../internal/operators/observeOn":false,"../internal/operators/onErrorResumeNext":false,"../internal/operators/pairwise":false,"../internal/operators/partition":false,"../internal/operators/pluck":false,"../internal/operators/publish":false,"../internal/operators/publishBehavior":false,"../internal/operators/publishLast":false,"../internal/operators/publishReplay":false,"../internal/operators/race":false,"../internal/operators/reduce":false,"../internal/operators/repeat":false,"../internal/operators/repeatWhen":false,"../internal/operators/retry":false,"../internal/operators/retryWhen":false,"../internal/operators/refCount":false,"../internal/operators/sample":false,"../internal/operators/sampleTime":false,"../internal/operators/scan":"04xhW","../internal/operators/sequenceEqual":false,"../internal/operators/share":false,"../internal/operators/shareReplay":false,"../internal/operators/single":false,"../internal/operators/skip":false,"../internal/operators/skipLast":false,"../internal/operators/skipUntil":false,"../internal/operators/skipWhile":false,"../internal/operators/startWith":false,"../internal/operators/subscribeOn":false,"../internal/operators/switchAll":false,"../internal/operators/switchMap":false,"../internal/operators/switchMapTo":false,"../internal/operators/take":false,"../internal/operators/takeLast":false,"../internal/operators/takeUntil":false,"../internal/operators/takeWhile":"428ye","../internal/operators/tap":"bqlzJ","../internal/operators/throttle":false,"../internal/operators/throttleTime":false,"../internal/operators/throwIfEmpty":false,"../internal/operators/timeInterval":false,"../internal/operators/timeout":false,"../internal/operators/timeoutWith":false,"../internal/operators/timestamp":false,"../internal/operators/toArray":false,"../internal/operators/window":false,"../internal/operators/windowCount":false,"../internal/operators/windowTime":false,"../internal/operators/windowToggle":false,"../internal/operators/windowWhen":false,"../internal/operators/withLatestFrom":false,"../internal/operators/zip":false,"../internal/operators/zipAll":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"04xhW":[function(require,module,exports) {
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scan", ()=>scan);
var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function scan(accumulator, seed) {
    var hasSeed = false;
    if (arguments.length >= 2) hasSeed = true;
    return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
    };
}
var ScanOperator = /*@__PURE__*/ function() {
    function ScanOperator(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) hasSeed = false;
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ScanOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ScanOperator;
}();
var ScanSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._seed = _seed;
        _this.hasSeed = hasSeed;
        _this.index = 0;
        return _this;
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
        get: function() {
            return this._seed;
        },
        set: function(value) {
            this.hasSeed = true;
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    ScanSubscriber.prototype._next = function(value) {
        if (!this.hasSeed) {
            this.seed = value;
            this.destination.next(value);
        } else return this._tryNext(value);
    };
    ScanSubscriber.prototype._tryNext = function(value) {
        var index = this.index++;
        var result;
        try {
            result = this.accumulator(this.seed, value, index);
        } catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    };
    return ScanSubscriber;
}((0, _subscriber.Subscriber));

},{"tslib":"j8TBX","../Subscriber":"kpS17","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"428ye":[function(require,module,exports) {
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "takeWhile", ()=>takeWhile);
var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) inclusive = false;
    return function(source) {
        return source.lift(new TakeWhileOperator(predicate, inclusive));
    };
}
var TakeWhileOperator = /*@__PURE__*/ function() {
    function TakeWhileOperator(predicate, inclusive) {
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
    TakeWhileOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
    };
    return TakeWhileOperator;
}();
var TakeWhileSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate, inclusive) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.inclusive = inclusive;
        _this.index = 0;
        return _this;
    }
    TakeWhileSubscriber.prototype._next = function(value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        } catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function(value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) destination.next(value);
        else {
            if (this.inclusive) destination.next(value);
            destination.complete();
        }
    };
    return TakeWhileSubscriber;
}((0, _subscriber.Subscriber));

},{"tslib":"j8TBX","../Subscriber":"kpS17","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bqlzJ":[function(require,module,exports) {
/** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tap", ()=>tap);
var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _noop = require("../util/noop");
var _isFunction = require("../util/isFunction");
function tap(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
        return source.lift(new DoOperator(nextOrObserver, error, complete));
    };
}
var DoOperator = /*@__PURE__*/ function() {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}();
var TapSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(TapSubscriber, _super);
    function TapSubscriber(destination, observerOrNext, error, complete) {
        var _this = _super.call(this, destination) || this;
        _this._tapNext = (0, _noop.noop);
        _this._tapError = (0, _noop.noop);
        _this._tapComplete = (0, _noop.noop);
        _this._tapError = error || (0, _noop.noop);
        _this._tapComplete = complete || (0, _noop.noop);
        if ((0, _isFunction.isFunction)(observerOrNext)) {
            _this._context = _this;
            _this._tapNext = observerOrNext;
        } else if (observerOrNext) {
            _this._context = observerOrNext;
            _this._tapNext = observerOrNext.next || (0, _noop.noop);
            _this._tapError = observerOrNext.error || (0, _noop.noop);
            _this._tapComplete = observerOrNext.complete || (0, _noop.noop);
        }
        return _this;
    }
    TapSubscriber.prototype._next = function(value) {
        try {
            this._tapNext.call(this._context, value);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(value);
    };
    TapSubscriber.prototype._error = function(err) {
        try {
            this._tapError.call(this._context, err);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.error(err);
    };
    TapSubscriber.prototype._complete = function() {
        try {
            this._tapComplete.call(this._context);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        return this.destination.complete();
    };
    return TapSubscriber;
}((0, _subscriber.Subscriber));

},{"tslib":"j8TBX","../Subscriber":"kpS17","../util/noop":"4PFes","../util/isFunction":"gyncl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7gpxq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "paint", ()=>paint);
const createElement = (col)=>{
    const elem = document.createElement("div");
    elem.classList.add("board");
    elem.style.display = "inline-block";
    elem.style.marginLeft = "10px";
    elem.style.height = "6px";
    elem.style.width = "6px";
    elem.style["background-color"] = col === 0 ? "white" : col === 1 ? "cornflowerblue" : col === 2 ? "gray" : "silver";
    elem.style["border-radius"] = "90%";
    return elem;
};
const paint = (game, lives, score)=>{
    document.body.innerHTML = `Lives : ${lives}, Score: ${score}`;
    game.forEach((row)=>{
        const rowContainer = document.createElement("div");
        row.forEach((col)=>rowContainer.appendChild(createElement(col)));
        document.body.appendChild(rowContainer);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6AjTz","1jwFz"], "1jwFz", "parcelRequire845f")

//# sourceMappingURL=index.8e9bd240.js.map
