(this["webpackJsonpchord-helper"]=this["webpackJsonpchord-helper"]||[]).push([[0],{108:function(e,n,t){},109:function(e,n,t){"use strict";t.r(n);var r,o,c,i,a,s,d,l=t(0),u=t.n(l),j=t(37),h=t.n(j),b=t(22),f=t(6),m=t(132),g=t(110),O=t(137),x=t(130),p=t(131),v=t(139),C=t(5),S=(t(87),t(10)),U=t(18),A=t(1),k=t(3),y=Object(A.default)(b.b)(r||(r=Object(U.a)(["\n  &:link,\n  &:visited {\n    color: inherit;\n    text-decoration-color: inherit;\n  }\n"]))),w=function(e){return Object(k.jsx)(y,Object(S.a)({},e))},F=function(e,n,t,r,o){var c=Object(l.useMemo)((function(){return function(e,n){var t;return function(r,o){var c=n(r,o);return c!==r&&(window.clearTimeout(t),t=window.setTimeout((function(){try{localStorage.setItem(e,JSON.stringify(c)),console.log("Written to local storage (version: ".concat(c.version,")"),c)}catch(n){console.error("Couldn't write to local storage.",n)}}),100)),c}}(e,n)}),[e,n]),i=Object(l.useMemo)((function(){return function(e){try{var n=localStorage.getItem(e),t=n&&JSON.parse(n);return console.log("Read from local storage (version: ".concat(null===t||void 0===t?void 0:t.version,")"),t),t}catch(r){console.error("Couldn't read from local storage.",r)}}(e)}),[e]),a=Object(l.useMemo)((function(){return t(null!==i&&void 0!==i?i:r)}),[t,i,r]);return Object(l.useReducer)(c,a,i?void 0:o)},E={guitar:[{chord:"C",type:"simple",positions:[[5,1],[3,2],[2,3],null],mutedStrings:[1]},{chord:"D",type:"simple",positions:[[4,2],[6,2],[5,3],null],mutedStrings:[1,2]},{chord:"Dmin",type:"simple",positions:[[6,1],[4,2],[5,3],null],mutedStrings:[1,2]},{chord:"E",type:"simple",positions:[[4,1],[2,2],[3,2],null],mutedStrings:[]},{chord:"Emin",type:"simple",positions:[null,[2,2],[3,2],null],mutedStrings:[]},{chord:"F",type:"barre",positions:[[[1,6],1],[4,2],[2,3],[3,3]],mutedStrings:[]},{chord:"G",type:"simple",positions:[[2,2],[1,3],[6,3],null],mutedStrings:[]},{chord:"A",type:"simple",positions:[[3,2],[4,2],[5,2],null],mutedStrings:[1]},{chord:"Amin",type:"simple",positions:[[5,1],[3,2],[4,2],null],mutedStrings:[1]},{chord:"B",type:"barre",positions:[[[2,6],2],[3,4],[4,4],[5,4]],mutedStrings:[1]}]},I=function(e){return e.chordSets},D=t(32),z=t(138),N=t(118),M=function(){return Object(k.jsxs)(D.a,{align:"center",children:[Object(k.jsx)(N.a,{size:"large"}),Object(k.jsx)(O.a,{level:2,textAlign:"center",children:"Page not found"}),Object(k.jsxs)(z.a,{textAlign:"center",children:["This page doesn't exist. ",Object(k.jsx)(w,{to:"/",children:"Go back."})]})]})},T=function(){return Object(k.jsx)(M,{})},J=t(142),L=t(136),R=t(141),B=t(119),H=t(124),V=t(125),G=t(144),P=t(135),Z=t(122),Q=/^\s*([A-G])(#)?(|maj6|dom7|maj7|aug|aug7|min|min6|min7)\s*$/,Y=A.default.span(o||(o=Object(U.a)(["\n  padding-left: ",";\n"])),(function(e){return e.theme.global.borderSize.small})),K=function(e){var n=e.chord,t=n?function(e){var n,t=null!==(n=Q.exec(e))&&void 0!==n?n:[],r=Object(f.a)(t,4);return r[0],[r[1],r[2],r[3]]}(n):[],r=Object(f.a)(t,3),o=r[0],c=r[1],i=r[2];return Object(k.jsxs)("span",{children:[o||Object(k.jsx)(k.Fragment,{children:"\xa0"}),Object(k.jsx)("sup",{children:c&&"\u266f"}),i&&Object(k.jsx)(Y,{children:i})]})},X=/^\s*([A-G])(#)?(\d)?\s*$/,q=function(e){var n=function(e){var n,t=null!==(n=X.exec(e))&&void 0!==n?n:[],r=Object(f.a)(t,4);return r[0],[r[1],r[2],r[3]]}(e.note),t=Object(f.a)(n,3),r=t[0],o=t[1],c=t[2];return Object(k.jsxs)("span",{children:[r,Object(k.jsx)("sup",{children:o&&"\u266f"}),c&&Object(k.jsx)("sub",{children:c})]})},$=function(e){var n=e.notes;return Object(k.jsx)(k.Fragment,{children:n.map((function(e,n){return Object(k.jsxs)(l.Fragment,{children:[0!==n&&" ",Object(k.jsx)(q,{note:e})]},e)}))})},_=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],W=/^\s*([A-G]#?)(\d)\s*$/,ee=function(e){var n,t=null!==(n=W.exec(e))&&void 0!==n?n:[],r=Object(f.a)(t,3),o=(r[0],r[1]),c=r[2];return[o,Number.parseInt(c)]},ne=(Math.pow(2,1/12),function(e,n){var t=_.indexOf(e);return _[(t+n)%12]}),te={"":[0,4,7],maj6:[0,4,7,9],dom7:[0,4,7,10],maj7:[0,4,7,11],aug:[0,4,8],aug7:[0,4,8,10],min:[0,3,7],min6:[0,3,7,9],min7:[0,3,7,10]},re=/^\s*([A-G]#?)(|maj6|dom7|maj7|aug|aug7|min|min6|min7)\s*$/,oe=function(e){var n,t=null!==(n=re.exec(e))&&void 0!==n?n:[],r=Object(f.a)(t,3);r[0];return[r[1],r[2]]},ce=function(e){var n=e.chord,t=e.isEditing,r=e.onRemove,o=n?function(e){var n=oe(e),t=Object(f.a)(n,2),r=t[0],o=t[1];return te[o].map((function(e){return ne(r,e)}))}(n):[];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(B.a,{pad:{horizontal:"medium",vertical:"small"},background:"background-front",border:{side:"right",color:"background-contrast"},children:Object(k.jsx)(O.a,{level:3,size:"medium",color:"accent-1",margin:"none",children:Object(k.jsx)(K,{chord:n})})}),Object(k.jsxs)(D.a,{direction:"row",pad:{horizontal:"small"},gap:"small",align:"center",children:[Object(k.jsx)(D.a,{pad:{top:"xsmall"},children:Object(k.jsx)(v.a,{children:Object(k.jsx)($,{notes:o})})}),Object(k.jsx)(G.a,{open:t,direction:"horizontal",children:Object(k.jsx)(P.a,{icon:Object(k.jsx)(Z.a,{}),a11yTitle:"Remove chord ".concat(n),onClick:r})})]})]})},ie=t(123),ae={guitar:["E2","A2","D3","G3","B3","E4"],guitalele:["A2","D3","G3","C4","E4","A4"]},se=Object(A.default)(D.a)(c||(c=Object(U.a)(["\n  width: 36px;\n  height: calc(100% - 12px);\n  justify-self: center;\n  border-radius: 18px;\n"]))),de=Object(A.default)(v.a)(i||(i=Object(U.a)(["\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  text-align: center;\n"]))),le=Object(A.default)(D.a)(a||(a=Object(U.a)(["\n  width: 100%;\n  height: 100%;\n\n  color: ",";\n\n  font-weight: ",";\n\n  "," {\n    display: ",";\n  }\n\n  ","\n\n  ","\n"])),(function(e){var n=e.isStringMuted,t=e.isActive,r=e.theme;return n?r.global.colors["text-xweak"].dark:t?r.global.colors.text.dark:r.global.colors["text-weak"].dark}),(function(e){return e.isActive?"bold":"normal"}),de,(function(e){return e.isVisible?"inline-block":"none"}),(function(e){return e.isVisible&&Object(A.css)(s||(s=Object(U.a)(["\n      & > :nth-child(2) {\n        display: none;\n      }\n    "])))}),(function(e){var n=e.disabled,t=e.isPushed,r=e.theme;return!n&&Object(A.css)(d||(d=Object(U.a)(["\n      cursor: pointer;\n\n      &:hover {\n        "," {\n          display: inline-block;\n\n          background: ",";\n\n          font-weight: bold;\n        }\n\n        & > :nth-child(2) {\n          display: none;\n        }\n      }\n    "])),de,t?r.global.colors["accent-1"]:r.global.colors["background-contrast"].dark)})),ue=function(e,n,t,r){return"".concat(n+1,"/").concat(e+1," / ").concat((null!==r&&void 0!==r?r:n)+1+1,"/").concat((null!==t&&void 0!==t?t:e)+1+1)},je=function(e){var n,t,r,o,c,i=e.instrument,a=void 0===i?"guitar":i,s=e.chord,d=e.chordType,l=void 0===d?"simple":d,u=e.disabled,j=e.highlightedNote,h=e.onHighlightNote,b=null!==(n=s&&(E[a]||[]).filter((function(e){return e.chord===s})))&&void 0!==n?n:[],m=null!==(t=b.filter((function(e){return e.type===l}))[0])&&void 0!==t?t:b[0],g=function(e){return e.map((function(e,n){return{pos:e,fingerIndex:n}})).filter((function(e){return null!=e.pos})).map((function(e){var n=e.pos,t=e.fingerIndex,r=Object(f.a)(n,2),o=r[0],c=r[1],i=Array.isArray(o)?o:[o,o],a=Object(f.a)(i,2);return{startStringId:a[0],endStringId:a[1],fretId:c,fingerIndex:t}}))}(null!==(r=null===m||void 0===m?void 0:m.positions)&&void 0!==r?r:[null,null,null,null]),O=null!==(o=null===m||void 0===m?void 0:m.mutedStrings)&&void 0!==o?o:[],x=g.reduce((function(e,n){var t=n.fretId;return Math.max(e,t)}),4)+1,p=null!==(c=ae[a])&&void 0!==c?c:[null,null,null,null,null,null],v=p.length-1,C=p.map((function(e,n){return{gridArea:ue(1,v-n,x,v-n),isMuted:O.includes(n+1)}})),S=new Array(x).fill(void 0).map((function(e,n){return{gridArea:ue(n,0,n,v),isStart:0===n}})),U=g.map((function(e){var n=e.startStringId,t=e.endStringId,r=e.fretId,o=e.fingerIndex;return{gridArea:ue(r,v-(t-1),r,v-(n-1)),finger:o+1}})),A=p.map((function(e,n){var t=n+1,r=O.includes(t);return new Array(x).fill(void 0).map((function(o,c){var i=!!g.find((function(e){var n=e.startStringId,r=e.endStringId,o=e.fretId;return t>=n&&t<=r&&c===o})),a=function(e,n){var t=ee(e),r=Object(f.a)(t,2),o=r[0],c=r[1];return function(e,n){return"".concat(e).concat(n)}(ne(o,n),c+Math.sign(n)*Math.floor(Math.abs(n)/12))}(e,c),s=ee(a),d=Object(f.a)(s,1)[0];return{gridArea:ue(c,v-n),isStringMuted:r,isVisible:i||0===c,isActive:i,isPushed:i&&0!==c,isHighlighted:!u&&j===d,note:a,noteName:d}}))}));return Object(k.jsxs)(R.a,{columns:Array(x).fill("1fr"),rows:Array(v+1).fill("xxsmall"),gap:{row:"xxsmall"},children:[C.map((function(e){var n=e.gridArea,t=e.isMuted;return Object(k.jsx)(D.a,{gridArea:n,background:t?void 0:"background-contrast",border:[{side:"bottom",color:"background-contrast",size:"small"}]},n)})),S.map((function(e){var n=e.gridArea,t=e.isStart;return Object(k.jsx)(D.a,{gridArea:n,border:{side:"right",color:"text",size:t?"small":"xsmall"}},n)})),U.map((function(e){var n=e.gridArea;e.finger;return Object(k.jsx)(se,{gridArea:n,alignSelf:"center",background:{dark:"border"}},n)})),A.map((function(e){return e.map((function(e){var n=e.isStringMuted,t=e.isVisible,r=e.isActive,o=e.isPushed,c=e.isHighlighted,i=e.note,a=e.noteName,s=e.gridArea;return Object(k.jsxs)(le,{gridArea:s,align:"center",justify:"center",disabled:u,isStringMuted:n,isVisible:t||c,isActive:r||c,isPushed:o,onClick:!u&&h?function(){return h(c?void 0:a)}:void 0,children:[Object(k.jsx)(de,{textAlign:"center",children:Object(k.jsx)(q,{note:i})}),n&&Object(k.jsx)(ie.a,{size:"small"})]},s)}))}))]})},he=function(e){var n=e.chord,t=e.isEditing,r=e.highlightedNote,o=e.onRemove,c=e.onHighlightNote;return Object(k.jsxs)(B.a,{background:"background-back",width:"500px",children:[Object(k.jsx)(H.a,{background:"background-contrast",border:{side:"bottom",color:"background-contrast"},justify:"between",children:Object(k.jsx)(ce,{chord:n,isEditing:t||!1,onRemove:o})}),Object(k.jsx)(V.a,{pad:"small",border:{side:"top",color:"background-contrast"},children:Object(k.jsx)(je,{chord:n,disabled:t||!1,highlightedNote:r,onHighlightNote:c})})]})},be=t(140),fe=t(126),me=function(){return Object(k.jsxs)(be.a,{fill:!0,interactiveChild:"last",children:[Object(k.jsx)(he,{}),Object(k.jsxs)(D.a,{fill:!0,align:"center",justify:"center",gap:"large",background:{color:"background",opacity:"strong"},border:{color:"border-semi"},children:[Object(k.jsx)(fe.a,{size:"large",color:"accent-1"}),Object(k.jsx)(v.a,{size:"large",textAlign:"center",color:"accent-1",children:"Add a chord to start"})]})]})},ge=function(e){var n=e.chords,t=e.isEditing,r=e.onRemoveChord,o=Object(l.useState)(),c=Object(f.a)(o,2),i=c[0],a=c[1];return Object(k.jsx)(R.a,{columns:"medium",gap:"small",justify:"center",children:0!==n.length?n.map((function(e){return Object(k.jsx)(he,{chord:e,isEditing:t,highlightedNote:i,onRemove:function(){return r(e)},onHighlightNote:a},e)})):Object(k.jsx)(me,{})})},Oe=t(133),xe=t(128),pe=t(129),ve=function(e){var n=e.chords,t=e.isEditing,r=e.onAdd,o=e.onIsEditingChange,c=Object(l.useState)(""),i=Object(f.a)(c,2),a=i[0],s=i[1],d=Object(l.useMemo)((function(){return n.map((function(e){return{label:e,value:e}})).filter((function(e){return e.label.toLowerCase().includes(a.toLowerCase())}))}),[n,a]),u=Object(l.useCallback)((function(e){var n=e.value;s(""),r(n)}),[r]);return Object(k.jsxs)(D.a,{direction:"row",gap:"small",justify:"end",align:"center",children:[Object(k.jsx)(G.a,{open:t,direction:"horizontal",children:Object(k.jsx)(Oe.a,{icon:Object(k.jsx)(fe.a,{}),options:d,valueKey:{key:"value",reduce:!0},labelKey:function(e){return e.label},closeOnChange:!1,placeholder:"Add chords",searchPlaceholder:"Search by name",a11yTitle:"Select chords to add",onSearch:s,onChange:u})}),Object(k.jsx)(P.a,{icon:Object(k.jsxs)(D.a,{direction:"row",children:[Object(k.jsx)(G.a,{open:t,direction:"horizontal",children:Object(k.jsx)(xe.a,{})}),Object(k.jsx)(G.a,{open:!t,direction:"horizontal",children:Object(k.jsx)(pe.a,{})})]}),a11yTitle:t?"Done adding/removing chords":"Add/remove chords",primary:t,onClick:function(){return o(!t)}})]})},Ce=function(e){var n=e.name,t=e.description,r=e.selectedChords,o=e.availableChords,c=e.onSetName,i=e.onSetDescription,a=e.onAddChord,s=e.onRemoveChord,d=Object(l.useState)(!1),u=Object(f.a)(d,2),j=u[0],h=u[1],b=o.filter((function(e){return r.indexOf(e)<0}));return Object(k.jsx)(J.a,{onEsc:function(){return h(!1)},children:Object(k.jsxs)(D.a,{gap:"medium",children:[Object(k.jsxs)(D.a,{direction:"row",align:"start",gap:"small",children:[Object(k.jsx)(J.a,{onEnter:function(){return h(!1)},children:Object(k.jsxs)(D.a,{width:"100%",children:[Object(k.jsx)(O.a,{level:2,size:"small",margin:{vertical:"small"},children:j?Object(k.jsx)(L.a,{plain:"full",value:n,placeholder:"Enter name",onChange:function(e){return c(e.target.value)}}):n||Object(k.jsx)("em",{children:"Unnamed chord set"})}),Object(k.jsx)(v.a,{children:j?Object(k.jsx)(L.a,{plain:"full",value:t,placeholder:"Enter description",onChange:function(e){return i(e.target.value)}}):t||Object(k.jsx)("em",{children:"No description"})})]})}),Object(k.jsx)(ve,{chords:b,isEditing:j,onAdd:a,onIsEditingChange:h})]}),Object(k.jsx)(ge,{chords:r,isEditing:j,onRemoveChord:s})]})})},Se=function(e){var n=e.state,t=e.dispatch,r=Object(C.g)().chordSetId,o=Number.parseInt(r),c=function(e){return function(n){return I(n)[e]}}(o)(n),i=function(){var e;return(null!==(e=E.guitar)&&void 0!==e?e:[]).map((function(e){return e.chord}))}(),a=Object(l.useCallback)((function(e){return t(function(e,n){return{type:"setChordSetName",chordSetIndex:e,newName:n}}(o,e))}),[o,t]),s=Object(l.useCallback)((function(e){return t(function(e,n){return{type:"setChordSetDescription",chordSetIndex:e,newDescription:n}}(o,e))}),[o,t]),d=Object(l.useCallback)((function(e){return t(function(e,n){return{type:"addChordToSet",chordSetIndex:e,chordToAdd:n}}(o,e))}),[o,t]),u=Object(l.useCallback)((function(e){return t(function(e,n){return{type:"removeChordFromSet",chordSetIndex:e,chordToRemove:n}}(o,e))}),[o,t]);if(!c)return Object(k.jsx)(T,{});var j=c.name,h=c.description,b=c.selectedChords;return Object(k.jsx)(Ce,{name:j,description:h,selectedChords:b,availableChords:i,onSetName:a,onSetDescription:s,onAddChord:d,onRemoveChord:u})},Ue=function(e){var n=e.chord;return Object(k.jsx)(B.a,{background:"background-front",pad:{horizontal:"xsmall",vertical:"xxsmall"},children:Object(k.jsx)(v.a,{size:"medium",color:"accent-1",children:Object(k.jsx)(K,{chord:n})})})},Ae=function(e){var n=e.chordSetIndex,t=void 0===n?-1:n,r=e.name,o=void 0===r?"":r,c=e.description,i=void 0===c?"":c,a=e.selectedChords,s=void 0===a?[]:a,d=e.onRemove,u=Object(l.useState)(!1),j=Object(f.a)(u,2),h=j[0],b=j[1];return Object(k.jsx)(J.a,{onEsc:function(){return b(!1)},children:Object(k.jsxs)(B.a,{background:"background-back",fill:!0,border:{color:"border-brand"},children:[Object(k.jsxs)(H.a,{pad:"small",background:"background-contrast",border:{side:"bottom",color:"background-contrast"},children:[Object(k.jsx)(w,{to:"/chord-sets/".concat(t),children:Object(k.jsx)(O.a,{level:3,size:"small",margin:"none",color:"brand",children:o||Object(k.jsx)("em",{children:"Unnamed chord set"})})}),Object(k.jsxs)(D.a,{direction:"row",gap:"small",justify:"end",align:"center",children:[Object(k.jsx)(G.a,{open:h,direction:"horizontal",children:Object(k.jsx)(P.a,{icon:Object(k.jsx)(ie.a,{}),a11yTitle:"Cancel removing chord set ".concat(o),onClick:function(){return b(!1)}})}),Object(k.jsx)(P.a,{icon:Object(k.jsxs)(D.a,{direction:"row",children:[Object(k.jsx)(G.a,{open:h,direction:"horizontal",children:Object(k.jsx)(xe.a,{})}),Object(k.jsx)(G.a,{open:!h,direction:"horizontal",children:Object(k.jsx)(Z.a,{})})]}),a11yTitle:h?"Confirm removing chord set ".concat(o):"Remove chord set ".concat(o),primary:h,onClick:function(){h&&d&&d(),b(!h)}})]})]}),Object(k.jsxs)(V.a,{pad:"small",gap:"small",border:{side:"top",color:"background-contrast"},children:[i||Object(k.jsx)("em",{children:"No description"}),Object(k.jsx)(D.a,{direction:"row",align:"start",wrap:!0,gap:"xsmall",children:s.map((function(e){return Object(k.jsx)(Ue,{chord:e},e)}))})]})]})})},ke=function(){return Object(k.jsxs)(be.a,{fill:!0,interactiveChild:"last",children:[Object(k.jsx)(Ae,{}),Object(k.jsxs)(D.a,{fill:!0,align:"center",justify:"center",gap:"medium",height:{min:"150px"},background:{color:"background",opacity:"strong"},border:{color:"border-brand-semi"},children:[Object(k.jsx)(fe.a,{size:"large",color:"accent-1"}),Object(k.jsx)(v.a,{size:"large",textAlign:"center",color:"accent-1",children:"Add your first chord set"})]})]})},ye=function(e){var n=e.chordSets,t=e.onRemoveChordSet;return Object(k.jsx)(R.a,{columns:"medium",gap:"small",justify:"center",children:0!==n.length?n.map((function(e,n){var r=e.name,o=e.description,c=e.selectedChords;return Object(k.jsx)(Ae,{chordSetIndex:n,name:r,description:o,selectedChords:c,onRemove:function(){return t(n)}},n)})):Object(k.jsx)(ke,{})})},we=function(e){var n=e.chordSets,t=e.onAddChordSet,r=e.onRemoveChordSet;return Object(k.jsxs)(D.a,{gap:"medium",children:[Object(k.jsxs)(D.a,{direction:"row",align:"start",gap:"small",children:[Object(k.jsxs)(D.a,{width:"100%",children:[Object(k.jsx)(O.a,{level:2,size:"small",margin:{vertical:"small"},children:"My chord sets"}),Object(k.jsx)(v.a,{children:"My favourite song compositions."})]}),Object(k.jsx)(P.a,{icon:Object(k.jsx)(fe.a,{}),a11yTitle:"Add new chord set",onClick:t})]}),Object(k.jsx)(ye,{chordSets:n,onRemoveChordSet:r})]})},Fe=function(e){var n=e.state,t=e.dispatch,r=I(n),o=Object(l.useCallback)((function(){return t({type:"addChordSet"})}),[t]),c=Object(l.useCallback)((function(e){return t(function(e){return{type:"removeChordSet",chordSetToRemoveIndex:e}}(e))}),[t]);return Object(k.jsx)(we,{chordSets:r,onAddChordSet:o,onRemoveChordSet:c})},Ee=t(61),Ie=t(77),De=[function(e){return Object(S.a)({version:1},e)},function(e){e.version;var n=Object(Ie.a)(e,["version"]);return{version:2,chordSets:[Object(S.a)({name:"",description:""},n)]}}],ze={version:2,chordSets:[{name:"Example: Leaving on a Jet Plane",description:"Example chordset for John Denver's Leaving on a Jet Plane",selectedChords:["G","C","D"]}]},Ne=function(e){for(var n=e.version,t=null!==n&&void 0!==n?n:0;t<ze.version;t++){e=(0,De[t])(e),console.log("Migrated from version ".concat(t," \u2192 ").concat(t+1),e)}return e},Me=function(e,n){switch(n.type){case"setChordSetName":return Object(S.a)(Object(S.a)({},e),{},{name:n.newName});case"setChordSetDescription":return Object(S.a)(Object(S.a)({},e),{},{description:n.newDescription});case"addChordToSet":var t=n.chordToAdd,r=e.selectedChords;return r.find((function(e){return e===t}))?e:Object(S.a)(Object(S.a)({},e),{},{selectedChords:[].concat(Object(Ee.a)(r),[t])});case"removeChordFromSet":var o=n.chordToRemove,c=e.selectedChords;return c.find((function(e){return e===o}))?Object(S.a)(Object(S.a)({},e),{},{selectedChords:c.filter((function(e){return e!==o}))}):e;default:return e}},Te=function(e,n){switch(n.type){case"addChordSet":return Object(S.a)(Object(S.a)({},e),{},{chordSets:[].concat(Object(Ee.a)(e.chordSets),[{name:"",description:"",selectedChords:[]}])});case"removeChordSet":var t=n.chordSetToRemoveIndex,r=e.chordSets;return r[t]?Object(S.a)(Object(S.a)({},e),{},{chordSets:r.filter((function(e,n){return n!==t}))}):e;case"setChordSetName":case"setChordSetDescription":case"addChordToSet":case"removeChordFromSet":var o=n.chordSetIndex,c=e.chordSets,i=Me(e.chordSets[o],n);return c[o]&&i!==c[o]?Object(S.a)(Object(S.a)({},e),{},{chordSets:c.map((function(e,n){return n===o?i:e}))}):e;default:return e}},Je=t(76),Le=t(75),Re="#d1ad70",Be="#87ccb0",He=Object(Le.deepMerge)(Je.grommet,{global:{colors:{background:"#010115","background-back":{dark:"#080920"},"background-front":{dark:"#15173d"},"background-contrast":{dark:"#3f438a17"},black:"#00010d",white:"#fff9ef",brand:Be,"accent-1":Re,border:{dark:"".concat(Re,"80")},"border-semi":{dark:"".concat(Re,"40")},"border-brand":{dark:"".concat(Be,"80")},"border-brand-semi":{dark:"".concat(Be,"40")}},font:{family:'"Josefin Sans"',face:"/* vietnamese */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMlhLzTs.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMhhLzTs.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMZhLw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoNOlHnnY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoOulH.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin-ext */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoNOlHnnY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoOulH.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},heading:{font:{family:'"Limelight"'}},button:{border:{radius:"3px"}},card:{container:{border:"solid",round:"xxsmall",elevation:null}}});var Ve=function(){var e=F("applicationState",Te,Ne,ze),n=Object(f.a)(e,2),t=n[0],r=n[1];return Object(k.jsxs)(m.a,{full:!0,theme:He,themeMode:"dark",children:[Object(k.jsx)(g.a,{pad:{vertical:"medium",horizontal:"large"},background:"brand",children:Object(k.jsx)(O.a,{size:"small",margin:"none",children:Object(k.jsx)(w,{to:"/",children:"Chord Helper"})})}),Object(k.jsx)(x.a,{pad:"large",fill:!0,children:Object(k.jsxs)(C.c,{children:[Object(k.jsx)(C.a,{path:"/",element:Object(k.jsx)(Fe,{state:t,dispatch:r})}),Object(k.jsx)(C.a,{path:"chord-sets/:chordSetId",element:Object(k.jsx)(Se,{state:t,dispatch:r})}),Object(k.jsx)(C.a,{path:"*",element:Object(k.jsx)(T,{})})]})}),Object(k.jsx)(p.a,{pad:{vertical:"small",horizontal:"large"},background:"black",justify:"center",children:Object(k.jsx)(v.a,{color:"text-xweak",children:"Helping you with chords since 2021."})})]})},Ge=(t(108),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,146)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),c(e),i(e)}))});h.a.render(Object(k.jsx)(u.a.StrictMode,{children:Object(k.jsx)(b.a,{basename:"chord-helper",children:Object(k.jsx)(Ve,{})})}),document.getElementById("root")),Ge()},87:function(e,n,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.12d38b19.chunk.js.map