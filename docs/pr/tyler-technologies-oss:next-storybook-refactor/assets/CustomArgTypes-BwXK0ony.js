import{j as e}from"./jsx-runtime-BzzPvGet.js";import{u as C,H as _,g as d,f as m}from"./index-CL-c9D_Z.js";import{d as D}from"./constants-DHKkwbIH.js";const P="_section_1v5lg_1",w="_table_1v5lg_5",p={section:P,table:w,"sb-anchor":"_sb-anchor_1v5lg_11","sb-unstyled":"_sb-unstyled_1v5lg_11"};function A({text:s,href:t}){return e.jsx("p",{children:e.jsxs("i",{children:["Learn more about ",e.jsx("a",{href:`/${t}`,children:s}),"."]})})}function o({title:s,name:t,hrefText:n,href:c,children:r,headingLevel:i="h3"}){const h=(i==="h3"?s:`${t}-${s}`).toLowerCase().replace(/[^a-z0-9]/gi,"-");return e.jsxs("section",{className:p.section,children:[e.jsx(_,{as:i,id:h,children:s}),r,c&&n?e.jsx(A,{text:n,href:c}):null]})}function y({items:s}){return e.jsxs("table",{className:p.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:s==null?void 0:s.map(t=>{var n;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{children:t.name})}),e.jsx("td",{children:(n=t.type)!=null&&n.text?e.jsx(d,{children:t.type.text}):"-"}),e.jsx("td",{children:t.default?e.jsx(d,{children:t.default}):"-"}),e.jsx("td",{children:e.jsx(m,{children:t.description})})]},t.name)})})]})}const E=["(default)"];function f({items:s}){return e.jsxs("table",{className:p.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:s==null?void 0:s.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:E.includes(t.name)?e.jsx("i",{children:t.name}):e.jsx(d,{children:t.name})}),e.jsx("td",{children:e.jsx(m,{children:t.description})})]},t.name))})]})}function $({items:s}){return e.jsxs("table",{className:p.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Type"})]})}),e.jsx("tbody",{children:s==null?void 0:s.map(t=>{var n;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{children:t.name})}),e.jsx("td",{children:e.jsx(m,{children:t.description})}),e.jsx("td",{children:(n=t.type)!=null&&n.text?e.jsx(d,{children:t.type.text}):"-"})]},t.name)})})]})}function N({items:s}){return e.jsxs("table",{className:p.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Return Type"})]})}),e.jsx("tbody",{children:s==null?void 0:s.map(t=>{var n,c,r;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{children:`${t.name}()`})}),e.jsx("td",{children:e.jsx(m,{children:t.description})}),e.jsx("td",{children:(n=t.parameters)!=null&&n.length?e.jsx(d,{children:M(t.parameters)}):"-"}),e.jsx("td",{children:(r=(c=t.return)==null?void 0:c.type)!=null&&r.text?e.jsx(d,{children:t.return.type.text}):"-"})]},t.name)})})]})}function I({dependencies:s}){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This component will automatically include the following components."}),e.jsx("ul",{children:s.map(t=>{const n=t.toLowerCase().replace(/^forge-/gi,"").replace(/[^a-z0-9]/gi,"-");return e.jsx("li",{children:e.jsx("a",{href:`/?path=/docs/components-${n}--docs`,children:`<${t}>`})},t)})})]})}function M(s){return s.map(t=>`${t.name}: ${t.type.text}`).join(", ")}function S({tagName:s,headingLevel:t}){var g,b,T;const n=D(s),c=(g=n.members)==null?void 0:g.filter(l=>l.kind==="field"&&l.privacy==="public"),r=n.attributes,i=(b=n.members)==null?void 0:b.filter(l=>l.kind==="method"&&l.privacy==="public"),a=n.events,h=n.dependencies,x=((T=n.slots)==null?void 0:T.map(l=>(l.name||(l.name="(default)"),l)))??[],j=n.cssProperties,u=n.cssParts;return e.jsxs("div",{children:[!!(c!=null&&c.length)&&e.jsx(o,{title:"Properties",name:s,headingLevel:t,hrefText:"Properties",href:"?path=/docs/getting-started-usage--docs#properties--attributes",children:e.jsx(y,{items:c})}),!!(r!=null&&r.length)&&e.jsx(o,{title:"Attributes",name:s,headingLevel:t,hrefText:"Attributes",href:"?path=/docs/getting-started-usage--docs#properties--attributes",children:e.jsx(y,{items:r})}),!!(a!=null&&a.length)&&e.jsx(o,{title:"Events",name:s,headingLevel:t,hrefText:"Events",href:"?path=/docs/getting-started-usage--docs#events",children:e.jsx($,{items:a})}),!!(x!=null&&x.length)&&e.jsx(o,{title:"Slots",name:s,headingLevel:t,hrefText:"Slots",href:"?path=/docs/getting-started-usage--docs#slots",children:e.jsx(f,{items:x})}),!!(i!=null&&i.length)&&e.jsx(o,{title:"Methods",name:s,headingLevel:t,hrefText:"Methods",href:"?path=/docs/getting-started-usage--docs#methods",children:e.jsx(N,{items:i})}),!!(j!=null&&j.length)&&e.jsx(o,{title:"CSS Custom Properties",name:s,headingLevel:t,hrefText:"CSS Custom Properties",href:"?path=/docs/getting-started-usage--docs#css-custom-properties",children:e.jsx(f,{items:j})}),!!(u!=null&&u.length)&&e.jsx(o,{title:"CSS Shadow Parts",name:s,headingLevel:t,hrefText:"CSS Shadow Parts",href:"?path=/docs/getting-started-usage--docs#css-shadow-parts",children:e.jsx(f,{items:u})}),!!(h!=null&&h.length)&&e.jsx(o,{title:"Dependencies",name:s,headingLevel:t,children:e.jsx(I,{dependencies:h})})]})}const O=/\s*\/\s*/,k=s=>{const t=s.trim().split(O);return(t==null?void 0:t[(t==null?void 0:t.length)-1])||s};function H(){const s=C("story",["story"]),t=s.story.component;if(!t||typeof t!="string")return null;const n=s.story.subcomponents;if(!(!!n&&Object.keys(n).length>0))return e.jsx(S,{tagName:t,headingLevel:"h3"});const r=k(s.story.title),i={[r]:t,...n};return e.jsx("div",{children:Object.entries(i).map(([a,h],x)=>{const j=r.toLowerCase().replace(/[^a-z0-9]/gi,"-");return e.jsxs("div",{children:[e.jsx(_,{as:"h3",id:j,children:a}),e.jsx(S,{tagName:h,headingLevel:"h4"})]},x)})})}export{H as C};
