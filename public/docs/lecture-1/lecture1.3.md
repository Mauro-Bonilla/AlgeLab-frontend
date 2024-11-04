# 1.3 Combinaciones Lineales y Sistemas Generadores


### Combinaciones Lineales

> **Definición (Combinación Lineal):** 
> Sean $v_1,...,v_m$ vectores en un espacio vectorial $V$. Una combinación lineal es cualquier vector de la forma:
> $$a_1v_1 + a_2v_2 + ... + a_mv_m$$
> donde $a_1,...,a_m \in \mathbb{F}$ son escalares.

### Ejemplos Matemáticos
1. **En $\mathbb{R}^2$**
   - Vectores: $v_1=(1,0)$, $v_2=(0,1)$
   - El vector $(3,2)$ es la combinación:
   $$3(1,0) + 2(0,1)$$

2. **En $\mathbb{R}^3$**
   - Vectores: $v_1=(1,0,0)$, $v_2=(0,1,0)$, $v_3=(0,0,1)$
   - El vector $(2,3,-1)$ es la combinación:
   $$2(1,0,0) + 3(0,1,0) + (-1)(0,0,1)$$

***
![Vectores en múltiples dimensiones](/public/lectures-media/lecture1.3.gif)
***

### Sistema Generador

> **Definición (Sistema Generador):** 
> El conjunto de todas las combinaciones lineales posibles de los vectores $v_1,...,v_m$ se llama el generador de estos vectores:
> $$\text{Gen}(v_1,...,v_m) = \{a_1v_1 + ... + a_mv_m : a_1,...,a_m \in \mathbb{F}\}$$

### Ejemplos de Sistemas Generadores

1. **En el Plano**
   - Los vectores $(1,0)$ y $(0,1)$ generan todo $\mathbb{R}^2$
   - El vector $(1,0)$ solo genera una línea horizontal
   - Los vectores $(1,0)$ y $(1,1)$ generan todo $\mathbb{R}^2$

2. **En Polinomios**
   - $\{1, x, x^2\}$ genera todos los polinomios de grado ≤ 2
   - $\{1, x^2\}$ genera solo polinomios sin término lineal
   - $\{x-1, x+1\}$ genera todos los polinomios de grado ≤ 1

## Propiedades Fundamentales

### De Combinaciones Lineales

1. **El vector cero**
   - Siempre es combinación lineal (usando coeficientes cero)
   - $(0,0) = 0(1,0) + 0(0,1)$

2. **Múltiplos escalares**
   - Son combinaciones lineales con un solo coeficiente
   - $2v = 2v + 0w$

3. **Sumas de vectores**
   - Son combinaciones lineales con coeficientes 1
   - $v + w = 1v + 1w$

### De Sistemas Generadores

1. **Contiene el cero**
   - El vector cero siempre está en cualquier generador

2. **Cerrado bajo operaciones**
   - Suma de vectores del generador está en el generador
   - Múltiplos de vectores del generador están en el generador

3. **Es un subespacio**
   - Todo sistema generador es un subespacio vectorial

---quiz---
{
"title": "Combinaciones Lineales y Generadores",
"questions": [
{
"id": "q2",
"type": "multiple",
"text": "Seleccione las afirmaciones verdaderas",
"options": [
"El vector cero es combinación lineal de cualquier conjunto de vectores",
"Los escalares en una combinación lineal pueden ser negativos",
"Todo sistema generador contiene al vector cero",
"Las combinaciones lineales requieren al menos dos vectores"
],
"correctAnswers": [
"El vector cero es combinación lineal de cualquier conjunto de vectores",
"Los escalares en una combinación lineal pueden ser negativos",
"Todo sistema generador contiene al vector cero"
],
"points": 100
}
]
}
---end quiz---

## Para Recordar
- Una combinación lineal es una suma de múltiplos escalares
- El generador contiene todas las posibles combinaciones lineales
- El generador es el subespacio más pequeño que contiene los vectores
- El vector cero siempre está en el generador

## Referencias
Axler, S. (2024). *Linear Algebra Done Right* (4th ed.). Springer. pp. 28-36.