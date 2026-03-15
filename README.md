<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>AquaReport Pro</title>
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
.pg{padding:14px}.st{font-size:9px;color:#00d4ff;letter-spacing:.12em;margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid #1a3050;margin-top:12px}.st:first-child{margin-top:0}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px}
.inp{background:#0f1e35;border:1px solid #1a3050;border-radius:7px;padding:9px 11px;color:#c8dff5;font-size:12px;font-family:monospace;outline:none;width:100%}
.card{background:#0b1628;border:1px solid #1a3050;border-radius:10px;padding:12px;margin-bottom:10px}
.fl{font-size:10px;color:#6b8fb5;margin-bottom:4px;margin-top:8px}.fl:first-child{margin-top:0}
.frow{display:flex;gap:6px;align-items:center}
.fi{flex:1;background:#060d1c;border:1px solid #1a3050;border-radius:6px;padding:8px 10px;color:#e8f4ff;font-size:13px;font-family:monospace;outline:none}
.fu{font-size:9px;color:#3a5f8a;min-width:62px}
.pb{height:3px;background:#0f1e35;border-radius:2px;margin-top:10px}.pf{height:100%;background:linear-gradient(90deg,#0ea5e9,#10b981);border-radius:2px}
.pi{display:flex;justify-content:space-between;font-size:8px;color:#3a5f8a;margin-top:4px}
.rg{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px}
.rc{background:#0b1628;border:1px solid #1a3050;border-radius:10px;padding:10px 12px}
.rc.ok{border-color:#10b981;background:#051a12}.rc.wn{border-color:#f59e0b;background:#1a1005}.rc.bd{border-color:#ef4444;background:#1a0505}
.rn{font-size:9px;color:#6b8fb5;margin-bottom:4px}.rv{font-size:18px;font-weight:bold}.ru{font-size:9px;color:#6b8fb5}.rr{font-size:8px;color:#3a5f8a;margin-top:2px}
.tag{display:inline-block;font-size:8px;padding:2px 6px;border-radius:8px;margin-top:3px}
.tok{background:#10b98122;color:#10b981}.twn{background:#f59e0b22;color:#f59e0b}.tbd{background:#ef444422;color:#ef4444}
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
td{padding:6px;border-bottom:1px solid #0f1e35}
tr:last-child td{border-bottom:none}
.tv{font-weight:bold}.cok{color:#10b981}.cwn{color:#f59e0b}.cbd{color:#ef4444}
.ai{background:#05121f;border:1px solid #00d4ff33;border-radius:10px;padding:12px;margin-bottom:8px}
.ait{font-size:9px;color:#00d4ff;letter-spacing:.1em;margin-bottom:8px}.aitx{font-size:10px;color:#a0c8e8;line-height:1.7;white-space:pre-wrap}
.bot{position:fixed;bottom:0;left:0;right:0;max-width:480px;margin:0 auto;background:#060d1c;border-top:1px solid #1a3050;padding:10px 14px 14px}
.br{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.btn{padding:12px;border:none;border-radius:9px;font-size:10px;font-family:monospace;cursor:pointer}
.bc{background:#0a2540;border:1px solid #0ea5e9;color:#00d4ff}.ba{background:linear-gradient(135deg,#0ea5e9,#0369a1);color:#fff;border:none}
.btn:disabled{opacity:.4;cursor:not-allowed}
.empty{text-align:center;padding:40px 20px;color:#3a5f8a;font-size:11px;line-height:1.8}
.rec{font-size:10px;color:#c8dff5;margin-bottom:8px;padding-left:10px;border-left:2px solid #0ea5e9;line-height:1.5}
</style>
</head>
<body>
<div id="app">Cargando...</div>
