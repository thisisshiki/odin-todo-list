(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,'/* Reset CSS */\n\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  min-height: 100vh;\n}\n\n/* Sidebar */\n.sidebar {\n  background: #e6e5e1;\n  transition: width 0.3s ease;\n}\n\n.sidebar.collapsed {\n  width: 100px;\n}\n\n.sidebar-header {\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.sidebar-header button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: large;\n}\n\n.dropdown {\n  border-top: #cfcfcf solid 1px;\n  margin: 10px 0;\n}\n\n.dropdown-header {\n  padding: 10px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n.dropdown-header i {\n  margin-right: 10px;\n}\n\n.dropdown-content {\n  padding-left: 20px;\n}\n\n.dropdown.inactive .dropdown-content {  \n  display: none;\n}\n\n.menu-item {\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.menu-item i {\n  margin-right: 10px;\n}\n\n.menu-item:hover {\n  background: #f5f5f5;\n}\n\n.sidebar-footer {\n  padding: 1rem;\n  border-top: 1px solid #ddd;\n  margin-top: auto;\n}\n\n.add-todo-btn {\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border: none;\n  background: #c9c9c9;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.add-todo-btn:hover {\n  color: white;\n  background: #797979;\n}\n\n.sidebar.collapsed .sidebar-content,\n.sidebar.collapsed .sidebar-footer {\n  display: none;\n}\n\n/* Main content */\n#main {\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n}\n\nheader {\n  padding: 10px;\n  border-radius: 4px;\n}\n\nheader h1 {\n  margin: 0;\n}\n\nul {\n  list-style-type: none; /* 去掉 bullet point */\n  padding: 0;\n}\n\nli {\n  background-color: white;\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  margin: 8px 0;\n  transition: background-color 0.3s, text-decoration 0.3s;\n}\n\nli.completed {\n  background-color: #f5f5f5;\n  color: #a1a1a1;\n  text-decoration: line-through;\n}\n\nli.completed span.due-date {\n  background-color: #dddddd;\n  color: #a1a1a1;\n  text-decoration: line-through;\n}\n\nli span.due-date {\n  background-color: #929292;\n  color: white;\n  padding: 2px 4px;\n  margin-right: 8px;\n  border-radius: 4px;\n}\n\nli input[type="checkbox"] {\n  margin-right: 8px;\n}\n\n.priority {\n  padding: 2px 4px;\n  margin-left: 8px;\n  border-radius: 4px;\n  color: white;\n}\n\n.priority.high {\n  background-color: #ff6666;\n}\n\n.priority.medium {\n  background-color: #ffcc66;\n}\n\n.priority.low {\n  background-color: #66cc66;\n}\n\n/* Media queries */\n@media screen and (max-width: 1024px) {\n  body {\n    grid-template-columns: 25% 75%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  body {\n    grid-template-columns: 30% 70%;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  body {\n    grid-template-columns: 100%;\n  }\n  \n  .sidebar {\n    position: fixed;\n    z-index: 100;\n    transform: translateX(-100%);\n  }\n}',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA,cAAc;;AAEd;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA,YAAY;AACZ;EACE,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;AACf;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,qBAAqB,EAAE,oBAAoB;EAC3C,UAAU;AACZ;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uDAAuD;AACzD;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,kBAAkB;AAClB;EACE;IACE,8BAA8B;EAChC;AACF;;AAEA;EACE;IACE,8BAA8B;EAChC;AACF;;AAEA;EACE;IACE,2BAA2B;EAC7B;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,4BAA4B;EAC9B;AACF",sourcesContent:['/* Reset CSS */\r\n\r\n*, *::before, *::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr;\r\n  min-height: 100vh;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar {\r\n  background: #e6e5e1;\r\n  transition: width 0.3s ease;\r\n}\r\n\r\n.sidebar.collapsed {\r\n  width: 100px;\r\n}\r\n\r\n.sidebar-header {\r\n  padding: 1rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.sidebar-header button {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: large;\r\n}\r\n\r\n.dropdown {\r\n  border-top: #cfcfcf solid 1px;\r\n  margin: 10px 0;\r\n}\r\n\r\n.dropdown-header {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.dropdown-header i {\r\n  margin-right: 10px;\r\n}\r\n\r\n.dropdown-content {\r\n  padding-left: 20px;\r\n}\r\n\r\n.dropdown.inactive .dropdown-content {  \r\n  display: none;\r\n}\r\n\r\n.menu-item {\r\n  padding: 8px;\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.menu-item i {\r\n  margin-right: 10px;\r\n}\r\n\r\n.menu-item:hover {\r\n  background: #f5f5f5;\r\n}\r\n\r\n.sidebar-footer {\r\n  padding: 1rem;\r\n  border-top: 1px solid #ddd;\r\n  margin-top: auto;\r\n}\r\n\r\n.add-todo-btn {\r\n  width: 100%;\r\n  padding: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  border: none;\r\n  background: #c9c9c9;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.add-todo-btn:hover {\r\n  color: white;\r\n  background: #797979;\r\n}\r\n\r\n.sidebar.collapsed .sidebar-content,\r\n.sidebar.collapsed .sidebar-footer {\r\n  display: none;\r\n}\r\n\r\n/* Main content */\r\n#main {\r\n  padding: 20px;\r\n  box-sizing: border-box;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\nheader {\r\n  padding: 10px;\r\n  border-radius: 4px;\r\n}\r\n\r\nheader h1 {\r\n  margin: 0;\r\n}\r\n\r\nul {\r\n  list-style-type: none; /* 去掉 bullet point */\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  background-color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 8px;\r\n  margin: 8px 0;\r\n  transition: background-color 0.3s, text-decoration 0.3s;\r\n}\r\n\r\nli.completed {\r\n  background-color: #f5f5f5;\r\n  color: #a1a1a1;\r\n  text-decoration: line-through;\r\n}\r\n\r\nli.completed span.due-date {\r\n  background-color: #dddddd;\r\n  color: #a1a1a1;\r\n  text-decoration: line-through;\r\n}\r\n\r\nli span.due-date {\r\n  background-color: #929292;\r\n  color: white;\r\n  padding: 2px 4px;\r\n  margin-right: 8px;\r\n  border-radius: 4px;\r\n}\r\n\r\nli input[type="checkbox"] {\r\n  margin-right: 8px;\r\n}\r\n\r\n.priority {\r\n  padding: 2px 4px;\r\n  margin-left: 8px;\r\n  border-radius: 4px;\r\n  color: white;\r\n}\r\n\r\n.priority.high {\r\n  background-color: #ff6666;\r\n}\r\n\r\n.priority.medium {\r\n  background-color: #ffcc66;\r\n}\r\n\r\n.priority.low {\r\n  background-color: #66cc66;\r\n}\r\n\r\n/* Media queries */\r\n@media screen and (max-width: 1024px) {\r\n  body {\r\n    grid-template-columns: 25% 75%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  body {\r\n    grid-template-columns: 30% 70%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  body {\r\n    grid-template-columns: 100%;\r\n  }\r\n  \r\n  .sidebar {\r\n    position: fixed;\r\n    z-index: 100;\r\n    transform: translateX(-100%);\r\n  }\r\n}'],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],u=o[c]||0,l="".concat(c," ").concat(u);o[c]=u+1;var m=t(l),A={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(A);else{var h=a(A,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var d=r(n,a),c=0;c<o.length;c++){var u=t(o[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),a=t.n(r),o=t(825),i=t.n(o),s=t(659),d=t.n(s),c=t(56),u=t.n(c),l=t(540),m=t.n(l),A=t(113),h=t.n(A),f=t(365),p={};p.styleTagTransform=h(),p.setAttributes=u(),p.insert=d().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=m(),a()(f.A,p),f.A&&f.A.locals&&f.A.locals;const g=JSON.parse('[{"id":1,"title":"Finish report","description":"Complete the quarterly report","dueDate":"2024-12-01","priority":"high","notes":"Include all recent data","category":"work","isCompleted":false},{"id":2,"title":"Team meeting","description":"Discuss project progress","dueDate":"2024-10-05","priority":"medium","notes":"Prepare slides","category":"work","isCompleted":false},{"id":3,"title":"Client call","description":"Call with client to discuss requirements","dueDate":"2024-10-10","priority":"high","notes":"Send agenda beforehand","category":"work","isCompleted":false},{"id":4,"title":"Read chapter 4","description":"Read chapter 4 of the textbook","dueDate":"2024-11-02","priority":"medium","notes":"Take notes","category":"study","isCompleted":false},{"id":5,"title":"Complete assignment","description":"Finish the math assignment","dueDate":"2024-09-06","priority":"high","notes":"Submit online","category":"study","isCompleted":false},{"id":6,"title":"Study group","description":"Meet with study group","dueDate":"2023-10-08","priority":"low","notes":"Review notes","category":"study","isCompleted":false},{"id":7,"title":"Grocery shopping","description":"Buy groceries for the week","dueDate":"2023-10-03","priority":"low","notes":"Check pantry first","category":"personal","isCompleted":false},{"id":8,"title":"Gym","description":"Go to the gym","dueDate":"2023-10-04","priority":"medium","notes":"Leg day","category":"personal","isCompleted":true},{"id":9,"title":"Call mom","description":"Catch up with mom","dueDate":"2024-12-07","priority":"high","notes":"Ask about her trip","category":"personal","isCompleted":false}]'),b={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function y(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const w={date:y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},C={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function E(n){return(e,t)=>{let r;if("formatting"===(t?.context?String(t.context):"standalone")&&n.formattingValues){const e=n.defaultFormattingWidth||n.defaultWidth,a=t?.width?String(t.width):e;r=n.formattingValues[a]||n.formattingValues[e]}else{const e=n.defaultWidth,a=t?.width?String(t.width):n.defaultWidth;r=n.values[a]||n.values[e]}return r[n.argumentCallback?n.argumentCallback(e):e]}}const v={ordinalNumber:(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},era:E({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:E({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:n=>n-1}),month:E({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:E({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:E({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function x(n){return(e,t={})=>{const r=t.width,a=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],d=Array.isArray(s)?function(n){for(let e=0;e<n.length;e++)if(n[e].test(i))return e}(s):function(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&n[e].test(i))return e}(s);let c;return c=n.valueCallback?n.valueCallback(d):d,c=t.valueCallback?t.valueCallback(c):c,{value:c,rest:e.slice(i.length)}}}const B={ordinalNumber:(k={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:n=>parseInt(n,10)},(n,e={})=>{const t=n.match(k.matchPattern);if(!t)return null;const r=t[0],a=n.match(k.parsePattern);if(!a)return null;let o=k.valueCallback?k.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:n.slice(r.length)}}),era:x({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:x({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:n=>n+1}),month:x({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:x({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var k;const M={code:"en-US",formatDistance:(n,e,t)=>{let r;const a=b[n];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),t?.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r},formatLong:w,formatRelative:(n,e,t,r)=>C[n],localize:v,match:B,options:{weekStartsOn:0,firstWeekContainsDate:1}};let S={};function D(){return S}Math.pow(10,8);const T=6048e5,N=36e5,P=Symbol.for("constructDateFrom");function Y(n,e){return"function"==typeof n?n(e):n&&"object"==typeof n&&P in n?n[P](e):n instanceof Date?new n.constructor(e):new Date(e)}function W(n,e){return Y(e||n,n)}function O(n){const e=W(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function q(n,e){const t=W(n,e?.in);return t.setHours(0,0,0,0),t}function F(n,e){const t=W(n,e?.in);return function(n,e,t){const[r,a]=function(n,...e){const t=Y.bind(null,n||e.find((n=>"object"==typeof n)));return e.map(t)}(t?.in,n,e),o=q(r),i=q(a),s=+o-O(o),d=+i-O(i);return Math.round((s-d)/864e5)}(t,function(n,e){const t=W(n,e?.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}(t))+1}function z(n,e){const t=D(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=W(n,e?.in),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function L(n,e){return z(n,{...e,weekStartsOn:1})}function j(n,e){const t=W(n,e?.in),r=t.getFullYear(),a=Y(t,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=L(a),i=Y(t,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=L(i);return t.getTime()>=o.getTime()?r+1:t.getTime()>=s.getTime()?r:r-1}function H(n,e){const t=W(n,e?.in),r=+L(t)-+function(n,e){const t=j(n,e),r=Y(e?.in||n,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),L(r)}(t);return Math.round(r/T)+1}function I(n,e){const t=W(n,e?.in),r=t.getFullYear(),a=D(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=Y(e?.in||n,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=z(i,e),d=Y(e?.in||n,0);d.setFullYear(r,0,o),d.setHours(0,0,0,0);const c=z(d,e);return+t>=+s?r+1:+t>=+c?r:r-1}function U(n,e){const t=W(n,e?.in),r=+z(t,e)-+function(n,e){const t=D(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,a=I(n,e),o=Y(e?.in||n,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),z(o,e)}(t,e);return Math.round(r/T)+1}function X(n,e){return(n<0?"-":"")+Math.abs(n).toString().padStart(e,"0")}const G={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return X("yy"===e?r%100:r,e.length)},M(n,e){const t=n.getMonth();return"M"===e?String(t+1):X(t+1,2)},d:(n,e)=>X(n.getDate(),e.length),a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];default:return"am"===t?"a.m.":"p.m."}},h:(n,e)=>X(n.getHours()%12||12,e.length),H:(n,e)=>X(n.getHours(),e.length),m:(n,e)=>X(n.getMinutes(),e.length),s:(n,e)=>X(n.getSeconds(),e.length),S(n,e){const t=e.length,r=n.getMilliseconds();return X(Math.trunc(r*Math.pow(10,t-3)),e.length)}},Q={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if("yo"===e){const e=n.getFullYear(),r=e>0?e:1-e;return t.ordinalNumber(r,{unit:"year"})}return G.y(n,e)},Y:function(n,e,t,r){const a=I(n,r),o=a>0?a:1-a;return"YY"===e?X(o%100,2):"Yo"===e?t.ordinalNumber(o,{unit:"year"}):X(o,e.length)},R:function(n,e){return X(j(n),e.length)},u:function(n,e){return X(n.getFullYear(),e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return X(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return X(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return G.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return X(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const a=U(n,r);return"wo"===e?t.ordinalNumber(a,{unit:"week"}):X(a,e.length)},I:function(n,e,t){const r=H(n);return"Io"===e?t.ordinalNumber(r,{unit:"week"}):X(r,e.length)},d:function(n,e,t){return"do"===e?t.ordinalNumber(n.getDate(),{unit:"date"}):G.d(n,e)},D:function(n,e,t){const r=F(n);return"Do"===e?t.ordinalNumber(r,{unit:"dayOfYear"}):X(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const a=n.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return X(o,2);case"eo":return t.ordinalNumber(o,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const a=n.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return X(o,e.length);case"co":return t.ordinalNumber(o,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return X(a,e.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const r=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(r,{width:"narrow",context:"formatting"});default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(n,e,t){if("ho"===e){let e=n.getHours()%12;return 0===e&&(e=12),t.ordinalNumber(e,{unit:"hour"})}return G.h(n,e)},H:function(n,e,t){return"Ho"===e?t.ordinalNumber(n.getHours(),{unit:"hour"}):G.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return"Ko"===e?t.ordinalNumber(r,{unit:"hour"}):X(r,e.length)},k:function(n,e,t){let r=n.getHours();return 0===r&&(r=24),"ko"===e?t.ordinalNumber(r,{unit:"hour"}):X(r,e.length)},m:function(n,e,t){return"mo"===e?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):G.m(n,e)},s:function(n,e,t){return"so"===e?t.ordinalNumber(n.getSeconds(),{unit:"second"}):G.s(n,e)},S:function(n,e){return G.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return R(r);case"XXXX":case"XX":return $(r);default:return $(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return R(r);case"xxxx":case"xx":return $(r);default:return $(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Z(r,":");default:return"GMT"+$(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Z(r,":");default:return"GMT"+$(r,":")}},t:function(n,e,t){return X(Math.trunc(+n/1e3),e.length)},T:function(n,e,t){return X(+n,e.length)}};function Z(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),a=Math.trunc(r/60),o=r%60;return 0===o?t+String(a):t+String(a)+e+X(o,2)}function R(n,e){return n%60==0?(n>0?"-":"+")+X(Math.abs(n)/60,2):$(n,e)}function $(n,e=""){const t=n>0?"-":"+",r=Math.abs(n);return t+X(Math.trunc(r/60),2)+e+X(r%60,2)}const J=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},V=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},K={p:V,P:(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],a=t[2];if(!a)return J(n,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",J(r,e)).replace("{{time}}",V(a,e))}},_=/^D+$/,nn=/^Y+$/,en=["D","DD","YY","YYYY"];function tn(n){return!(!((e=n)instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))&&"number"!=typeof n||isNaN(+W(n)));var e}const rn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,an=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,on=/^'([^]*?)'?$/,sn=/''/g,dn=/[a-zA-Z]/;function cn(n){const e=n.match(on);return e?e[1].replace(sn,"'"):n}const un={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},ln=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,mn=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,An=/^([+-])(\d{2})(?::?(\d{2}))?$/;function hn(n){return n?parseInt(n):1}function fn(n){return n&&parseFloat(n.replace(",","."))||0}const pn=[31,null,31,30,31,30,31,31,30,31,30,31];function gn(n){return n%400==0||n%4==0&&n%100!=0}function bn(n){localStorage.getItem("todos")||localStorage.setItem("todos",JSON.stringify(g));const e=document.createElement("ul"),t=function(){const n=localStorage.getItem("todos");return n?JSON.parse(n):g}();t.forEach((n=>{const r=document.createElement("li"),a=function(n,e,t){const r=D(),a=t?.locale??r.locale??M,o=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=W(n,t?.in);if(!tn(s))throw new RangeError("Invalid time value");let d=e.match(an).map((n=>{const e=n[0];return"p"===e||"P"===e?(0,K[e])(n,a.formatLong):n})).join("").match(rn).map((n=>{if("''"===n)return{isToken:!1,value:"'"};const e=n[0];if("'"===e)return{isToken:!1,value:cn(n)};if(Q[e])return{isToken:!0,value:n};if(e.match(dn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:n}}));a.localize.preprocessor&&(d=a.localize.preprocessor(s,d));const c={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return d.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!t?.useAdditionalWeekYearTokens&&function(n){return nn.test(n)}(o)||!t?.useAdditionalDayOfYearTokens&&function(n){return _.test(n)}(o))&&function(n,e,t){const r=function(n,e,t){const r="Y"===n[0]?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(n,e,t);if(console.warn(r),en.includes(n))throw new RangeError(r)}(o,e,String(n)),(0,Q[o[0]])(s,o,a.localize,c)})).join("")}(function(n,e){const t=()=>Y(e?.in,NaN),r=e?.additionalDigits??2,a=function(n){const e={},t=n.split(un.dateTimeDelimiter);let r;if(t.length>2)return e;if(/:/.test(t[0])?r=t[0]:(e.date=t[0],r=t[1],un.timeZoneDelimiter.test(e.date)&&(e.date=n.split(un.timeZoneDelimiter)[0],r=n.substr(e.date.length,n.length))),r){const n=un.timezone.exec(r);n?(e.time=r.replace(n[1],""),e.timezone=n[1]):e.time=r}return e}(n);let o;if(a.date){const n=function(n,e){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=n.match(t);if(!r)return{year:NaN,restDateString:""};const a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:n.slice((r[1]||r[2]).length)}}(a.date,r);o=function(n,e){if(null===e)return new Date(NaN);const t=n.match(ln);if(!t)return new Date(NaN);const r=!!t[4],a=hn(t[1]),o=hn(t[2])-1,i=hn(t[3]),s=hn(t[4]),d=hn(t[5])-1;if(r)return function(n,e,t){return e>=1&&e<=53&&t>=0&&t<=6}(0,s,d)?function(n,e,t){const r=new Date(0);r.setUTCFullYear(n,0,4);const a=7*(e-1)+t+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,s,d):new Date(NaN);{const n=new Date(0);return function(n,e,t){return e>=0&&e<=11&&t>=1&&t<=(pn[e]||(gn(n)?29:28))}(e,o,i)&&function(n,e){return e>=1&&e<=(gn(n)?366:365)}(e,a)?(n.setUTCFullYear(e,o,Math.max(a,i)),n):new Date(NaN)}}(n.restDateString,n.year)}if(!o||isNaN(+o))return t();const i=+o;let s,d=0;if(a.time&&(d=function(n){const e=n.match(mn);if(!e)return NaN;const t=fn(e[1]),r=fn(e[2]),a=fn(e[3]);return function(n,e,t){return 24===n?0===e&&0===t:t>=0&&t<60&&e>=0&&e<60&&n>=0&&n<25}(t,r,a)?t*N+6e4*r+1e3*a:NaN}(a.time),isNaN(d)))return t();if(!a.timezone){const n=new Date(i+d),t=W(0,e?.in);return t.setFullYear(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()),t.setHours(n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds()),t}return s=function(n){if("Z"===n)return 0;const e=n.match(An);if(!e)return 0;const t="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(n,e){return e>=0&&e<=59}(0,a)?t*(r*N+6e4*a):NaN}(a.timezone),isNaN(s)?t():W(i+d+s,e?.in)}(n.dueDate),"yyyy-MM-dd"),o=document.createElement("span");o.textContent=a,o.className="due-date";const i=document.createElement("input");i.type="checkbox",i.checked=n.isCompleted,n.isCompleted&&r.classList.add("completed"),i.addEventListener("change",(()=>{i.checked?(r.classList.add("completed"),n.isCompleted=!0):(r.classList.remove("completed"),n.isCompleted=!1),function(n){localStorage.setItem("todos",JSON.stringify(n))}(t)}));const s=document.createElement("span");s.textContent=n.priority,s.className=`priority ${n.priority}`,n.isCompleted&&s.classList.add("completed"),r.appendChild(i),r.appendChild(o),r.appendChild(document.createTextNode(n.title)),r.appendChild(s),e.appendChild(r)})),n.appendChild(e)}document.addEventListener("DOMContentLoaded",(()=>{const n=function(){const n=document.createElement("div");return n.classList.add("sidebar"),n.innerHTML='\n      <div class="sidebar-header">\n          <button class="toggle-btn"><i class="fas fa-bars"></i></button>\n          <button class="settings-btn"><i class="fas fa-cog"></i></button>\n      </div>\n      \n      <div class="sidebar-content">\n          <div class="user-section dropdown">\n              <div class="dropdown-header">\n                  <i class="fas fa-user"></i>\n                  <span>Username</span>\n              </div>\n          </div>\n\n          <div class="timeline-section dropdown">\n              <div class="dropdown-header">\n                  <i class="fas fa-calendar"></i>\n                  <span>Timeline</span>\n              </div>\n              <div class="dropdown-content">\n                  <div class="menu-item"><i class="fa-solid fa-calendar-day"></i>Today</div>\n                  <div class="menu-item"><i class="fa-solid fa-calendar-week"></i>This Week</div>\n                  <div class="menu-item"><i class="fa-solid fa-calendar-days"></i>This Month</div>\n              </div>\n          </div>\n\n          <div class="categories-section dropdown">\n              <div class="dropdown-header">\n                  <i class="fas fa-tags"></i>\n                  <span>Categories</span>\n              </div>\n              <div class="dropdown-content">\n                  <div class="menu-item"><i class="fas fa-briefcase"></i>Work</div>\n                  <div class="menu-item"><i class="fas fa-book"></i>Study</div>\n                  <div class="menu-item"><i class="fas fa-person"></i>Personal</div>\n                  <div class="menu-item add-category">\n                      <i class="fas fa-plus"></i>Add Category\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class="sidebar-footer">\n          <button class="add-todo-btn">\n              <i class="fas fa-plus"></i>\n              <span>Add New Todo</span>\n          </button>\n      </div>\n  ',n.querySelector(".toggle-btn").addEventListener("click",(()=>{n.classList.toggle("collapsed")})),n.querySelectorAll(".dropdown").forEach((n=>{const e=n.querySelector(".dropdown-header"),t=n.querySelector(".dropdown-content");e&&t&&e.addEventListener("click",(()=>{n.classList.toggle("inactive")}))})),n}();document.body.appendChild(n);const e=document.createElement("div");e.id="main",document.body.appendChild(e),function(n,e){const t=document.createElement("header"),r=document.createElement("h1");r.textContent="Todo List",t.appendChild(r),e.appendChild(t)}(0,e),bn(e)}))})();
//# sourceMappingURL=bundle.js.map