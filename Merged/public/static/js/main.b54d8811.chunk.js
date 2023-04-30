(this.webpackJsonprapp1=this.webpackJsonprapp1||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var s=n(2),i=n(3),r=n(5),a=n(4),o=n(0),c=n(1),d=n.n(c),l=n(7),h=n.n(l),p=function(t){Object(r.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={hidden:!0},t.toggle=function(){t.setState((function(t){return{hidden:!t.hidden}}))},t}return Object(i.a)(n,[{key:"render",value:function(){return this.props.prediction?Object(o.jsxs)("div",{className:"pipeline",children:[Object(o.jsxs)("p",{className:"show",onClick:this.toggle,children:[this.state.hidden?"Show":"Hide"," Text Processing Summary ",Object(o.jsx)("span",{role:"img","aria-label":"Show pipeline",children:"\ud83e\udc47"})]}),Object(o.jsxs)("div",{className:"output",hidden:this.state.hidden,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Original News Article"}),this.props.original]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Preprocessed Text"}),this.props.preprocessed]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Pos-Tagged Text"}),this.props.pos_tagged]})]})]}):null}}]),n}(d.a.Component),u=(n(13),function(t){Object(r.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).MIN_WORDS=25,t.MAX_WORDS=3500,t.state={text:"",wordsHint:"You have to write at least ".concat(t.MIN_WORDS," words"),loading:!1,error:!1,prediction:null,original:null,pos_tagged:null,preprocessed:null,emoji:!0},t.random=function(){return fetch("/random").then((function(t){return t.json()})).then((function(t){return t.title+"\n\n"+t.text})).then((function(e){return t.setState({text:e,wordsHint:t.getWordsHint(e),prediction:null,original:null,pos_tagged:null,preprocessed:null,emoji:!1})})).catch((function(e){return t.setState({error:!0,emoji:!1})}))},t.updateInput=function(e){var n=e.target.value;return t.setState({text:n,prediction:null,wordsHint:t.getWordsHint(n)})},t.getWordsHint=function(e){var n=e.split(/\s/).length;return n<t.MIN_WORDS?"You have to write ".concat(t.MIN_WORDS-n," more words"):n>=t.MIN_WORDS?"You can write up to ".concat(t.MAX_WORDS-n," more words"):void 0},t.predict=function(){t.MAX_WORDS-t.state.text.split(/\s/).length<0||(t.setState({loading:!0,prediction:null}),fetch("/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.state.text)}).then((function(t){return t.json()})).then((function(e){var n=e.original,s=e.pos_tagged,i=e.preprocessed,r=e.prediction;t.setState({loading:!1,prediction:r,original:n,pos_tagged:s,preprocessed:i})})).catch((function(e){return t.setState({loading:!1,error:!0})})))},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:" Fake News Detector"}),Object(o.jsx)("textarea",{autoFocus:!0,disabled:this.state.loading,value:this.state.text,onChange:this.updateInput}),Object(o.jsxs)("span",{className:"hint",children:[" ",this.state.wordsHint]}),Object(o.jsxs)("button",{disabled:this.state.loading,className:"random",onClick:this.random,children:["Click Here to Generate  News  ",Object(o.jsx)("span",{children:"Click here"}),".",Object(o.jsx)("span",{role:"img",className:"emoji bounce",children:this.state.emoji?" ":""})]}),Object(o.jsx)("button",{disabled:this.state.loading||this.MIN_WORDS-this.state.text.split(/\s/).length>0||this.MAX_WORDS-this.state.text.split(/\s/).length<0,className:"cta",onClick:this.predict,children:" Predict "}),this.state.loading?Object(o.jsx)("h1",{children:"Classifying ..."}):"",this.state.error?Object(o.jsx)("h1",{children:"ERROR"}):"",Object(o.jsx)("h1",{className:this.state.prediction,children:this.state.prediction}),Object(o.jsx)("hr",{}),Object(o.jsx)(p,{prediction:this.state.prediction,original:this.state.original,pos_tagged:this.state.pos_tagged,preprocessed:this.state.preprocessed})]})}}]),n}(d.a.Component));h.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b54d8811.chunk.js.map