(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/Globe.d8c3acbd.svg"},41:function(e,t,a){e.exports=a(99)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(34),o=a.n(r),c=(a(47),a(8)),l=a(9),s=a(11),m=a(10),h=a(12),u=a(36),p=a(101),g=a(103),d=(a(48),function(e){var t=e.search,a=e.onSearchChange;return i.a.createElement("div",null,i.a.createElement("div",{className:"searchBox pa2"},i.a.createElement("form",null,i.a.createElement("input",{id:"userInput",className:"search tc bg-lightest-purple",type:"search",placeholder:"search countries...",style:{display:"block",margin:"auto",border:"1px solid white",borderRadius:"30px",height:"45px",outline:"none"},value:t,onChange:function(e){return a(e)}}))))}),b=(a(49),function(e){var t={backgroundImage:"url(".concat(e.countryData.flag,")"),backgroundSize:"200px auto",backgroundRepeat:"no-repeat",backgroundPosition:"center",cursor:"pointer"};return i.a.createElement("div",{style:t,className:"card"},e.countryData.name)}),k=(a(20),a(23)),v=function(e){var t=e.region,a=e.countries,n=e.search,r=e.onSearchChange,o=(e.flagList,a.filter(function(e){return e.region===t&&e.name.toLowerCase().includes(n)}).map(function(e){return i.a.createElement(k.a,{key:e.name,to:"/travel-guide/detail/".concat(e.name)},i.a.createElement(b,{countryData:e}))}));return i.a.createElement("div",{className:"centerFlex",style:{backgroundImage:"url(https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"}},i.a.createElement(d,{onSearchChange:r,search:n}),i.a.createElement("div",{className:"tc bg-black-60 code dib br3 pb1 ma3 bw2 shadow-5 region regionFlagContainer"},i.a.createElement("h2",null,t),i.a.createElement("ul",{className:"list"},o),i.a.createElement(k.a,{className:"f6 link dim br-pill ph4 pv2 mb2 dib black bg-white",to:"/travel-guide"},"BACK")))},f={image:{Africa:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/550px-Africa_%28orthographic_projection%29.svg.png",Americas:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Americas_%28orthographic_projection%29.svg/1200px-Americas_%28orthographic_projection%29.svg.png",Asia:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/220px-Asia_%28orthographic_projection%29.svg.png",Europe:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/220px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png",Oceania:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Oceania_%28orthographic_projection%29.svg/400px-Oceania_%28orthographic_projection%29.svg.png",Polar:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Antarctica_%28orthographic_projection%29.svg/250px-Antarctica_%28orthographic_projection%29.svg.png"}},w=function(e){function t(e){var a,n=e.name,i=e.countryList;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this))).handleOnClick=function(){a.setState({redirect:!0})},a.displayCountries=function(){for(var e=[],t=a.state.countries.length>10?10:a.state.countries.length,n=0;n<t;n++)e.push(a.state.countries[n]);return e},a.state={countries:i.sort(function(e,t){return t.population-e.population}).map(function(e){return e.name}),region:n,path:"/travel-guide/".concat(n.toLowerCase())},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"tc bg-white-90  code dib br3 pb1 ma3 grow bw2 shadow-5 region-card",onClick:this.handleOnClick},i.a.createElement("img",{src:f.image[this.state.region],className:"h3 p0 w3 dib",alt:""}),i.a.createElement("h2",{className:"h2black"},this.state.region),i.a.createElement("div",{className:"ph4 mb3"},this.displayCountries().join(", ")),i.a.createElement(k.a,{className:"f6 link dim br-pill ph4 pv2 mb2 dib white bg-black",to:"".concat(this.state.path)},"View More"))}}]),t}(i.a.Component),E=function(e){var t=e.countries,a=e.regions.map(function(e,a){var n=t.filter(function(t){return t.region===e});return i.a.createElement(w,{key:a,name:e,countryList:n})});return i.a.createElement("div",{className:"detailsGrid centerFlex"}," ",a," ")},y=a(100),N=a(35),C=a.n(N),j=(a(52),function(){return i.a.createElement("header",{className:"white-80 tc pv4 header pb7 "},i.a.createElement("h1",{className:"mt2 mb3  headertext","data-aos":"fade-down","data-aos-duration":"5000"},i.a.createElement(k.a,{to:"/travel-guide"},"Travel Guide")),i.a.createElement("div",{"data-aos":"fade-up","data-aos-duration":"7000"},i.a.createElement(k.a,{to:"/travel-guide"},i.a.createElement("img",{src:C.a,className:"App-logo",alt:"logo"}))),i.a.createElement("nav",{className:"bt bb tc center mt4 nav"},i.a.createElement(y.a,{to:"/travel-guide",activeClassName:"is-active",className:"f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"},"Home"),i.a.createElement(y.a,{to:"/travel-guide/africa",activeClassName:"is-active",className:"f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"},"Africa"),i.a.createElement(y.a,{to:"/travel-guide/americas",activeClassName:"is-active",className:"f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"},"Americas"),i.a.createElement(y.a,{to:"/travel-guide/asia",activeClassName:"is-active",className:"f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"},"Asia"),i.a.createElement(y.a,{to:"/travel-guide/europe",activeClassName:"is-active",className:"f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"},"Europe"),i.a.createElement(y.a,{to:"/travel-guide/oceania",activeClassName:"is-active",className:"f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"},"Oceania"),i.a.createElement(y.a,{to:"/travel-guide/polar",activeClassName:"is-active",className:"f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"},"Polar")))}),x=function(){return i.a.createElement("div",null,i.a.createElement("footer",{style:{backgroundColor:"black"},className:"tc-l bg-center cover bg-purple"},i.a.createElement("div",{className:"w-100 ph2 pv2 bg-black-80"},i.a.createElement("a",{className:"link white-60 bg-transparent hover-white  inline-flex items-center ma2 tc br2 pa2",href:"https://www.facebook.com/zerotocodemastery/",title:"Facebook",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},i.a.createElement("path",{d:"M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0",fillRule:"nonzero"})),i.a.createElement("span",{className:"f6 ml3 pr2"},"Facebook")),i.a.createElement("a",{className:"link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2",href:"https://github.com/zero-to-mastery",title:"GitHub",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},i.a.createElement("path",{d:"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"})),i.a.createElement("span",{className:"f6 ml3 pr2"},"GitHub")),i.a.createElement("a",{className:"link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2",href:"https://www.instagram.com/andreineagoie/",title:"Instagram",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},i.a.createElement("path",{d:"M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"})),i.a.createElement("span",{className:"f6 ml3 pr2"},"Instagram")),i.a.createElement("a",{className:"link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2",href:"https://www.youtube.com/channel/UCt7T2EvYBqvlxNU3fbE4Y7g",title:"youtube",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("svg",{className:"dib w2 h2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},i.a.createElement("path",{d:"M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24h-.002z"})),i.a.createElement("span",{className:"f6 ml3 pr2"},"Youtube")),i.a.createElement("a",{className:"link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2",href:"https://twitter.com/AndreiNeagoie",title:"Twitter",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},i.a.createElement("path",{d:"M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z",fillRule:"nonzero"})),i.a.createElement("span",{className:"f6 ml3 pr2"},"Twitter")),i.a.createElement(k.a,{className:"link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2",to:"/travel-guide/credits"},i.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},i.a.createElement("path",{d:"M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"})),"Credits"))))},_=a(38),z=function(){return i.a.createElement("div",{className:"spinner"},i.a.createElement(_.PulseLoader,{color:"#1eaedb",size:25,margin:"3px"}))},A=a(102),S=a(39),L=a.n(S),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={details:null},a.componentDidMount=function(){var e=a.props.match.params.id;L.a.get("https://restcountries.eu/rest/v2/name/".concat(e)).then(function(t){"india"===e.toLowerCase()?a.setState({details:t.data[1]}):a.setState({details:t.data[0]})})},a.renderDetail=function(){var e=a.state.details;return e?i.a.createElement("div",{className:"region-details"},i.a.createElement("img",{alt:e.region,src:e.flag,height:"100",width:"200"}),i.a.createElement("h1",null,a.props.match.params.id),i.a.createElement("div",{className:"ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc"},i.a.createElement("h3",null,"Population"),i.a.createElement("p",null,e.population.toLocaleString())),i.a.createElement("div",{className:"ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc"},i.a.createElement("h3",null,"Capital"),i.a.createElement("p",null,e.capital)),i.a.createElement("div",{className:"ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc"},i.a.createElement("h3",null,"Call Code"),i.a.createElement("p",null,e.callingCodes)),i.a.createElement("div",{className:"ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc"},i.a.createElement("h3",null,"Region"),i.a.createElement("p",null,e.region)),i.a.createElement("div",{className:"ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc"},i.a.createElement("h3",null,"Native"),i.a.createElement("p",null,e.demonym)),i.a.createElement("div",{className:"ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc"},i.a.createElement("h3",null,"Currencies"),i.a.createElement("p",null,e.currencies.map(function(e){return"".concat(e.name," (").concat(e.code,")")}).join(", "))),i.a.createElement("div",{className:"ma3 pa4 br3 grow f4 ph3 pv2 dib shadow-5 ba tc"},i.a.createElement("h3",null,"Time Zone(s)"),i.a.createElement("p",null,e.timezones.join(", "))),i.a.createElement(k.a,{className:"f6 link dim br-pill ph4 pv2 mb2 dib white bg-purple",to:"/travel-guide/".concat(e.region.toLowerCase())},"BACK")):i.a.createElement(z,null)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"centerflex"},i.a.createElement("div",{className:"tc bg-white-90 detailCard code dib br3 pb1 mt3 mb3 bw2 shadow-5 region"},this.renderDetail()))}}]),t}(i.a.Component),M=Object(A.a)(O),R=[{name:"@paganim",link:"https://github.com/paganim"},{name:"@Anmol270900",link:"https://github.com/Anmol270900"},{name:"@Furkan Kursun",link:"https://github.com/soyu1234"},{name:"@ido-netaneli",link:"https://github.com/ido-netaneli"},{name:"@sandipguchait",link:"https://github.com/sandipguchait"},{name:"@rpaltayev",link:"https://github.com/rpaltayev"},{name:"@ngodi",link:"https://github.com/ngodi"},{name:"@Pierre Khoury",link:"https://github.com/PierreDeveloper18"},{name:"@mynaur",link:"https://github.com/mynaur"},{name:"@akashkann",link:"https://github.com/akashkann"},{name:"@alexacoronel",link:"https://github.com/alexacoronel"},{name:"@gabipfeffer",link:"https://github.com/gabipfeffer"},{name:"@Litchstarken",link:"https://github.com/Litchstarken"},{name:"@BLiTz3R",link:"https://github.com/BLiTz3R"},{name:"@peterson oaikhenah",link:"https://github.com/nextwebb"},{name:"@umanghans",link:"https://github.com/umanghans"},{name:"@dark-wonder",link:"https://github.com/dark-wonder"},{name:"@jawlee",link:"https://github.com/jawlee"},{name:"@siklinb01",link:"https://github.com/siklinb01"},{name:"@xFinality",link:"https://github.com/xFinality"},{name:"@SuperSafie",link:"https://github.com/SuperSafie"},{name:"@Veene",link:"https://github.com/Veene"},{name:"@jckonewalik",link:"https://github.com/jckonewalik"},{name:"@Lordberbeross",link:"https://github.com/lordberbeross"},{name:"@DanielMarcano",link:"https://github.com/DanielMarcano"},{name:"@AlexanderKruk",link:"https://github.com/AlexanderKruk"},{name:"@sidebone",link:"https://github.com/sidebone"},{name:"@ytrkptl",link:"https://github.com/ytrkptl"},{name:"@rezzco",link:"https://github.com/rezzco"},{name:"@liissaar",link:"https://github.com/liissaar"},{name:"@Arsen4ik",link:"https://github.com/Arsen4ik"},{name:"@AmujoDotun",link:"https://github.com/AmujoDotun"},{name:"@Jrejoire",link:"https://github.com/Jrejoire"},{name:"@Kingbee1",link:"https://github.com/Kingbee1"},{name:"@mishhubc",link:"https://github.com/mishhubc"},{name:"@cruzex100",link:"https://github.com/cruzex100"},{name:"@2neyadets",link:"https://github.com/2neyadets"},{name:"@ergonometry",link:"https://github.com/ergonometry"},{name:"@stefhangibson",link:"https://github.com/stefhangibson"},{name:"@Zeafromar",link:"https://github.com/Zeafromar"},{name:"@nsadev",link:"https://github.com/nsadev"},{name:"@giochajon",link:"https://github.com/giochajon"},{name:"@Gajhendran",link:"https://github.com/Gajhendran"},{name:"@01Clarian",link:"https://github.com/01Clarian"},{name:"@kweku76",link:"https://github.com/kweku76"},{name:"@mrzahidjabbar",link:"https://github.com/mrzahidjabbar"},{name:"@Vincent-Mpenyana",link:"https://github.com/Vincent-Mpenyana"},{name:"@Pourush1",link:"https://github.com/Pourush1"},{name:"@jgulbickyte",link:"https://github.com/jgulbickyte"},{name:"@Ron1722",link:"https://github.com/Ron1722"},{name:"@billshannon",link:"https://github.com/billshannon"},{name:"@marathohoho",link:"https://github.com/marathohoho"},{name:"@YasenPeev",link:"https://github.com/YasenPeev"},{name:"@JQuien",link:"https://github.com/JQuien"},{name:"@pedromzgrc",link:"http://github.com/pedromzgrc"},{name:"@kostispodaras",link:"https://github.com/kostisPodaras"},{name:"@sarizzuz",link:"https://github.com/sarizzuz"},{name:"@SimplyToCreate",link:"https://github.com/SimplyToCreate"},{name:"@mariyanyanakiev",link:"https://github.com/mariyanyanakiev"},{name:"@aditya1906",link:"https://github.com/aditya1906"},{name:"@clintonwuks",link:"https://github.com/clintonwuks"},{name:"@SudeepaGo",link:"https://github.com/SudeepaGo"},{name:"@connectthapa",link:"https://github.com/ThapaRahul"},{name:"@naftalib",link:"https://github.com/naftalib"},{name:"@BATMANGOO",link:"https://github.com/BATMANGOO"},{name:"@Pvanloon1983",link:"https://github.com/Pvanloon1983"},{name:"@rajat98dogra",link:"https://github.com/rajat98dogra"},{name:"@Satyaki233",link:"https://github.com/Satyaki233"},{name:"@Madgeniusblink",link:"https://github.com/Madgeniusblink"},{name:"@hamzamakk1",link:"https://github.com/hamzamakk1"},{name:"@hanthienduc",link:"https://github.com/hanthienduc"},{name:"@sevydev",link:"https://github.com/sevydev"},{name:"@chimachinedum",link:"https://github.com/chimachinedum"},{name:"@borason",link:"https://github.com/borason"},{name:"@Mirhatyasar",link:"https://github.com/Mirhatyasar"},{name:"@erics0n",link:"https://github.com/erics0n"},{name:"@nataschaluna",link:"https://github.com/nataschaluna"},{name:"@khasanovsm",link:"https://github.com/khasanovsm"},{name:"@Dorin-Ciora",link:"https://github.com/dorin-ciora"},{name:"@Devyani",link:"https://github.com/devyaniwaghmare"},{name:"@ruchirV",link:"https://github.com/ruchirV"},{name:"@khurram-syed",link:"https://github.com/khurram-syed"},{name:"@Arjun0o",link:"https://github.com/Arjun0o"},{name:"@famebyproxy",link:"https://github.com/famebyproxy"},{name:"@luis-escoto11",link:"https://github.com/luis-escoto11"},{name:"@benjohnsondev",link:"https://github.com/benjohnsondev"},{name:"@giulianocernada",link:"https://github.com/giulianocernada"},{name:"@vxsunstriderxv",link:"https://github.com/vxsunstriderxv"},{name:"@jqueijo",link:"https://github.com/jqueijo"},{name:"@Marius1388",link:"https://github.com/Marius1388"},{name:"@gandho12",link:"https://github.com/gandho12"},{name:"@pau-lo",link:"https://github.com/pau-lo"},{name:"@binyaalex",link:"https://github.com/binyaalex"},{name:"@tew9",link:"https://github.com/tew9"},{name:"@sjovanovic974",link:"https://github.com/sjovanovic974"},{name:"@AlexGithubbb",link:"https://github.com/AlexGithubbb"},{name:"@mwheatfill",link:"https://github.com/mwheatfill"},{name:"@webguy83",link:"https://github.com/webguy83"}],B=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",{className:"searchBox mt1"},"Credits"),i.a.createElement("ul",{className:"list"},R.map(function(e){return i.a.createElement("a",{key:e.name,href:e.link,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"listContributors margin_left tc bg-black-20 code dib mb2 bw2 shadow-4 regionFlagContainer"},i.a.createElement("p",{className:"contributors"},e.name))))})))}}]),t}(n.Component),D=function(e){var t=["/travel-guide/africa","/travel-guide/americas","/travel-guide/asia","/travel-guide/europe","/travel-guide/oceania","/travel-guide/polar"].map(function(t,a){return i.a.createElement(u.a,{key:a,path:t,render:function(){return i.a.createElement(v,{onSearchChange:e.onSearchChange,search:e.state.searchField,region:e.state.regionList[a],countries:e.state.countries,flags:e.state.flagList,names:e.state.contryList})}})});return i.a.createElement(p.a,null,i.a.createElement("div",null,i.a.createElement(j,null),i.a.createElement(g.a,null,i.a.createElement(u.a,{path:"/travel-guide",exact:!0,render:function(){return i.a.createElement(E,{countries:e.state.countries,regions:e.state.regionList})}}),t,i.a.createElement(u.a,{exact:!0,path:"/travel-guide/detail/:id",render:function(){return i.a.createElement(M,{flags:e.state.flagList,countries:e.state.countries})}}),i.a.createElement(u.a,{exact:!0,path:"/travel-guide/credits",render:function(){return i.a.createElement(B,null)}})),i.a.createElement(x,null)))},P=(a(98),a(33),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).findUniqRegions=function(e){return Array.from(new Set(e.filter(function(e){return""!==e}).sort()))},a.onSearchChange=function(e){a.setState({searchField:e.target.value.toLowerCase()})},a.state={regionList:[],countryList:[],flagList:[],countries:[],searchField:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then(function(e){return e.json()}).then(function(t){var a=[],n=[],i=[];t.map(function(e,t){var r=e.region,o=e.name,c=e.flag;return a.push(r),n.push(o),i.push(c)}),e.setState({countries:t}),e.setState({regionList:e.findUniqRegions(a)}),e.setState({countryList:n}),e.setState({flagList:i})})}},{key:"render",value:function(){return i.a.createElement(D,{onSearchChange:this.onSearchChange,state:this.state})}}]),t}(n.Component)),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(P,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/travel-guide",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/travel-guide","/service-worker.js");T?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):G(e)})}}()}},[[41,1,2]]]);
//# sourceMappingURL=main.05f27f2f.chunk.js.map