# 1.3 Combinaciones Lineales y Sistemas Generadores

![Combinaciones lineales](agregar un gif manim)
*La animación muestra cómo diferentes vectores se pueden combinar linealmente: ilustra vectores siendo multiplicados por escalares y sumados entre sí, visualizando cómo ciertos vectores pueden generar todo un espacio mientras otros solo generan subespacios.*

## Introducción: Mezclas en una Planta de Producción

### El Caso de la Fábrica de Pinturas

Imagina que eres el jefe de producción en una fábrica de pinturas. Tienes tres colores base:
- 🔵 Azul Base = (100% azul, 0% amarillo, 0% rojo)
- 🟡 Amarillo Base = (0% azul, 100% amarillo, 0% rojo)
- 🔴 Rojo Base = (0% azul, 0% amarillo, 100% rojo)

Como productor, puedes:
1. **Ajustar cantidades** (usar más o menos de cada color base)
2. **Combinar colores** (crear nuevos tonos mezclando los básicos)

Por ejemplo:
- Para hacer verde necesitas:
  ```
  0.5 × (Azul Base) + 0.5 × (Amarillo Base) + 0 × (Rojo Base)
  ```
- Esto es una combinación lineal de los colores base.

### ¿Por qué es útil en la práctica?
1. Puedes crear **cualquier color** usando estos tres colores base
2. Puedes **reproducir** el mismo color consistentemente
3. Puedes **optimizar** el inventario almacenando solo colores base

## Las Matemáticas Detrás: Definiciones Formales

### Combinaciones Lineales

> **Definición (Combinación Lineal):** Sean $v_1,...,v_m$ vectores en un espacio vectorial $V$. Una combinación lineal de estos vectores es cualquier vector de la forma:
> $$a_1v_1 + a_2v_2 + ... + a_mv_m$$
> donde $a_1,...,a_m$ son escalares.

### Ejemplo con Pinturas

Para crear naranja:
- 50% Amarillo Base + 50% Rojo Base + 0% Azul Base
- En notación vectorial: $0.5v_1 + 0.5v_2 + 0v_3$

Para crear morado:
- 50% Rojo Base + 50% Azul Base + 0% Amarillo Base
- En notación vectorial: $0.5v_1 + 0v_2 + 0.5v_3$

### Sistema Generador

> **Definición (Sistema Generador):** El conjunto de todas las posibles combinaciones lineales de una lista de vectores $v_1,...,v_m$ se llama el generador de estos vectores, denotado como:
> $$\text{Gen}(v_1,...,v_m) = \{a_1v_1 + ... + a_mv_m : a_1,...,a_m \in \mathbb{F}\}$$

### En Términos del ejemplo
- El generador de nuestros tres colores base representa **todos los colores posibles** que podemos crear
- Si un color está en el generador, podemos fabricarlo
- Si no está en el generador, necesitaríamos otros colores base

## Para Recordar
- Las combinaciones lineales son formas de mezclar vectores base
- El sistema generador representa todas las posibles combinaciones
- Los coeficientes indican la proporción de cada vector base
- Las combinaciones lineales aparecen en muchos contextos diferentes

## Referencias
Axler, S. (2024). *Linear Algebra Done Right* (4th ed.). Springer. pp. 28-36.

---quiz---
{
"title": "Combinaciones Lineales y Sistemas Generadores",
"questions": [
{
"id": "q2",
"type": "multiple",
"text": "¿Cuáles de las siguientes afirmaciones son verdaderas sobre combinaciones lineales?",
"options": [
"Una combinación lineal siempre incluye al menos un vector",
"Los escalares en una combinación lineal pueden ser negativos",
"El vector cero es una combinación lineal de cualquier conjunto de vectores",
"Toda combinación lineal debe tener coeficientes positivos"
],
"correctAnswers": [
"Una combinación lineal siempre incluye al menos un vector",
"Los escalares en una combinación lineal pueden ser negativos",
"El vector cero es una combinación lineal de cualquier conjunto de vectores"
],
"points": 100,
"explanation": "Las combinaciones lineales pueden usar cualquier escalar real (positivo, negativo o cero). El vector cero siempre se puede obtener usando coeficientes cero."
}
]
}
---end quiz---