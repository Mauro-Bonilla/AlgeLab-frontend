# 1.1 Introducción a Vectores

![Vectores en múltiples dimensiones](manim_animation_vectors.gif)
_La animación muestra la dualidad de los vectores: como puntos fijos y como flechas que representan cambios o movimientos._

## Vectores: Una Herramienta Versátil

Un vector es una herramienta matemática que puede entenderse de dos maneras:

1. **Como una Flecha**

   - Tiene longitud (qué tan larga es)
   - Tiene dirección (hacia dónde apunta)
   - Ejemplo: "Camina 3 pasos norte y 4 pasos este"

2. **Como una Lista de Números**
   - Cada número mide algo específico
   - El orden es importante
   - Ejemplo: Coordenadas GPS [latitud, longitud]

> **Definición Formal**: Un elemento de Rⁿ es una lista ordenada de n números reales que puede interpretarse de dos formas:
>
> 1. Como un punto x = (x₁,...,xₙ) que representa una posición
> 2. Como un vector x̄ = [x₁,...,xₙ] que representa un incremento o desplazamiento
>    (Hubbard & Hubbard, 2015, p.29)

### Del Mundo Físico al Mundo de los Datos

#### En el Espacio Físico

**R¹ (línea)**

```
[5] → cinco unidades a la derecha
```

- Como punto: kilómetro 5 de una carretera
- Como vector: avanzar 5 kilómetros

**R² (plano)**

```
[3] → tres unidades este
[4] → cuatro unidades norte
```

- Como punto: ubicación en un mapa
- Como vector: instrucciones de navegación

**R³ (espacio)**

```
[2] → dos unidades este
[3] → tres unidades norte
[5] → cinco unidades arriba
```

- Como punto: posición de un satélite
- Como vector: ruta de vuelo de un dron

#### En Espacios Abstractos (Rⁿ)

**Perfil de Streaming**

```
[8] ← acción
[3] ← comedia
[5] ← drama
[4] ← documental
```

- Como punto: preferencias actuales
- Como vector: cambio en gustos

**Datos Climáticos**

```
[25]   ← temperatura (°C)
[80]   ← humedad (%)
[10]   ← viento (km/h)
[1013] ← presión (hPa)
```

- Como punto: estado actual del clima
- Como vector: cambio climático en 24h

---quiz---
{
"title": "Entendiendo Vectores y sus Representaciones",
"questions": [
{
"id": "q3",
"type": "matching",
"text": "Relaciona cada dimensión con un ejemplo apropiado",
"pairs": [
{
"left": "R¹ (una dimensión)",
"right": "Distancia recorrida en una carretera"
},
{
"left": "R² (dos dimensiones)",
"right": "Ubicación en un mapa de la ciudad"
},
{
"left": "R³ (tres dimensiones)",
"right": "Posición de un dron en el aire"
},
{
"left": "R⁵ (cinco dimensiones)",
"right": "Datos Climaticos"
}
],
"points": 100
}
]
}
---end quiz---

## Para Recordar

- Los vectores son herramientas flexibles que funcionan en cualquier dimensión
- Pueden representar tanto estados (puntos) como cambios (flechas)
- El orden de los números importa y cada uno mide algo específico

## Referencias

Hubbard, J. H., & Hubbard, B. B. (2015). Vector Calculus, Linear Algebra, and Differential Forms: A Unified Approach (5th ed.). Matrix Editions.
