(this["webpackJsonpchord-helper"]=this["webpackJsonpchord-helper"]||[]).push([[0],{108:function(e,n,t){},109:function(e,n,t){"use strict";t.r(n);var r,o,c,i,a,s,l,d=t(0),u=t.n(d),h=t(37),j=t.n(h),b=t(21),f=t(6),g=t(132),m=t(110),O=t(137),p=t(130),x=t(131),v=t(139),C=t(5),U=(t(87),function(e,n,t,r,o){var c=Object(d.useMemo)((function(){return function(e,n){var t;return function(r,o){var c=n(r,o);return c!==r&&(window.clearTimeout(t),t=window.setTimeout((function(){try{localStorage.setItem(e,JSON.stringify(c)),console.log("Written to local storage (version: ".concat(c.version,")"),c)}catch(n){console.error("Couldn't write to local storage.",n)}}),100)),c}}(e,n)}),[e,n]),i=Object(d.useMemo)((function(){return function(e){try{var n=localStorage.getItem(e),t=n&&JSON.parse(n);return console.log("Read from local storage (version: ".concat(null===t||void 0===t?void 0:t.version,")"),t),t}catch(r){console.error("Couldn't read from local storage.",r)}}(e)}),[e]),a=Object(d.useMemo)((function(){return t(null!==i&&void 0!==i?i:r)}),[t,i,r]);return Object(d.useReducer)(c,a,i?void 0:o)}),S={guitar:[{chord:"C",type:"simple",positions:[[5,1],[3,2],[2,3],null],mutedStrings:[1]},{chord:"D",type:"simple",positions:[[4,2],[6,2],[5,3],null],mutedStrings:[1,2]},{chord:"Dmin",type:"simple",positions:[[6,1],[4,2],[5,3],null],mutedStrings:[1,2]},{chord:"E",type:"simple",positions:[[4,1],[2,2],[3,2],null],mutedStrings:[]},{chord:"Emin",type:"simple",positions:[null,[2,2],[3,2],null],mutedStrings:[]},{chord:"F",type:"barre",positions:[[[1,6],1],[4,2],[2,3],[3,3]],mutedStrings:[]},{chord:"G",type:"simple",positions:[[2,2],[1,3],[6,3],null],mutedStrings:[]},{chord:"A",type:"simple",positions:[[3,2],[4,2],[5,2],null],mutedStrings:[1]},{chord:"Amin",type:"simple",positions:[[5,1],[3,2],[4,2],null],mutedStrings:[1]},{chord:"B",type:"barre",positions:[[[2,6],2],[3,4],[4,4],[5,4]],mutedStrings:[1]}]},A=function(e){return e.chordSets},k=t(32),y=t(138),w=t(118),F=t(11),D=t(18),E=t(1),I=t(3),N=Object(E.default)(b.b)(r||(r=Object(D.a)(["\n  &:link,\n  &:visited {\n    color: inherit;\n    text-decoration-color: inherit;\n  }\n"]))),z=function(e){return Object(I.jsx)(N,Object(F.a)({},e))},M=function(){return Object(I.jsxs)(k.a,{align:"center",children:[Object(I.jsx)(w.a,{size:"large"}),Object(I.jsx)(O.a,{level:2,textAlign:"center",children:"Page not found"}),Object(I.jsxs)(y.a,{textAlign:"center",children:["This page doesn't exist. ",Object(I.jsx)(z,{to:"/",children:"Go back."})]})]})},J=function(){return Object(I.jsx)(M,{})},L=t(136),B=t(141),T=t(119),H=t(124),V=t(125),G=t(144),P=t(135),R=t(122),Z=/^\s*([A-G])(#)?(|maj6|dom7|maj7|aug|aug7|min|min6|min7)\s*$/,Q=E.default.span(o||(o=Object(D.a)(["\n  padding-left: ",";\n"])),(function(e){return e.theme.global.borderSize.small})),Y=function(e){var n=e.chord,t=n?function(e){var n,t=null!==(n=Z.exec(e))&&void 0!==n?n:[],r=Object(f.a)(t,4);return r[0],[r[1],r[2],r[3]]}(n):[],r=Object(f.a)(t,3),o=r[0],c=r[1],i=r[2];return Object(I.jsxs)("span",{children:[o||Object(I.jsx)(I.Fragment,{children:"\xa0"}),Object(I.jsx)("sup",{children:c&&"\u266f"}),i&&Object(I.jsx)(Q,{children:i})]})},K=/^\s*([A-G])(#)?(\d)?\s*$/,X=function(e){var n=function(e){var n,t=null!==(n=K.exec(e))&&void 0!==n?n:[],r=Object(f.a)(t,4);return r[0],[r[1],r[2],r[3]]}(e.note),t=Object(f.a)(n,3),r=t[0],o=t[1],c=t[2];return Object(I.jsxs)("span",{children:[r,Object(I.jsx)("sup",{children:o&&"\u266f"}),c&&Object(I.jsx)("sub",{children:c})]})},q=function(e){var n=e.notes;return Object(I.jsx)(I.Fragment,{children:n.map((function(e,n){return Object(I.jsxs)(d.Fragment,{children:[0!==n&&" ",Object(I.jsx)(X,{note:e})]},e)}))})},$=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],_=/^\s*([A-G]#?)(\d)\s*$/,W=function(e){var n,t=null!==(n=_.exec(e))&&void 0!==n?n:[],r=Object(f.a)(t,3),o=(r[0],r[1]),c=r[2];return[o,Number.parseInt(c)]},ee=(Math.pow(2,1/12),function(e,n){var t=$.indexOf(e);return $[(t+n)%12]}),ne={"":[0,4,7],maj6:[0,4,7,9],dom7:[0,4,7,10],maj7:[0,4,7,11],aug:[0,4,8],aug7:[0,4,8,10],min:[0,3,7],min6:[0,3,7,9],min7:[0,3,7,10]},te=/^\s*([A-G]#?)(|maj6|dom7|maj7|aug|aug7|min|min6|min7)\s*$/,re=function(e){var n,t=null!==(n=te.exec(e))&&void 0!==n?n:[],r=Object(f.a)(t,3);r[0];return[r[1],r[2]]},oe=function(e){var n=e.chord,t=e.isEditing,r=e.onRemoveChord,o=n?function(e){var n=re(e),t=Object(f.a)(n,2),r=t[0],o=t[1];return ne[o].map((function(e){return ee(r,e)}))}(n):[];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(T.a,{pad:{horizontal:"medium",vertical:"small"},background:"background-front",border:{side:"right",color:"background-contrast"},children:Object(I.jsx)(O.a,{level:3,size:"medium",color:"accent-1",margin:"none",children:Object(I.jsx)(Y,{chord:n})})}),Object(I.jsxs)(k.a,{direction:"row",pad:{horizontal:"small"},gap:"small",align:"center",children:[Object(I.jsx)(k.a,{pad:{top:"xsmall"},children:Object(I.jsx)(v.a,{children:Object(I.jsx)(q,{notes:o})})}),Object(I.jsx)(G.a,{open:t,direction:"horizontal",children:Object(I.jsx)(P.a,{icon:Object(I.jsx)(R.a,{}),a11yTitle:"Remove chord ".concat(n),onClick:r})})]})]})},ce=t(123),ie={guitar:["E2","A2","D3","G3","B3","E4"],guitalele:["A2","D3","G3","C4","E4","A4"]},ae=Object(E.default)(k.a)(c||(c=Object(D.a)(["\n  width: 36px;\n  height: calc(100% - 12px);\n  justify-self: center;\n  border-radius: 18px;\n"]))),se=Object(E.default)(v.a)(i||(i=Object(D.a)(["\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  text-align: center;\n"]))),le=Object(E.default)(k.a)(a||(a=Object(D.a)(["\n  width: 100%;\n  height: 100%;\n\n  color: ",";\n\n  font-weight: ",";\n\n  "," {\n    display: ",";\n  }\n\n  ","\n\n  ","\n"])),(function(e){var n=e.isStringMuted,t=e.isActive,r=e.theme;return n?r.global.colors["text-xweak"].dark:t?r.global.colors.text.dark:r.global.colors["text-weak"].dark}),(function(e){return e.isActive?"bold":"normal"}),se,(function(e){return e.isVisible?"inline-block":"none"}),(function(e){return e.isVisible&&Object(E.css)(s||(s=Object(D.a)(["\n      & > :nth-child(2) {\n        display: none;\n      }\n    "])))}),(function(e){var n=e.disabled,t=e.isPushed,r=e.theme;return!n&&Object(E.css)(l||(l=Object(D.a)(["\n      cursor: pointer;\n\n      &:hover {\n        "," {\n          display: inline-block;\n\n          background: ",";\n\n          font-weight: bold;\n        }\n\n        & > :nth-child(2) {\n          display: none;\n        }\n      }\n    "])),se,t?r.global.colors["accent-1"]:r.global.colors["background-contrast"].dark)})),de=function(e,n,t,r){return"".concat(n+1,"/").concat(e+1," / ").concat((null!==r&&void 0!==r?r:n)+1+1,"/").concat((null!==t&&void 0!==t?t:e)+1+1)},ue=function(e){var n,t,r,o,c,i=e.instrument,a=void 0===i?"guitar":i,s=e.chord,l=e.chordType,d=void 0===l?"simple":l,u=e.disabled,h=e.highlightedNote,j=e.onHighlightNote,b=null!==(n=s&&(S[a]||[]).filter((function(e){return e.chord===s})))&&void 0!==n?n:[],g=null!==(t=b.filter((function(e){return e.type===d}))[0])&&void 0!==t?t:b[0],m=function(e){return e.map((function(e,n){return{pos:e,fingerIndex:n}})).filter((function(e){return null!=e.pos})).map((function(e){var n=e.pos,t=e.fingerIndex,r=Object(f.a)(n,2),o=r[0],c=r[1],i=Array.isArray(o)?o:[o,o],a=Object(f.a)(i,2);return{startStringId:a[0],endStringId:a[1],fretId:c,fingerIndex:t}}))}(null!==(r=null===g||void 0===g?void 0:g.positions)&&void 0!==r?r:[null,null,null,null]),O=null!==(o=null===g||void 0===g?void 0:g.mutedStrings)&&void 0!==o?o:[],p=m.reduce((function(e,n){var t=n.fretId;return Math.max(e,t)}),4)+1,x=null!==(c=ie[a])&&void 0!==c?c:[null,null,null,null,null,null],v=x.length-1,C=x.map((function(e,n){return{gridArea:de(1,v-n,p,v-n),isMuted:O.includes(n+1)}})),U=new Array(p).fill(void 0).map((function(e,n){return{gridArea:de(n,0,n,v),isStart:0===n}})),A=m.map((function(e){var n=e.startStringId,t=e.endStringId,r=e.fretId,o=e.fingerIndex;return{gridArea:de(r,v-(t-1),r,v-(n-1)),finger:o+1}})),y=x.map((function(e,n){var t=n+1,r=O.includes(t);return new Array(p).fill(void 0).map((function(o,c){var i=!!m.find((function(e){var n=e.startStringId,r=e.endStringId,o=e.fretId;return t>=n&&t<=r&&c===o})),a=function(e,n){var t=W(e),r=Object(f.a)(t,2),o=r[0],c=r[1];return function(e,n){return"".concat(e).concat(n)}(ee(o,n),c+Math.sign(n)*Math.floor(Math.abs(n)/12))}(e,c),s=W(a),l=Object(f.a)(s,1)[0];return{gridArea:de(c,v-n),isStringMuted:r,isVisible:i||0===c,isActive:i,isPushed:i&&0!==c,isHighlighted:!u&&h===l,note:a,noteName:l}}))}));return Object(I.jsxs)(B.a,{columns:Array(p).fill("1fr"),rows:Array(v+1).fill("xxsmall"),gap:{row:"xxsmall"},children:[C.map((function(e){var n=e.gridArea,t=e.isMuted;return Object(I.jsx)(k.a,{gridArea:n,background:t?void 0:"background-contrast",border:[{side:"bottom",color:"background-contrast",size:"small"}]},n)})),U.map((function(e){var n=e.gridArea,t=e.isStart;return Object(I.jsx)(k.a,{gridArea:n,border:{side:"right",color:"text",size:t?"small":"xsmall"}},n)})),A.map((function(e){var n=e.gridArea;e.finger;return Object(I.jsx)(ae,{gridArea:n,alignSelf:"center",background:{dark:"border"}},n)})),y.map((function(e){return e.map((function(e){var n=e.isStringMuted,t=e.isVisible,r=e.isActive,o=e.isPushed,c=e.isHighlighted,i=e.note,a=e.noteName,s=e.gridArea;return Object(I.jsxs)(le,{gridArea:s,align:"center",justify:"center",disabled:u,isStringMuted:n,isVisible:t||c,isActive:r||c,isPushed:o,onClick:!u&&j?function(){return j(c?void 0:a)}:void 0,children:[Object(I.jsx)(se,{textAlign:"center",children:Object(I.jsx)(X,{note:i})}),n&&Object(I.jsx)(ce.a,{size:"small"})]},s)}))}))]})},he=function(e){var n=e.chord,t=e.isEditing,r=e.highlightedNote,o=e.onRemoveChord,c=e.onHighlightNote;return Object(I.jsxs)(T.a,{background:"background-back",width:"500px",children:[Object(I.jsx)(H.a,{background:"background-contrast",border:{side:"bottom",color:"background-contrast"},justify:"between",children:Object(I.jsx)(oe,{chord:n,isEditing:t||!1,onRemoveChord:n&&o&&function(){return o(n)}})}),Object(I.jsx)(V.a,{pad:"small",border:{side:"top",color:"background-contrast"},children:Object(I.jsx)(ue,{chord:n,disabled:t||!1,highlightedNote:r,onHighlightNote:c})})]})},je=t(140),be=t(126),fe=function(){return Object(I.jsxs)(je.a,{fill:!0,interactiveChild:"last",children:[Object(I.jsx)(he,{}),Object(I.jsxs)(k.a,{fill:!0,align:"center",justify:"center",gap:"large",background:{color:"background",opacity:"strong"},border:{color:"border-semi"},children:[Object(I.jsx)(be.a,{size:"large",color:"accent-1"}),Object(I.jsx)(v.a,{size:"large",textAlign:"center",color:"accent-1",children:"Add a chord to start"})]})]})},ge=function(e){var n=e.chords,t=e.isEditing,r=e.onRemoveChord,o=Object(d.useState)(),c=Object(f.a)(o,2),i=c[0],a=c[1];return Object(I.jsx)(B.a,{columns:"medium",gap:"small",justify:"center",children:0!==n.length?n.map((function(e){return Object(I.jsx)(he,{chord:e,isEditing:t,highlightedNote:i,onRemoveChord:r,onHighlightNote:a},e)})):Object(I.jsx)(fe,{})})},me=t(133),Oe=t(128),pe=t(129),xe=function(e){var n=e.chords,t=e.isEditing,r=e.onAddChord,o=e.onIsEditingChange,c=Object(d.useState)(""),i=Object(f.a)(c,2),a=i[0],s=i[1],l=Object(d.useMemo)((function(){return n.map((function(e){return{label:e,value:e}})).filter((function(e){return e.label.toLowerCase().includes(a.toLowerCase())}))}),[n,a]),u=Object(d.useCallback)((function(e){var n=e.value;s(""),r(n)}),[r]);return Object(I.jsxs)(k.a,{direction:"row",gap:"small",justify:"end",align:"center",children:[Object(I.jsx)(G.a,{open:t,direction:"horizontal",children:Object(I.jsx)(me.a,{icon:Object(I.jsx)(be.a,{}),options:l,valueKey:{key:"value",reduce:!0},labelKey:function(e){return e.label},closeOnChange:!1,placeholder:"Add chords",searchPlaceholder:"Search by name",a11yTitle:"Select chords to add",onSearch:s,onChange:u})}),Object(I.jsx)(P.a,{icon:Object(I.jsxs)(k.a,{direction:"row",children:[Object(I.jsx)(G.a,{open:t,direction:"horizontal",children:Object(I.jsx)(Oe.a,{})}),Object(I.jsx)(G.a,{open:!t,direction:"horizontal",children:Object(I.jsx)(pe.a,{})})]}),a11yTitle:t?"Done adding/removing chords":"Add/remove chords",primary:t,onClick:function(){return o(!t)}})]})},ve=function(e){var n=e.name,t=e.description,r=e.selectedChords,o=e.availableChords,c=e.onSetName,i=e.onSetDescription,a=e.onAddChord,s=e.onRemoveChord,l=Object(d.useState)(!1),u=Object(f.a)(l,2),h=u[0],j=u[1],b=o.filter((function(e){return r.indexOf(e)<0}));return Object(I.jsxs)(k.a,{gap:"medium",children:[Object(I.jsxs)(k.a,{direction:"row",align:"start",gap:"small",children:[Object(I.jsxs)(k.a,{width:"100%",children:[Object(I.jsx)(O.a,{level:2,size:"small",margin:{vertical:"small"},children:h?Object(I.jsx)(L.a,{plain:"full",value:n,placeholder:"Enter name",onChange:function(e){return c(e.target.value)}}):n||Object(I.jsx)("em",{children:"No name"})}),Object(I.jsx)(v.a,{children:h?Object(I.jsx)(L.a,{plain:"full",value:t,placeholder:"Enter description",onChange:function(e){return i(e.target.value)}}):t||Object(I.jsx)("em",{children:"No description"})})]}),Object(I.jsx)(xe,{chords:b,isEditing:h,onAddChord:a,onIsEditingChange:j})]}),Object(I.jsx)(ge,{chords:r,isEditing:h,onRemoveChord:s})]})},Ce=function(e){var n=e.state,t=e.dispatch,r=Object(C.g)().chordSetId,o=Number.parseInt(r),c=function(e){return function(n){return A(n)[e]}}(o)(n),i=function(){var e;return(null!==(e=S.guitar)&&void 0!==e?e:[]).map((function(e){return e.chord}))}(),a=Object(d.useCallback)((function(e){return t(function(e,n){return{type:"setChordSetName",chordSetIndex:e,newName:n}}(o,e))}),[o,t]),s=Object(d.useCallback)((function(e){return t(function(e,n){return{type:"setChordSetDescription",chordSetIndex:e,newDescription:n}}(o,e))}),[o,t]),l=Object(d.useCallback)((function(e){return t(function(e,n){return{type:"addChordToSet",chordSetIndex:e,chordToAdd:n}}(o,e))}),[o,t]),u=Object(d.useCallback)((function(e){return t(function(e,n){return{type:"removeChordFromSet",chordSetIndex:e,chordToRemove:n}}(o,e))}),[o,t]);if(!c)return Object(I.jsx)(J,{});var h=c.name,j=c.description,b=c.selectedChords;return Object(I.jsx)(ve,{name:h,description:j,selectedChords:b,availableChords:i,onSetName:a,onSetDescription:s,onAddChord:l,onRemoveChord:u})},Ue=function(e){var n=e.chord;return Object(I.jsx)(T.a,{background:"background-front",pad:{horizontal:"xsmall",vertical:"xxsmall"},children:Object(I.jsx)(v.a,{size:"medium",color:"accent-1",children:Object(I.jsx)(Y,{chord:n})})})},Se=function(e){var n=e.chordSetIndex,t=void 0===n?-1:n,r=e.name,o=void 0===r?"":r,c=e.description,i=void 0===c?"":c,a=e.selectedChords,s=void 0===a?[]:a;return Object(I.jsxs)(T.a,{background:"background-back",fill:!0,border:{color:"border-brand"},children:[Object(I.jsx)(z,{to:"/chord-sets/".concat(t),children:Object(I.jsx)(H.a,{pad:"small",background:"background-contrast",border:{side:"bottom",color:"background-contrast"},children:Object(I.jsx)(O.a,{level:3,size:"small",margin:"none",color:"brand",children:o})})}),Object(I.jsxs)(V.a,{pad:"small",gap:"small",border:{side:"top",color:"background-contrast"},children:[i,Object(I.jsx)(k.a,{direction:"row",align:"start",wrap:!0,gap:"xsmall",children:s.map((function(e){return Object(I.jsx)(Ue,{chord:e})}))})]})]})},Ae=function(){return Object(I.jsxs)(je.a,{fill:!0,interactiveChild:"last",children:[Object(I.jsx)(Se,{}),Object(I.jsxs)(k.a,{fill:!0,align:"center",justify:"center",gap:"medium",height:{min:"150px"},background:{color:"background",opacity:"strong"},border:{color:"border-brand-semi"},children:[Object(I.jsx)(be.a,{size:"large",color:"accent-1"}),Object(I.jsx)(v.a,{size:"large",textAlign:"center",color:"accent-1",children:"Add your first chord set"})]})]})},ke=function(e){var n=e.chordSets;return Object(I.jsx)(B.a,{columns:"medium",gap:"small",justify:"center",children:0!==n.length?n.map((function(e,n){var t=e.name,r=e.description,o=e.selectedChords;return Object(I.jsx)(Se,{chordSetIndex:n,name:t,description:r,selectedChords:o},n)})):Object(I.jsx)(Ae,{})})},ye=function(e){var n=e.chordSets;return Object(I.jsxs)(k.a,{gap:"medium",children:[Object(I.jsxs)(k.a,{children:[Object(I.jsx)(O.a,{level:2,size:"small",margin:{vertical:"small"},children:"My chord sets"}),Object(I.jsx)(v.a,{children:"My favourite songs compositions."})]}),Object(I.jsx)(ke,{chordSets:n})]})},we=function(e){var n=e.state,t=A(n);return Object(I.jsx)(ye,{chordSets:t})},Fe=t(43),De=t(77),Ee=[function(e){return Object(F.a)({version:1},e)},function(e){e.version;var n=Object(De.a)(e,["version"]);return{version:2,chordSets:[Object(F.a)({name:"",description:""},n)]}}],Ie={version:2,chordSets:[{name:"Example: Leaving on a Jet Plane",description:"Example chordset for John Denver's Leaving on a Jet Plane",selectedChords:["G","C","D"]}]},Ne=function(e){for(var n=e.version,t=null!==n&&void 0!==n?n:0;t<Ie.version;t++){e=(0,Ee[t])(e),console.log("Migrated from version ".concat(t," \u2192 ").concat(t+1),e)}return e},ze=function(e,n){switch(n.type){case"setChordSetName":return Object(F.a)(Object(F.a)({},e),{},{name:n.newName});case"setChordSetDescription":return Object(F.a)(Object(F.a)({},e),{},{description:n.newDescription});case"addChordToSet":var t=n.chordToAdd;return e.selectedChords.find((function(e){return e===t}))?e:Object(F.a)(Object(F.a)({},e),{},{selectedChords:[].concat(Object(Fe.a)(e.selectedChords),[t])});case"removeChordFromSet":var r=n.chordToRemove;return e.selectedChords.find((function(e){return e===r}))?Object(F.a)(Object(F.a)({},e),{},{selectedChords:e.selectedChords.filter((function(e){return e!==r}))}):e;default:return e}},Me=function(e,n){switch(n.type){case"setChordSetName":case"setChordSetDescription":case"addChordToSet":case"removeChordFromSet":var t=n.chordSetIndex,r=ze(e.chordSets[t],n);return e.chordSets[t]&&r!==e.chordSets[t]?Object(F.a)(Object(F.a)({},e),{},{chordSets:[].concat(Object(Fe.a)(e.chordSets.slice(0,t)),[r],Object(Fe.a)(e.chordSets.slice(t+1)))}):e;default:return e}},Je=t(76),Le=t(75),Be="#d1ad70",Te="#87ccb0",He=Object(Le.deepMerge)(Je.grommet,{global:{colors:{background:"#010115","background-back":{dark:"#080920"},"background-front":{dark:"#15173d"},"background-contrast":{dark:"#3f438a17"},black:"#00010d",white:"#fff9ef",brand:Te,"accent-1":Be,border:{dark:"".concat(Be,"80")},"border-semi":{dark:"".concat(Be,"40")},"border-brand":{dark:"".concat(Te,"80")},"border-brand-semi":{dark:"".concat(Te,"40")}},font:{family:'"Josefin Sans"',face:"/* vietnamese */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMlhLzTs.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMhhLzTs.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMZhLw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoNOlHnnY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoOulH.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin-ext */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoNOlHnnY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoOulH.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},heading:{font:{family:'"Limelight"'}},button:{border:{radius:"3px"}},card:{container:{border:"solid",round:"xxsmall",elevation:null}}});var Ve=function(){var e=U("applicationState",Me,Ne,Ie),n=Object(f.a)(e,2),t=n[0],r=n[1];return Object(I.jsxs)(g.a,{full:!0,theme:He,themeMode:"dark",children:[Object(I.jsx)(m.a,{pad:{vertical:"medium",horizontal:"large"},background:"brand",children:Object(I.jsx)(O.a,{size:"small",margin:"none",children:Object(I.jsx)(z,{to:"/",children:"Chord Helper"})})}),Object(I.jsx)(p.a,{pad:"large",fill:!0,children:Object(I.jsxs)(C.c,{children:[Object(I.jsx)(C.a,{path:"/",element:Object(I.jsx)(we,{state:t,dispatch:r})}),Object(I.jsx)(C.a,{path:"chord-sets/:chordSetId",element:Object(I.jsx)(Ce,{state:t,dispatch:r})}),Object(I.jsx)(C.a,{path:"*",element:Object(I.jsx)(J,{})})]})}),Object(I.jsx)(x.a,{pad:{vertical:"small",horizontal:"large"},background:"black",justify:"center",children:Object(I.jsx)(v.a,{color:"text-xweak",children:"Helping you with chords since 2021."})})]})},Ge=(t(108),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,146)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),c(e),i(e)}))});j.a.render(Object(I.jsx)(u.a.StrictMode,{children:Object(I.jsx)(b.a,{basename:"chord-helper",children:Object(I.jsx)(Ve,{})})}),document.getElementById("root")),Ge()},87:function(e,n,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.f0e74ddb.chunk.js.map