var TestBuildOne={},TestBuildOne=function(){return{Utils:{hasOwn:function(e,c){return Object.prototype.hasOwnProperty.call(e,c)?!0:!1},namespace:function(e,c){for(var d=e.split("."),b=1,g=d.length,a=TestBuildOne;b<g;)this.hasOwn(a,d[b])||(a[d[b]]={}),a=a[d[b]],b++;for(var f in c)this.hasOwn(a,f)||(a[f]=c[f])}},Lib:{},Models:{}}}();(function(){TestBuildOne.Utils.namespace("TestBuildOne.Lib",{Class:function(){return"This is a Class!"}})})();
