# 1.2 Espacios y Subespacios Vectoriales

![Espacios vectoriales](manim_vector_spaces.gif)
*La animación ilustra cómo los vectores viven en espacios vectoriales: muestra flechas sumándose, multiplicándose por números, y cómo algunos conjuntos (como líneas por el origen) forman subespacios mientras otros (como círculos) no.*

## Introducción: Un Primer Vistazo a los Espacios Vectoriales

### La Historia de las Flechas y los Números

Imagina que estás jugando un videojuego donde tu personaje se mueve en todas direcciones. Cada movimiento puede verse como una flecha:
- ↗ Moverse en diagonal arriba-derecha
- → Moverse a la derecha
- ↑ Moverse hacia arriba

Estas flechas tienen dos características importantes:
1. **Puedes combinarlas (sumarlas)**:
   - Ir derecha y luego arriba = Ir en diagonal
   - $(3\text{ derecha}, 0\text{ arriba}) + (0\text{ derecha}, 2\text{ arriba}) = (3\text{ derecha}, 2\text{ arriba})$

2. **Puedes hacerlas más largas o más cortas (multiplicar por números)**:
   - Doble de rápido = Flecha dos veces más larga
   - Mitad de velocidad = Flecha mitad de larga
   - $2(3\text{ derecha}, 2\text{ arriba}) = (6\text{ derecha}, 4\text{ arriba})$

### Más Allá de las Flechas: Vectores en Todos Lados

Los vectores aparecen en muchas situaciones:

1. **En el clima:** 🌦️
   - Temperatura de una semana: $(23°, 25°, 24°, 22°, 26°, 25°, 23°)$
   - Suma: Combinar patrones climáticos
   - Multiplicar por 2: Doble intensidad de cambio

2. **En la economía:** 💰
   - Precios de productos: $(50\text{ pan}, 30\text{ leche}, 20\text{ huevos})$
   - Suma: Combinar carritos de compra
   - Multiplicar por 3: Comprar triple cantidad
***
## La Matemática Detrás: Definiciones Formales

> **Definición (Espacio Vectorial):** Un espacio vectorial sobre un campo $\mathbb{F}$ es un conjunto $V$ donde podemos:
> 1. Sumar elementos: $\mathbf{u} + \mathbf{v}$ está en $V$ para cualquier $\mathbf{u}, \mathbf{v}$ en $V$
> 2. Multiplicar por números: $c\mathbf{v}$ está en $V$ para cualquier número $c$ y vector $\mathbf{v}$

### Las Reglas del Juego (Axiomas)

Como en todo juego, hay reglas que se deben seguir:

1. **Reglas de la Suma:** 

Para todos los vectores $\mathbf{u}, \mathbf{v}, \mathbf{w} \in V$:

1. Conmutatividad:
   $$\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$$ 
   *(puedes sumar en cualquier orden)*

