(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{349:function(e,t,r){"use strict";r.r(t);var n,o=r(0),a=r.n(o),s=r(24),c=r.n(s),i=r(66),d=r(67),l=r(71),u=r(70),j=r(102),b=r(29),h=r(19),p=r(358),m=r(363),O=r(353),g=r(362),f=r(211),x=(r(163),r(224),r(200)),v=r.n(x).a.create({baseURL:n||"https://fooodtruck.herokuapp.com:8080"}),k=r(49),y=r.p+"static/media/bg.00b4da9e.png",C=r.p+"static/media/smallcar.89cdf72b.png",S=r(4),w=g.a.Link;var F=function(e){var t=Object(o.useState)(!1),r=Object(h.a)(t,2),n=r[0],a=r[1],s=Object(o.useState)(""),c=Object(h.a)(s,2),i=c[0],d=c[1],l=Object(o.useState)(""),u=Object(h.a)(l,2),j=u[0],b=u[1],g=Object(o.useState)(""),x=Object(h.a)(g,2),F=x[0],B=x[1],L=Object(o.useState)(""),I=Object(h.a)(L,2),M=I[0],T=I[1],V=Object(o.useState)(""),E=Object(h.a)(V,2),N=E[0],Y=E[1],A=Object(o.useState)([]),_=Object(h.a)(A,2),D=_[0],H=_[1],P=Object(o.useState)(""),R=Object(h.a)(P,2),W=R[0],U=R[1],z=function(e){"Customer"===e.target.outerText?U("customer"):U("vendor"),a(!0)};Object(o.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){T(e.coords.latitude),Y(e.coords.longitude)})),v.get("/vendor?lat="+M+"&lng="+N).then((function(e){H(e.data.vendors)}))}),[M,N]);var q=Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(p.a.Header,{closeButton:!0,style:{background:"#F50057",borderColor:"Black"},children:Object(S.jsx)(p.a.Title,{children:"Customer Login"})}),Object(S.jsxs)(p.a.Body,{children:[Object(S.jsxs)(m.a,{children:[Object(S.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(S.jsx)(m.a.Label,{children:"Email Adress"}),Object(S.jsx)(m.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return d(e.target.value)}}),Object(S.jsx)(m.a.Text,{className:"text-muted",children:"We promise that we shall never send un-related emails to you nor share your email address with third party."})]}),Object(S.jsxs)(m.a.Group,{controlId:"formBasicPassword",children:[Object(S.jsx)(m.a.Label,{children:"Password"}),Object(S.jsx)(m.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return b(e.target.value)}})]})]}),Object(S.jsx)(w,{onClick:function(){e.history.push("/customer",{position:[M,N],vendors:D})},children:"Sign in later"})]}),Object(S.jsxs)(p.a.Footer,{children:[Object(S.jsx)(k.a,{varient:"primary",style:{background:"#F50057",borderColor:"Black"},shape:"round",onClick:function(){v.post("/customer/login",{email:i,password:j}).then((function(t){t.data.success?(f.b.success("You have logged in successfully :)"),e.history.push("/customer",{customer:t.data.customer,vendors:D,position:[M,N]})):f.b.error(t.data.error)})).catch((function(e){console.log(e),f.b.error("You may enter the wrong password :(")}))},children:"Login"}),Object(S.jsx)(k.a,{varient:"primary",style:{background:"White",borderColor:"Black"},shape:"round",onClick:function(){v.post("/customer/register",{email:i,password:j}).then((function(t){t.data.success?(f.b.success("You have registered successfully :)"),e.history.push("/customer",{customer:t.data.customer,vendors:D,position:[M,N]})):f.b.error(t.data.error)})).catch((function(e){console.log(e),f.b.error("The email was registered, try to use another one :(")}))},children:"Register"})]})]}),G=Object(S.jsxs)("div",{children:[Object(S.jsx)(p.a.Header,{closeButton:!0,style:{background:"#F50057",borderColor:"Black"},children:Object(S.jsx)(p.a.Title,{children:"Vendor Login"})}),Object(S.jsx)(p.a.Body,{children:Object(S.jsxs)(m.a,{children:[Object(S.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(S.jsx)(m.a.Label,{children:"Name"}),Object(S.jsx)(m.a.Control,{type:"email",placeholder:"Enter name",onChange:function(e){return B(e.target.value)}}),Object(S.jsx)(m.a.Text,{className:"text-muted"})]}),Object(S.jsxs)(m.a.Group,{controlId:"formBasicPassword",children:[Object(S.jsx)(m.a.Label,{children:"Password"}),Object(S.jsx)(m.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return b(e.target.value)}})]})]})}),Object(S.jsxs)(p.a.Footer,{children:[Object(S.jsx)(k.a,{varient:"primary",style:{background:"#F50057",borderColor:"Black"},shape:"round",onClick:function(){v.post("/vendor/login",{name:F,password:j}).then((function(t){t.data.success?(f.b.success("You have logged in successfully :)"),console.log("App-92 "+t.data.vendor._id+"!"),e.history.push("/vendor",{vendor:t.data.vendor,position:[M,N],vendors:[]})):f.b.error(t.data.error)})).catch((function(e){a(!1),console.log(e.response.data.error),f.b.error("You may enter the wrong password :(")}))},children:"Login"}),Object(S.jsx)(k.a,{varient:"primary",style:{background:"White",borderColor:"Black"},shape:"round",onClick:function(){v.post("/vendor/register",{name:F,password:j}).then((function(t){t.data.success?(f.b.success("You have registered successfully, start your business :)"),e.history.push("/vendor",{vendor:t.data.vendor,position:[M,N],vendors:[]})):f.b.error(t.data.error)})).catch((function(e){console.log(e),f.b.error("The name was registered, try to use another one :(")}))},children:"Register"})]})]});return Object(S.jsxs)("div",{className:"login-page",style:{width:"100%",height:"calc(100vh)",backgroundImage:"url("+y+")",backgroundSize:"100% calc(100vh)",backgroundRepeat:"no-repeat",position:"relative"},children:[Object(S.jsx)(p.a,{show:n,onHide:function(){return a(!1)},style:{marginTop:"2vh"},children:"customer"===W?q:G}),Object(S.jsxs)(O.a,{style:{background:"transparent",position:"absolute",top:"40%",right:"20%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(S.jsx)("h3",{style:{textAlign:"center"},children:"Welcome to"}),Object(S.jsx)("h1",{style:{textAlign:"center",color:"rgb(247,64,129)",fontSize:"50px"},children:"FoodTruck"}),Object(S.jsx)("p",{style:{textAlign:"center",fontSize:"18px"},children:"Discover our best food trucks"}),Object(S.jsx)("div",{style:{width:"200px",height:"150px",position:"absolute",top:"-180px",borderRadius:"50%",backgroundColor:"#eee",display:"flex",justifyContent:"center"},children:Object(S.jsx)("img",{src:C,style:{width:"65%",height:"80%",marginTop:"20px"}})}),Object(S.jsxs)("p",{children:[Object(S.jsx)(k.a,{variant:"primary",style:{background:"#F50057",borderColor:"Black"},shape:"round",onClick:z,children:"Customer"}),Object(S.jsx)(k.a,{variant:"outline-primary",style:{background:"White",borderColor:"Black",marginLeft:"1vw"},shape:"round",onClick:z,children:"Vendor"})]})]})]})},B=r(370),L=r(359),I=r(369),M=r(354),T=r(92),V=r(159),E=r.n(V),N=r(206),Y=r(207),A=r.n(Y),_={baseURL:"/api",socketURL:"https://snacksinavan2021.herokuapp.com/api"},D=r(99),H=r(365),P=r(360),R=r(214),W=r(364),U=r(367),z=r(368),q=r(215),G=r(216),J=g.a.Text,Z=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this)).state={min:"",sec:""},n}return Object(d.a)(r,[{key:"tick",value:function(){var e=new Date,t=Date.parse(this.props.updatedAt),r=(e-t)/6e4;this.setState({min:parseInt(r)});var n=(e-t-6e4*this.state.min)/1e3;this.setState({sec:parseInt(n)})}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return Object(S.jsx)("div",{children:Object(S.jsx)(J,{strong:!0,children:this.state.min+" mins "+this.state.sec+" secs "})})}}]),r}(o.Component),$=H.a.TextArea,K=P.a.Meta,Q=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this)).handleClose=function(){return n.setState({modalVisible:!1})},n.handleShow=function(){return n.setState({modalVisible:!0})},n.handleEditClose=function(){return n.setState({editModalVisible:!1})},n.handleEditShow=function(){return n.setState({editModalVisible:!0})},n.onChange=function(e,t){var r=Object(T.a)(n.state.order);r[e]=t,n.setState({order:r})},n.handleShowOrderDetail=function(){console.log(n.props.order)},n.ratingsChange=function(e){console.log(e),n.setState({ratings:e})},n.commentChange=function(e){n.setState({comment:e})},n.handleEditOrder=function(){"outstanding"===n.props.order.status&&n.state.diff<=10&&n.setState({editModalVisible:!0}),"fulfilled"===n.props.order.status?R.a.open({message:"Order is ready to be collected!",description:"You cannot make any changes to a fulfilled order. You can rate your experience after picking up the snacks.",duration:3}):"outstanding"===n.props.order.status&&n.state.diff>10?R.a.open({message:"Order is being processed!",description:"You can only change your order within 10 minutes after placing the order.",duration:3}):(console.log(n.props.order),n.setState({editModalVisible:!0}))},n.onOrderMark=function(){var e,t,r=n.props.order.total;"outstanding"===n.props.order.status?(e="fulfilled",n.state.diff>15?(t=!0,r*=.8):t=!1,v.post("/order/"+n.props.order._id+"/update",{total:r,discount:t,status:e}).then((function(e){e.data.success?(f.b.success("Order has been updated"),n.setState({editModalVisible:!1})):f.b.error("Order updating errored!")}))):"fulfilled"===n.props.order.status?(e="completed",v.post("/order/"+n.props.order._id+"/update",{status:e}).then((function(e){e.data.success?(f.b.success("Order has been updated"),n.setState({editModalVisible:!1})):f.b.error("Order updating errored!")}))):R.a.open({message:"Order is already completed!",description:"Congratulations! You have completed this order!",duration:3})},n.onOrderSubmit=function(){for(var e=[],t=0;t<n.state.order.length;t++)Number.isFinite(n.state.order[t])&&e.push({name:n.state.menu[t].name,qty:n.state.order[t]});0===e.length?(n.setState({editModalVisible:!1}),f.b.error("You should place at least one snack")):v.post("/order/"+n.props.order._id+"/update",{status:"outstanding",snacks:e}).then((function(e){e.data.success?(f.b.success("Order has been updated"),n.setState({editModalVisible:!1})):f.b.error("Order updating errored!")}))},n.onCommentSubmit=function(){v.post("/order/"+n.props.order._id+"/update",{comment:n.state.comment,ratings:n.state.ratings}).then((function(e){e.data.success?(f.b.success("Order has been commented"),n.setState({editModalVisible:!1})):f.b.error("Order commenting errored!")}))},n.renderActions=function(){return"/customer"===window.location.pathname?[Object(S.jsx)(q.a,{onClick:function(){return n.handleShow()}}),Object(S.jsx)(G.a,{onClick:function(){return n.handleEditOrder()}})]:"/orders"===window.location.pathname?[Object(S.jsx)(q.a,{onClick:function(){return n.handleShow()}}),Object(S.jsx)(G.a,{onClick:function(){return n.onOrderMark()}})]:void 0},n.renderEditModalContent=function(){return"outstanding"===n.props.order.status?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(p.a.Header,{closeButton:!0,style:{background:"#F50057",borderColor:"Black"},children:Object(S.jsx)(p.a.Title,{children:"Menu"})}),Object(S.jsx)(p.a.Body,{children:n.state.menu.map((function(e,t){return Object(S.jsxs)(P.a,{cover:Object(S.jsx)("img",{alt:"example",src:e.picture}),style:{marginBottom:"2vh"},size:"small",children:[Object(S.jsx)(K,{title:e.name+"   $"+e.price}),Object(S.jsx)(W.a,{min:0,defaultValue:0,style:{marginLeft:"80%"},onChange:function(e){return n.onChange(t,e)}},e._id)]},e._id)}))}),Object(S.jsx)(p.a.Footer,{children:Object(S.jsx)(B.a,{variant:"primary",style:{background:"#F50057",borderColor:"Black"},shape:"round",onClick:function(){return n.onOrderSubmit()},children:"Submit"})})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(p.a.Header,{closeButton:!0,style:{background:"#F50057",borderColor:"Black"},children:Object(S.jsx)(p.a.Title,{children:"OrderId:"+n.props.order.id})}),Object(S.jsxs)(p.a.Body,{children:[Object(S.jsxs)("p",{children:["Vendor:",n.props.order.vendor.name]}),Object(S.jsxs)("p",{children:["Snacks:",n.props.order.snacks.map((function(e){return Object(S.jsxs)("li",{children:[e.name," - qty: ",e.qty]},e.name)}))]}),Object(S.jsx)(M.a,{children:"Rate Your Experience"}),Object(S.jsx)("p",{children:"Rating:"}),Object(S.jsx)(U.a,{onChange:function(e){return n.ratingsChange(e)}}),Object(S.jsx)(M.a,{}),Object(S.jsx)("p",{children:"Comment"}),Object(S.jsx)($,{rows:4,onChange:function(e){return n.commentChange(e.target.value)}})]}),Object(S.jsx)(p.a.Footer,{children:Object(S.jsx)(B.a,{variant:"primary",style:{background:"#F50057",borderColor:"Black"},shape:"round",onClick:function(){return n.onCommentSubmit()},children:"Submit"})})]})},n.state={menu:[],order:[],modalVisible:!1,editModalVisible:!1,modalBody:Object(S.jsx)(S.Fragment,{}),diff:"",ratings:0,comment:""},n}return Object(d.a)(r,[{key:"tick",value:function(){var e=(new Date).getTime(),t=Date.parse(this.props.order.updatedAt);this.setState({diff:(e-t)/6e4})}},{key:"componentDidMount",value:function(){var e=this;v.get("/snack").then((function(t){e.setState({menu:t.data.snacks})})),this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(p.a,{show:this.state.modalVisible,onHide:function(){return e.handleClose()},children:[Object(S.jsx)(p.a.Header,{closeButton:!0,children:Object(S.jsx)(p.a.Title,{children:"OrderId:"+this.props.order._id})}),Object(S.jsxs)(p.a.Body,{children:[Object(S.jsxs)("p",{children:["Vendor:",this.props.order.vendor.name]}),Object(S.jsxs)("p",{children:["Snacks:",this.props.order.snacks.map((function(e){return Object(S.jsxs)("li",{children:[e.name," - qty: ",e.qty]},e.name)}))]}),this.props.order.discount?Object(S.jsxs)("p",{children:["Total: ",1.25*this.props.order.total,"*0.8 = ",this.props.order.total]}):Object(S.jsxs)("p",{children:["Total:",this.props.order.total]}),this.props.order.ratings?Object(S.jsxs)(S.Fragment,{children:[" ",Object(S.jsx)("p",{children:"Ratings: "})," ",Object(S.jsx)(U.a,{disabled:!0,value:this.props.order.ratings})," "]}):Object(S.jsx)(S.Fragment,{}),this.props.order.comment?Object(S.jsxs)(S.Fragment,{children:[" ",Object(S.jsx)("p",{children:"Comment: "})," ",Object(S.jsx)(S.Fragment,{children:this.props.order.comment})," "]}):Object(S.jsx)(S.Fragment,{})]})]}),Object(S.jsx)(p.a,{show:this.state.editModalVisible,onHide:function(){return e.handleEditClose()},children:this.renderEditModalContent()}),this.props.order.discount?Object(S.jsx)(z.a.Ribbon,{text:"order has been discounted",children:Object(S.jsxs)(P.a,{style:{margin:"10px"},actions:this.renderActions(),children:[Object(S.jsx)(K,{title:this.props.order.vendor.name+"  -  "+this.props.order.status}),"fulfilled"===this.props.order.status?"order is fulfilled":"completed"===this.props.order.status?"order is completed":Object(S.jsx)(Z,{updatedAt:this.props.order.updatedAt})]})}):Object(S.jsxs)(P.a,{style:{margin:"10px"},actions:this.renderActions(),children:[Object(S.jsx)(K,{title:this.props.order.vendor.name+"  -  "+this.props.order.status}),"fulfilled"===this.props.order.status?"order is fulfilled":"completed"===this.props.order.status?"order is completed":Object(S.jsx)(Z,{updatedAt:this.props.order.updatedAt})]})]})}}]),r}(a.a.Component);function X(e){var t=Object(o.useState)([]),r=Object(h.a)(t,2),n=r[0],a=r[1],s=Object(o.useState)(""),c=Object(h.a)(s,2),i=c[0],d=c[1],l=e.id;console.log(e,"Orders-props"),Object(o.useEffect)((function(){function t(){return(t=Object(N.a)(E.a.mark((function t(){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e.target,"props.target"),console.log(l,"id"),console.log(i,"status"),v.get("/order?"+e.target+"="+l+i).then((function(e){e.data.success?a(e.data.allOrders):a([])})).catch((function(e){a([])}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.status&&d(e.status),function(){t.apply(this,arguments)}()}),[l,n,e.target,e.status]);var u=n.map((function(e){return Object(S.jsx)(Q,{order:e},e._id)}));return Object(S.jsx)(S.Fragment,{children:n.length>0?u:Object(S.jsx)(D.a,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:60},description:Object(S.jsx)("span",{children:"No Orders Found"})})})}var ee=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this)).state={orders:[]},n}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=A()("".concat(_.socketURL,"/socket"),{transports:["websocket"]});t.on("newOrder",(function(t){console.log("insertion detected at frontend"),e.setState({orders:[].concat(Object(T.a)(e.state.orders),[t])})})),t.on("updateOrder",(function(e){console.log("updated detected at frontend"),console.log(e)})),t.on("deleteOrder",(function(t){console.log("deletion detected at frontend");var r=e.state.orders.filter((function(e){return e._id!==t}));e.setState({orders:r})}))}},{key:"render",value:function(){return Object(S.jsx)("div",{style:{height:"100vh",width:"100%",margin:"auto",marginTop:"5%"},children:Object(S.jsx)(X,{id:this.props.id,orders:this.state.orders,target:this.props.target,status:this.props.status})})}}]),r}(a.a.Component);function te(e){var t=Object(b.f)(),r=Object(o.useState)(!1),n=Object(h.a)(r,2),a=n[0],s=n[1],c=function(){return s(!0)},i=Object(o.useState)(""),d=Object(h.a)(i,2),l=d[0],u=d[1],j=Object(o.useState)([]),p=Object(h.a)(j,2),m=p[0],O=p[1],g=Object(o.useState)(""),x=Object(h.a)(g,2),k=x[0],y=x[1];Object(o.useEffect)((function(){"/customer"===t.location.pathname?e.customer?(u("Welcome, "+e.customer.givenName),y("customer"),O([Object(S.jsx)(B.a,{variant:"outline-primary",style:{borderColor:"#F50057"},shape:"round",onClick:function(){t.push("/profile",{customer:e.customer,orders:e.orders})},children:"Profile"},"0"),Object(S.jsx)(B.a,{varient:"outline-primary",style:{background:"#F50057",borderColor:"BLack"},shape:"round",onClick:c,children:"See Orders"},"1")])):u("Welcome !"):"/profile"===t.location.pathname?(u("Profile Settings"),O([Object(S.jsx)(B.a,{variant:"outline-primary",style:{borderColor:"#F50057"},shape:"round",onClick:function(){return t.goBack()},children:"Back"},"1")])):"/vendor"===t.location.pathname?u("Time to earn MONEY, "+e.vendor.name+"."):"/orders"===t.location.pathname?(u("Time to earn MONEY, "+e.vendor.name+"."),O([Object(S.jsx)(B.a,{variant:"outline-primary",style:{borderColor:"#F50057"},shape:"round",onClick:C,children:"Unpark"},"0")])):u("Hello!")}),[t,e.customer,e.orders]);var C=function(){v.post("/vendor/park/"+e.vendor._id,{location:[],textAddress:"",parked:!1}).then((function(e){f.b.success("You have successfully Unparked!!"),t.push({pathname:"/"})}))};return e.customer?Object(S.jsxs)("div",{children:[Object(S.jsx)(L.a,{title:l,extra:m}),Object(S.jsxs)(I.a,{visible:a,closable:!0,onClose:function(){return s(!1)},width:"60vw",children:["All orders",Object(S.jsx)(M.a,{}),Object(S.jsx)(ee,{id:e.customer.id,target:k,orders:e.orders})]})]}):Object(S.jsx)("div",{children:Object(S.jsx)(L.a,{title:l,extra:m})})}var re=r(355),ne=r(356),oe=r(357),ae=r(371),se=r(65),ce=r(366),ie=r(58),de=r.p+"static/media/1.0c3c256d.png",le=P.a.Meta;function ue(e){var t,r=new ie.Icon({iconUrl:de,iconSize:[40,40]}),n=Object(o.useState)(!1),a=Object(h.a)(n,2),s=a[0],c=a[1],i=Object(o.useState)([]),d=Object(h.a)(i,2),l=d[0],u=d[1],j=Object(b.f)();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(re.a,{position:e.position,icon:r,eventHandlers:{click:function(){c(!0)}}},e.id),Object(S.jsx)(ce.a,(t={title:"Basic Modal"},Object(se.a)(t,"title","Menu of "+e.vendor.name),Object(se.a)(t,"visible",s),Object(se.a)(t,"onOk",(function(){console.log("onSubmit");var t=0;if(e.customer){for(var r=[],n=0;n<l.length;n++)Number.isFinite(l[n])&&r.push({name:e.snacks[n].name,price:e.snacks[n].price,qty:l[n]});for(var o=0;o<r.length;o++){t=t+r[o].price*r[o].qty}0===r.length?(c(!1),f.b.error("You should order at least one snack")):v.post("/order/create",{customer:e.customer.id,vendor:e.vendor.id,snacks:r,total:t}).then((function(e){e.data.success?(f.b.success("Order has been placed"),c(!1)):f.b.error("Order has not been placed!")}))}else f.b.error("You need to login first!"),j.goBack()})),Object(se.a)(t,"onCancel",(function(){c(!1)})),Object(se.a)(t,"closeButton",!0),Object(se.a)(t,"children",e.snacks.map((function(e,t){return Object(S.jsxs)(P.a,{hoverable:!0,style:{width:240,marginTop:20},cover:Object(S.jsx)("img",{alt:"example",src:e.picture}),children:[Object(S.jsx)(le,{title:e.name+" $"+e.price}),Object(S.jsx)(W.a,{min:0,style:{marginLeft:"80%"},onChange:function(e){return function(e,t){console.log("onChange");var r=Object(T.a)(l);r[e]=t,u(r)}(t,e)}},e._id)]},e._id)}))),t))]})}function je(e){var t=Object(b.f)(),r=Object(o.useState)(!1),n=Object(h.a)(r,2),a=n[0],s=n[1],c=Object(o.useState)(""),i=Object(h.a)(c,2),d=i[0],l=i[1],u=Object(o.useState)(e.center),j=Object(h.a)(u,2),O=j[0],g=j[1],x=Object(o.useMemo)((function(e){return{dragend:function(e){console.log(e.target.getLatLng()),g(e.target.getLatLng())},click:function(){s(!0)}}}),[]),k=Object(S.jsx)(re.a,{position:e.center,iconUrl:"https://img-premium.flaticon.com/png/512/4108/4108831.png?token=exp=1",children:Object(S.jsx)(ne.a,{children:"Your Curent location."})}),y=e.vendors.map((function(t){return Object(S.jsx)(ue,{position:t.location,snacks:e.snacks,vendor:t,customer:e.customer},t.id)})),C=Object(S.jsx)(re.a,{draggable:!0,eventHandlers:x,position:O});return Object(S.jsxs)("div",{children:[Object(S.jsxs)(p.a,{show:a,onHide:function(){return s(!1)},style:{marginTop:"2vh"},children:[Object(S.jsx)(p.a.Header,{closeButton:!0,style:{background:"#F50057",borderColor:"Black"},children:Object(S.jsx)(p.a.Title,{children:"Vendor Park"})}),Object(S.jsx)(p.a.Body,{children:Object(S.jsx)(m.a,{children:Object(S.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(S.jsx)(m.a.Label,{children:"Text parking address"}),Object(S.jsx)(m.a.Control,{type:"text",placeholder:"Enter address",onChange:function(e){return l(e.target.value)}}),Object(S.jsx)(m.a.Text,{className:"text-muted",children:"Tell us where you are pls"})]})})}),Object(S.jsx)(p.a.Footer,{children:Object(S.jsx)(B.a,{varient:"primary",style:{background:"#F50057",borderColor:"Black"},shape:"round",onClick:function(){console.log("leafletmap-34 "+e.vendor._id+"!"),v.post("/vendor/park/"+e.vendor._id,{location:[O.lat,O.lng],textAddress:d,parked:!0}).then((function(r){f.b.success("You have successfully parked at here"),t.push({pathname:"/orders",state:{vendor:e.vendor}})}))},children:"Completely ready for business!"})})]}),Object(S.jsxs)(oe.a,{center:e.center,zoom:18,scrollWheelZoom:!1,style:{height:"90vh"},children:[Object(S.jsx)(ae.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),"/customer"===t.location.pathname?k:Object(S.jsx)(S.Fragment,{}),"/customer"===t.location.pathname?y:Object(S.jsx)(S.Fragment,{}),"/vendor"===t.location.pathname?C:Object(S.jsx)(S.Fragment,{})]})]})}function be(e){var t=Object(o.useState)([]),r=Object(h.a)(t,2),n=r[0],a=r[1],s=Object(o.useState)([]),c=Object(h.a)(s,2),i=c[0],d=c[1];return Object(o.useEffect)((function(){e.location.state.customer&&v.get("/order?customer="+e.location.state.customer.id).then((function(e){a(e.data.allOrders)})),v.get("/snack").then((function(e){d(e.data.snacks)}))}),[e.location.state.position,e.location.state.vendors,e.location.state.customer]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(te,{customer:e.location.state.customer,orders:n}),Object(S.jsx)(je,{center:e.location.state.position,vendors:e.location.state.vendors,snacks:i,customer:e.location.state.customer})]})}var he=r(361);function pe(e){var t=he.a.useForm(),r=Object(h.a)(t,1)[0],n=g.a.Link,a=Object(o.useState)(e.location.state.customer.givenName),s=Object(h.a)(a,2),c=s[0],i=s[1],d=Object(o.useState)(e.location.state.customer.familyName),l=Object(h.a)(d,2),u=l[0],j=l[1],b=Object(o.useState)(e.location.state.customer.email),p=Object(h.a)(b,2),m=p[0],O=p[1],x=Object(o.useState)(e.location.state.customer.password),y=Object(h.a)(x,2),C=y[0],w=y[1],F=Object(o.useState)(!0),B=Object(h.a)(F,2),L=B[0],I=B[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(te,{}),Object(S.jsx)("div",{style:{width:"40%",margin:"auto"},children:Object(S.jsxs)(he.a,{form:r,layout:"vertical",children:[Object(S.jsx)(he.a.Item,{label:"Given Name",children:Object(S.jsx)(H.a,{placeholder:"given name",defaultValue:e.location.state.customer.givenName,onChange:function(e){return i(e.target.value)}})}),Object(S.jsx)(he.a.Item,{label:"Family Name",children:Object(S.jsx)(H.a,{placeholder:"family name",defaultValue:e.location.state.customer.familyName,onChange:function(e){return j(e.target.value)}})}),Object(S.jsx)(he.a.Item,{label:"Email",children:Object(S.jsx)(H.a,{placeholder:"email",defaultValue:e.location.state.customer.email,onChange:function(e){return O(e.target.value)}})}),Object(S.jsxs)(M.a,{children:["Click ",Object(S.jsx)(n,{onClick:function(){I(!L)},target:"_blank",children:"here"})," to change password"]}),Object(S.jsx)(he.a.Item,{label:"Password",children:Object(S.jsx)(H.a,{placeholder:"password",type:"password",defaultValue:e.location.state.customer.password,disabled:L,onChange:function(e){return w(e.target.value)}})}),Object(S.jsx)(he.a.Item,{children:Object(S.jsx)(k.a,{type:"primary",style:{background:"#F50057",borderColor:"Black"},shape:"round",onClick:function(){var e={givenName:c,familyName:u,email:m,password:C};v.post("/customer/update",e).then((function(e){e.data.success?f.b.success("Your information has been successfully updated"):f.b.error(e.data.error)}))},children:"Submit"})})]})})]})}function me(e){return Object(S.jsxs)("div",{children:[Object(S.jsx)(te,{id:e.location.state.vendor.id,vendor:e.location.state.vendor}),Object(S.jsx)(je,{center:e.location.state.position,vendor:e.location.state.vendor,vendors:[]})]})}var Oe=r(98);function ge(e){var t=Object(o.useState)(""),r=Object(h.a)(t,2),n=r[0],a=r[1],s=Object(o.useState)("outstanding"),c=Object(h.a)(s,2),i=c[0],d=c[1];return Object(o.useEffect)((function(){"/orders"===window.location.pathname&&a("vendor")}),[]),Object(S.jsxs)("div",{children:[Object(S.jsx)(te,{vendor:e.location.state.vendor}),Object(S.jsx)("div",{style:{marginLeft:"3vw",alignItems:"center"},children:Object(S.jsxs)(Oe.a,{gutter:6,children:[Object(S.jsx)(k.a,{onClick:function(){return d("&status=outstanding")},style:{background:"#F50057",borderColor:"Black",marginLeft:"1vw"},shape:"round",children:"Outstanding"}),Object(S.jsx)(k.a,{onClick:function(){return d("&status=completed")},style:{background:"#F50057",borderColor:"Black",marginLeft:"1vw"},shape:"round",children:"Completed"}),Object(S.jsx)(k.a,{onClick:function(){return d("&status=fulfilled")},style:{background:"White",borderColor:"#F50057",marginLeft:"1vw"},shape:"round",children:"Fulfilled"})]})}),Object(S.jsx)(ee,{id:e.location.state.vendor._id,target:n,status:i})]})}var fe=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(S.jsx)(j.a,{children:Object(S.jsxs)(b.c,{children:[Object(S.jsx)(b.a,{path:"/",exact:!0,component:F}),Object(S.jsx)(b.a,{path:"/customer",exact:!0,component:be}),Object(S.jsx)(b.a,{path:"/profile",exact:!0,component:pe}),Object(S.jsx)(b.a,{path:"/vendor",exact:!0,component:me}),Object(S.jsx)(b.a,{path:"/orders",exact:!0,component:ge})]})})}}]),r}(a.a.Component);c.a.render(Object(S.jsx)(fe,{}),document.getElementById("root"))}},[[349,1,2]]]);
//# sourceMappingURL=main.0185759e.chunk.js.map