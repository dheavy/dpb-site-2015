$(function(){function a(){s=$(window),q=$("#preload"),r=$("#preload-bar"),t=$("p span, h1"),TweenMax.to(q,1,{opacity:1,onComplete:function(){b()}})}function b(){var a=[{id:"hydroscope",src:"assets/hydroscope.ogg"},{id:"click",src:"assets/click.ogg"}];return WURFL&&WURFL.is_mobile?void d():(createjs.Sound.alternateExtensions=["mp3"],p=new createjs.LoadQueue,p.installPlugin(createjs.Sound),p.addEventListener("progress",g),p.addEventListener("complete",f),p.loadFile(a[0]),p.loadFile(a[1]),createjs.Sound.registerSounds(a[0]),createjs.Sound.registerSounds(a[1],10),s.on("focus",i),void s.on("blur",j))}function c(){u=$("#container"),v=u.get(0),u.css("opacity",0),w=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,4e3),w.position.z=M,controls=new THREE.OrbitControls(w,v),x=new THREE.Scene,o=new THREE.Group,x.add(o);var a=new THREE.SphereGeometry(H,24,24),b=new THREE.MeshLambertMaterial({color:1914434,side:THREE.DoubleSide}),c=new THREE.Mesh(a,b);o.add(c);var d=new THREE.PointLight(16777215,1,H+I/2);d.position.set(0,I,0),x.add(d);var f=(new THREE.BoxHelper(new THREE.Mesh(new THREE.BoxGeometry(H,H,H))),G*G);z=new Float32Array(3*f),A=new Float32Array(3*f);var g=new THREE.PointCloudMaterial({color:16777215,size:3,blending:THREE.AdditiveBlending,transparent:!0,sizeAttenuation:!1});particles=new THREE.BufferGeometry,C=new Float32Array(3*G);for(var i=0;G>i;i++){var j=Math.random()*H-H/2,k=Math.random()*H-H/2,l=Math.random()*H-H/2;C[3*i]=j,C[3*i+1]=k,C[3*i+2]=l,F.push({velocity:new THREE.Vector3(-1+2*Math.random(),-1+2*Math.random(),-1+2*Math.random()),numConnections:0})}particles.drawcalls.push({start:0,count:L,index:0}),particles.addAttribute("position",new THREE.DynamicBufferAttribute(C,3)),B=new THREE.PointCloud(particles,g),o.add(B);var m=new THREE.BufferGeometry;m.addAttribute("position",new THREE.DynamicBufferAttribute(z,3)),m.addAttribute("color",new THREE.DynamicBufferAttribute(A,3)),m.computeBoundingSphere(),m.drawcalls.push({start:0,count:0,index:0});var n=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,blending:THREE.AdditiveBlending,transparent:!0});D=new THREE.Line(m,n,THREE.LinePieces),o.add(D),Detector.webgl?y=new THREE.WebGLRenderer({antialias:!0}):(y=new(new THREE.CanvasRenderer),u.css("pointer-events","none")),y.setPixelRatio(window.devicePixelRatio),y.setSize(window.innerWidth,window.innerHeight),y.gammaInput=!0,y.gammaOutput=!0,v.appendChild(y.domElement),s.on("resize",h),e()}function d(){var a=.25;_.each(t,function(b,d){_.delay(function(){createjs.Sound.play("click",{interrupt:createjs.Sound.INTERRUPT_LATE})},a*d*1e3),TweenMax.to(b,1,{opacity:1,delay:a*d,onComplete:function(){d==t.length-1&&c()}})})}function e(){TweenMax.to(u,10,{opacity:1}),TweenMax.to(w.position,15,{z:N}),m()}function f(){k(),TweenMax.to(q,1,{autoAlpha:0,onComplete:function(){d()}})}function g(a){var b=(a.loaded/a.total*100).toString()+"%";TweenMax.to(r,.25,{width:b})}function h(){w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)}function i(a){k()}function j(a){l()}function k(){O||(E=createjs.Sound.play("hydroscope"),O=!0),E.volume=1}function l(){E&&(E.volume=0)}function m(){for(var a=0,b=0,c=0,d=0;L>d;d++){var e=F[d];if(e.numConnections=0,C[3*d]+=e.velocity.x,C[3*d+1]+=e.velocity.y,C[3*d+2]+=e.velocity.z,(C[3*d+1]<-I||C[3*d+1]>I)&&(e.velocity.y=-e.velocity.y),(C[3*d]<-I||C[3*d]>I)&&(e.velocity.x=-e.velocity.x),(C[3*d+2]<-I||C[3*d+2]>I)&&(e.velocity.z=-e.velocity.z),!(e.numConnections>=K))for(var f=d+1;L>f;f++){var g=F[f];if(!(g.numConnections>=K)){var h=C[3*d]-C[3*f],i=C[3*d+1]-C[3*f+1],j=C[3*d+2]-C[3*f+2],k=Math.sqrt(h*h+i*i+j*j);if(J>k){e.numConnections++,g.numConnections++;var l=1-k/J;z[a++]=C[3*d],z[a++]=C[3*d+1],z[a++]=C[3*d+2],z[a++]=C[3*f],z[a++]=C[3*f+1],z[a++]=C[3*f+2],A[b++]=l,A[b++]=l,A[b++]=l,A[b++]=l,A[b++]=l,A[b++]=l,c++}}}}D.geometry.drawcalls[0].count=2*c,D.geometry.attributes.position.needsUpdate=!0,D.geometry.attributes.color.needsUpdate=!0,B.geometry.attributes.position.needsUpdate=!0,requestAnimationFrame(m),n()}function n(){var a=.001*Date.now();o.rotation.y=.1*a,y.render(x,w)}var o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F=[],G=WURFL&&WURFL.is_mobile?70:200,H=800,I=H/2,J=140,K=20,L=WURFL&&WURFL.is_mobile?20:100,M=600,N=350,O=!1;a()});