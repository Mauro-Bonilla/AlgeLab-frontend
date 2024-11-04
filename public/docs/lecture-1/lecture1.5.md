# 1.5 Bases y Dimensión

![Bases Vectoriales](agregar un gif manim)
*La animación muestra cómo diferentes bases pueden generar el mismo espacio: ilustra vectores linealmente independientes que generan todo un espacio y cómo diferentes conjuntos de vectores pueden generar el mismo espacio.*

## Las Bases como Herramientas Fundamentales

### Una Forma Natural de Ver Bases

Pensemos en el plano $\mathbb{R}^2$. Podemos describir cualquier punto usando:

**Base Estándar:**
- $e_1 = (1,0)$
- $e_2 = (0,1)$

Por ejemplo, el punto $(3,4)$ se escribe como:
$$(3,4) = 3(1,0) + 4(0,1)$$

**Otra Base:**
- $v_1 = (1,1)$
- $v_2 = (-1,1)$

El mismo punto $(3,4)$ se escribe como:
$$(3,4) = \frac{7}{2}(1,1) + \frac{-1}{2}(-1,1)$$

## Definiciones Formales

### Base de un Espacio Vectorial

> **Definición** Una base de $V$ es una lista de vectores en $V$ que es linealmente independiente y genera $V$.

### Criterio Fundamental para Bases

> **Teorema** Una lista $v_1,...,v_n$ de vectores en $V$ es una base de $V$ si y solo si cada $v \in V$ se puede escribir de forma única como:
> $$v = a_1v_1 + ... + a_nv_n$$
> donde $a_1,...,a_n \in \mathbb{F}$

### Dimensión

> **Definición** 
> - La dimensión de un espacio vectorial finito-dimensional es la longitud de cualquiera de sus bases
> - La dimensión de un espacio vectorial finito-dimensional $V$ se denota como $\dim V$

## Ejemplos Fundamentales

### En $\mathbb{R}^3$

1. **Base Estándar:**
   - $e_1 = (1,0,0)$
   - $e_2 = (0,1,0)$
   - $e_3 = (0,0,1)$

   Un vector $(2,3,-1)$ se escribe como:
   $$(2,3,-1) = 2(1,0,0) + 3(0,1,0) + (-1)(0,0,1)$$

2. **Base Alternativa:**
   - $v_1 = (1,1,0)$
   - $v_2 = (1,-1,0)$
   - $v_3 = (0,0,1)$

   El mismo vector se escribe como:
   $$(2,3,-1) = \frac{5}{2}(1,1,0) + \frac{-1}{2}(1,-1,0) + (-1)(0,0,1)$$

### En Espacios de Polinomios

1. **Base Estándar de $\mathcal{P}_2$:**
   - $1$
   - $x$
   - $x^2$

   El polinomio $p(x) = 3x^2 - 2x + 1$ se escribe como:
   $$p(x) = 3x^2 + (-2)x + 1$$

## Teoremas Fundamentales

### Existencia y Unicidad

> **Teorema** Todo espacio vectorial finito-dimensional tiene una base.

> **Teorema** Todas las bases de un espacio vectorial finito-dimensional tienen la misma longitud.

### Dimensión de Subespacios

> **Teorema** Si $U$ es subespacio de $V$, entonces:
> $$\dim U \leq \dim V$$

### Suma de Subespacios

> **Teorema 2.43:** Si $V_1$ y $V_2$ son subespacios de un espacio vectorial finito-dimensional, entonces:
> $$\dim(V_1 + V_2) = \dim V_1 + \dim V_2 - \dim(V_1 \cap V_2)$$

## Construcción de Bases

### A partir de un Sistema Generador
> **Teorema:** Todo sistema generador contiene una base.

**Proceso:**
1. Partir de vectores que generen $V$
2. Eliminar vectores redundantes
3. El resultado es una base

### A partir de Vectores Independientes
> **Teorema** Todo conjunto linealmente independiente puede extenderse a una base.

**Proceso:**
1. Partir de vectores independientes
2. Añadir vectores manteniendo independencia
3. Continuar hasta generar todo el espacio

---quiz---
{
"title": "Bases y Dimensión",
"questions": [
{
"id": "q2",
"type": "multiple",
"text": "Selecciona las afirmaciones verdaderas sobre bases",
"options": [
"Una base de un espacio vectorial de dimensión n tiene exactamente n vectores",
"Dos bases diferentes del mismo espacio tienen siempre la misma cantidad de vectores",
"Todo vector del espacio se puede escribir de forma única como combinación lineal de los vectores de una base",
"Los vectores de una base deben ser perpendiculares entre sí"
],
"correctAnswers": [
"Una base de un espacio vectorial de dimensión n tiene exactamente n vectores",
"Dos bases diferentes del mismo espacio tienen siempre la misma cantidad de vectores",
"Todo vector del espacio se puede escribir de forma única como combinación lineal de los vectores de una base"
],
"points": 100
}
]
}
---end quiz---

## Para Recordar
- Una base es una lista de vectores linealmente independiente que genera todo el espacio
- La dimensión es la longitud de cualquier base
- Todo vector se escribe de manera única como combinación lineal de los vectores de una base
- Las bases permiten coordenadas unívocas en el espacio vectorial

## Referencias
Axler, S. (2024). *Linear Algebra Done Right* (4th ed.). Springer. pp. 39-48.