# 1.4 Independencia Lineal

## Idea Intuitiva: Flechas en el Plano

Imagina un conjunto de flechas en un plano:

**Flechas Básicas:**
- ➡️ Flecha Horizontal (izquierda/derecha)
- ⬆️ Flecha Vertical (arriba/abajo)
- ↗️ Flecha Diagonal (diagonal)

Las primeras dos flechas son "linealmente independientes" porque:
- No puedes crear una usando la otra
- Cada una tiene una dirección única

La flecha diagonal es "linealmente dependiente" porque:
- Se puede crear combinando las otras dos
- Es redundante: ↗️ = ➡️ + ⬆️

## Definiciones Formales
***
### Independencia Lineal

> **Definición** 
> - Una lista $v_1,...,v_m$ de vectores en $V$ es **linealmente independiente** si la única elección de escalares $a_1,...,a_m \in \mathbb{F}$ que satisface
> $$a_1v_1 + ... + a_mv_m = 0$$
> es $a_1 = ... = a_m = 0$
> - La lista vacía ( ) es linealmente independiente
***
### Dependencia Lineal

> **Definición**
> - Una lista de vectores en $V$ es **linealmente dependiente** si no es linealmente independiente
> - De manera equivalente, una lista $v_1,...,v_m$ es linealmente dependiente si existen escalares $a_1,...,a_m \in \mathbb{F}$, no todos cero, tales que:
> $$a_1v_1 + ... + a_mv_m = 0$$
***

## Ejemplos

### En $\mathbb{R}^2$

1. **Lista Independiente:** 
   - $v_1 = (1,0)$, $v_2 = (0,1)$
   - Si $a_1(1,0) + a_2(0,1) = (0,0)$
   - Entonces $a_1 = a_2 = 0$

2. **Lista Dependiente:**
   - $v_1 = (1,0)$, $v_2 = (0,1)$, $v_3 = (1,1)$
   - $(1,1) = 1(1,0) + 1(0,1)$
   - $v_3$ es combinación de $v_1$ y $v_2$

***

### En $\mathbb{R}^3$

1. **Lista Independiente:**
   - $v_1 = (1,0,0)$
   - $v_2 = (0,1,0)$
   - $v_3 = (0,0,1)$

2. **Lista Dependiente:**
   - $v_1 = (1,0,0)$
   - $v_2 = (0,1,0)$
   - $v_3 = (1,1,0)$
   - Porque: $v_3 = v_1 + v_2$
***
### En Espacios de Polinomios
1. **Lista Independiente en $\mathcal{P}_2$:**
   - $p_1(x) = 1$
   - $p_2(x) = x$
   - $p_3(x) = x^2$

2. **Lista Dependiente en $\mathcal{P}_2$:**
   - $p_1(x) = 1$
   - $p_2(x) = x$
   - $p_3(x) = x^2$
   - $p_4(x) = 1 + x$
   - Porque: $p_4 = p_1 + p_2$
***
## El Lema Fundamental

> **Lema (Dependencia Lineal)**
> Si una lista $v_1,...,v_m$ es linealmente dependiente, entonces existe $k \in \{1,...,m\}$ tal que:
> - $v_k$ está en el generador de $\{v_1,...,v_{k-1}\}$
***
### Forma Intuitiva de verlo

- Si los vectores son dependientes
- Alguno puede escribirse usando los anteriores
- Ese vector es "redundante"
***

---quiz---
{
"title": "Independencia Lineal",
"questions": [
{
"id": "q1",
"type": "matching",
"text": "Relaciona cada lista con su clasificación",
"pairs": [
{
"left": "{(1,0), (0,1)}",
"right": "Linealmente independiente"
},
{
"left": "{(1,0), (2,0)}",
"right": "Linealmente dependiente"
},
{
"left": "{1, x, x²}",
"right": "Linealmente independiente"
},
{
"left": "{(1,1), (2,2)}",
"right": "Linealmente dependiente"
}
],
"points": 100
}
]
}
---end quiz---

## Para Recordar
- Independencia significa que ningún vector "sobra"
- Dependencia implica redundancia
- El número máximo de vectores independientes es la dimensión
- La lista vacía es independiente por definición

## Referencias
Axler, S. (2024). *Linear Algebra Done Right* (4th ed.). Springer. pp. 31-34.