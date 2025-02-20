"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[2377],{76048:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>s});var i=o(6254);const c={},a=(0,o(52753).A)(c,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[7]||(t[7]=(0,i.Lk)("h1",{id:"tuya-zb-sm",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#tuya-zb-sm"},[(0,i.Lk)("span",null,"Tuya ZB-Sm")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"ZB-Sm")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Tubular motor")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"cover (state, position), goto_positon, motor_state, active_power, cycle_count, cycle_time, top_limit, bottom_limit, favorite_position, reverse_direction, motor_type, report")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZB-Sm.png",alt:"Tuya ZB-Sm"})])],-1))])]),t[8]||(t[8]=(0,i.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="goto-positon-enum" tabindex="-1"><a class="header-anchor" href="#goto-positon-enum"><span>Goto positon (enum)</span></a></h3><p>Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;goto_positon&quot;: NEW_VALUE}</code>. The possible values are: <code>25</code>, <code>50</code>, <code>75</code>, <code>FAVORITE</code>.</p><h3 id="motor-state-enum" tabindex="-1"><a class="header-anchor" href="#motor-state-enum"><span>Motor state (enum)</span></a></h3><p>Value can be found in the published state on the <code>motor_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>OPENING</code>, <code>CLOSING</code>, <code>STOPPED</code>.</p><h3 id="active-power-numeric" tabindex="-1"><a class="header-anchor" href="#active-power-numeric"><span>Active power (numeric)</span></a></h3><p>Active power. Value can be found in the published state on the <code>active_power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mWt</code>.</p><h3 id="cycle-count-numeric" tabindex="-1"><a class="header-anchor" href="#cycle-count-numeric"><span>Cycle count (numeric)</span></a></h3><p>Cycle count. Value can be found in the published state on the <code>cycle_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="cycle-time-numeric" tabindex="-1"><a class="header-anchor" href="#cycle-time-numeric"><span>Cycle time (numeric)</span></a></h3><p>Cycle time. Value can be found in the published state on the <code>cycle_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ms</code>.</p><h3 id="top-limit-enum" tabindex="-1"><a class="header-anchor" href="#top-limit-enum"><span>Top limit (enum)</span></a></h3><p>Setup or clear top limit. Value can be found in the published state on the <code>top_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;top_limit&quot;: NEW_VALUE}</code>. The possible values are: <code>SET</code>, <code>CLEAR</code>.</p><h3 id="bottom-limit-enum" tabindex="-1"><a class="header-anchor" href="#bottom-limit-enum"><span>Bottom limit (enum)</span></a></h3><p>Setup or clear bottom limit. Value can be found in the published state on the <code>bottom_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;bottom_limit&quot;: NEW_VALUE}</code>. The possible values are: <code>SET</code>, <code>CLEAR</code>.</p><h3 id="favorite-position-numeric" tabindex="-1"><a class="header-anchor" href="#favorite-position-numeric"><span>Favorite position (numeric)</span></a></h3><p>Favorite position of this cover. Value can be found in the published state on the <code>favorite_position</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;favorite_position&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="reverse-direction-binary" tabindex="-1"><a class="header-anchor" href="#reverse-direction-binary"><span>Reverse direction (binary)</span></a></h3><p>Inverts the cover direction. Value can be found in the published state on the <code>reverse_direction</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reverse_direction&quot;: NEW_VALUE}</code>. If value equals <code>true</code> reverse direction is ON, if <code>false</code> OFF.</p><h3 id="motor-type-text" tabindex="-1"><a class="header-anchor" href="#motor-type-text"><span>Motor type (text)</span></a></h3><p>Value can be found in the published state on the <code>motor_type</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="report-enum" tabindex="-1"><a class="header-anchor" href="#report-enum"><span>Report (enum)</span></a></h3><p>Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;report&quot;: NEW_VALUE}</code>. The possible values are: ``.</p>',25))])}]]),s=JSON.parse('{"path":"/devices/ZB-Sm.html","title":"Tuya ZB-Sm control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZB-Sm control via MQTT","description":"Integrate your Tuya ZB-Sm via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-07-01T08:15:09.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Goto positon (enum)","slug":"goto-positon-enum","link":"#goto-positon-enum","children":[]},{"level":3,"title":"Motor state (enum)","slug":"motor-state-enum","link":"#motor-state-enum","children":[]},{"level":3,"title":"Active power (numeric)","slug":"active-power-numeric","link":"#active-power-numeric","children":[]},{"level":3,"title":"Cycle count (numeric)","slug":"cycle-count-numeric","link":"#cycle-count-numeric","children":[]},{"level":3,"title":"Cycle time (numeric)","slug":"cycle-time-numeric","link":"#cycle-time-numeric","children":[]},{"level":3,"title":"Top limit (enum)","slug":"top-limit-enum","link":"#top-limit-enum","children":[]},{"level":3,"title":"Bottom limit (enum)","slug":"bottom-limit-enum","link":"#bottom-limit-enum","children":[]},{"level":3,"title":"Favorite position (numeric)","slug":"favorite-position-numeric","link":"#favorite-position-numeric","children":[]},{"level":3,"title":"Reverse direction (binary)","slug":"reverse-direction-binary","link":"#reverse-direction-binary","children":[]},{"level":3,"title":"Motor type (text)","slug":"motor-type-text","link":"#motor-type-text","children":[]},{"level":3,"title":"Report (enum)","slug":"report-enum","link":"#report-enum","children":[]}]}],"git":{"updatedTime":1739886962000},"filePathRelative":"devices/ZB-Sm.md"}')}}]);