!function(){function a(a,n){return function(a){if(Array.isArray(a))return a}(a)||function(a,t){var n=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null==n)return;var r,e,c=[],l=!0,i=!1;try{for(n=n.call(a);!(l=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);l=!0);}catch(h){i=!0,e=h}finally{try{l||null==n.return||n.return()}finally{if(i)throw e}}return c}(a,n)||function(a,n){if(!a)return;if("string"==typeof a)return t(a,n);var r=Object.prototype.toString.call(a).slice(8,-1);"Object"===r&&a.constructor&&(r=a.constructor.name);if("Map"===r||"Set"===r)return Array.from(a);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(a,n)}(a,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(a,t){(null==t||t>a.length)&&(t=a.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=a[n];return r}System.register(["./index-legacy.691c4897.js","./index-legacy.e464b989.js","./index-legacy.33b020d4.js","./Layout-legacy.ba915dc3.js"],(function(t){"use strict";var n,r,e,c,l,i,h,u,f,o,p,s,d,v,m,y,b,M,g,O,x;return{setters:[function(a){n=a.q,r=a.r,e=a.s,c=a.t,l=a.v,i=a.w,h=a.x,u=a.y,f=a.z,o=a.A,p=a.C,s=a.D,d=a.E},function(a){v=a.g,m=a.h,y=a.j,b=a.k},function(a){M=a.al,g=a.bI,O=a.bJ},function(a){x=a.I}],execute:function(){var E=t("O",function(a){return a[a.UNKNOWN=0]="UNKNOWN",a[a.FOLDER=1]="FOLDER",a[a.VIDEO=2]="VIDEO",a[a.AUDIO=3]="AUDIO",a[a.TEXT=4]="TEXT",a[a.IMAGE=5]="IMAGE",a}(E||{}));var H={"dmg,ipa,plist,tipa":i,"exe,msi":h,"zip,gz,rar,7z,tar,jar,xz":u,apk:x,db:v,md:f,epub:m,iso:y,m3u8:l,"doc,docx":o,"xls,xlsx":p,"ppt,pptx":s,pdf:d,psd:function(a){return M({a:{viewBox:"0 0 32 32"},c:'<path\n    fill="#070444"\n    d="M24.099 2H8.837v28h20.91V7.888l-5.579-5.816L24.099 2"\n  ></path>\n  <path\n    fill="#5bc3f6"\n    d="M2.253 3.493H22.56v7.844H2.253zM24.099 2v5.888h5.648L24.099 2z"\n  ></path>\n  <path\n    fill="#070444"\n    d="M7.1 4.987a6 6 0 0 1 1.242-.1a1.576 1.576 0 0 1 1.187.392a1.714 1.714 0 0 1 .429 1.207A1.946 1.946 0 0 1 9.6 7.712a1.565 1.565 0 0 1-1.254.518a2.084 2.084 0 0 1-.246-.015v1.7h-1Zm1 2.206a1.61 1.61 0 0 0 .228.015a.621.621 0 0 0 .641-.7a.546.546 0 0 0-.569-.618a1.166 1.166 0 0 0-.3.03Zm2.983 1.385a1.845 1.845 0 0 0 .975.311c.345 0 .513-.156.513-.407S12.4 8.1 11.98 7.9a1.594 1.594 0 0 1-1.053-1.5a1.454 1.454 0 0 1 1.5-1.562a1.925 1.925 0 0 1 1.02.259l-.207 1.067a1.576 1.576 0 0 0-.819-.237c-.306 0-.474.148-.474.37c0 .252.2.355.674.592a1.543 1.543 0 0 1 .981 1.5a1.494 1.494 0 0 1-1.6 1.6a2.117 2.117 0 0 1-1.1-.311Zm4.537.402h-.1V5.755h.014a1.117 1.117 0 0 1 .629.113a1.262 1.262 0 0 1 .341.422a1.369 1.369 0 0 1 .149.553c.01.231 0 .417 0 .578a3.079 3.079 0 0 1-.035.539a1.846 1.846 0 0 1-.178.529a1.187 1.187 0 0 1-.382.379a.707.707 0 0 1-.437.111m.192-4.141c-.117 0-.23.009-.31.012l-.247.007h-.82v5.054h.964a2.815 2.815 0 0 0 1.082-.184a1.8 1.8 0 0 0 .718-.517a2.04 2.04 0 0 0 .392-.788a3.921 3.921 0 0 0 .12-1a4.644 4.644 0 0 0-.092-1.186a1.868 1.868 0 0 0-.425-.771a1.712 1.712 0 0 0-.563-.422a2.537 2.537 0 0 0-.577-.188a1.349 1.349 0 0 0-.24-.018"\n  ></path>\n  <path\n    fill="#5bc3f6"\n    d="M16 19.651a7.218 7.218 0 0 1-.9-.031v-3.49c.111-.016.5-.031 1.04-.031c1.3 0 1.873.546 1.873 1.791c0 1.556-.916 1.761-2.012 1.761m.139-5.031c-1.054 0-2.095.016-2.622.031c-.069 0-.083.031-.083.109v9.93c0 .078.028.109.1.109H15c.069 0 .1-.031.1-.125V21.13h.86c2.039 0 3.718-.658 3.718-3.132c-.014-1.805-.818-3.378-3.538-3.378m6.935 2.598a2.266 2.266 0 0 0-2.539 2.257c0 1.136.5 1.743 1.928 2.4c1 .451 1.249.685 1.249 1.089c0 .342-.222.7-.86.7a4.067 4.067 0 0 1-2.247-.841a.056.056 0 0 0-.034-.012c-.033 0-.063.032-.063.09v1.432a.159.159 0 0 0 .083.156a3.942 3.942 0 0 0 2.15.607a2.317 2.317 0 0 0 2.594-2.4c0-1.121-.61-1.7-2.039-2.35c-1.04-.467-1.221-.669-1.221-1.043c0-.3.18-.654.86-.654a3.8 3.8 0 0 1 1.928.591a.094.094 0 0 0 .052.018c.043 0 .073-.043.073-.112v-1.274a.224.224 0 0 0-.083-.2a3.365 3.365 0 0 0-1.831-.451"\n  ></path>'},a)},ai:function(a){return M({a:{viewBox:"0 0 32 32"},c:'<path\n    fill="#909090"\n    d="m24.037 2.072l5.564 5.8v22.056H8.814V30H29.67V7.945l-5.633-5.873"\n  ></path>\n  <path\n    fill="#231612"\n    d="M23.965 2H8.742v27.928H29.6V7.873L23.965 2"\n  ></path>\n  <path fill="#4c4442" d="M23.893 2.072v5.874h5.633l-5.633-5.874"></path>\n  <path fill="#f36617" d="M23.965 2v5.873H29.6L23.965 2Z"></path>\n  <path fill="#909090" d="M2.384 10.264h6.359V3.432H2.384v6.832Z"></path>\n  <path fill="#4c4442" d="M8.743 10.264h13.718V3.432H8.743v6.832Z"></path>\n  <path fill="#f36617" d="M22.407 10.211H2.33V3.379h20.077v6.832"></path>\n  <path\n    fill="#f46c25"\n    d="M18.1 20.619c-.275-1.07-.948-3.226-1.223-4.344h-.014c-.206 1.054-.769 2.859-1.181 4.344H18.1Zm-2.775 1.566l-.838 2.779c-.014.1-.055.128-.137.128h-1.4c-.1 0-.124-.048-.1-.16a858.912 858.912 0 0 1 2.871-9.279a3.686 3.686 0 0 0 .11-.878a.086.086 0 0 1 .082-.1h1.9c.069 0 .082.016.11.08c1.016 3.274 2.129 6.884 3.173 10.19q.041.144-.082.144h-1.542c-.069 0-.1-.032-.124-.1l-.879-2.811h-3.146m6.967-4.631c0-.1.027-.128.094-.128h1.431c.081 0 .108.016.108.128v7.506c0 .08-.027.128-.108.128h-1.4c-.081 0-.121-.032-.121-.144v-7.49Zm-.09-2.173a.918.918 0 0 1 .918-.99a.884.884 0 0 1 .891.99a.908.908 0 1 1-1.809 0"\n  ></path>\n  <path\n    fill="#231612"\n    d="M11.238 5.279h-.013L10.9 7.352h.652ZM9.5 9.3l1.06-4.86h1.355l1.033 4.86H11.81l-.15-1.133h-.882L10.634 9.3H9.5m3.938 0V4.44h1.086V9.3h-1.086"\n  ></path>F'},a)},url:b};t("g",(function(t){return function(t,i){if(t!==E.FOLDER)for(var h=0,u=Object.entries(H);h<u.length;h++){var f=a(u[h],2),o=f[0],p=f[1];if(o.split(",").includes(i.toLowerCase()))return p}switch(t){case E.FOLDER:return O;case E.VIDEO:return l;case E.AUDIO:return c;case E.TEXT:return e;case E.IMAGE:return r;default:return n}}(t.type,g(t.name))}))}}}))}();
