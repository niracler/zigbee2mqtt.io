"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10439],{99655:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>o,data:()=>c});var a=i(6254);const n={},o=(0,i(52753).A)(n,[["render",function(e,t){const i=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"leedarson-7a-ss-zabc-h0",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#leedarson-7a-ss-zabc-h0"},[(0,a.Lk)("span",null,"Leedarson 7A-SS-ZABC-H0")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"7A-SS-ZABC-H0")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(i,{to:"/supported-devices/#v=Leedarson"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Leedarson")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"4-in-1-Sensor")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery, occupancy, temperature, humidity, illuminance")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/7A-SS-ZABC-H0.png",alt:"Leedarson 7A-SS-ZABC-H0"})])],-1))])]),t[9]||(t[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_raw</code>: Expose the raw illuminance value. The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;illuminance&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p>',12))])}]]),c=JSON.parse('{"path":"/devices/7A-SS-ZABC-H0.html","title":"Leedarson 7A-SS-ZABC-H0 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Leedarson 7A-SS-ZABC-H0 control via MQTT","description":"Integrate your Leedarson 7A-SS-ZABC-H0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-11-30T20:10:17.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]}]}],"git":{"updatedTime":1739886962000},"filePathRelative":"devices/7A-SS-ZABC-H0.md"}')}}]);