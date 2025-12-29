import{j as s}from"./jsx-runtime-u17CrQMm.js";const N="_rols_v9i8y_1",o={rols:N},l=function(r){const{children:n}=r;return s.jsx("div",{className:"row",children:n})},e=function(r){const{children:n,className:j,xs:x,sm:a,md:d,lg:t,xl:i,xxl:m}=r;let p=x?"col-xs-"+x:"",_=a?"col-sm-"+a:"",g=d?"col-md-"+d:"",u=t?"col-lg-"+t:"",C=i?"col-xl-"+i:"",f=m?"col-xxl-"+m:"";return s.jsx(s.Fragment,{children:s.jsx("div",{className:`${j} ${p} ${_} ${g} ${u} ${C} ${f}`,children:n})})};l.__docgenInfo={description:"",methods:[],displayName:"Row"};e.__docgenInfo={description:"",methods:[],displayName:"Col"};function h(){return s.jsxs(s.Fragment,{children:[s.jsx("h1",{children:"栅格"}),s.jsx("h2",{children:"API"}),s.jsx("code",{children:`
          <Row>
              <Col xs={6} xl={6}>
                  Col
              </Col>
          </Row> 
        `}),s.jsx("h3",{children:"演示"}),s.jsx("p",{children:s.jsx(l,{children:s.jsx(e,{className:o.rols,xs:2,sm:4,md:6,lg:8,xl:12,xxl:12,span:12,children:"Col-12 xs-2 sm-4 md-6"})})}),s.jsx("p",{children:s.jsx(l,{children:s.jsx(e,{className:o.rols,xs:2,xl:4,children:"Col-2 xs-2"})})}),s.jsx("p",{children:s.jsx(l,{children:s.jsx(e,{className:o.rols,xs:4,xl:6,children:"Col-4 xs-2"})})}),s.jsx("p",{children:s.jsx(l,{children:s.jsx(e,{className:o.rols,xs:6,xl:8,children:"Col-6 xs-2"})})})]})}h.__docgenInfo={description:"",methods:[],displayName:"Page"};const b={component:h},c={args:{backgroundColor:"#000000",label:"label"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColor: "#000000",
    label: "label"
  }
}`,...c.parameters?.docs?.source}}};const w=["Default"];export{c as Default,w as __namedExportsOrder,b as default};
