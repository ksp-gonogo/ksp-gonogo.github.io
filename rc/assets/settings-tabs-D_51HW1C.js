const s=new Map;function r(e){s.set(e.id,e)}function n(){return[...s.values()]}function a(e){return n().filter(t=>!t.screens||t.screens.includes(e))}function i(){s.clear()}export{i as _,a,n as g,r};