2. Asociatividad:
   $$(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$$ 
   *(puedes agrupar como quieras)*

3. Elemento neutro:
   $$\exists \mathbf{0} \text{ tal que } \mathbf{v} + \mathbf{0} = \mathbf{v}$$ 
   *(el cero no cambia nada)*

4. Elemento inverso:
   $$\exists (-\mathbf{v}) \text{ tal que } \mathbf{v} + (-\mathbf{v}) = \mathbf{0}$$ 
   *(cada vector tiene su opuesto)*

2. **Reglas de la Multiplicación por Escalares:**

Para todo vector $\mathbf{v} \in V$ y escalares $a,b \in \mathbb{F}$:

1. Identidad:
   $$1\mathbf{v} = \mathbf{v}$$ 
   *(multiplicar por 1 no cambia nada)*

2. Asociatividad:
   $$(ab)\mathbf{v} = a(b\mathbf{v})$$ 
   *(puedes multiplicar en cualquier orden)*

3. Distributividad sobre vectores:
   $$a(\mathbf{u} + \mathbf{v}) = a\mathbf{u} + a\mathbf{v}$$ 
   *(distribuye como números normales)*

4. Distributividad sobre escalares:
   $$(a + b)\mathbf{v} = a\mathbf{v} + b\mathbf{v}$$ 
   *(distribuye sobre la suma de escalares)*

Estas reglas nos aseguran que podemos:
- Sumar vectores en cualquier orden
- Multiplicar por números como esperaríamos
- Siempre regresar al origen (vector cero)
- Deshacer cualquier operación (usando inversos)

> **Nota**: Estas propiedades son muy similares a las que ya conoces de los números reales. La diferencia es que ahora trabajamos con vectores.

### Visualización en $\mathbb{R}^2$ (El Plano)

Imagina el plano cartesiano que conoces:
- Cada punto es un vector: $(x,y)$
- Suma: Sigue la regla del paralelogramo
- Multiplicación por escalar: 
  - Por positivo: Estira/encoge manteniendo dirección
  - Por negativo: Además invierte dirección
  - Por cero: Lleva al origen $(0,0)$
***
## Subespacios: Los Subconjuntos Especiales

### Intuición: ¿Qué es un Subespacio?

Piensa en un subespacio como un "mini espacio vectorial" dentro de uno más grande. Debe cumplir tres reglas simples:

1. **Contiene el 0** (el punto de inicio)
2. **Si contiene dos vectores, contiene su suma**
3. **Si contiene un vector, contiene todos sus múltiplos**

### Ejemplos Visuales:

1. **En el plano $\mathbb{R}^2$:**
   - ✅ Una línea recta por el origen
   - ✅ Todo el plano
   - ✅ Solo el punto $(0,0)$
   - ❌ Una línea que no pasa por $(0,0)$
   - ❌ Un círculo
   
   ¿Por qué el círculo no? ¡Si tomas un punto y lo multiplicas por 2, sale del círculo!

2. **En el espacio $\mathbb{R}^3$:**
   - ✅ Cualquier plano por el origen
   - ✅ Cualquier línea por el origen
   - ❌ Una esfera
   - ❌ Un cono sin la punta

### La Definición Formal

> **Definición (Subespacio):** Un subespacio $H$ de un espacio vectorial $V$ es un subconjunto de $V$ que cumple:
> 1. $\mathbf{0} \in H$
> 2. Si $\mathbf{u}, \mathbf{v} \in H$, entonces $\mathbf{u} + \mathbf{v} \in H$ (cerrado bajo suma)
> 3. Si $a \in \mathbb{F}$ y $\mathbf{v} \in H$, entonces $a\mathbf{v} \in H$ (cerrado bajo multiplicación escalar)

### Ejercicios Mentales

1. ¿Por qué una línea que no pasa por el origen no es un subespacio?
   - Toma dos puntos de la línea
   - Súmalos... ¿el resultado está en la línea?
   - Multiplica un punto por 0... ¿llegaste al origen?

2. ¿El conjunto de vectores con coordenadas positivas es un subespacio?
   - ¿Contiene al $\mathbf{0}$?
   - ¿Si multiplicas por -1 te quedas en el conjunto?

---quiz---
{
  "title": "Entendiendo Espacios y Subespacios",
  "questions": [
    {
      "id": "q1",
      "type": "single",
      "text": "En $\\mathbb{R}^2$, ¿cuál de los siguientes es un subespacio?",
      "options": [
        "Una línea recta que pasa por el origen",
        "Un círculo centrado en el origen",
        "Una parábola que pasa por el origen",
        "Un triángulo que incluye el origen"
      ],
      "correctAnswer": "Una línea recta que pasa por el origen",
      "points": 100,
      "explanation": "La línea recta es el único que cumple todas las propiedades: contiene el 0, la suma de dos puntos en la línea está en la línea, y cualquier múltiplo de un punto en la línea sigue en la línea."
    }
  ]
}
---end quiz---


## Para Recordar
- Los espacios vectoriales son conjuntos donde puedes sumar y multiplicar por números
- Los subespacios son subconjuntos que mantienen estas propiedades
- La clave para reconocer subespacios: ¿tiene el 0? ¿puedo sumar? ¿puedo multiplicar?

## Referencias
Axler, S. (2024). *Linear Algebra Done Right* (4th ed.). Springer. 