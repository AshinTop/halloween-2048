[English](README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [日本語](README.ja.md)

# Pumpkin 2048 — Puzzle numérico de Halloween y pruebas de faroles

🎃 Desliza una pequeña calabaza, crea otra mayor y despierta el jardín farol a farol. **Pumpkin 2048** lleva el conocido tablero de 4×4 a una noche de Halloween. Puedes buscar una nueva puntuación en Classic Garden o resolver una Lantern Trial, donde importa tanto el número final como la casilla en la que termina.

**[Jugar ahora](https://halloween-2048.crazy3d.org/)** · [Ver los 12 juegos de Halloween](https://github.com/AshinTop/halloween-games) · [⭐ Dar una estrella en GitHub](https://github.com/AshinTop/halloween-2048)

El README está disponible en cinco idiomas. La **interfaz del juego solo ofrece inglés y chino simplificado**.

![Tablero de cuatro por cuatro de Pumpkin 2048 con calabazas ilustradas y faroles de progreso](docs/images/gameplay.jpg)

## Qué lo hace especial

- **Classic Garden:** reglas tradicionales de 2048, récord local y opción de seguir después de llegar a 2048.
- **Tres Lantern Trials:** posiciones iniciales fijas, una casilla objetivo y un límite de movimientos, sin nuevas fichas aleatorias.
- **Un Moon Swap por prueba:** intercambia dos fichas ocupadas de valores distintos a cambio de un movimiento. Las tres pruebas también tienen soluciones comprobadas sin usarlo.
- Ilustraciones SVG originales, faroles al alcanzar 128, 512, 1024 y 2048, sonidos sintetizados opcionales y respeto por la preferencia de movimiento reducido.
- Deshacer restaura tablero, puntos, movimientos y disponibilidad del hechizo. Hay controles táctiles, de ratón y de teclado.

## Cómo jugar

En **Classic Garden**, desliza todas las fichas en una dirección. Dos valores iguales se suman al encontrarse: dos 8 forman un 16. Una ficha recién combinada no vuelve a fusionarse en ese mismo movimiento. Tras un movimiento válido aparece un 2 o un 4; si nada cambia, no aparece otra ficha. Llegar a 2048 cumple el objetivo y permite continuar. Un tablero lleno solo termina la partida cuando ya no existe ningún movimiento legal.

En **Lantern Trials**, lee primero la franja del objetivo. Debes formar el número indicado sobre la casilla iluminada dentro del límite. No aparecen fichas nuevas. Para usar Moon Swap, selecciona el hechizo y dos fichas de valores diferentes. No puedes intercambiar una casilla vacía ni dos valores iguales. El intercambio consume un movimiento y deshacerlo devuelve el hechizo.

## Controles

| Acción | Cómo hacerlo |
| --- | --- |
| Deslizar | Flechas, gesto de deslizamiento o botones visibles |
| Deshacer | **U** o Undo |
| Moon Swap | Seleccionar el hechizo y dos fichas de valores distintos |
| Cancelar la selección del hechizo | **Esc** |
| Reiniciar, ayuda y sonido | Botones del juego; el teclado necesita foco dentro del iframe |

## Un poco de estrategia

Deja rutas para acercar números iguales en lugar de perseguir cualquier combinación inmediata. En las pruebas, observa la casilla objetivo antes de mover: un número grande en otro lugar no completa el reto. Moon Swap puede rescatar una idea, pero también gasta un paso. Usa Deshacer para comparar dos caminos sin tener que reiniciar cada vez que quieras experimentar.

## Progreso y enlaces de desafío

El progreso de Classic, las preferencias y los récords se guardan en el navegador si el almacenamiento está permitido. El historial de Deshacer conserva hasta **50 movimientos** durante la sesión de la página y no borra un récord ya conseguido. Abre la [prueba 1](https://halloween-2048.crazy3d.org/?trial=1), o cambia el parámetro a 2 o 3. Compartir envía el enlace y el resultado real; una prueba sin terminar no se presenta como una victoria. Si no hay acceso a compartir o al portapapeles, aparece texto para copiar.

## Capturas y presentación en vídeo

![Pumpkin 2048 en una ventana compacta con tablero, puntuación, pruebas y botones de dirección](docs/images/mobile.jpg)

Captura real dentro de un iframe compacto. Muestra la distribución en una ventana pequeña, no una prueba en un teléfono físico.

[Reproductor y transcripción](https://halloween-2048.crazy3d.org/intro.html) · [Descargar el MP4](docs/media/intro.mp4)

La **presentación de 24 segundos, sin sonido**, combina capturas reales y rótulos. Es un recorrido visual, no una partida grabada de forma continua ni una muestra de audio.

## Preguntas frecuentes

### ¿Puedo usar Moon Swap en Classic Garden?

No. Es exclusivo de Lantern Trials, se usa una vez por prueba y cuenta dentro de su presupuesto de movimientos.

### ¿Las tres pruebas tienen solución?

Sí. Sus recorridos completos sin hechizo están comprobados. Eso no garantiza que cualquier secuencia que elijas termine bien.

### ¿Puedo recuperar la partida en otro dispositivo?

No hay sincronización de cuentas. Los datos pertenecen al navegador y al origen del sitio; el bloqueo del almacenamiento no impide jugar.

## Ejecutar en local e insertar el juego

Sirve la raíz del repositorio mediante HTTP:

```sh
python3 -m http.server 4173
```

Abre **http://localhost:4173/**. No requiere compilación ni dependencias. Usa HTTP: `file://` puede bloquear los módulos JavaScript.

Ejecuta las comprobaciones incluidas con Node:

```sh
npm test
```

Las pruebas verifican fusiones únicas, movimientos sin efecto, generación determinista, derrotas, coste del hechizo, soluciones completas y lectura segura de enlaces y preferencias. No miden el rendimiento de teléfonos físicos.

```html
<iframe src="https://halloween-2048.crazy3d.org/?embed=1"
  title="Pumpkin 2048"
  style="display:block;width:100%;height:654px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

La referencia de escritorio es **1160×654 píxeles CSS**. También se revisaron ventanas de 390×650, 390×794 y 844×340. El tablero usa el espacio real del iframe; los paneles de ayuda y resultados pueden desplazarse internamente.

Consulta [EMBEDDING.md](EMBEDDING.md) para tamaño, almacenamiento, foco y permisos. Mide la altura restante después de la barra del sitio anfitrión.

## Más pequeñas aventuras de Halloween

- **[Pumpkin Shift](https://halloween-pumpkin-shift.crazy3d.org/)** · [Código](https://github.com/AshinTop/halloween-pumpkin-shift) — Desliza números por 12 habitaciones con movimientos lunares limitados.
- **[Witch’s Candy Blocks](https://halloween-block-blast.crazy3d.org/)** · [Código](https://github.com/AshinTop/halloween-block-blast) — Encaja dulces en un tablero de 8×8 y completa pedidos de pociones.
- **[Ghost Lanterns 3D](https://halloween-3d.crazy3d.org/)** · [Código](https://github.com/AshinTop/halloween-3d) — Enciende un jardín de calabazas con lógica Lights Out y vínculos de almas.
- **[Trick-or-Treat TriPeaks](https://halloween-tripeaks.crazy3d.org/)** · [Código](https://github.com/AshinTop/halloween-tripeaks) — Encadena cartas de valores consecutivos en ocho rescates.

## Créditos y apoyo

Creado para **AshinTop** y **Midnight Candy Club** con diseño, programación y revisión dirigidos por personas y asistidos por IA. Arte y sonidos sintetizados originales del proyecto. No necesita cuenta remota; el alojamiento puede añadir scripts o registros de solicitudes.

¿Te ha gustado? **[Dale una estrella en GitHub](https://github.com/AshinTop/halloween-2048)**. Para informar de errores, incluye navegador, tamaño del iframe, enlace y pasos para reproducirlos.
