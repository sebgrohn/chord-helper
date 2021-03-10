(this["webpackJsonpchord-helper"]=this["webpackJsonpchord-helper"]||[]).push([[0],{66:function(n,e,t){},67:function(n,e,t){},86:function(n,e,t){"use strict";t.r(e);var r,o,c,a,i,l,s,u=t(0),d=t.n(u),f=t(25),h=t.n(f),b=(t(66),t(6)),g=t(111),m=t(87),j=t(112),O=t(105),U=t(106),v=t(113),x=(t(67),t(114)),p=t(96),C=t(103),k=t(104),F=t(20),w=t(110),A=t(109),y=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],D=/^\s*([A-G]#?)(\d)\s*$/,S=function(n){var e,t=null!==(e=D.exec(n))&&void 0!==e?e:[],r=Object(b.a)(t,3),o=(r[0],r[1]),c=r[2];return[o,Number.parseInt(c)]},E=(Math.pow(2,1/12),function(n,e){var t=y.indexOf(n);return y[(t+e)%12]}),L={"":[0,4,7],maj6:[0,4,7,9],dom7:[0,4,7,10],maj7:[0,4,7,11],aug:[0,4,8],aug7:[0,4,8,10],min:[0,3,7],min6:[0,3,7,9],min7:[0,3,7,10]},B=/^\s*([A-G]#?)(|maj6|dom7|maj7|aug|aug7|min|min6|min7)\s*$/,J=function(n){var e,t=null!==(e=B.exec(n))&&void 0!==e?e:[],r=Object(b.a)(t,3);r[0];return[r[1],r[2]]},N=t(10),M=t(1),H=t(2),V=/^\s*([A-G])(#)?(|maj6|dom7|maj7|aug|aug7|min|min6|min7)\s*$/,z=M.default.span(r||(r=Object(N.a)(["\n  padding-left: ",";\n"])),(function(n){return n.theme.global.borderSize.small})),G=function(n){var e=function(n){var e,t=null!==(e=V.exec(n))&&void 0!==e?e:[],r=Object(b.a)(t,4);return r[0],[r[1],r[2],r[3]]}(n.chord),t=Object(b.a)(e,3),r=t[0],o=t[1],c=t[2];return Object(H.jsxs)("span",{children:[r,Object(H.jsx)("sup",{children:o&&"\u266f"}),c&&Object(H.jsx)(z,{children:c})]})},I=/^\s*([A-G])(#)?(\d)?\s*$/,Z=function(n){var e=function(n){var e,t=null!==(e=I.exec(n))&&void 0!==e?e:[],r=Object(b.a)(t,4);return r[0],[r[1],r[2],r[3]]}(n.note),t=Object(b.a)(e,3),r=t[0],o=t[1],c=t[2];return Object(H.jsxs)("span",{children:[r,Object(H.jsx)("sup",{children:o&&"\u266f"}),c&&Object(H.jsx)("sub",{children:c})]})},P=function(n){var e=n.chord,t=n.onRemoveChord;if(!e)return null;var r=function(n){var e=J(n),t=Object(b.a)(e,2),r=t[0],o=t[1];return L[o].map((function(n){return E(r,n)}))}(e);return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(p.a,{pad:{horizontal:"medium",vertical:"small"},background:"background-front",border:{side:"right",color:"background-contrast"},children:Object(H.jsx)(j.a,{level:2,size:"small",color:"accent-1",margin:"none",children:Object(H.jsx)(G,{chord:e})})}),Object(H.jsx)(F.a,{pad:{horizontal:"medium",vertical:"small"},direction:"row",gap:"small",children:r.map((function(n){return Object(H.jsx)(v.a,{children:Object(H.jsx)(Z,{note:n})},n)}))}),Object(H.jsx)(F.a,{pad:{horizontal:"medium",vertical:"small"},children:Object(H.jsx)(w.a,{a11yTitle:"Remove chord ".concat(e),onClick:t,children:Object(H.jsx)(F.a,{children:Object(H.jsx)(A.a,{})})})})]})},Q=t(13),R={guitar:{C:[null,3,2,0,1,0],D:[null,null,0,2,3,2],Dmin:[null,null,0,2,3,1],E:[0,2,2,1,0,0],Emin:[0,2,2,0,0,0],G:[3,2,0,0,0,3],A:[null,0,2,2,2,0],Amin:[null,0,2,2,1,0],B:[null,2,4,4,4,2]},guitalele:{}},Y={guitar:["E2","A2","D3","G3","B3","E4"],guitalele:["A2","D3","G3","C4","E4","A4"]},K=M.default.table(o||(o=Object(N.a)(["\n  box-sizing: border-box;\n\n  cursor: pointer;\n  user-select: none;\n\n  width: 100%;\n  height: 100%;\n\n  text-align: center;\n\n  td {\n    min-width: 36px;\n    height: 36px;\n\n    border-bottom: "," solid\n      ",";\n    border-right: "," solid\n      ",";\n\n    &:first-child {\n      min-width: 24px;\n      border-right-width: ",";\n\n      background: inherit;\n    }\n  }\n\n  tr:last-child > td,\n  td:first-child {\n    border-bottom: none;\n  }\n"])),(function(n){return n.theme.global.borderSize.xsmall}),(function(n){return n.theme.global.colors["background-contrast"].dark}),(function(n){return n.theme.global.borderSize.xsmall}),(function(n){return n.theme.global.colors.text.dark}),(function(n){return n.theme.global.borderSize.small})),T=M.default.div(c||(c=Object(N.a)(["\n  width: 34px;\n  height: 34px;\n  border-radius: 18px;\n  text-align: center;\n"]))),X=M.default.td(a||(a=Object(N.a)(["\n  ","\n\n  font-weight: ",";\n\n  "," {\n    display: ",";\n\n    background: ",";\n  }\n\n  ","\n\n  &:hover {\n    "," {\n      display: inline-block;\n\n      background: ",";\n\n      font-weight: bold;\n    }\n\n    & > :nth-child(2) {\n      display: none;\n    }\n  }\n"])),(function(n){var e=n.isStringMuted,t=n.isActive,r=n.theme;return e?Object(M.css)(i||(i=Object(N.a)(["\n          color: ",";\n        "])),r.global.colors["text-xweak"].dark):Object(M.css)(l||(l=Object(N.a)(["\n          background: ",";\n          color: ",";\n        "])),r.global.colors["background-contrast"].dark,t?r.global.colors.text.dark:r.global.colors["text-weak"].dark)}),(function(n){return n.isActive?"bold":"normal"}),T,(function(n){return n.isVisible?"inline-block":"none"}),(function(n){var e=n.isPushed,t=n.theme;return e?t.global.colors.border.dark:"transparent"}),(function(n){return n.isVisible&&Object(M.css)(s||(s=Object(N.a)(["\n      & > :nth-child(2) {\n        display: none;\n      }\n    "])))}),T,(function(n){var e=n.isPushed,t=n.theme;return e?t.global.colors["accent-1"]:t.global.colors["background-contrast"].dark})),q=function(n){var e,t=n.instrument,r=void 0===t?"guitar":t,o=n.chord,c=n.highlightedNote,a=n.onHighlightNote,i=R[r],l=o&&o in i&&i[o]||[null,null,null,null,null,null],s=Object(Q.a)(l).reverse(),u=l.map((function(n){return null!==n&&void 0!==n?n:0})).reduce((function(n,e){return n>e?n:e}),4)+1,d=null!==(e=Y[r])&&void 0!==e?e:[null,null,null,null,null,null],f=Object(Q.a)(d).reverse(),h=s.map((function(n,e){return new Array(u).fill(void 0).map((function(t,r){var o=function(n,e){var t=S(n),r=Object(b.a)(t,2),o=r[0],c=r[1];return function(n,e){return"".concat(n).concat(e)}(E(o,e),c+Math.sign(e)*Math.floor(Math.abs(e)/12))}(f[e],r),a=S(o),i=Object(b.a)(a,1)[0];return{isStringMuted:null===n,isVisible:r===n||0===r,isActive:r===n,isPushed:r===n&&0!==r,isHighlighted:c===i,note:o,noteName:i}}))}));return Object(H.jsx)(K,{children:Object(H.jsx)("tbody",{children:h.map((function(n,e){return Object(H.jsx)("tr",{children:n.map((function(n){var t=n.isStringMuted,r=n.isVisible,o=n.isActive,c=n.isPushed,i=n.isHighlighted,l=n.note,s=n.noteName;return Object(H.jsxs)(X,{isStringMuted:t,isVisible:r||i,isActive:o||i,isPushed:c,onClick:function(){return a(i?void 0:s)},children:[Object(H.jsx)(T,{children:Object(H.jsx)(Z,{note:l})}),t&&!r&&Object(H.jsx)(v.a,{children:"\ud83d\udfa9"})]},"".concat(e).concat(l))}))},e)}))})})},$=function(n){var e=n.chord,t=n.highlightedNote,r=n.onRemoveChord,o=n.onHighlightNote;return Object(H.jsxs)(p.a,{background:"background-back",width:"500px",children:[Object(H.jsx)(C.a,{background:"background-contrast",border:{side:"bottom",color:"background-contrast"},justify:"between",children:Object(H.jsx)(P,{chord:e,onRemoveChord:function(){return r(e)}})}),Object(H.jsx)(k.a,{pad:"small",border:{side:"top",color:"background-contrast"},children:Object(H.jsx)(q,{chord:e,highlightedNote:t,onHighlightNote:o})})]})},_=function(n){var e=n.chords,t=n.onRemoveChord,r=Object(u.useState)(),o=Object(b.a)(r,2),c=o[0],a=o[1];return Object(H.jsx)(x.a,{columns:"medium",gap:"small",justify:"center",children:e.map((function(n){return Object(H.jsx)($,{chord:n,highlightedNote:c,onRemoveChord:t,onHighlightNote:a},n)}))})},W=t(107),nn=function(n){var e=n.chords,t=n.onAddChord,r=Object(u.useState)(""),o=Object(b.a)(r,2),c=o[0],a=o[1],i=Object(u.useMemo)((function(){return e.map((function(n){return{label:n,value:n}})).filter((function(n){return n.label.toLowerCase().includes(c.toLowerCase())}))}),[e,c]),l=Object(u.useCallback)((function(n){var e=n.value;a(""),t(e)}),[t]);return Object(H.jsx)(W.a,{options:i,valueKey:{key:"value",reduce:!0},labelKey:function(n){return n.label},closeOnChange:!1,placeholder:"Add chords",searchPlaceholder:"Search by name",onSearch:a,onChange:l})},en=function(n,e,t,r){var o=Object(u.useMemo)((function(){return function(n,e){var t;return function(r,o){var c=e(r,o);return c!==r&&(window.clearTimeout(t),t=window.setTimeout((function(){try{localStorage.setItem(n,JSON.stringify(c)),console.log("Written to local storage",c)}catch(e){console.error("Couldn't write to local storage.",e)}}),100)),c}}(n,e)}),[n,e]),c=Object(u.useMemo)((function(){return function(n,e){try{var t=localStorage.getItem(n),r=t&&JSON.parse(t);return console.log("Read from local storage",r),r}catch(o){console.error("Couldn't read from local storage.",o)}}(n)}),[n,t]);return Object(u.useReducer)(o,null!==c&&void 0!==c?c:t,c?void 0:r)},tn=t(19),rn={selectedChords:["D"]},on=function(n,e){switch(e.type){case"addChord":return n.selectedChords.find((function(n){return n===e.chord}))?n:Object(tn.a)(Object(tn.a)({},n),{},{selectedChords:[].concat(Object(Q.a)(n.selectedChords),[e.chord])});case"removeChord":return n.selectedChords.find((function(n){return n===e.chord}))?Object(tn.a)(Object(tn.a)({},n),{},{selectedChords:Object(Q.a)(n.selectedChords.filter((function(n){return n!==e.chord})))}):n;default:throw new Error}},cn=function(n){return n.selectedChords},an=t(58),ln=t(57),sn=Object(ln.deepMerge)(an.grommet,{global:{colors:{background:"#010115","background-back":{dark:"#080920"},"background-front":{dark:"#15173d"},"background-contrast":{dark:"#3f438a17"},black:"#00010d",white:"#fff9ef",brand:"#87ccb0","accent-1":"#d1ad70",border:{dark:"#d1ad7080"}},font:{family:'"Josefin Sans"',face:"/* vietnamese */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMlhLzTs.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMhhLzTs.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMZhLw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoNOlHnnY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoOulH.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin-ext */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoNOlHnnY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoOulH.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},heading:{font:{family:'"Limelight"'}},card:{container:{border:"solid",round:"xxsmall",elevation:null}}});var un=function(){var n=en("applicationState",on,rn),e=Object(b.a)(n,2),t=e[0],r=e[1],o=cn(t),c=function(n){var e=cn(n);return Object.keys(R.guitar).filter((function(n){return e.indexOf(n)<0}))}(t),a=Object(u.useCallback)((function(n){return r({type:"addChord",chord:n})}),[r]),i=Object(u.useCallback)((function(n){return r({type:"removeChord",chord:n})}),[r]);return Object(H.jsxs)(g.a,{full:!0,theme:sn,themeMode:"dark",children:[Object(H.jsx)(m.a,{pad:{vertical:"medium",horizontal:"large"},background:"brand",children:Object(H.jsx)(j.a,{size:"small",margin:"none",children:"Chord Helper"})}),Object(H.jsxs)(O.a,{pad:"large",gap:"medium",children:[Object(H.jsx)(nn,{chords:c,onAddChord:a}),Object(H.jsx)(_,{chords:o,onRemoveChord:i})]}),Object(H.jsx)(U.a,{pad:{vertical:"small",horizontal:"large"},background:"black",justify:"center",children:Object(H.jsx)(v.a,{color:"text-xweak",children:"Helping you with chords since 2021."})})]})},dn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,115)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),c(n),a(n)}))};h.a.render(Object(H.jsx)(d.a.StrictMode,{children:Object(H.jsx)(un,{})}),document.getElementById("root")),dn()}},[[86,1,2]]]);
//# sourceMappingURL=main.4bc21755.chunk.js.map