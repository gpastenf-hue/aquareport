<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>AquaReport Pro</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:#060d1c;color:#c8dff5;font-family:monospace;min-height:100vh}
#app{max-width:480px;margin:0 auto;padding-bottom:80px}
.hdr{background:#0a1a30;border-bottom:1px solid #1a3050;padding:14px 16px;display:flex;align-items:center;gap:10px}
.logo{width:36px;height:36px;background:linear-gradient(135deg,#00d4ff,#0ea5e9);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px}
.hname{font-size:14px;font-weight:bold;color:#e8f4ff}.hsub{font-size:9px;color:#00d4ff;letter-spacing:.1em}
.hidx{margin-left:auto;text-align:right}.hidxv{font-size:22px;font-weight:bold}.hidxl{font-size:8px;color:#6b8fb5}
.nav{display:flex;background:#080f1e;border-bottom:1px solid #1a3050}
.navb{flex:1;padding:10px 2px;background:none;border:none;border-bottom:2px solid transparent;color:#3a5f8a;font-size:8px;font-family:monospace;cursor:pointer;text-align:center}
.navb.on{color:#00d4ff;border-bottom-color:#00d4ff}
.navic{font-size:14px;display:block;margin-bottom:2px}
.pg{padding:14px}
.st{font-size:9px;color:#00d4ff;letter-spacing:.12em;margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid #1a3050;margin-top:12px}
.st:first-child{margin-top:0}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px}
.inp{background:#0f1e35;border:1px solid #1a3050;border-radius:7px;padding:9px 11px;color:#c8dff5;font-size:12px;font-family:monospace;outline:none;width:100%}
.card{background:#0b1628;border:1px solid #1a3050;border-radius:10px;padding:12px;margin-bottom:10px}
.fl{font-size:10px;color:#6b8fb5;margin-bottom:4px;margin-top:8px}.fl:first-child{margin-top:0}
.frow{display:flex;gap:6px;align-items:center}
.fi{flex:1;background:#060d1c;border:1px solid #1a3050;border-radius:6px;padding:8px 10px;color:#e8f4ff;font-size:13px;font-family:monospace;outline:none}
.fu{font-size:9px;color:#3a5f8a;min-width:62px}
.pb{height:3px;background:#0f1e35;border-radius:2px;margin-top:10px}
.pf{height:100%;background:linear-gradient(90deg,#0ea5e9,#10b981);border-radius:2px}
.pi{display:flex;justify-content:space-between;font-size:8px;color:#3a5f8a;margin-top:4px}
.rg{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px}
.rc{background:#0b1628;border:1px solid #1a3050;border-radius:10px;padding:10px 12px}
.rc.ok{border-color:#10b981;background:#051a12}.rc.wn{border-color:#f59e0b;background:#1a1005}.rc.bd{border-color:#ef4444;background:#1a0505}
.rn{font-size:9px;color:#6b8fb5;margin-bottom:4px}.rv{font-size:18px;font-weight:bold}.ru{font-size:9px;color:#6b8fb5}.rr{font-size:8px;color:#3a5f8a;margin-top:2px}
.tag{display:inline-block;font-size:8px;padding:2px 6px;border-radius:8px;margin-top:3px}
.tok{background:#10b98122;color:#10b981}.twn{background:#f59e0b22;color:#f59e0b}.tbd{background:#ef444422;color:#ef4444}
.estado-ok{background:#051a12;border:1px solid #10b981;border-radius:10px;padding:14px;text-align:center;margin-bottom:12px}
.estado-bad{background:#1a0505;border:1px solid #ef4444;border-radius:10px;padding:14px;text-align:center;margin-bottom:12px}
.estado-txt{font-size:16px;font-weight:bold;letter-spacing:.08em}
.hcard{background:linear-gradient(135deg,#051828,#081f35);border:1px solid #00d4ff44;border-radius:12px;padding:16px;margin-bottom:12px;text-align:center}
.hsc{font-size:50px;font-weight:bold;line-height:1}.hl{font-size:11px;color:#6b8fb5;margin-top:4px}
.hbw{background:#060d1c;border-radius:6px;height:8px;margin:10px 0 8px;overflow:hidden}.hb{height:100%;border-radius:6px}
.hpg{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px}
.hp{background:#0f1e35;border-radius:8px;padding:7px 10px;display:flex;justify-content:space-between;align-items:center}
.hpn{font-size:9px;color:#6b8fb5}.hps{font-size:13px;font-weight:bold}
.dl{display:flex;flex-direction:column;gap:8px;margin-bottom:12px}
.di{border-radius:10px;padding:10px 12px;border:1px solid}
.di.critical{background:#1a0505;border-color:#ef444466}.di.warning{background:#1a1005;border-color:#f59e0b66}.di.good{background:#051a12;border-color:#10b98166}
.dit{font-size:11px;font-weight:bold;margin-bottom:3px}.did{font-size:10px;color:#6b8fb5;line-height:1.5}
.rsec{background:#0b1628;border:1px solid #1a3050;border-radius:10px;padding:12px 14px;margin-bottom:10px}
.rsh{font-size:9px;color:#00d4ff;letter-spacing:.1em;margin-bottom:10px}
table{width:100%;border-collapse:collapse;font-size:10px}
th{text-align:left;color:#6b8fb5;font-size:8px;padding:4px 6px;border-bottom:1px solid #1a3050;font-weight:normal}
td{padding:6px;border-bottom:1px solid #0f1e35;background:#060d1c}
tr:last-child td{border-bottom:none}
.tv{font-weight:bold}.cok{color:#10b981}.cwn{color:#f59e0b}.cbd{color:#ef4444}
.ai{background:#05121f;border:1px solid #00d4ff33;border-radius:10px;padding:12px;margin-bottom:8px}
.ait{font-size:9px;color:#00d4ff;letter-spacing:.1em;margin-bottom:8px}
.aitx{font-size:10px;color:#a0c8e8;line-height:1.7;white-space:pre-wrap}
.bot{position:fixed;bottom:0;left:0;right:0;max-width:480px;margin:0 auto;background:#060d1c;border-top:1px solid #1a3050;padding:10px 14px 14px}
.br{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.btn{padding:12px;border:none;border-radius:9px;font-size:10px;font-family:monospace;cursor:pointer}
.bc{background:#0a2540;border:1px solid #0ea5e9;color:#00d4ff}
.ba{background:linear-gradient(135deg,#0ea5e9,#0369a1);color:#fff;border:none}
.btn:disabled{opacity:.4;cursor:not-allowed}
.empty{text-align:center;padding:40px 20px;color:#3a5f8a;font-size:11px;line-height:1.8}
.rec{font-size:10px;color:#c8dff5;margin-bottom:8px;padding-left:10px;border-left:2px solid #0ea5e9;line-height:1.5}
.chart-wrap{background:#0b1628;border:1px solid #1a3050;border-radius:10px;padding:12px;margin-bottom:10px}
</style>
</head>
<body>
<div id="app">Cargando...</div>
<script>
var FIELDS=[
{id:'Q',lb:'Caudal promedio',un:'m³/día',g:'hid'},
{id:'Qmax',lb:'Caudal máximo',un:'m³/día',g:'hid'},
{id:'V',lb:'Volumen reactor biológico',un:'m³',g:'hid'},
{id:'A',lb:'Área clarificador',un:'m²',g:'hid'},
{id:'DBO_in',lb:'DBO afluente (entrada)',un:'mg/L',g:'afi'},
{id:'SST_in',lb:'SST afluente (entrada)',un:'mg/L',g:'afi'},
{id:'DBO_out',lb:'DBO efluente (salida)',un:'mg/L',g:'efl'},
{id:'SST_out',lb:'SST efluente (salida)',un:'mg/L',g:'efl'},
{id:'MLSS',lb:'MLSS — Sólidos en reactor',un:'mg/L',g:'ope'},
{id:'OD',lb:'Oxígeno disuelto',un:'mg/L',g:'ope'},
{id:'SVI',lb:'Índice volumétrico lodo',un:'mL/g',g:'ope'},
{id:'Qw',lb:'Caudal de purga',un:'m³/día',g:'lod'},
{id:'Xw',lb:'Sólidos en purga',un:'mg/L',g:'lod'},
{id:'Qr',lb:'Caudal retorno lodos',un:'m³/día',g:'lod'}
];
var S={tab:'datos',plantName:'',operator:'',date:new Date().toISOString().split('T')[0],v:{},calc:null,diags:[],health:null,aiText:'',generating:false};
var chartInstance=null;
function nv(id){return parseFloat(S.v[id]);}
function has(id){return !isNaN(nv(id));}
function fmt(v,d){return(v!==undefined&&!isNaN(v))?v.toFixed(d||2):'—';}
function escH(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function setTab(t){S.tab=t;render();}
function stcls(v,a,b,c,d){if(v===undefined||isNaN(v))return'';if(v>=a&&v<=b)return'ok';if(v>=c&&v<=d)return'wn';return'bd';}
function stcol(c){return c==='ok'?'#10b981':c==='wn'?'#f59e0b':c==='bd'?'#ef4444':'#00d4ff';}
function sttag(c){return c==='ok'?'tok':c==='wn'?'twn':c==='bd'?'tbd':'';}
function stlbl(c){return c==='ok'?'✓ Normal':c==='wn'?'⚠ Revisar':c==='bd'?'✗ Crítico':'—';}
function ttcls(c){return c==='ok'?'cok':c==='wn'?'cwn':c==='bd'?'cbd':'';}
function calcAll(){
var Q=nv('Q'),V=nv('V'),A=nv('A'),Di=nv('DBO_in'),Si=nv('SST_in'),Do=nv('DBO_out'),So=nv('SST_out'),M=nv('MLSS'),Qw=nv('Qw'),Xw=nv('Xw'),Qr=nv('Qr');
var c={};
if(has('Q')&&has('DBO_in'))c.carga=(Q*Di)/1000;
if(has('V')&&has('Q')&&Q>0)c.TRH=(V/Q)*24;
if(has('Q')&&has('DBO_in')&&has('V')&&has('MLSS')&&V>0&&M>0)c.FM=(Q*(Di/1000))/(V*(M/1000));
if(has('V')&&has('MLSS')&&has('Qw')&&has('Xw')&&Qw>0&&Xw>0)c.SRT=(V*M)/(Qw*Xw);
if(has('Q')&&has('A')&&A>0)c.CS=Q/A;
if(has('Q')&&has('MLSS')&&has('A')&&A>0)c.flujoSolidos=(Q*(M/1000))/A;
if(has('DBO_in')&&has('DBO_out')&&Di>0)c.remDBO=((Di-Do)/Di)*100;
if(has('SST_in')&&has('SST_out')&&Si>0)c.remSST=((Si-So)/Si)*100;
if(has('Qr')&&has('Q')&&Q>0)c.RR=Qr/Q;
c.estable=true;
if(c.FM!==undefined&&c.FM>0.5)c.estable=false;
if(has('SVI')&&nv('SVI')>150)c.estable=false;
if(c.flujoSolidos!==undefined&&c.flujoSolidos>120)c.estable=false;
return c;}
function diagAll(c){
var d=[],OD=nv('OD'),SVI=nv('SVI'),So=nv('SST_out');
function add(l,i,t,dc){d.push({lv:l,ic:i,tt:t,dc:dc});}
if(has('OD')){if(OD<1.0)add('critical','🚨','Aireación crítica','OD='+OD+' mg/L. Riesgo anóxico. Aumentar aireación urgente.');else if(OD<1.5)add('warning','⚠️','Aireación insuficiente','OD='+OD+' mg/L. Bajo rango (1.5–3.0). Incrementar aire.');else if(OD>4.0)add('warning','⚠️','Sobroxigenación','OD='+OD+' mg/L. Reducir sopladores.');else add('good','✅','Aireación correcta','OD='+OD+' mg/L. Condiciones aerobias óptimas.');}
if(c.FM!==undefined){if(c.FM>0.20)add('critical','🚨','Sobrecarga orgánica severa','F/M='+c.FM.toFixed(3)+'. Reducir tasa de purga para aumentar MLSS y restablecer equilibrio biológico.');else if(c.FM>0.15)add('warning','⚠️','Sobrecarga orgánica','F/M='+c.FM.toFixed(3)+'. Sobre rango (0.05–0.15). Reducir purga de lodos para incrementar MLSS.');else if(c.FM<0.03)add('critical','🚨','Lodo envejecido severo','F/M='+c.FM.toFixed(3)+'. Posible bulking.');else if(c.FM<0.05)add('warning','⚠️','Lodo envejecido','F/M='+c.FM.toFixed(3)+'. Reducir purga.');else add('good','✅','F/M óptima','F/M='+c.FM.toFixed(3)+'. Equilibrio correcto.');}
if(c.SRT!==undefined){if(c.SRT<15)add('critical','🚨','SRT crítico','SRT='+c.SRT.toFixed(1)+' días. Muy bajo para estabilidad biológica. Reducir purga urgente.');else if(c.SRT<20)add('warning','⚠️','SRT bajo','SRT='+c.SRT.toFixed(1)+' días. Bajo rango recomendado (20–30 días).');else if(c.SRT>35)add('warning','⚠️','SRT elevado','SRT='+c.SRT.toFixed(1)+' días. Incrementar purga para rejuvenecer biomasa.');else add('good','✅','Edad lodo adecuada','SRT='+c.SRT.toFixed(1)+' días. Dentro del rango óptimo (20–30 días).');}
if(has('SVI')){if(SVI>200)add('critical','🚨','Bulking severo','SVI='+SVI+' mL/g. Microscopía urgente.');else if(SVI>150)add('warning','⚠️','Bulking probable','SVI='+SVI+' mL/g. Monitorear filamentosas.');else if(SVI<50)add('warning','⚠️','Lodo muy denso','SVI='+SVI+' mL/g. Verificar SRT (posible lodo mineralizado), revisar sistemas de agitación por exceso de turbulencia y controlar funcionamiento del desarenador.');else add('good','✅','Sedimentabilidad correcta','SVI='+SVI+' mL/g.');}
if(has('SST_out')){if(So>60)add('critical','🚨','Arrastre crítico','SST='+So+' mg/L. Falla en clarificador.');else if(So>30)add('warning','⚠️','Arrastre de lodos','SST='+So+' mg/L. Sobre límite (30 mg/L).');else add('good','✅','Clarificación correcta','SST='+So+' mg/L. Dentro del límite.');}
if(c.CS!==undefined){if(c.CS>50)add('critical','🚨','Clarificador sobrecargado','CS='+c.CS.toFixed(1)+' m³/m²·d.');else if(c.CS>40)add('warning','⚠️','Carga superficial elevada','CS='+c.CS.toFixed(1)+' m³/m²·d. Al límite.');else add('good','✅','Clarificador normal','CS='+c.CS.toFixed(1)+' m³/m²·d.');}
if(c.TRH!==undefined){if(c.TRH<12)add('critical','🚨','TRH insuficiente','TRH='+c.TRH.toFixed(1)+' h. Tiempo crítico para biodegradación.');else if(c.TRH<18)add('warning','⚠️','TRH bajo','TRH='+c.TRH.toFixed(1)+' h. Bajo rango recomendado (18–36 h).');else if(c.TRH>40)add('warning','⚠️','TRH elevado','TRH='+c.TRH.toFixed(1)+' h. Riesgo de condiciones sépticas.');else add('good','✅','TRH adecuado','TRH='+c.TRH.toFixed(1)+' h. Dentro del rango óptimo.');}
return d;}
function healthAll(c){
function sc(v,r){for(var i=0;i<r.length;i++){if(v>=r[i][0]&&v<=r[i][1])return r[i][2];}return 2;}
var p=[];
if(c.FM!==undefined)p.push({n:'F/M',s:sc(c.FM,[[0.05,0.15,10],[0.03,0.20,6]]),v:c.FM.toFixed(3)});
if(c.SRT!==undefined)p.push({n:'SRT',s:sc(c.SRT,[[20,30,10],[15,35,6]]),v:c.SRT.toFixed(1)+'d'});
if(has('SVI'))p.push({n:'SVI',s:sc(nv('SVI'),[[50,150,10],[30,200,6]]),v:nv('SVI')+''});
if(has('OD'))p.push({n:'OD',s:sc(nv('OD'),[[1.5,3.5,10],[1.0,4.5,6]]),v:nv('OD')+''});
if(c.TRH!==undefined)p.push({n:'TRH',s:sc(c.TRH,[[18,36,10],[12,40,6]]),v:c.TRH.toFixed(1)+'h'});
if(c.CS!==undefined)p.push({n:'C.Sup.',s:sc(c.CS,[[0,25,10],[0,40,6]]),v:c.CS.toFixed(1)});
if(c.remDBO!==undefined)p.push({n:'Rem.DBO',s:sc(c.remDBO,[[90,100,10],[80,90,7]]),v:c.remDBO.toFixed(1)+'%'});
if(!p.length)return null;
var tot=0;for(var i=0;i<p.length;i++)tot+=p[i].s;
return{score:tot/p.length,params:p};}
function drawChart(c){
var ctx=document.getElementById('migrafico');
if(!ctx)return;
if(chartInstance){chartInstance.destroy();chartInstance=null;}
var labels=[],data=[],colors=[];
if(c.FM!==undefined){labels.push('F/M');data.push(parseFloat(c.FM.toFixed(3)));colors.push(c.FM>=0.2&&c.FM<=0.5?'#10b981':c.FM<=0.6?'#f59e0b':'#ef4444');}
if(c.TRH!==undefined){labels.push('TRH(h)');data.push(parseFloat(c.TRH.toFixed(1)));colors.push(c.TRH>=6&&c.TRH<=16?'#10b981':c.TRH>=4?'#f59e0b':'#ef4444');}
if(c.remDBO!==undefined){labels.push('Rem.DBO(%)');data.push(parseFloat(c.remDBO.toFixed(1)));colors.push(c.remDBO>=90?'#10b981':c.remDBO>=80?'#f59e0b':'#ef4444');}
if(c.flujoSolidos!==undefined){labels.push('Flujo Sol.');data.push(parseFloat(c.flujoSolidos.toFixed(1)));colors.push(c.flujoSolidos<=80?'#10b981':c.flujoSolidos<=120?'#f59e0b':'#ef4444');}
if(c.CS!==undefined){labels.push('C.Sup.');data.push(parseFloat(c.CS.toFixed(1)));colors.push(c.CS<=25?'#10b981':c.CS<=40?'#f59e0b':'#ef4444');}
chartInstance=new Chart(ctx,{type:'bar',data:{labels:labels,datasets:[{label:'Indicadores',data:data,backgroundColor:colors,borderRadius:6}]},options:{responsive:true,plugins:{legend:{labels:{color:'#c8dff5',font:{family:'monospace',size:10}}}},scales:{x:{ticks:{color:'#6b8fb5'},grid:{color:'#1a3050'}},y:{ticks:{color:'#6b8fb5'},grid:{color:'#1a3050'}}}}});}
</script>
<script>
function render(){
var c=S.calc||{};
var filled=0;
for(var i=0;i<FIELDS.length;i++){if(S.v[FIELDS[i].id]!==undefined&&S.v[FIELDS[i].id]!=='')filled++;}
var pct=Math.round(filled/FIELDS.length*100);
var h='';
h+='<div class="hdr"><div class="logo">💧</div><div><div class="hname">AQUAREPORT PRO</div><div class="hsub">DASHBOARD PTAS</div></div>';
if(S.health){var hs=S.health.score;var hc=hs>=8?'#10b981':hs>=6?'#f59e0b':'#ef4444';h+='<div class="hidx"><div class="hidxv" style="color:'+hc+'">'+hs.toFixed(1)+'</div><div class="hidxl">ÍNDICE/10</div></div>';}
h+='</div>';
var NT=[{id:'datos',ic:'📋',lb:'DATOS'},{id:'dashboard',ic:'📊',lb:'DASHBOARD'},{id:'diagnostico',ic:'🔍',lb:'DIAGNÓST.'},{id:'informe',ic:'📄',lb:'INFORME'}];
h+='<div class="nav">';
for(var ni=0;ni<NT.length;ni++){var nv2=NT[ni];h+='<button class="navb'+(S.tab===nv2.id?' on':'')+'" onclick="setTab(\''+nv2.id+'\')"><span class="navic">'+nv2.ic+'</span>'+nv2.lb+'</button>';}
h+='</div>';
if(S.tab==='datos'){
h+='<div class="pg"><div class="st">IDENTIFICACIÓN</div>';
h+='<div class="g2"><input class="inp" onchange="S.plantName=this.value" placeholder="Nombre planta" value="'+escH(S.plantName)+'"><input class="inp" onchange="S.operator=this.value" placeholder="Operador" value="'+escH(S.operator)+'"></div>';
h+='<input class="inp" type="date" onchange="S.date=this.value" value="'+S.date+'" style="margin-bottom:10px">';
var GR=[{k:'hid',t:'DATOS HIDRÁULICOS'},{k:'afi',t:'CALIDAD AFLUENTE'},{k:'efl',t:'CALIDAD EFLUENTE'},{k:'ope',t:'PARÁMETROS OPERACIONALES'},{k:'lod',t:'CONTROL DE LODOS'}];
for(var gi=0;gi<GR.length;gi++){
h+='<div class="st">'+GR[gi].t+'</div><div class="card">';
for(var fi=0;fi<FIELDS.length;fi++){var f=FIELDS[fi];if(f.g!==GR[gi].k)continue;h+='<div class="fl">'+f.lb+'</div><div class="frow"><input class="fi" type="number" placeholder="—" onchange="S.v[\''+f.id+'\']=this.value" value="'+escH(S.v[f.id]||'')+'"><span class="fu">'+f.un+'</span></div>';}
h+='</div>';}
h+='<div class="pb"><div class="pf" style="width:'+pct+'%"></div></div><div class="pi"><span>'+filled+'/'+FIELDS.length+' parámetros</span><span>'+pct+'%</span></div></div>';
h+='<div class="bot"><div class="br"><button class="btn bc" '+(filled<3?'disabled':'')+' onclick="runCalc()">⚡ CALCULAR</button><button class="btn ba" '+(filled<3?'disabled':'')+' onclick="runAI()">📄 GENERAR INFORME</button></div></div>';}
if(S.tab==='dashboard'){
h+='<div class="pg">';
if(!S.calc){h+='<div class="empty">Ingresa datos y presiona ⚡ CALCULAR.</div>';}
else{
if(c.estable){h+='<div class="estado-ok"><div class="estado-txt" style="color:#10b981">✅ OPERACIÓN ESTABLE</div></div>';}
else{h+='<div class="estado-bad"><div class="estado-txt" style="color:#ef4444">⚠ OPERACIÓN INESTABLE</div></div>';}
h+='<div class="st">REACTOR BIOLÓGICO</div><div class="card"><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">';
var RI=[{n:'F/M',v:c.FM,u:'kg/kg·d',a:0.05,b:0.15,c:0.03,d:0.20},{n:'SRT',v:c.SRT,u:'días',a:20,b:30,c:15,d:35},{n:'TRH',v:c.TRH,u:'h',a:18,b:36,c:12,d:40},{n:'MLSS',v:has('MLSS')?nv('MLSS'):undefined,u:'mg/L',a:2000,b:4000,c:1500,d:5000}];
for(var ri=0;ri<RI.length;ri++){var it=RI[ri];var cl=it.v!==undefined?stcls(it.v,it.a,it.b,it.c,it.d):'';h+='<div style="background:#060d1c;border-radius:8px;padding:8px 10px;border:1px solid '+(cl==='ok'?'#10b98144':cl==='wn'?'#f59e0b44':cl==='bd'?'#ef444444':'#1a3050')+'"><div style="font-size:9px;color:#6b8fb5">'+it.n+'</div><div style="font-size:15px;font-weight:bold;color:'+(cl?stcol(cl):'#c8dff5')+'">'+(it.v!==undefined?fmt(it.v,2):'—')+'</div><div style="font-size:8px;color:#3a5f8a">'+it.u+'</div></div>';}
h+='</div></div>';
h+='<div class="st">CLARIFICADOR SECUNDARIO</div><div class="card"><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">';
var CI=[{n:'Carga Sup.',v:c.CS,u:'m³/m²·d',a:10,b:40,c:5,d:50},{n:'Flujo Sólidos',v:c.flujoSolidos,u:'kg/m²·d',a:50,b:100,c:30,d:120},{n:'SST efluente',v:has('SST_out')?nv('SST_out'):undefined,u:'mg/L',a:0,b:30,c:0,d:60},{n:'SVI',v:has('SVI')?nv('SVI'):undefined,u:'mL/g',a:50,b:150,c:30,d:200}];
for(var ci2=0;ci2<CI.length;ci2++){var it2=CI[ci2];var cl2=it2.v!==undefined?stcls(it2.v,it2.a,it2.b,it2.c,it2.d):'';h+='<div style="background:#060d1c;border-radius:8px;padding:8px 10px;border:1px solid '+(cl2==='ok'?'#10b98144':cl2==='wn'?'#f59e0b44':cl2==='bd'?'#ef444444':'#1a3050')+'"><div style="font-size:9px;color:#6b8fb5">'+it2.n+'</div><div style="font-size:15px;font-weight:bold;color:'+(cl2?stcol(cl2):'#c8dff5')+'">'+(it2.v!==undefined?fmt(it2.v,2):'—')+'</div><div style="font-size:8px;color:#3a5f8a">'+it2.u+'</div></div>';}
h+='</div></div>';
h+='<div class="st">AIREACIÓN Y EFLUENTE</div><div class="card"><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">';
var AI=[{n:'OD',v:has('OD')?nv('OD'):undefined,u:'mg/L',a:1.5,b:3.5,c:1.0,d:4.5},{n:'Rem. DBO',v:c.remDBO,u:'%',a:90,b:100,c:80,d:90},{n:'Rem. SST',v:c.remSST,u:'%',a:85,b:100,c:70,d:85},{n:'DBO efluente',v:has('DBO_out')?nv('DBO_out'):undefined,u:'mg/L',a:0,b:30,c:0,d:60}];
for(var ai2=0;ai2<AI.length;ai2++){var it3=AI[ai2];var cl3=it3.v!==undefined?stcls(it3.v,it3.a,it3.b,it3.c,it3.d):'';h+='<div style="background:#060d1c;border-radius:8px;padding:8px 10px;border:1px solid '+(cl3==='ok'?'#10b98144':cl3==='wn'?'#f59e0b44':cl3==='bd'?'#ef444444':'#1a3050')+'"><div style="font-size:9px;color:#6b8fb5">'+it3.n+'</div><div style="font-size:15px;font-weight:bold;color:'+(cl3?stcol(cl3):'#c8dff5')+'">'+(it3.v!==undefined?fmt(it3.v,2):'—')+'</div><div style="font-size:8px;color:#3a5f8a">'+it3.u+'</div></div>';}
h+='</div></div>';
h+='<div class="st">GRÁFICO DE INDICADORES</div><div class="chart-wrap"><canvas id="migrafico"></canvas></div>';
if(S.health){var hs2=S.health.score;var hc2=hs2>=8?'#10b981':hs2>=6?'#f59e0b':'#ef4444';h+='<div class="st">ÍNDICE DE SALUD</div><div class="hcard"><div class="hsc" style="color:'+hc2+'">'+hs2.toFixed(1)+'<span style="font-size:20px;color:#6b8fb5">/10</span></div><div class="hl">'+(hs2>=8?'Operación estable':hs2>=6?'Requiere atención':'Estado crítico')+'</div><div class="hbw"><div class="hb" style="width:'+(hs2*10)+'%;background:'+hc2+'"></div></div><div class="hpg">';for(var pi=0;pi<S.health.params.length;pi++){var pp=S.health.params[pi];var pc=pp.s>=8?'#10b981':pp.s>=5?'#f59e0b':'#ef4444';h+='<div class="hp"><span class="hpn">'+pp.n+'</span><span class="hps" style="color:'+pc+'">'+pp.s+'/10</span></div>';}h+='</div></div>';}}
h+='</div>';}
if(S.tab==='diagnostico'){
h+='<div class="pg">';
if(!S.diags||!S.diags.length){h+='<div class="empty">Ingresa datos y presiona ⚡ CALCULAR.</div>';}
else{var LV=[{k:'critical',t:'⚠ CRÍTICO',c:'#ef4444'},{k:'warning',t:'ADVERTENCIAS',c:'#f59e0b'},{k:'good',t:'CORRECTO',c:'#10b981'}];for(var li=0;li<LV.length;li++){var lv=LV[li];var items=[];for(var di=0;di<S.diags.length;di++){if(S.diags[di].lv===lv.k)items.push(S.diags[di]);}if(!items.length)continue;h+='<div class="st" style="color:'+lv.c+'">'+lv.t+' ('+items.length+')</div><div class="dl">';for(var ii=0;ii<items.length;ii++){var itm=items[ii];h+='<div class="di '+itm.lv+'"><div style="font-size:16px;margin-bottom:4px">'+itm.ic+'</div><div class="dit" style="color:'+lv.c+'">'+itm.tt+'</div><div class="did">'+itm.dc+'</div></div>';}h+='</div>';}}
h+='</div>';}
if(S.tab==='informe'){
h+='<div class="pg">';
if(!S.calc){h+='<div class="empty">Ingresa datos y presiona 🤖 📄 GENERAR INFORME.</div>';}
else{
h+='<div class="rsec"><div class="rsh">1 — DATOS DE OPERACIÓN</div><table><tr><th>PARÁMETRO</th><th>VALOR</th><th>UNIDAD</th></tr><tr><td>Planta</td><td class="tv">'+escH(S.plantName||'—')+'</td><td></td></tr><tr><td>Operador</td><td class="tv">'+escH(S.operator||'—')+'</td><td></td></tr><tr><td>Fecha</td><td class="tv">'+S.date+'</td><td></td></tr>';
for(var fk=0;fk<FIELDS.length;fk++){var ff=FIELDS[fk];h+='<tr><td>'+ff.lb+'</td><td class="tv">'+(S.v[ff.id]||'—')+'</td><td style="color:#3a5f8a">'+ff.un+'</td></tr>';}
h+='</table></div>';
h+='<div class="rsec"><div class="rsh">2 — RESULTADOS CALCULADOS</div><table><tr><th>PARÁMETRO</th><th>RESULTADO</th><th>RANGO</th><th>ESTADO</th></tr>';
var CR=[{k:'carga',n:'Carga Orgánica',u:'kg/día',rng:'—',a:0,b:99999,c2:0,d:99999},{k:'TRH',n:'TRH',u:'h',rng:'18–36',a:18,b:36,c2:12,d:40},{k:'FM',n:'F/M',u:'kg/kg·d',rng:'0.05–0.15',a:0.05,b:0.15,c2:0.03,d:0.20},{k:'SRT',n:'SRT',u:'días',rng:'20–30',a:20,b:30,c2:15,d:35},{k:'CS',n:'Carga Superficial',u:'m³/m²·d',rng:'10–40',a:10,b:40,c2:5,d:50},{k:'flujoSolidos',n:'Flujo Sólidos',u:'kg/m²·d',rng:'50–100',a:50,b:100,c2:30,d:120},{k:'remDBO',n:'Efic. DBO',u:'%',rng:'≥90%',a:90,b:100,c2:80,d:90},{k:'remSST',n:'Efic. SST',u:'%',rng:'≥85%',a:85,b:100,c2:70,d:85}];
for(var cri=0;cri<CR.length;cri++){var cr=CR[cri];var crv=c[cr.k];var crcl=crv!==undefined?stcls(crv,cr.a,cr.b,cr.c2,cr.d):'';var tc=ttcls(crcl);h+='<tr><td>'+cr.n+'</td><td class="tv '+tc+'">'+(crv!==undefined?fmt(crv,2)+' '+cr.u:'—')+'</td><td style="font-size:9px;color:#3a5f8a">'+cr.rng+'</td><td class="'+tc+'" style="font-size:9px">'+stlbl(crcl)+'</td></tr>';}
h+='</table></div>';
if(S.diags&&S.diags.length){h+='<div class="rsec"><div class="rsh">3 — DIAGNÓSTICO</div>';for(var dk=0;dk<S.diags.length;dk++){var dg=S.diags[dk];var dc2=dg.lv==='critical'?'#ef4444':dg.lv==='warning'?'#f59e0b':'#10b981';h+='<div style="margin-bottom:8px"><div style="font-size:10px;font-weight:bold;color:'+dc2+'">'+dg.ic+' '+dg.tt+'</div><div style="font-size:9.5px;color:#6b8fb5;line-height:1.5;margin-top:2px">'+dg.dc+'</div></div>';}h+='</div>';}
h+='<div class="rsec"><div class="rsh">4 — RECOMENDACIONES</div>';
var recs=[];
if(has('OD')&&nv('OD')<1.5)recs.push('Aumentar caudal de aire. Verificar difusores.');
if(c.FM!==undefined&&c.FM>0.15)recs.push('F/M elevado: reducir tasa de purga de lodos para aumentar MLSS en el reactor y restablecer el equilibrio sustrato/biomasa.');
if(c.FM!==undefined&&c.FM<0.1)recs.push('Reducir purga para incrementar edad del lodo.');
if(c.SRT!==undefined&&c.SRT<5)recs.push('Reducir Qw para subir SRT sobre 5 días.');
if(c.SRT!==undefined&&c.SRT>20)recs.push('Incrementar purga para rejuvenecer biomasa.');
if(has('SVI')&&nv('SVI')>150)recs.push('Investigar filamentosas por microscopía.');
if(has('SST_out')&&nv('SST_out')>30)recs.push('Revisar mecanismo de raspado del clarificador.');
if(c.CS!==undefined&&c.CS>40)recs.push('Evaluar reducción de caudal pico.');
if(c.TRH!==undefined&&c.TRH<6)recs.push('TRH bajo. Evaluar aumento del volumen del reactor.');
if(!recs.length){recs.push('Planta en parámetros óptimos.');recs.push('Continuar monitoreo diario de OD, MLSS y SVI.');}
for(var ri2=0;ri2<recs.length;ri2++)h+='<div class="rec">'+(ri2+1)+'. '+recs[ri2]+'</div>';
h+='</div>';
if(S.health){var hs3=S.health.score;var hc3=hs3>=8?'#10b981':hs3>=6?'#f59e0b':'#ef4444';h+='<div class="rsec"><div class="rsh">5 — ÍNDICE DE SALUD</div><div style="text-align:center;padding:12px 0"><span style="font-size:42px;font-weight:bold;color:'+hc3+'">'+hs3.toFixed(1)+'</span><span style="font-size:16px;color:#6b8fb5">/10</span></div><div style="text-align:center;font-size:11px;color:#6b8fb5;margin-bottom:12px">'+(hs3>=8?'Operación estable':hs3>=6?'Requiere atención':'Estado crítico')+'</div><table><tr><th>PARÁMETRO</th><th>VALOR</th><th>PUNTAJE</th></tr>';for(var hpi=0;hpi<S.health.params.length;hpi++){var hp=S.health.params[hpi];var hpc=hp.s>=8?'cok':hp.s>=5?'cwn':'cbd';h+='<tr><td>'+hp.n+'</td><td style="color:#6b8fb5">'+hp.v+'</td><td class="tv '+hpc+'">'+hp.s+'/10</td></tr>';}h+='</table></div>';}
if(S.generating)h+='<div style="text-align:center;padding:16px;font-size:11px;color:#00d4ff">⏳ Generando análisis con IA...</div>';
if(S.aiText)h+='<div class="ai"><div class="ait">🤖 ANÁLISIS INTELIGENTE</div><div class="aitx">'+S.aiText+'</div></div>';}
h+='</div>';}
document.getElementById('app').innerHTML=h;
if(S.tab==='dashboard'&&S.calc){drawChart(S.calc);}
}
function runCalc(){S.calc=calcAll();S.diags=diagAll(S.calc);S.health=healthAll(S.calc);S.tab='dashboard';render();}
function runAI(){
S.calc=calcAll();S.diags=diagAll(S.calc);S.health=healthAll(S.calc);S.tab='informe';
var c=S.calc;
var crit=S.diags.filter(function(d){return d.lv==='critical';});
var warn=S.diags.filter(function(d){return d.lv==='warning';});
var hs=S.health?S.health.score:null;
var txt='';
txt+='1. ESTADO GENERAL DEL REACTOR BIOLÓGICO\n';
if(c.FM!==undefined&&c.SRT!==undefined){
if(c.estable)txt+='El reactor opera en condiciones estables. F/M='+c.FM.toFixed(3)+' kg/kg·d y SRT='+c.SRT.toFixed(1)+' días dentro de rangos óptimos.\n';
else txt+='El reactor presenta condiciones inestables. Se requiere intervención operacional para restablecer el equilibrio biológico.\n';
}else{txt+='Datos insuficientes para evaluar el reactor. Ingresar MLSS, caudal de purga y DBO.\n';}
txt+='\n2. ESTADO DEL CLARIFICADOR SECUNDARIO\n';
if(c.CS!==undefined){
if(c.CS<=40)txt+='Clarificador operando dentro de límites hidráulicos normales. Carga superficial='+c.CS.toFixed(1)+' m³/m²·d.\n';
else txt+='Clarificador sobrecargado hidráulicamente. Carga superficial='+c.CS.toFixed(1)+' m³/m²·d supera el límite recomendado (40 m³/m²·d).\n';
}else{txt+='Ingresar área del clarificador para evaluar carga superficial.\n';}
txt+='\n3. EVALUACIÓN DE LA CALIDAD DEL EFLUENTE\n';
if(c.remDBO!==undefined){
if(c.remDBO>=90)txt+='Efluente de buena calidad. Remoción de DBO='+c.remDBO.toFixed(1)+'%, cumple estándar mínimo (90%).\n';
else txt+='Calidad del efluente deficiente. Remoción de DBO='+c.remDBO.toFixed(1)+'%, bajo el estándar mínimo (90%). Revisar proceso biológico.\n';
}else{txt+='Ingresar DBO afluente y efluente para evaluar calidad del efluente.\n';}
txt+='\n4. RECOMENDACIONES PRIORITARIAS\n';
var recs=[];
if(has('OD')&&nv('OD')<1.5)recs.push('Aumentar caudal de aire en sopladores y verificar difusores.');
if(c.FM!==undefined&&c.FM>0.5)recs.push('Reducir caudal de entrada o aumentar MLSS para disminuir F/M.');
if(c.FM!==undefined&&c.FM<0.1)recs.push('Reducir tasa de purga para incrementar edad del lodo.');
if(c.SRT!==undefined&&c.SRT<5)recs.push('Reducir Qw para aumentar el SRT por encima de 5 días.');
if(c.SRT!==undefined&&c.SRT>20)recs.push('Incrementar purga para rejuvenecer la población microbiana.');
if(has('SVI')&&nv('SVI')>150)recs.push('Investigar presencia de bacterias filamentosas por microscopía.');
if(has('SST_out')&&nv('SST_out')>30)recs.push('Revisar mecanismo de raspado del clarificador secundario.');
if(c.CS!==undefined&&c.CS>40)recs.push('Evaluar reducción del caudal pico o ampliación del clarificador.');
if(c.TRH!==undefined&&c.TRH<6)recs.push('TRH insuficiente. Evaluar reducción de caudal o aumento del reactor.');
if(!recs.length)recs.push('Mantener condiciones actuales. Planta operando en parámetros óptimos.');
for(var i=0;i<recs.length;i++)txt+=( i+1)+'. '+recs[i]+'\n';
if(hs!==null){txt+='\n5. ÍNDICE DE SALUD: '+hs.toFixed(1)+'/10 — '+(hs>=8?'Operación estable':hs>=6?'Requiere atención':'Estado crítico')+'.\n';}
S.aiText=txt;S.generating=false;render();}
render();
</script>
</body>
</html>
