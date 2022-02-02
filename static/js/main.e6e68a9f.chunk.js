(this["webpackJsonpchord-helper"]=this["webpackJsonpchord-helper"]||[]).push([[0],{103:function(e,n,t){},124:function(e,n,t){},125:function(e,n,t){"use strict";t.r(n);var r,o,c,i,a,s,d,l=t(0),u=t.n(l),h=t(153),j=t(90),b=t(44),f=t.n(b),g=t(26),m=t(5),O=t(156),x=t(126),v=t(161),p=t(151),C=t(152),y=t(163),S=t(7),k=(t(103),t(11)),A=t(21),U=t(1),w=t(2),F=Object(U.default)(g.b)(r||(r=Object(A.a)(["\n  &:link,\n  &:visited {\n    color: inherit;\n    text-decoration-color: inherit;\n  }\n"]))),I=function(e){return Object(w.jsx)(F,Object(k.a)({},e))},E=function(e,n,t,r,o){var c=Object(l.useMemo)((function(){return function(e,n){var t;return function(r,o){var c=n(r,o);return c!==r&&(window.clearTimeout(t),t=window.setTimeout((function(){try{localStorage.setItem(e,JSON.stringify(c)),console.log("Written to local storage (version: ".concat(c.version,")"),c)}catch(n){console.error("Couldn't write to local storage.",n)}}),100)),c}}(e,n)}),[e,n]),i=Object(l.useMemo)((function(){return function(e){try{var n=localStorage.getItem(e),t=n&&JSON.parse(n);return console.log("Read from local storage (version: ".concat(null===t||void 0===t?void 0:t.version,")"),t),t}catch(r){console.error("Couldn't read from local storage.",r)}}(e)}),[e]),a=Object(l.useMemo)((function(){return t(null!==i&&void 0!==i?i:r)}),[t,i,r]);return Object(l.useReducer)(c,a,i?void 0:o)},D=function(){return{type:"addChordSet"}},M=function(e,n){return{type:"moveChordSet",chordSetToMoveIndex:e,targetChordSetIndex:n}},K=function(e){return{type:"removeChordSet",chordSetToRemoveIndex:e}},N=function(e,n){return{type:"setChordSetName",chordSetIndex:e,newName:n}},z=function(e,n){return{type:"setChordSetDescription",chordSetIndex:e,newDescription:n}},T=function(e,n){return{type:"setChordSetKey",chordSetIndex:e,newKey:n}},R=function(e,n){return{type:"addChordToSet",chordSetIndex:e,chordToAdd:n}},L=function(e,n,t){return{type:"moveChordInSet",chordSetIndex:e,chordToMoveIndex:n,targetChordIndex:t}},J=function(e,n){return{type:"removeChordFromSet",chordSetIndex:e,chordToRemove:n}},B=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],H=/^\s*([A-G]#?)(\d)\s*$/,V=function(e){var n,t=null!==(n=H.exec(e))&&void 0!==n?n:[],r=Object(m.a)(t,3),o=(r[0],r[1]),c=r[2];return[o,Number.parseInt(c)]},G=function(e,n){var t=B.indexOf(e);return B[(t+n)%12]},P={"":[0,4,7],maj6:[0,4,7,9],dom7:[0,4,7,10],maj7:[0,4,7,11],aug:[0,4,8],aug7:[0,4,8,10],min:[0,3,7],min6:[0,3,7,9],min7:[0,3,7,10],dim:[0,3,6],dim7:[0,3,6,9]},Z=/^\s*([A-G]#?)(|maj6|dom7|maj7|aug|aug7|min|min6|min7)\s*$/,Q=function(e){var n,t=null!==(n=Z.exec(e))&&void 0!==n?n:[],r=Object(m.a)(t,3);r[0];return[r[1],r[2]]},Y=function(e,n){return"".concat(e).concat(n)},X=function(e,n){var t=Q(e),r=Object(m.a)(t,2),o=r[0],c=r[1],i=G(o,n);return Y(i,c)},q=function(e){return{chord:X("E",e),type:"barre",positions:[[e,[1,6]],[e+1,4],[e+2,2],[e+2,3]],mutedStrings:[]}},$=function(e){return{chord:X("Emin",e),type:"barre",positions:[[e,[1,6]],null,[e+2,2],[e+2,3]],mutedStrings:[]}},_=function(e){return{chord:X("A",e),type:"barre",positions:[[e,[2,6]],[e+2,3],[e+2,4],[e+2,5]],mutedStrings:[1]}},W=function(e){return{chord:X("Amin",e),type:"barre",positions:[[e,[2,6]],[e+1,5],[e+2,3],[e+2,4]],mutedStrings:[1]}},ee={guitar:[{chord:"C",type:"simple",positions:[[1,5],[2,3],[3,2],null],mutedStrings:[1]},{chord:"D",type:"simple",positions:[[2,4],[2,6],[3,5],null],mutedStrings:[1,2]},{chord:"Dmin",type:"simple",positions:[[1,6],[2,4],[3,5],null],mutedStrings:[1,2]},{chord:"D#min",type:"simple",positions:[[1,3],[2,6],[3,4],[4,5]],mutedStrings:[1,2]},{chord:"E",type:"simple",positions:[[1,4],[2,2],[2,3],null],mutedStrings:[]},{chord:"Emin",type:"simple",positions:[null,[2,2],[2,3],null],mutedStrings:[]},q(1),$(1),q(2),$(2),{chord:"G",type:"simple",positions:[[2,2],[3,1],[3,6],null],mutedStrings:[]},$(3),q(4),$(4),{chord:"A",type:"simple",positions:[[2,3],[2,4],[2,5],null],mutedStrings:[1]},{chord:"Amin",type:"simple",positions:[[1,5],[2,3],[2,4],null],mutedStrings:[1]},_(1),W(1),_(2),W(2)],guitalele:[]},ne=ee,te={"":[0,2,4,5,7,9,11],min:[0,2,3,5,7,8,10]},re=/^\s*([A-G]#?)(|min)\s*$/,oe=function(e){var n,t=null!==(n=re.exec(e))&&void 0!==n?n:[],r=Object(m.a)(t,3);r[0];return[r[1],r[2]]},ce=function(e,n){return"".concat(e).concat(n)},ie=function(){return B.flatMap((function(e){return Object.keys(te).map((function(n){return ce(e,n)}))}))},ae=function(e){var n=oe(e),t=Object(m.a)(n,2),r=t[0],o=t[1],c=te[o];return c.map((function(e){var n,t=c.map((function(n){return(n-e+12)%12})),o=Object.entries(P).filter((function(e){var n=Object(m.a)(e,2),r=(n[0],n[1]);return r.every((function(e){return t.includes(e)}))&&3===r.length}));1!==o.length&&console.log(t,o);var i=null!==(n=o[0])&&void 0!==n?n:[],a=Object(m.a)(i,1)[0];return Y(G(r,e),a)}))},se=function(e){return e.chordSets},de=function(e){return function(n){return se(n)[e]}},le=function(e){var n=de(e);return function(e){var t=n(e);if(t){var r,o=t.selectedKey,c=t.selectedChords,i=o&&ae(o),a=(r="guitar",ee[r].map((function(e){return e.chord}))).filter((function(e){return c.indexOf(e)<0}));return i?a.filter((function(e){return i.includes(e)})):a}}},ue=function(e){var n=de(e);return function(e){var t,r=n(e);if(r)return(t=r.selectedChords,ie().map((function(e){var n=ae(e);return{key:e,chordCount:t.filter((function(e){return n.includes(e)})).length,weight:t.map((function(e){return n.indexOf(e)})).reduce((function(e,t){return-1!==t?e+n.length-t:e}),0)}})).filter((function(e){return e.weight>0})).sort((function(e,n){return n.weight-e.weight}))).map((function(e){return e.key})).slice(0,3)}},he=t(39),je=t(162),be=t(137),fe=function(){return Object(w.jsxs)(he.a,{align:"center",children:[Object(w.jsx)(be.a,{size:"large"}),Object(w.jsx)(v.a,{level:2,textAlign:"center",children:"Page not found"}),Object(w.jsxs)(je.a,{textAlign:"center",children:["This page doesn't exist. ",Object(w.jsx)(I,{to:"/",children:"Go back."})]})]})},ge=function(){return Object(w.jsx)(fe,{})},me=t(166),Oe=t(165),xe=t(139),ve=t(144),pe=t(145),Ce=t(154),ye=t(155),Se="DEFAULT",ke=function(e,n,t,r){var o=Object(Ce.a)({type:Se,item:{index:e},canDrag:n,collect:function(e){return{isDragging:e.isDragging()}}}),c=Object(m.a)(o,2),i=c[0].isDragging,a=c[1],s=Object(ye.a)({accept:Se,hover:function(n,o){var c=n.index,i=e;if(c!==i&&t.current){var a=t.current.getBoundingClientRect(),s=(a.right-a.left)/2,d=o.getClientOffset().x-a.left;c<i&&d<s||c>i&&d>s||(null===r||void 0===r||r(c),n.index=i)}}}),d=Object(m.a)(s,2);d[0];return a((0,d[1])(t)),i},Ae=t(168),Ue=t(159),we=t(142),Fe=/^\s*([A-G])(#)?\s*$/,Ie=function(e){var n=e.note,t=n?function(e){var n,t=null!==(n=Fe.exec(e))&&void 0!==n?n:[],r=Object(m.a)(t,3);return r[0],[r[1],r[2]]}(n):[],r=Object(m.a)(t,2),o=r[0],c=r[1];return Object(w.jsxs)(w.Fragment,{children:[o||Object(w.jsx)(w.Fragment,{children:"\xa0"}),Object(w.jsx)("sup",{children:c&&"\u266f"})]})},Ee=U.default.span(o||(o=Object(A.a)(["\n  padding-left: ",";\n"])),(function(e){return e.theme.global.borderSize.small})),De=function(e){var n=e.chord,t=n?Q(n):[],r=Object(m.a)(t,2),o=r[0],c=r[1];return Object(w.jsxs)("span",{children:[Object(w.jsx)(Ie,{note:o}),c&&Object(w.jsx)(Ee,{children:c})]})},Me=function(e){var n=e.chord,t=e.isEditing,r=e.onRemove,o=n?function(e){var n=Q(e),t=Object(m.a)(n,2),r=t[0],o=t[1];return P[o].map((function(e){return G(r,e)}))}(n):[];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(xe.a,{pad:{horizontal:"medium",vertical:"small"},background:"background-front",border:{side:"right",color:"background-contrast"},children:Object(w.jsx)(v.a,{level:3,size:"medium",color:"accent-1",margin:"none",children:Object(w.jsx)(De,{chord:n})})}),Object(w.jsxs)(he.a,{direction:"row",pad:{horizontal:"small"},gap:"small",align:"center",children:[Object(w.jsx)(he.a,{pad:{top:"xsmall"},children:Object(w.jsx)(y.a,{children:o.map((function(e,n){return Object(w.jsxs)(l.Fragment,{children:[0!==n&&" ",Object(w.jsx)(Ie,{note:e})]},e)}))})}),Object(w.jsx)(Ae.a,{open:t,direction:"horizontal",children:Object(w.jsx)(Ue.a,{icon:Object(w.jsx)(we.a,{}),a11yTitle:"Remove chord ".concat(n),onClick:r})})]})]})},Ke=t(143),Ne=function(e){var n=e.note,t=n?V(n):[],r=Object(m.a)(t,2),o=r[0],c=r[1];return Object(w.jsxs)("span",{children:[Object(w.jsx)(Ie,{note:o}),c&&Object(w.jsx)("sub",{children:c})]})},ze={guitar:["E2","A2","D3","G3","B3","E4"],guitalele:["A2","D3","G3","C4","E4","A4"]},Te=Object(U.default)(he.a)(c||(c=Object(A.a)(["\n  width: 36px;\n  height: calc(100% - 12px);\n  justify-self: center;\n  border-radius: 18px;\n"]))),Re=Object(U.default)(y.a)(i||(i=Object(A.a)(["\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  text-align: center;\n"]))),Le=Object(U.default)(he.a)(a||(a=Object(A.a)(["\n  width: 100%;\n  height: 100%;\n\n  color: ",";\n\n  font-weight: ",";\n\n  "," {\n    display: ",";\n  }\n\n  ","\n\n  ","\n"])),(function(e){var n=e.isStringMuted,t=e.isActive,r=e.theme;return n?r.global.colors["text-xweak"].dark:t?r.global.colors.text.dark:r.global.colors["text-weak"].dark}),(function(e){return e.isActive?"bold":"normal"}),Re,(function(e){return e.isVisible?"inline-block":"none"}),(function(e){return e.isVisible&&Object(U.css)(s||(s=Object(A.a)(["\n      & > :nth-child(2) {\n        display: none;\n      }\n    "])))}),(function(e){var n=e.disabled,t=e.isPushed,r=e.theme;return!n&&Object(U.css)(d||(d=Object(A.a)(["\n      cursor: pointer;\n\n      &:hover {\n        "," {\n          display: inline-block;\n\n          background: ",";\n\n          font-weight: bold;\n        }\n\n        & > :nth-child(2) {\n          display: none;\n        }\n      }\n    "])),Re,t?r.global.colors["accent-1"]:r.global.colors["background-contrast"].dark)})),Je=function(e,n,t,r){return"".concat(n+1,"/").concat(e+1," / ").concat((null!==r&&void 0!==r?r:n)+1+1,"/").concat((null!==t&&void 0!==t?t:e)+1+1)},Be=function(e){var n,t,r,o=e.instrument,c=void 0===o?"guitar":o,i=e.chord,a=e.disabled,s=e.highlightedNote,d=e.onHighlightNote,l=ne[c]||[],u=i&&l.find((function(e){return e.chord===i})),h=function(e){return e.map((function(e,n){return{pos:e,fingerIndex:n}})).filter((function(e){return null!=e.pos})).map((function(e){var n=e.pos,t=e.fingerIndex,r=Object(m.a)(n,2),o=r[0],c=r[1],i=Array.isArray(c)?c:[c,c],a=Object(m.a)(i,2);return{fretId:o,startStringId:a[0],endStringId:a[1],fingerIndex:t}}))}(null!==(n=null===u||void 0===u?void 0:u.positions)&&void 0!==n?n:[null,null,null,null]),j=null!==(t=null===u||void 0===u?void 0:u.mutedStrings)&&void 0!==t?t:[],b=h.reduce((function(e,n){var t=n.fretId;return Math.max(e,t)}),4)+1,f=null!==(r=ze[c])&&void 0!==r?r:[null,null,null,null,null,null],g=f.length-1,O=f.map((function(e,n){return{gridArea:Je(1,g-n,b,g-n),isMuted:j.includes(n+1)}})),x=new Array(b).fill(void 0).map((function(e,n){return{gridArea:Je(n,0,n,g),isStart:0===n}})),v=h.map((function(e){var n=e.startStringId,t=e.endStringId,r=e.fretId,o=e.fingerIndex;return{gridArea:Je(r,g-(t-1),r,g-(n-1)),finger:o+1}})),p=f.map((function(e,n){var t=n+1,r=j.includes(t);return new Array(b).fill(void 0).map((function(o,c){var i=!!h.find((function(e){var n=e.startStringId,r=e.endStringId,o=e.fretId;return t>=n&&t<=r&&c===o})),d=function(e,n){var t=V(e),r=Object(m.a)(t,2),o=r[0],c=r[1];return function(e,n){return"".concat(e).concat(n)}(G(o,n%12),c+Math.sign(n)*Math.floor(Math.abs(n)/12))}(e,c),l=V(d),u=Object(m.a)(l,1)[0];return{gridArea:Je(c,g-n),isStringMuted:r,isVisible:i||0===c,isActive:i,isPushed:i&&0!==c,isHighlighted:!a&&s===u,note:d,noteName:u}}))}));return Object(w.jsxs)(Oe.a,{columns:Array(b).fill("1fr"),rows:Array(g+1).fill("xxsmall"),gap:{row:"xxsmall"},children:[O.map((function(e){var n=e.gridArea,t=e.isMuted;return Object(w.jsx)(he.a,{gridArea:n,background:t?void 0:"background-contrast",border:[{side:"bottom",color:"background-contrast",size:"small"}]},n)})),x.map((function(e){var n=e.gridArea,t=e.isStart;return Object(w.jsx)(he.a,{gridArea:n,border:{side:"right",color:"text",size:t?"small":"xsmall"}},n)})),v.map((function(e){var n=e.gridArea;e.finger;return Object(w.jsx)(Te,{gridArea:n,alignSelf:"center",background:{dark:"border"}},n)})),p.map((function(e){return e.map((function(e){var n=e.isStringMuted,t=e.isVisible,r=e.isActive,o=e.isPushed,c=e.isHighlighted,i=e.note,s=e.noteName,l=e.gridArea;return Object(w.jsxs)(Le,{gridArea:l,align:"center",justify:"center",disabled:a,isStringMuted:n,isVisible:t||c,isActive:r||c,isPushed:o,onClick:!a&&d?function(){return d(c?void 0:s)}:void 0,children:[Object(w.jsx)(Re,{textAlign:"center",children:Object(w.jsx)(Ne,{note:i})}),n&&Object(w.jsx)(Ke.a,{size:"small"})]},l)}))}))]})},He=function(e){var n=e.chord,t=e.index,r=void 0===t?-1:t,o=e.isEditing,c=void 0!==o&&o,i=e.highlightedNote,a=e.onMove,s=e.onRemove,d=e.onHighlightNote,u=Object(l.useRef)(null),h=ke(r,c,u,a);return Object(w.jsxs)(xe.a,{ref:u,background:"background-back",width:"500px",style:{cursor:c?"grab":"default",opacity:h?.3:1},children:[Object(w.jsx)(ve.a,{background:"background-contrast",border:{side:"bottom",color:"background-contrast"},justify:"between",children:Object(w.jsx)(Me,{chord:n,isEditing:c||!1,onRemove:s})}),Object(w.jsx)(pe.a,{pad:"small",border:{side:"top",color:"background-contrast"},children:Object(w.jsx)(Be,{chord:n,disabled:c||!1,highlightedNote:i,onHighlightNote:d})})]})},Ve=t(164),Ge=t(146),Pe=function(e){var n=e.onAdd;return Object(w.jsxs)(Ve.a,{fill:!0,interactiveChild:"last",children:[Object(w.jsx)(He,{}),Object(w.jsx)(Ue.a,{fill:!0,onClick:n,children:Object(w.jsxs)(he.a,{fill:!0,align:"center",justify:"center",gap:"large",background:{color:"background",opacity:"strong"},border:{color:"border-semi"},children:[Object(w.jsx)(Ge.a,{size:"large",color:"accent-1"}),Object(w.jsx)(y.a,{size:"large",textAlign:"center",color:"accent-1",children:"Add a chord to start"})]})})]})},Ze=function(e){var n=e.chords,t=e.isEditing,r=e.onAddChord,o=e.onMoveChord,c=e.onRemoveChord,i=Object(l.useState)(),a=Object(m.a)(i,2),s=a[0],d=a[1];return Object(w.jsx)(Oe.a,{columns:"medium",gap:"small",justify:"center",children:0!==n.length?n.map((function(e,n){return Object(w.jsx)(He,{chord:e,index:n,isEditing:t,highlightedNote:s,onMove:function(e){return o(e,n)},onRemove:function(){return c(e)},onHighlightNote:d},e)})):Object(w.jsx)(Pe,{onAdd:r})})},Qe=t(157),Ye=function(e){var n=e.chords,t=e.isEditing,r=e.focusRef,o=e.onAdd,c=Object(l.useState)(!1),i=Object(m.a)(c,2),a=i[0],s=i[1],d=Object(l.useState)(""),u=Object(m.a)(d,2),h=u[0],j=u[1];r.current=Object(l.useCallback)((function(){return setTimeout((function(){return s(!0)}),300)}),[s]);var b=Object(l.useMemo)((function(){return n.map((function(e){return{label:e,value:e}})).filter((function(e){return e.label.toLowerCase().includes(h.toLowerCase())}))}),[n,h]),f=Object(l.useCallback)((function(e){var n=e.value;j(""),o(n)}),[o]);return Object(w.jsx)(Ae.a,{open:t,direction:"horizontal",children:Object(w.jsx)(Qe.a,{icon:Object(w.jsx)(Ge.a,{}),open:a,options:b,valueKey:{key:"value",reduce:!0},labelKey:function(e){return e.label},closeOnChange:!1,placeholder:"Add chords",searchPlaceholder:"Search by name",a11yTitle:"Select chords to add",onOpen:function(){return s(!0)},onClose:function(){return s(!1)},onSearch:j,onChange:f})})},Xe=t(160),qe=function(e){var n=e.keyName,t=n?oe(n):[],r=Object(m.a)(t,2),o=r[0],c=r[1];return Object(w.jsxs)("span",{children:[Object(w.jsx)(Ie,{note:o}),c&&Object(w.jsx)(Ee,{children:c})]})},$e=function(e){var n=e.name,t=e.description,r=e.selectedKey,o=e.isEditing,c=e.onSetName,i=e.onSetDescription,a=e.onIsEditingChange;return Object(w.jsx)(me.a,{onEnter:function(){return a(!1)},children:Object(w.jsxs)(he.a,{width:"100%",children:[Object(w.jsxs)(he.a,{direction:"row",align:"baseline",gap:"small",children:[Object(w.jsxs)(v.a,{level:2,size:"small",margin:{vertical:"small"},children:[o?Object(w.jsx)(Xe.a,{plain:"full",value:n,placeholder:"Enter name",onChange:function(e){return c(e.target.value)}}):n||Object(w.jsx)("em",{children:"Unnamed chord set"})," "]}),r&&!o&&Object(w.jsxs)(y.a,{size:"large",children:["in ",Object(w.jsx)(qe,{keyName:r})]})]}),Object(w.jsx)(y.a,{children:o?Object(w.jsx)(Xe.a,{plain:"full",value:t,placeholder:"Enter description",onChange:function(e){return i(e.target.value)}}):t||Object(w.jsx)("em",{children:"No description"})})]})})},_e=t(148),We=t(149),en=function(e){var n=e.isEditing,t=e.onIsEditingChange;return Object(w.jsx)(Ue.a,{icon:Object(w.jsxs)(he.a,{direction:"row",children:[Object(w.jsx)(Ae.a,{open:n,direction:"horizontal",children:Object(w.jsx)(_e.a,{})}),Object(w.jsx)(Ae.a,{open:!n,direction:"horizontal",children:Object(w.jsx)(We.a,{})})]}),a11yTitle:n?"Done adding/removing chords":"Add/remove chords",primary:n,onClick:function(){return t(!n)}})},nn=t(24),tn=t(150),rn=function(e){var n=e.selectedKey,t=e.suggestedKeys,r=e.keys,o=e.isEditing,c=e.onChange,i=Object(l.useState)(""),a=Object(m.a)(i,2),s=a[0],d=a[1],u=Object(l.useMemo)((function(){return!s&&t.length>0?[{label:"Suggested keys"}].concat(Object(nn.a)(t.map((function(e){return{label:e,value:e}}))),[{label:"Other keys"}],Object(nn.a)(r.filter((function(e){return!t.includes(e)})).map((function(e){return{label:e,value:e}})))):r.map((function(e){return{label:e,value:e}})).filter((function(e){return e.label.toLowerCase().includes(s.toLowerCase())}))}),[r,s,t]),h=Object(l.useCallback)((function(e){var n=e.value;d(""),c(n||void 0)}),[c]);return Object(w.jsx)(Ae.a,{open:o,direction:"horizontal",children:Object(w.jsx)(Qe.a,{icon:Object(w.jsx)(tn.a,{}),value:n,clear:{label:"Clear key filter"},options:u,valueKey:{key:"value",reduce:!0},labelKey:function(e){return e.label},disabledKey:function(e){return void 0===e.value},placeholder:"Filter by key",searchPlaceholder:"Search by name",a11yTitle:"Filter chords by key",onSearch:d,onChange:h})})},on=function(e){var n=e.name,t=e.description,r=e.selectedKey,o=e.selectedChords,c=e.availableKeys,i=e.filteredChords,a=e.suggestedKeys,s=e.onSetName,d=e.onSetDescription,u=e.onSetKey,h=e.onAddChord,j=e.onMoveChord,b=e.onRemoveChord,f=Object(l.useState)(!1),g=Object(m.a)(f,2),O=g[0],x=g[1],v=Object(l.useRef)();return Object(w.jsx)(me.a,{onEsc:function(){return x(!1)},children:Object(w.jsxs)(he.a,{gap:"medium",children:[Object(w.jsxs)(he.a,{direction:"row",align:"start",gap:"small",children:[Object(w.jsx)($e,{name:n,description:t,selectedKey:r,isEditing:O,onSetName:s,onSetDescription:d,onIsEditingChange:x}),Object(w.jsxs)(he.a,{direction:"row",justify:"end",align:"center",gap:"small",width:"100%",children:[Object(w.jsx)(rn,{selectedKey:r,keys:c,suggestedKeys:a,isEditing:O,onChange:u}),Object(w.jsx)(Ye,{chords:i,isEditing:O,onAdd:h,focusRef:v}),Object(w.jsx)(en,{isEditing:O,onIsEditingChange:x})]})]}),Object(w.jsx)(Ze,{chords:o,isEditing:O,onAddChord:function(){var e;x(!0),null===(e=v.current)||void 0===e||e.call(v)},onMoveChord:j,onRemoveChord:b})]})})},cn=function(e){var n=e.state,t=e.dispatch,r=Object(S.g)().chordSetId,o=Number.parseInt(r),c=function(e,n){return function(t){return Object(l.useCallback)((function(){for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e(t.apply(void 0,[n].concat(o)))}),[t,n,e])}}(t,o),i=ie(),a=de(o)(n),s=le(o)(n),d=ue(o)(n),u=c(N),h=c(z),j=c(T),b=c(R),f=c(L),g=c(J);if(!a||!s||!d)return Object(w.jsx)(ge,{});var m=a.name,O=a.description,x=a.selectedKey,v=a.selectedChords;return Object(w.jsx)(on,{name:m,description:O,selectedKey:x,selectedChords:v,availableKeys:i,filteredChords:s,suggestedKeys:d,onSetName:u,onSetDescription:h,onSetKey:j,onAddChord:b,onMoveChord:f,onRemoveChord:g})},an=function(e){var n=e.chord;return Object(w.jsx)(xe.a,{background:"background-front",width:{min:"32px"},pad:"xxsmall",children:Object(w.jsx)(y.a,{size:"medium",textAlign:"center",color:"accent-1",children:Object(w.jsx)(De,{chord:n})})})},sn=function(){return Object(w.jsxs)(Ve.a,{interactiveChild:"last",children:[Object(w.jsx)(an,{chord:"C"}),Object(w.jsx)(he.a,{fill:!0,background:{color:"background",opacity:"strong"},border:{color:"border-semi"}})]})},dn=function(e){var n=e.chordSetIndex,t=void 0===n?-1:n,r=e.name,o=void 0===r?"":r,c=e.description,i=void 0===c?"":c,a=e.selectedKey,s=e.selectedChords,d=void 0===s?[]:s,u=e.onMove,h=e.onRemove,j=Object(l.useRef)(null),b=Object(l.useState)(!1),f=Object(m.a)(b,2),g=f[0],O=f[1],x=Object(l.useCallback)((function(e){O(!1),null===u||void 0===u||u(e)}),[u]),p=ke(t,!g,j,x);return Object(w.jsx)(me.a,{onEsc:function(){return O(!1)},children:Object(w.jsxs)(xe.a,{ref:j,background:"background-back",fill:!0,border:{color:"border-brand"},style:{cursor:g?"default":"grab",opacity:p?.3:1},children:[Object(w.jsxs)(ve.a,{pad:"small",background:"background-contrast",border:{side:"bottom",color:"background-contrast"},children:[Object(w.jsxs)(I,{to:"/chord-sets/".concat(t),children:[Object(w.jsx)(v.a,{level:3,size:"small",margin:"none",color:"brand",children:o||Object(w.jsx)("em",{children:"Unnamed chord set"})}),a&&Object(w.jsxs)(y.a,{size:"large",children:["in ",Object(w.jsx)(qe,{keyName:a})]})]}),Object(w.jsxs)(he.a,{direction:"row",gap:"small",justify:"end",align:"center",children:[Object(w.jsx)(Ae.a,{open:g,direction:"horizontal",children:Object(w.jsx)(Ue.a,{icon:Object(w.jsx)(Ke.a,{}),a11yTitle:"Cancel removing chord set ".concat(o),onClick:function(){return O(!1)}})}),Object(w.jsx)(Ue.a,{icon:Object(w.jsxs)(he.a,{direction:"row",children:[Object(w.jsx)(Ae.a,{open:g,direction:"horizontal",children:Object(w.jsx)(_e.a,{})}),Object(w.jsx)(Ae.a,{open:!g,direction:"horizontal",children:Object(w.jsx)(we.a,{})})]}),a11yTitle:g?"Confirm removing chord set ".concat(o):"Remove chord set ".concat(o),primary:g,onClick:function(){g&&h&&h(),O(!g)}})]})]}),Object(w.jsxs)(pe.a,{pad:"small",gap:"small",border:{side:"top",color:"background-contrast"},children:[Object(w.jsx)(y.a,{children:i||Object(w.jsx)("em",{children:"No description"})}),Object(w.jsx)(he.a,{direction:"row",align:"start",wrap:!0,gap:"xsmall",children:d.length>0?d.map((function(e){return Object(w.jsx)(an,{chord:e},e)})):Object(w.jsx)(sn,{})})]})]})})},ln=function(e){var n=e.onAdd;return Object(w.jsxs)(Ve.a,{fill:!0,interactiveChild:"last",children:[Object(w.jsx)(dn,{}),Object(w.jsx)(Ue.a,{fill:!0,onClick:n,children:Object(w.jsxs)(he.a,{fill:!0,align:"center",justify:"center",gap:"medium",height:{min:"150px"},background:{color:"background",opacity:"strong"},border:{color:"border-brand-semi"},children:[Object(w.jsx)(Ge.a,{size:"large",color:"accent-1"}),Object(w.jsx)(y.a,{size:"large",textAlign:"center",color:"accent-1",children:"Add your first chord set"})]})})]})},un=function(e){var n=e.chordSets,t=e.onAddChordSet,r=e.onMoveChordSet,o=e.onRemoveChordSet;return Object(w.jsx)(Oe.a,{columns:"medium",gap:"small",justify:"center",children:0!==n.length?n.map((function(e,n){var t=e.name,c=e.description,i=e.selectedKey,a=e.selectedChords;return Object(w.jsx)(dn,{chordSetIndex:n,name:t,description:c,selectedKey:i,selectedChords:a,onMove:function(e){return r(e,n)},onRemove:function(){return o(n)}},n)})):Object(w.jsx)(ln,{onAdd:t})})},hn=function(e){var n=e.chordSets,t=e.onAddChordSet,r=e.onMoveChordSet,o=e.onRemoveChordSet;return Object(w.jsxs)(he.a,{gap:"medium",children:[Object(w.jsxs)(he.a,{direction:"row",align:"start",gap:"small",children:[Object(w.jsxs)(he.a,{width:"100%",children:[Object(w.jsx)(v.a,{level:2,size:"small",margin:{vertical:"small"},children:"My chord sets"}),Object(w.jsx)(y.a,{children:"My favourite song compositions."})]}),Object(w.jsx)(Ue.a,{icon:Object(w.jsx)(Ge.a,{}),a11yTitle:"Add new chord set",onClick:t})]}),Object(w.jsx)(un,{chordSets:n,onAddChordSet:t,onMoveChordSet:r,onRemoveChordSet:o})]})},jn=function(e){var n=e.state,t=function(e){return function(n){return Object(l.useCallback)((function(){return e(n.apply(void 0,arguments))}),[n,e])}}(e.dispatch),r=se(n),o=t(D),c=t(M),i=t(K);return Object(w.jsx)(hn,{chordSets:r,onAddChordSet:o,onMoveChordSet:c,onRemoveChordSet:i})},bn=t(91),fn=[function(e){return Object(k.a)({version:1},e)},function(e){e.version;var n=Object(bn.a)(e,["version"]);return{version:2,chordSets:[Object(k.a)({name:"",description:""},n)]}}],gn={version:2,chordSets:[{name:"Example: Leaving on a Jet Plane",description:"Example chordset for John Denver's Leaving on a Jet Plane",selectedChords:["G","C","D"]}]},mn=function(e){for(var n=e.version,t=null!==n&&void 0!==n?n:0;t<gn.version;t++){e=(0,fn[t])(e),console.log("Migrated from version ".concat(t," \u2192 ").concat(t+1),e)}return e},On=function(e,n){switch(n.type){case"setChordSetName":return Object(k.a)(Object(k.a)({},e),{},{name:n.newName});case"setChordSetDescription":return Object(k.a)(Object(k.a)({},e),{},{description:n.newDescription});case"setChordSetKey":return Object(k.a)(Object(k.a)({},e),{},{selectedKey:n.newKey});case"addChordToSet":var t=n.chordToAdd,r=e.selectedChords;return r.find((function(e){return e===t}))?e:Object(k.a)(Object(k.a)({},e),{},{selectedChords:[].concat(Object(nn.a)(r),[t])});case"moveChordInSet":var o=n.chordToMoveIndex,c=n.targetChordIndex,i=e.selectedChords;if(Math.min(o,c)<0||Math.max(o,c)>=i.length)return e;var a=Object(nn.a)(i),s=a.splice(o,1),d=Object(m.a)(s,1)[0];return a.splice(c,0,d),Object(k.a)(Object(k.a)({},e),{},{selectedChords:a});case"removeChordFromSet":var l=n.chordToRemove,u=e.selectedChords;return u.find((function(e){return e===l}))?Object(k.a)(Object(k.a)({},e),{},{selectedChords:u.filter((function(e){return e!==l}))}):e;default:return e}},xn=function(e,n){switch(n.type){case"addChordSet":return Object(k.a)(Object(k.a)({},e),{},{chordSets:[].concat(Object(nn.a)(e.chordSets),[{name:"",description:"",selectedChords:[]}])});case"moveChordSet":var t=n.chordSetToMoveIndex,r=n.targetChordSetIndex,o=e.chordSets;if(Math.min(t,r)<0||Math.max(t,r)>=o.length)return e;var c=Object(nn.a)(o),i=c.splice(t,1),a=Object(m.a)(i,1)[0];return c.splice(r,0,a),Object(k.a)(Object(k.a)({},e),{},{chordSets:c});case"removeChordSet":var s=n.chordSetToRemoveIndex,d=e.chordSets;return d[s]?Object(k.a)(Object(k.a)({},e),{},{chordSets:d.filter((function(e,n){return n!==s}))}):e;case"setChordSetName":case"setChordSetDescription":case"setChordSetKey":case"addChordToSet":case"moveChordInSet":case"removeChordFromSet":var l=n.chordSetIndex,u=e.chordSets,h=On(e.chordSets[l],n);return u[l]&&h!==u[l]?Object(k.a)(Object(k.a)({},e),{},{chordSets:u.map((function(e,n){return n===l?h:e}))}):e;default:return e}},vn=t(89),pn=t(88),Cn="#d1ad70",yn="#87ccb0",Sn=Object(pn.deepMerge)(vn.grommet,{global:{colors:{background:"#010115","background-back":{dark:"#080920"},"background-front":{dark:"#15173d"},"background-contrast":{dark:"#3f438a17"},black:"#00010d",white:"#fff9ef",brand:yn,"accent-1":Cn,border:{dark:"".concat(Cn,"80")},"border-semi":{dark:"".concat(Cn,"40")},"border-brand":{dark:"".concat(yn,"80")},"border-brand-semi":{dark:"".concat(yn,"40")}},font:{family:'"Josefin Sans"',face:"/* vietnamese */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMlhLzTs.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMhhLzTs.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/josefinsans/v17/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMZhLw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoNOlHnnY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoOulH.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin-ext */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoNOlHnnY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Limelight';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/limelight/v11/XLYkIZL7aopJVbZJHDuoOulH.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"}},heading:{font:{family:'"Limelight"'}},button:{border:{radius:"3px"}},card:{container:{border:"solid",round:"xxsmall",elevation:null}}});var kn=function(){var e=E("applicationState",xn,mn,gn),n=Object(m.a)(e,2),t=n[0],r=n[1];return Object(w.jsxs)(O.a,{full:!0,theme:Sn,themeMode:"dark",children:[Object(w.jsx)(x.a,{pad:{vertical:"medium",horizontal:"large"},background:"brand",children:Object(w.jsx)(v.a,{size:"small",margin:"none",children:Object(w.jsx)(I,{to:"/",children:"Chord Helper"})})}),Object(w.jsx)(p.a,{pad:"large",fill:!0,children:Object(w.jsxs)(S.c,{children:[Object(w.jsx)(S.a,{path:"/",element:Object(w.jsx)(jn,{state:t,dispatch:r})}),Object(w.jsx)(S.a,{path:"chord-sets/:chordSetId",element:Object(w.jsx)(cn,{state:t,dispatch:r})}),Object(w.jsx)(S.a,{path:"*",element:Object(w.jsx)(ge,{})})]})}),Object(w.jsx)(C.a,{pad:{vertical:"small",horizontal:"large"},background:"black",justify:"center",children:Object(w.jsx)(y.a,{color:"text-xweak",children:"Helping you with chords since 2021."})})]})},An=(t(124),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,170)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),c(e),i(e)}))});f.a.render(Object(w.jsx)(u.a.StrictMode,{children:Object(w.jsx)(g.a,{basename:"chord-helper",children:Object(w.jsx)(h.a,{backend:j.a,children:Object(w.jsx)(kn,{})})})}),document.getElementById("root")),An()}},[[125,1,2]]]);
//# sourceMappingURL=main.e6e68a9f.chunk.js.map