"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[62500],{18891:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>l,data:()=>d});var o=a(6254);const i={},l=(0,a(52753).A)(i,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[7]||(t[7]=(0,o.Lk)("h1",{id:"schneider-electric-eer53000",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#schneider-electric-eer53000"},[(0,o.Lk)("span",null,"Schneider Electric EER53000")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"EER53000")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Schneider Electric")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Wiser radiator thermostat (VACT)")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"battery, keypad_lockout, calibrate_valve, valve_calibration_status, zone_mode, climate (occupied_heating_setpoint, local_temperature, local_temperature_calibration, pi_heating_demand)")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EER53000.png",alt:"Schneider Electric EER53000"})])],-1))])]),t[8]||(t[8]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>This device by default only pairs to Wiser Gateways when the set button is pressed, to let it join normal HA gateways (like what Zigbee2MQTT uses) hold the set button down for 5 seconds, and release.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="keypad-lockout-binary" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-binary"><span>Keypad lockout (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. If value equals <code>lock1</code> keypad lockout is ON, if <code>unlock</code> OFF.</p><h3 id="calibrate-valve-binary" tabindex="-1"><a class="header-anchor" href="#calibrate-valve-binary"><span>Calibrate valve (binary)</span></a></h3><p>Calibrates valve on next wakeup. Value can be found in the published state on the <code>calibrate_valve</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibrate_valve&quot;: NEW_VALUE}</code>. If value equals <code>calibrate</code> calibrate valve is ON, if <code>idle</code> OFF.</p><h3 id="valve-calibration-status-enum" tabindex="-1"><a class="header-anchor" href="#valve-calibration-status-enum"><span>Valve calibration status (enum)</span></a></h3><p>Value can be found in the published state on the <code>valve_calibration_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>ongoing</code>, <code>successful</code>, <code>uncalibrated</code>, <code>failed_e1</code>, <code>failed_e2</code>, <code>failed_e3</code>.</p><h3 id="zone-mode-enum" tabindex="-1"><a class="header-anchor" href="#zone-mode-enum"><span>Zone mode (enum)</span></a></h3><p>Icon shown on device displays. Value can be found in the published state on the <code>zone_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;zone_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>manual</code>, <code>schedule</code>, <code>energy_saver</code>, <code>holiday</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>7</code> and <code>30</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-12.8</code> and the maximum value is <code>12.7</code> with a step size of <code>0.1</code>.</li></ul>',17))])}]]),d=JSON.parse('{"path":"/devices/EER53000.html","title":"Schneider Electric EER53000 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric EER53000 control via MQTT","description":"Integrate your Schneider Electric EER53000 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-05-30T19:17:03.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Keypad lockout (binary)","slug":"keypad-lockout-binary","link":"#keypad-lockout-binary","children":[]},{"level":3,"title":"Calibrate valve (binary)","slug":"calibrate-valve-binary","link":"#calibrate-valve-binary","children":[]},{"level":3,"title":"Valve calibration status (enum)","slug":"valve-calibration-status-enum","link":"#valve-calibration-status-enum","children":[]},{"level":3,"title":"Zone mode (enum)","slug":"zone-mode-enum","link":"#zone-mode-enum","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]}]}],"git":{"updatedTime":1739886962000},"filePathRelative":"devices/EER53000.md"}')}}]);