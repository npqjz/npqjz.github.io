(self.webpackChunkblog_from_jz=self.webpackChunkblog_from_jz||[]).push([[601],{5166:(e,s,n)=>{"use strict";n.r(s),n.d(s,{assets:()=>C,contentTitle:()=>N,default:()=>k,frontMatter:()=>f,metadata:()=>A,toc:()=>S});var r=n(4848),t=n(8453),l=n(6540),i=n(4164);const a={browserWindow:"browserWindow_bB7S",browserWindowHeader:"browserWindowHeader_jy2G",row:"row_U_dx",buttons:"buttons_hLRX",right:"right_T52X",browserWindowAddressBar:"browserWindowAddressBar_CvMb",dot:"dot_FqQr",browserWindowMenuIcon:"browserWindowMenuIcon_vPX3",bar:"bar_IxCe",browserWindowBody:"browserWindowBody_h78b",card:"card_nmIf",button:"button_zBEc",text:"text_x25k"};var o=n(8478);function d(e){let{children:s,minHeight:n,url:t="http://localhost:3000",style:l,bodyStyle:d}=e;return(0,r.jsx)(o.A,{children:()=>(0,r.jsxs)("div",{className:a.browserWindow,style:{...l,minHeight:n},children:[(0,r.jsxs)("div",{className:a.browserWindowHeader,children:[(0,r.jsxs)("div",{className:a.buttons,children:[(0,r.jsx)("span",{className:a.dot,style:{background:"#f25f58"}}),(0,r.jsx)("span",{className:a.dot,style:{background:"#fbbe3c"}}),(0,r.jsx)("span",{className:a.dot,style:{background:"#58cb42"}})]}),(0,r.jsx)("div",{className:(0,i.A)(a.browserWindowAddressBar,"text--truncate"),children:location?location.href:t}),(0,r.jsx)("div",{className:a.browserWindowMenuIcon,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:a.bar}),(0,r.jsx)("span",{className:a.bar}),(0,r.jsx)("span",{className:a.bar})]})})]}),(0,r.jsx)("div",{className:a.browserWindowBody,style:d,children:s})]})})}var c=n(3058);const u=e=>{let{handler:s,args:n=[]}=e;return(0,r.jsx)(o.A,{children:()=>{const[e,t]=(0,l.useState)("");return(0,r.jsxs)(d,{url:location.href,children:[(0,r.jsxs)("button",{className:(0,i.A)(a.button),onClick:async()=>{if(!s)return;const e=await s;t(e(...n))},children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",height:"24",width:"24",children:(0,r.jsx)("path",{fill:"white",d:"M23.15 2.587L18.21 0.210001C17.9308 0.075557 17.6167 0.031246 17.3113 0.083204C17.0058 0.135162 16.724 0.280818 16.505 0.500001L7.04499 9.13L2.92499 6.002C2.73912 5.86101 2.50976 5.78953 2.27669 5.79994C2.04363 5.81035 1.82156 5.902 1.64899 6.059L0.326993 7.261C0.223973 7.35465 0.141644 7.46878 0.0852761 7.59608C0.0289081 7.72339 -0.00025659 7.86106 -0.000350724 8.00028C-0.000444857 8.1395 0.0285336 8.27721 0.0847294 8.40459C0.140925 8.53197 0.2231 8.64621 0.325993 8.74L3.89899 12L0.325993 15.26C0.2231 15.3538 0.140925 15.468 0.0847294 15.5954C0.0285336 15.7228 -0.000444857 15.8605 -0.000350724 15.9997C-0.00025659 16.1389 0.0289081 16.2766 0.0852761 16.4039C0.141644 16.5312 0.223973 16.6454 0.326993 16.739L1.64999 17.94C1.82256 18.097 2.04463 18.1887 2.27769 18.1991C2.51076 18.2095 2.74012 18.138 2.92599 17.997L7.04599 14.869L16.506 23.499C16.7248 23.7182 17.0064 23.8639 17.3117 23.9159C17.6171 23.9679 17.931 23.9235 18.21 23.789L23.152 21.412C23.4062 21.2893 23.6207 21.0973 23.7707 20.8581C23.9207 20.619 24.0002 20.3423 24 20.06V3.939C24 3.65647 23.9203 3.37967 23.7699 3.14048C23.6195 2.90129 23.4046 2.70943 23.15 2.587ZM18.004 17.448L10.826 12L18.004 6.552V17.448Z"})}),(0,r.jsx)("p",{className:(0,i.A)(a.text),children:"Click me"})]}),(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("p",{children:(0,r.jsx)("b",{children:"\u8fd0\u884c\u7ed3\u679c\uff1a"})}),(0,r.jsx)(c.A,{className:(0,i.A)(a.card),children:e})]})]})}})},h=(0,l.memo)(u);var x=n(6497);const j="/**\r\n * Copyright (c) Facebook, Inc. and its affiliates.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE file in the root directory of this source tree.\r\n */\r\n\r\nimport React, { type CSSProperties, type ReactNode } from 'react'\r\nimport clsx from 'clsx'\r\n\r\nimport styles from './styles.module.css'\r\nimport BrowserOnly from '@docusaurus/BrowserOnly'\r\n\r\ninterface Props {\r\n  children: ReactNode\r\n  minHeight?: number\r\n  url: string\r\n  style?: CSSProperties\r\n  bodyStyle?: CSSProperties\r\n}\r\n\r\nexport default function BrowserWindow({ children, minHeight, url = 'http://localhost:3000', style, bodyStyle }: Props): JSX.Element {\r\n  return (\r\n    <BrowserOnly>\r\n      {() => {\r\n        return (\r\n          <div className={styles.browserWindow} style={{ ...style, minHeight }}>\r\n            <div className={styles.browserWindowHeader}>\r\n              <div className={styles.buttons}>\r\n                <span className={styles.dot} style={{ background: '#f25f58' }} />\r\n                <span className={styles.dot} style={{ background: '#fbbe3c' }} />\r\n                <span className={styles.dot} style={{ background: '#58cb42' }} />\r\n              </div>\r\n              <div className={clsx(styles.browserWindowAddressBar, 'text--truncate')}>{location ? location.href : url}</div>\r\n              <div className={styles.browserWindowMenuIcon}>\r\n                <div>\r\n                  <span className={styles.bar} />\r\n                  <span className={styles.bar} />\r\n                  <span className={styles.bar} />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div className={styles.browserWindowBody} style={bodyStyle}>\r\n              {children}\r\n            </div>\r\n          </div>\r\n        )\r\n      }}\r\n    </BrowserOnly>\r\n  )\r\n}\r\n",m='#include <stdio.h>\r\n#include <emscripten/emscripten.h>\r\n#include <emscripten/em_macros.h>\r\n\r\nextern "C"{\r\n  int add(int x, int y){\r\n\t return x+y;\r\n  }\r\n  int sub(int x, int y){\r\n  \t return x-y; \r\n  }\r\n}';var b=n(635),p=n.n(b);async function w(e){return(await p()()).instance.exports[e]}var y=n(1470),g=n(9365),v=n(7293);const f={},N=void 0,A={id:"subject/DS/test",title:"test",description:"1 + 2 = 3",source:"@site/docs/subject/DS/test.mdx",sourceDirName:"subject/DS",slug:"/subject/DS/test",permalink:"/docs/subject/DS/test",draft:!1,unlisted:!1,editUrl:"https://github.com/npqjz/npqjz.github.io/tree/main/docs/subject/DS/test.mdx",tags:[],version:"current",frontMatter:{},sidebar:"dsSidebar",previous:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/docs/subject/DS/"}},C={},S=[];function W(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{children:(0,r.jsx)(x.A,{language:"js",showLineNumbers:!0,title:"test",children:j})}),"\n",(0,r.jsx)(d,{children:(0,r.jsx)(x.A,{language:"cpp",showLineNumbers:!0,title:"test.cpp",children:m})}),"\n",(0,r.jsx)(d,{children:(0,r.jsxs)(y.A,{defaultValue:"add",children:[(0,r.jsxs)(g.A,{value:"add",label:"\u52a0\u6cd5",children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"1 + 2 = 3"})}),(0,r.jsx)(h,{handler:w("add"),args:[1,2]})]}),(0,r.jsxs)(g.A,{value:"sub",label:"\u51cf\u6cd5",children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"1 - 2 = -1"})}),(0,r.jsx)(h,{handler:w("sub"),args:[1,2]})]})]})}),"\n",(0,r.jsx)(d,{children:(0,r.jsxs)(y.A,{defaultValue:"orange",children:[(0,r.jsx)(g.A,{value:"apple",label:"Apple",default:!0,children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"This is an apple \ud83c\udf4e"})})}),(0,r.jsx)(g.A,{value:"orange",label:"Orange",children:(0,r.jsx)(s.p,{children:"This is an orange \ud83c\udf4a"})}),(0,r.jsx)(g.A,{value:"banana",label:"Banana",children:(0,r.jsx)(s.p,{children:"This is a banana \ud83c\udf4c"})})]})}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsxs)(y.A,{groupId:"operating-systems",children:[(0,r.jsx)(g.A,{value:"win",label:"Windows",children:"Use Ctrl + C to copy."}),(0,r.jsx)(g.A,{value:"mac",label:"macOS",children:"Use Command + C to copy."})]}),(0,r.jsxs)(y.A,{groupId:"operating-systems",children:[(0,r.jsx)(g.A,{value:"win",label:"Windows",children:"Use Ctrl + V to paste."}),(0,r.jsx)(g.A,{value:"mac",label:"macOS",children:"Use Command + V to paste."})]})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Easy to maintain open source documentation websites."}),"\n",(0,r.jsx)(s.p,{children:"\u2014 Docusaurus"}),"\n"]}),"\n",(0,r.jsx)(d,{children:(0,r.jsx)(x.A,{language:"js",showLineNumbers:!0})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Toggle me!"}),(0,r.jsx)(s.p,{children:"This is the detailed content"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"console.log('Markdown features including the code block are available')\n"})}),(0,r.jsxs)(s.p,{children:["You can use Markdown here including ",(0,r.jsx)(s.strong,{children:"bold"})," and ",(0,r.jsx)(s.em,{children:"italic"})," text, and ",(0,r.jsx)(s.a,{href:"https://docusaurus.io",children:"inline link"})]}),(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Nested toggle! Some surprise inside..."}),(0,r.jsx)(s.p,{children:"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32"})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'showLineNumbers title="\u6d4b\u8bd5\u4ee3\u7801"',children:"// error\r\nconsole.log(dsd)\n"})}),"\n",(0,r.jsx)(d,{children:(0,r.jsxs)(y.A,{children:[(0,r.jsx)(g.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"function helloWorld() {\r\n  console.log('Hello, world!')\r\n}\n"})})}),(0,r.jsx)(g.A,{value:"py",label:"Python",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-py",children:'def hello_world():\r\n  print("Hello, world!")\n'})})}),(0,r.jsx)(g.A,{value:"java",label:"Java",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'class HelloWorld {\r\n  public static void main(String args[]) {\r\n    System.out.println("Hello, World");\r\n  }\r\n}\n'})})})]})}),"\n","\n",(0,r.jsx)(v.A,{type:"tip",icon:"\ud83d\udca1",title:"Did you know...",children:(0,r.jsx)(s.p,{children:"Use plugins to introduce shorter syntax for the most commonly used JSX elements in your project."})})]})}function k(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(W,{...e})}):W(e)}},635:e=>{var s=new ArrayBuffer(940);new Uint8Array(s).set([0,97,115,109,1,0,0,0,1,37,7,96,0,1,127,96,1,127,0,96,0,0,96,1,127,1,127,96,2,127,127,1,127,96,3,127,127,127,1,127,96,3,127,126,127,1,126,3,20,19,2,4,4,1,0,1,1,0,2,3,1,3,2,0,0,0,1,3,0,4,5,1,112,1,1,1,5,6,1,1,130,2,130,2,6,23,4,127,1,65,128,128,4,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,7,143,2,13,6,109,101,109,111,114,121,2,0,17,95,95,119,97,115,109,95,99,97,108,108,95,99,116,111,114,115,0,0,3,97,100,100,0,1,3,115,117,98,0,2,6,102,102,108,117,115,104,0,11,21,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,105,110,105,116,0,12,25,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,103,101,116,95,102,114,101,101,0,13,25,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,103,101,116,95,98,97,115,101,0,14,24,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,103,101,116,95,101,110,100,0,15,25,95,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,114,101,115,116,111,114,101,0,16,23,95,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,97,108,108,111,99,0,17,28,101,109,115,99,114,105,112,116,101,110,95,115,116,97,99,107,95,103,101,116,95,99,117,114,114,101,110,116,0,18,25,95,95,105,110,100,105,114,101,99,116,95,102,117,110,99,116,105,111,110,95,116,97,98,108,101,1,0,10,170,4,19,4,0,16,12,11,57,1,6,127,35,0,33,2,65,16,33,3,32,2,32,3,107,33,4,32,4,32,0,54,2,12,32,4,32,1,54,2,8,32,4,40,2,12,33,5,32,4,40,2,8,33,6,32,5,32,6,106,33,7,32,7,15,11,57,1,6,127,35,0,33,2,65,16,33,3,32,2,32,3,107,33,4,32,4,32,0,54,2,12,32,4,32,1,54,2,8,32,4,40,2,12,33,5,32,4,40,2,8,33,6,32,5,32,6,107,33,7,32,7,15,11,6,0,32,0,36,1,11,4,0,35,1,11,2,0,11,2,0,11,12,0,65,128,128,4,16,5,65,132,128,4,11,8,0,65,128,128,4,16,6,11,4,0,65,1,11,2,0,11,186,2,1,3,127,2,64,32,0,13,0,65,0,33,1,2,64,65,0,40,2,136,128,4,69,13,0,65,0,40,2,136,128,4,16,11,33,1,11,2,64,65,0,40,2,136,128,4,69,13,0,65,0,40,2,136,128,4,16,11,32,1,114,33,1,11,2,64,16,7,40,2,0,34,0,69,13,0,3,64,65,0,33,2,2,64,32,0,40,2,76,65,0,72,13,0,32,0,16,9,33,2,11,2,64,32,0,40,2,20,32,0,40,2,28,70,13,0,32,0,16,11,32,1,114,33,1,11,2,64,32,2,69,13,0,32,0,16,10,11,32,0,40,2,56,34,0,13,0,11,11,16,8,32,1,15,11,2,64,2,64,32,0,40,2,76,65,0,78,13,0,65,1,33,2,12,1,11,32,0,16,9,69,33,2,11,2,64,2,64,2,64,32,0,40,2,20,32,0,40,2,28,70,13,0,32,0,65,0,65,0,32,0,40,2,36,17,5,0,26,32,0,40,2,20,13,0,65,127,33,1,32,2,69,13,1,12,2,11,2,64,32,0,40,2,4,34,1,32,0,40,2,8,34,3,70,13,0,32,0,32,1,32,3,107,172,65,1,32,0,40,2,40,17,6,0,26,11,65,0,33,1,32,0,65,0,54,2,28,32,0,66,0,55,3,16,32,0,66,0,55,2,4,32,2,13,1,11,32,0,16,10,11,32,1,11,18,0,65,128,128,4,36,3,65,0,65,15,106,65,112,113,36,2,11,7,0,35,0,35,2,107,11,4,0,35,3,11,4,0,35,2,11,6,0,32,0,36,0,11,18,1,2,127,35,0,32,0,107,65,112,113,34,1,36,0,32,1,11,4,0,35,0,11]);const{Module:n,instantiate:r,Memory:t,Table:l}=WebAssembly;e.exports=function(e){return void 0===e&&(e={global:{},env:{memory:new t({initial:10,limit:100}),table:new l({initial:0,element:"anyfunc"})}}),r(s,e)}},1559:(e,s,n)=>{"use strict";n.d(s,{A:()=>l});n(6540);var r=n(4718),t=n(4848);function l(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.A,{...e})})}}}]);