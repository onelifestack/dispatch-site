import{S as L,r as S,j as u}from"./index-C3PCSZ7v.js";import{i as F,d as B,a as f,k as x,s as I,b as A,G as J,c as P,e as W,T as $,f as z,v as K,p as H,g as X,h as Y,j as Z,l as ee,m as te,n as se,o as ne,q as re,r as ae,t as ie,u as oe,w as le,x as ce,y as ue,z as E,A as N,B as pe,C as de,D as O,E as j}from"./validate-BVj5vZ6q.js";function me(s){const a={descriptions:!0,specifiedByUrl:!1,directiveIsRepeatable:!1,schemaDescription:!1,inputValueDeprecation:!1,experimentalDirectiveDeprecation:!1,oneOf:!1,typeDepth:9,...s},t=a.descriptions?"description":"",r=a.specifiedByUrl?"specifiedByURL":"",i=a.directiveIsRepeatable?"isRepeatable":"",d=a.schemaDescription?t:"";function y(p){return a.inputValueDeprecation?p:""}function g(p){return a.experimentalDirectiveDeprecation?p:""}const m=a.oneOf?"isOneOf":"";function h(p,l){if(p<=0)return"";if(p>100)throw new Error("Please set typeDepth to a reasonable value between 0 and 100; the default is 9.");return`
${l}ofType {
${l}  name
${l}  kind${h(p-1,l+"  ")}
${l}}`}return`
    query IntrospectionQuery {
      __schema {
        ${d}
        queryType { name kind }
        mutationType { name kind }
        subscriptionType { name kind }
        types {
          ...FullType
        }
        directives${g("(includeDeprecated: true)")} {
          name
          ${t}
          ${i}
          ${g("isDeprecated")}
          ${g("deprecationReason")}
          locations
          args${y("(includeDeprecated: true)")} {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      ${t}
      ${r}
      ${m}
      fields(includeDeprecated: true) {
        name
        ${t}
        args${y("(includeDeprecated: true)")} {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields${y("(includeDeprecated: true)")} {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        ${t}
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      ${t}
      type { ...TypeRef }
      defaultValue
      ${y("isDeprecated")}
      ${y("deprecationReason")}
    }

    fragment TypeRef on __Type {
      kind
      name${h(a.typeDepth,"      ")}
    }
  `}function ye(s,a){F(s)&&F(s.__schema)||B(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${f(s)}.`);const t=s.__schema,r=x(t.types,e=>e.name,e=>w(e));for(const e of[...I,...A])r[e.name]&&(r[e.name]=e);const i=t.queryType?p(t.queryType):null,d=t.mutationType?p(t.mutationType):null,y=t.subscriptionType?p(t.subscriptionType):null,g=t.directives?t.directives.map(G):[];return new J({description:t.description,query:i,mutation:d,subscription:y,types:Object.values(r),directives:g,assumeValid:void 0});function m(e){if(e.kind===$.LIST){const n=e.ofType;if(!n)throw new Error("Decorated type deeper than introspection query.");return new ne(m(n))}if(e.kind===$.NON_NULL){const n=e.ofType;if(!n)throw new Error("Decorated type deeper than introspection query.");const b=m(n);return new re(ae(b))}return h(e)}function h(e){const n=e.name;if(!n)throw new Error(`Unknown type reference: ${f(e)}.`);const b=r[n];if(!b)throw new Error(`Invalid or incomplete schema, unknown type: ${n}. Ensure that a full introspection query is used in order to build a client schema.`);return b}function p(e){return P(h(e))}function l(e){return oe(h(e))}function w(e){if(e!=null&&e.name!=null&&e.kind!=null)switch(e.kind){case $.SCALAR:return v(e);case $.OBJECT:return c(e);case $.INTERFACE:return T(e);case $.UNION:return D(e);case $.ENUM:return V(e);case $.INPUT_OBJECT:return _(e)}const n=f(e);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${n}.`)}function v(e){return new se({name:e.name,description:e.description,specifiedByURL:e.specifiedByURL})}function o(e){if(e.interfaces===null&&e.kind===$.INTERFACE)return[];if(!e.interfaces){const n=f(e);throw new Error(`Introspection result missing interfaces: ${n}.`)}return e.interfaces.map(l)}function c(e){return new te({name:e.name,description:e.description,interfaces:()=>o(e),fields:()=>R(e)})}function T(e){return new ee({name:e.name,description:e.description,interfaces:()=>o(e),fields:()=>R(e)})}function D(e){if(!e.possibleTypes){const n=f(e);throw new Error(`Introspection result missing possibleTypes: ${n}.`)}return new Z({name:e.name,description:e.description,types:()=>e.possibleTypes.map(p)})}function V(e){if(!e.enumValues){const n=f(e);throw new Error(`Introspection result missing enumValues: ${n}.`)}return new Y({name:e.name,description:e.description,values:x(e.enumValues,n=>n.name,n=>({description:n.description,deprecationReason:n.deprecationReason}))})}function _(e){if(!e.inputFields){const n=f(e);throw new Error(`Introspection result missing inputFields: ${n}.`)}return new X({name:e.name,description:e.description,fields:()=>k(e.inputFields),isOneOf:e.isOneOf})}function R(e){if(!e.fields)throw new Error(`Introspection result missing fields: ${f(e)}.`);return x(e.fields,n=>n.name,U)}function U(e){const n=m(e.type);if(!ie(n)){const b=f(n);throw new Error(`Introspection must provide output type for fields, but received: ${b}.`)}if(!e.args){const b=f(e);throw new Error(`Introspection result missing field args: ${b}.`)}return{description:e.description,deprecationReason:e.deprecationReason,type:n,args:k(e.args)}}function k(e){return x(e,n=>n.name,C)}function C(e){const n=m(e.type);if(!z(n)){const M=f(n);throw new Error(`Introspection must provide input type for arguments, but received: ${M}.`)}const b=e.defaultValue!=null?K(H(e.defaultValue),n):void 0;return{description:e.description,type:n,defaultValue:b,deprecationReason:e.deprecationReason}}function G(e){if(!e.args){const n=f(e);throw new Error(`Introspection result missing directive args: ${n}.`)}if(!e.locations){const n=f(e);throw new Error(`Introspection result missing directive locations: ${n}.`)}return new W({name:e.name,description:e.description,isRepeatable:e.isRepeatable,deprecationReason:e.deprecationReason,locations:e.locations.slice(),args:k(e.args)})}}async function fe(s,a,t){const r=s.headers.filter(([y])=>y.toLowerCase()!=="content-type");r.push(["Content-Type","application/json"]);const i=await a.send({...s,method:"POST",headers:r,body:JSON.stringify({query:me()}),multipart:null,bodyFile:null},t);let d;try{d=JSON.parse(i.body)}catch{throw new L(`The server didn’t answer with JSON (${i.status} ${i.statusText}).`)}if(!d.data)throw new L(d.errors?.length?`Introspection failed: ${d.errors[0].message}`:`Introspection failed (${i.status}). The server may have it turned off.`);return ye(d.data)}function he(s,a){if(!s.trim())return[];try{const t=le(s);return a?ce(a,t).map(r=>({message:r.message,line:r.locations?.[0]?.line,column:r.locations?.[0]?.column})):[]}catch(t){return t instanceof ue?[{message:t.message,line:t.locations?.[0]?.line,column:t.locations?.[0]?.column}]:[{message:String(t)}]}}const Q=s=>({name:s.name,type:String(s.type),description:s.description??"",args:s.args.map(a=>`${a.name}: ${String(a.type)}`).join(", "),leaf:!(E(j(s.type))||N(j(s.type))||O(j(s.type)))});function ge(s){return[["query",s.getQueryType()],["mutation",s.getMutationType()],["subscription",s.getSubscriptionType()]].filter(([,t])=>t).map(([t,r])=>({kind:t,fields:Object.values(r.getFields()).map(Q)}))}function Te(s,a){const t=s.getType(a);return t?E(t)||N(t)?{type:t,fields:Object.values(t.getFields()).map(Q),values:[]}:pe(t)?{type:t,fields:Object.values(t.getFields()).map(r=>({name:r.name,type:String(r.type),args:"",description:r.description??"",leaf:!0})),values:[]}:de(t)?{type:t,fields:[],values:t.getValues().map(r=>r.name)}:O(t)?{type:t,fields:[],values:t.getTypes().map(r=>r.name)}:{type:t,fields:[],values:[]}:{type:void 0,fields:[],values:[]}}function be(s,a,t){const i=(a==="query"?s.getQueryType():a==="mutation"?s.getMutationType():s.getSubscriptionType())?.getFields()[t];if(!i)return{query:"",variables:""};const d=i.args.filter(l=>String(l.type).endsWith("!")),y=d.map(l=>`$${l.name}: ${String(l.type)}`).join(", "),g=d.map(l=>`${l.name}: $${l.name}`).join(", "),m=j(i.type);let h="";if(E(m)||N(m)){const l=Object.values(m.getFields()).filter(w=>{const v=j(w.type);return!(E(v)||N(v)||O(v))&&!w.args.some(o=>String(o.type).endsWith("!"))});h=` {
    ${(l.length?l:Object.values(m.getFields())).slice(0,8).map(w=>w.name).join(`
    `)}
  }`}else O(m)&&(h=` {
    __typename
  }`);const p=t[0].toUpperCase()+t.slice(1);return{query:`${a} ${p}${y?`(${y})`:""} {
  ${t}${g?`(${g})`:""}${h}
}`,variables:d.length?JSON.stringify(Object.fromEntries(d.map(l=>[l.name,$e(String(l.type))])),null,2):""}}const $e=s=>s.startsWith("[")?[]:/Int|Float/.test(s)?0:/Boolean/.test(s)?!0:s.replace("!","")==="ID"?"1":"",q=new Map;function Se({ws:s,notify:a,onSchema:t}){const r=s.prepared.url,[i,d]=S.useState(()=>q.get(r)??null),[y,g]=S.useState(!1),[m,h]=S.useState(null);S.useEffect(()=>{t?.(i)},[i]);const p=S.useMemo(()=>he(s.draft.body.text,i),[s.draft.body.text,i]),l=S.useMemo(()=>i?ge(i):[],[i]),w=async()=>{g(!0);try{const o=await fe(s.prepared,s.transport,{timeoutMs:s.settings.timeoutMs,followRedirects:!0,insecureTls:s.settings.insecureTls});q.set(r,o),d(o),a(`Schema loaded: ${Object.keys(o.getTypeMap()).filter(c=>!c.startsWith("__")).length} types.`)}catch(o){a(o instanceof Error?o.message:String(o))}finally{g(!1)}},v=(o,c)=>{if(!i)return;const T=be(i,o,c);s.setDraft(D=>({...D,method:"POST",body:{...D.body,text:T.query,graphqlVariables:T.variables}}))};return u.jsxs("div",{className:"gqlTools",children:[u.jsxs("div",{className:"row-h",children:[u.jsx("button",{type:"button",className:"btn small",disabled:y||!r,onClick:()=>void w(),children:y?"Fetching schema…":i?"Refresh schema":"Fetch schema"}),u.jsx("span",{className:"small muted grow",children:i?"Checked against the schema.":"Syntax is checked; fetch the schema to check fields and get the explorer."}),p.length===0&&s.draft.body.text.trim()&&u.jsx("span",{className:"small goodText",children:"✓ Looks valid"})]}),p.length>0&&u.jsx("ul",{className:"gqlProblems","aria-label":"GraphQL problems",children:p.slice(0,6).map((o,c)=>u.jsxs("li",{className:"small badText",children:[o.line?`Line ${o.line}: `:"",o.message]},c))}),i&&u.jsxs("details",{className:"gqlExplorer",children:[u.jsx("summary",{className:"small",children:"Schema explorer"}),l.map(o=>u.jsxs("div",{children:[u.jsx("p",{className:"eyebrow",children:o.kind}),u.jsx("ul",{className:"gqlFields",children:o.fields.map(c=>u.jsxs("li",{children:[u.jsx("button",{type:"button",className:"linkBtn mono small",title:"Insert a starter operation",onClick:()=>v(o.kind,c.name),children:c.name}),u.jsxs("span",{className:"mono tiny muted",children:[c.args&&`(${c.args})`,": "]}),u.jsx("button",{type:"button",className:"linkBtn mono tiny",onClick:()=>h(m===c.type?null:c.type),children:c.type}),c.description&&u.jsx("span",{className:"tiny muted block",children:c.description})]},c.name))})]},o.kind)),m&&(()=>{const o=m.replace(/[[\]!]/g,""),c=Te(i,o);return u.jsxs("div",{className:"gqlType",children:[u.jsxs("p",{className:"eyebrow",children:["type ",o]}),c.fields.map(T=>u.jsxs("div",{className:"mono tiny",children:[u.jsx("b",{children:T.name}),T.args&&`(${T.args})`,": ",T.type]},T.name)),c.values.length>0&&u.jsx("div",{className:"mono tiny",children:c.values.join(" | ")})]})})()]})]})}export{Se as GraphqlTools};
