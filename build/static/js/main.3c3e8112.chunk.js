(this.webpackJsonpmealdbreact=this.webpackJsonpmealdbreact||[]).push([[0],{39:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(30),r=a.n(n),l=(a(39),a(8)),i=a(18),j=a(15),o=a.n(j),d=a(31),b=a(10),m=a(32),h=a.n(m),u=function(e,t){switch(t.type){case"FETCH_INIT":return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0,isError:!1});case"FETCH_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,isError:!1,data:t.payload});case"FETCH_FAILURE":return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,isError:!0});default:throw new Error}},x=function(e,t){var a=Object(c.useState)(e),s=Object(l.a)(a,2),n=s[0],r=s[1],i=Object(c.useReducer)(u,{isLoading:!1,isError:!1,data:t}),j=Object(l.a)(i,2),b=j[0],m=j[1];return Object(c.useEffect)((function(){var e=!1;return function(){var t=Object(d.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m({type:"FETCH_INIT"}),t.prev=1,t.next=4,h()(n);case 4:a=t.sent,e||m({type:"FETCH_SUCCESS",payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e||m({type:"FETCH_FAILURE"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}()(),function(){e=!0}}),[n]),[b,r]},O=a(11),p=a(1),g=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],n=x("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken",{meals:[]}),r=Object(l.a)(n,2),j=r[0],o=j.data,d=j.isLoading,b=j.isError,m=r[1];return Object(p.jsx)(c.Fragment,{children:Object(p.jsx)("div",{className:"bg-gray-900 text-white min-h-screen",children:Object(p.jsxs)("div",{className:"m-auto max-w-3xl flex flex-col items-center justify-center text-center",children:[Object(p.jsx)("h1",{className:"font-black text-2xl",children:"Meal Finder"}),Object(p.jsxs)("div",{className:"flex mt-2",children:[Object(p.jsxs)("form",{className:"flex",onSubmit:function(e){m("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(a)),e.preventDefault()},children:[Object(p.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)},className:"border rounded-l sm:w-full text-black"}),Object(p.jsx)("button",{className:"search-btn border rounded-r",type:"submit",children:Object(p.jsx)(i.b,{className:"h-5 w-5 text-gray-900"})})]}),Object(p.jsx)("button",{className:"random-btn border rounded cursor-pointer ml-2.5",id:"random",children:Object(p.jsx)(i.a,{className:"h-5 w-5 text-gray-900"})})]}),b&&Object(p.jsx)("div",{children:"Something went wrong ..."}),!o.meals&&Object(p.jsx)("div",{children:"There is no result. Try again!"}),d?Object(p.jsx)("div",{children:"Loading ..."}):Object(p.jsx)("div",{id:"meals",className:"meals",children:o.meals&&o.meals.map((function(e){return Object(p.jsx)("div",{className:"meal",children:Object(p.jsxs)(O.b,{to:"/MealInfo/".concat(e.idMeal),children:[Object(p.jsx)("img",{className:"meal-img",src:e.strMealThumb,alt:e.strMeal}),Object(p.jsx)("div",{className:"meal-info","data-mealid":e.idMeal,children:Object(p.jsx)("h3",{children:e.strMeal})})]})},e.idMeal)}))})]})})})},f=a(2),v=a(34),w=function(){var e=Object(f.g)().mealID,t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],n=a[1],r=Object(f.f)(),i=x(),j=Object(l.a)(i,2),o=j[0],d=o.data,b=o.isLoading,m=o.isError,h=j[1];(Object(c.useEffect)((function(){return h("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(e))}),[h,e,d]),console.log(s),d&&""===s)&&(console.log(d),function(e){for(var t=[],a=1;a<=20&&e["strIngredient".concat(a)];a++)t.push("".concat(e["strIngredient".concat(a)]," - ").concat(e["strMeasure".concat(a)]));n(t)}(d.meals[0]));return Object(p.jsx)("div",{className:"bg-gray-900 text-white relative",children:Object(p.jsx)("div",{className:"m-auto max-w-3xl flex flex-col items-center justify-center text-center bg-gray-900 text-white",children:Object(p.jsxs)("div",{id:"single-meal",children:[m&&Object(p.jsx)("div",{children:"Something went wrong ..."}),b?Object(p.jsx)("div",{className:"min-h-screen",children:"Loading ..."}):s&&d&&Object(p.jsxs)("div",{className:"single-meal my-8 mx-auto w-3/4",children:[Object(p.jsx)("h1",{children:d.meals[0].strMeal}),Object(p.jsx)("button",{className:"absolute top-1 left-1 sm:top-4 sm:left-4 hover:bg-white hover:text-black bg-gray-800 py-1 px-1 sm:py-2 sm:px-4",onClick:function(){r.go(-1)},children:"\xab Go Back"}),Object(p.jsx)("img",{className:"single-meal-img",src:d.meals[0].strMealThumb,alt:d.meals[0].strMeal}),Object(p.jsxs)("div",{className:"single-meal-info",children:[Object(p.jsx)("p",{children:d.meals[0].strCategory}),Object(p.jsx)("p",{children:d.meals[0].strArea})]}),Object(p.jsxs)("div",{className:"main",children:[Object(p.jsx)("p",{className:"single-meal-p",children:d.meals[0].strInstructions}),Object(p.jsx)("h2",{children:"Ingredients"}),Object(p.jsx)("ul",{className:"single-meal-ul",children:s.map((function(e){return Object(p.jsx)("li",{className:"single-meal-ul-li",children:e},Object(v.v4)())}))})]})]},d.meals[0].idMeal)]})})})};var N=function(){return Object(p.jsx)(O.a,{children:Object(p.jsxs)(f.c,{children:[Object(p.jsx)(f.a,{exact:!0,path:"/",children:Object(p.jsx)(g,{})}),Object(p.jsx)(f.a,{path:"/MealInfo/:mealID",children:Object(p.jsx)(w,{})})]})})};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.3c3e8112.chunk.js.map