"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9388],{9388:(e,o,s)=>{s.d(o,{WobbleUpdater:()=>t});var n=s(4864);class i{constructor(){this.angle=50,this.move=10}load(e){e&&(void 0!==e.angle&&(this.angle=(0,n.Ws)(e.angle)),void 0!==e.move&&(this.move=(0,n.Ws)(e.move)))}}class a{constructor(){this.distance=5,this.enable=!1,this.speed=new i}load(e){if(e&&(void 0!==e.distance&&(this.distance=(0,n.Ws)(e.distance)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.speed))if((0,n.Ib)(e.speed))this.speed.load({angle:e.speed});else{const o=e.speed;void 0!==o.min?this.speed.load({angle:o}):this.speed.load(e.speed)}}}const l=2*Math.PI;class t{constructor(e){this.container=e}async init(e){var o;const s=e.options.wobble;null!==s&&void 0!==s&&s.enable?e.wobble={angle:(0,n.CE)()*l,angleSpeed:(0,n.qS)(s.speed.angle)/360,moveSpeed:(0,n.qS)(s.speed.move)/10}:e.wobble={angle:0,angleSpeed:0,moveSpeed:0},e.retina.wobbleDistance=(0,n.qS)(null!==(o=null===s||void 0===s?void 0:s.distance)&&void 0!==o?o:0)*this.container.retina.pixelRatio,await Promise.resolve()}isEnabled(e){var o;return!e.destroyed&&!e.spawning&&!(null===(o=e.options.wobble)||void 0===o||!o.enable)}loadOptions(e){e.wobble||(e.wobble=new a);for(var o=arguments.length,s=new Array(o>1?o-1:0),n=1;n<o;n++)s[n-1]=arguments[n];for(const i of s)e.wobble.load(null===i||void 0===i?void 0:i.wobble)}async update(e,o){if(!this.isEnabled(e))return;const{updateWobble:n}=await s.e(3592).then(s.bind(s,3592));n(e,o)}}}}]);
//# sourceMappingURL=9388.3763f0ea.chunk.js.map