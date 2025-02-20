"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[89086],{24383:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>c,data:()=>n});var i=o(6254);const a={},c=(0,o(52753).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[11]||(t[11]=(0,i.Lk)("h1",{id:"sonoff-swv",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#sonoff-swv"},[(0,i.Lk)("span",null,"SONOFF SWV")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"SWV")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=SONOFF"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("SONOFF")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Zigbee smart water valve")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"flow, battery, switch (state), current_device_status, auto_close_when_water_shortage, cyclic_timed_irrigation, cyclic_quantitative_irrigation")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SWV.png",alt:"SONOFF SWV"})])],-1))])]),t[12]||(t[12]=(0,i.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,i.Lk)("span",null,"OTA updates")])],-1)),(0,i.Lk)("p",null,[t[8]||(t[8]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,i.eW)("."))]),t[13]||(t[13]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[10]||(t[10]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,i.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="flow-numeric" tabindex="-1"><a class="header-anchor" href="#flow-numeric"><span>Flow (numeric)</span></a></h3><p>Current water flow. Value can be found in the published state on the <code>flow</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>m³/h</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="current-device-status-enum" tabindex="-1"><a class="header-anchor" href="#current-device-status-enum"><span>Current device status (enum)</span></a></h3><p>The water valve is in normal state, water shortage or water leakage. Value can be found in the published state on the <code>current_device_status</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_device_status&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>normal_state</code>, <code>water_shortage</code>, <code>water_leakage</code>, <code>water_shortage &amp; water_leakage</code>.</p><h3 id="auto-close-when-water-shortage-binary" tabindex="-1"><a class="header-anchor" href="#auto-close-when-water-shortage-binary"><span>Auto close when water shortage (binary)</span></a></h3><p>Automatically shut down the water valve after the water shortage exceeds 30 minutes. Requires firmware version 1.0.4 or later!. Value can be found in the published state on the <code>auto_close_when_water_shortage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;auto_close_when_water_shortage&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_close_when_water_shortage&quot;: NEW_VALUE}</code>. If value equals <code>ENABLE</code> auto close when water shortage is ON, if <code>DISABLE</code> OFF.</p><h3 id="cyclic-timed-irrigation-composite" tabindex="-1"><a class="header-anchor" href="#cyclic-timed-irrigation-composite"><span>Cyclic timed irrigation (composite)</span></a></h3><p>Smart water valve cycle timing irrigation. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cyclic_timed_irrigation&quot;: {&quot;current_count&quot;: VALUE, &quot;total_number&quot;: VALUE, &quot;irrigation_duration&quot;: VALUE, &quot;irrigation_interval&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;cyclic_timed_irrigation&quot;: &quot;&quot;}</code>.</p><ul><li><code>current_count</code> (numeric): Number of times it has been executed unit is times</li><li><code>total_number</code> (numeric): Total times of circulating irrigation max value is 100, unit is times</li><li><code>irrigation_duration</code> (numeric): Single irrigation duration max value is 86400, unit is seconds</li><li><code>irrigation_interval</code> (numeric): Time interval between two adjacent irrigation max value is 86400, unit is seconds</li></ul><h3 id="cyclic-quantitative-irrigation-composite" tabindex="-1"><a class="header-anchor" href="#cyclic-quantitative-irrigation-composite"><span>Cyclic quantitative irrigation (composite)</span></a></h3><p>Smart water valve circulating quantitative irrigation. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cyclic_quantitative_irrigation&quot;: {&quot;current_count&quot;: VALUE, &quot;total_number&quot;: VALUE, &quot;irrigation_capacity&quot;: VALUE, &quot;irrigation_interval&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;cyclic_quantitative_irrigation&quot;: &quot;&quot;}</code>.</p><ul><li><code>current_count</code> (numeric): Number of times it has been executed unit is times</li><li><code>total_number</code> (numeric): Total times of circulating irrigation max value is 100, unit is times</li><li><code>irrigation_capacity</code> (numeric): Single irrigation capacity max value is 6500, unit is liter</li><li><code>irrigation_interval</code> (numeric): Time interval between two adjacent irrigation max value is 86400, unit is seconds</li></ul>',20))])}]]),n=JSON.parse('{"path":"/devices/SWV.html","title":"SONOFF SWV control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF SWV control via MQTT","description":"Integrate your SONOFF SWV via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-03-31T18:43:56.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Flow (numeric)","slug":"flow-numeric","link":"#flow-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Current device status (enum)","slug":"current-device-status-enum","link":"#current-device-status-enum","children":[]},{"level":3,"title":"Auto close when water shortage (binary)","slug":"auto-close-when-water-shortage-binary","link":"#auto-close-when-water-shortage-binary","children":[]},{"level":3,"title":"Cyclic timed irrigation (composite)","slug":"cyclic-timed-irrigation-composite","link":"#cyclic-timed-irrigation-composite","children":[]},{"level":3,"title":"Cyclic quantitative irrigation (composite)","slug":"cyclic-quantitative-irrigation-composite","link":"#cyclic-quantitative-irrigation-composite","children":[]}]}],"git":{"updatedTime":1739886962000},"filePathRelative":"devices/SWV.md"}')}}]);