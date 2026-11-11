# ActivSludge Pro

Aplicación web para la evaluación operacional de plantas de tratamiento de aguas servidas de lodos activados en modalidad de aireación extendida. Funciona en el navegador del teléfono, se puede instalar como aplicación y abre sin conexión una vez cargada por primera vez.

Publicada en https://gpastenf-hue.github.io/aquareport

## Alcance

La app entrega un diagnóstico operacional a partir de datos de terreno y de laboratorio. No verifica el cumplimiento del DS 90 ni reemplaza el criterio del operador o del fiscalizador. Los valores de DBO y SST efluente que usa son referencias operacionales, no límites normativos.

## Archivos

- `index.html`: la aplicación completa (interfaz, cálculos y diagnóstico).
- `sw.js`: service worker que permite el uso sin conexión. Al publicar una versión nueva hay que cambiar el nombre de la caché (`CACHE`) para que los teléfonos la actualicen.
- `manifest.webmanifest`, `icon-192.png`, `icon-512.png`: datos de instalación.

Los datos ingresados se guardan solo en el dispositivo (localStorage). El botón "Borrar datos" los elimina.

## Cálculos

| Parámetro | Fórmula |
|---|---|
| Carga orgánica (kg/d) | Q · DBOaf / 1000 |
| TRH (h) | V / Q · 24 |
| F/M (kg DBO/kg SSVLM·d) | Q · DBOaf / (V · SSVLM); con MLSS total si no se ingresa el SSVLM |
| SRT (d) | V · MLSS / (Qw · Xw + (Q − Qw) · SSTef) |
| SOR (m³/m²·d) | Q / A, y Qmáx / A para caudal máximo |
| SLR (kg/m²·d) | (Q + Qr) · MLSS / (1000 · A), y con Qmáx para caudal máximo |
| Remoción (%) | (afluente − efluente) / afluente · 100 |
| Ocupación del manto (%) | altura del manto / altura de la columna · 100 |
| SRT mínimo de nitrificación (d) | 18,5 · e^(−0,098 · T) |

El SRT incluye los sólidos que salen por el efluente cuando se ingresan el caudal y los SST efluente, conforme a la definición del tiempo medio de retención celular de Metcalf & Eddy (3ª ed., cap. 8). Si faltan esos datos se calcula solo con la purga y la app lo indica.

Cuando hay SRT calculado, el SRT es el parámetro de control y el F/M se informa como indicador de carga: una desviación del F/M no pasa de advertencia.

## Rangos de referencia

Todos los rangos están definidos en un único bloque al inicio del código (`var R`), del que leen las tarjetas, el diagnóstico, el gráfico y el informe.

| Parámetro | Óptimo | Tolerable |
|---|---|---|
| F/M (por kg SSVLM) | 0,05–0,15 | 0,03–0,20 |
| SRT (d) | 20–30 | 15–40 |
| TRH (h) | 18–36 | ≥ 12 |
| MLSS (mg/L) | 3.000–6.000 | 2.000–7.000 |
| Recirculación Qr/Q | 0,5–1,5 | |
| SOR a caudal medio (m³/m²·d) | ≤ 16,3 | ≤ 32,5 |
| SOR a caudal máximo | ≤ 32,5 | |
| SLR a caudal medio (kg/m²·d) | ≤ 117 | ≤ 164 |
| SLR a caudal máximo | ≤ 164 | |
| SVI (mL/g) | 50–150 | 30–200 |
| OD (mg/L) | 1,5–3,5 | ≥ 1,0 |
| pH | 6,5–8,0 | 6,0–9,0 |
| Temperatura (°C) | 15–30 | 8–35 |
| SST y DBO efluente (mg/L) | ≤ 30 | ≤ 60 |
| Remoción DBO / SST | ≥ 90 % / ≥ 85 % | ≥ 80 % / ≥ 70 % |
| Ocupación del manto | ≤ 25 % | ≤ 40 % |

Los rangos óptimos de F/M, SRT, TRH, MLSS y recirculación corresponden a la fila de aireación prolongada de la Tabla 10-5 de Metcalf & Eddy, Ingeniería de aguas residuales, 3ª edición (Volumen II, p. 626). Los del clarificador corresponden a la fila "sedimentación a continuación del proceso de aireación prolongada" de la Tabla 10-12 (p. 669), que el libro entrega en base horaria: carga de superficie 0,339–0,678 m³/m²·h a caudal medio y hasta 1,356 en punta; carga de sólidos 0,97–4,88 kg/m²·h a caudal medio y 6,83 en punta. La app los usa multiplicados por 24. En la edición en español, el límite inferior de la carga de superficie punta aparece impreso como "24,42", valor que no es coherente con el resto de la columna; la app usa solo el límite superior (1,356 m³/m²·h).

Las bandas tolerables y los rangos de SVI, OD, pH, temperatura, efluente, remoción y manto son criterio operacional de la app y no provienen de esas tablas.

## Validación de datos

Los valores fuera de límites físicos plausibles (por ejemplo pH fuera de 0–14 u OD negativo) no se usan en los cálculos y se informan como dato a revisar. También se advierte cuando el efluente supera al afluente, cuando el caudal máximo es menor que el promedio o cuando el manto supera la altura de la columna. Si los datos no permiten evaluar ningún parámetro, el estado es "Datos insuficientes".
