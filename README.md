
# Ejercicio:
Analizar el código provisto en https://stackblitz.com/edit/component-errors-everywhere-2bgy9u?file=01-basic-errors  
Indicar errores y proponer mejoras.

---

## 🐞 Bugs y ⚠️ Gaps:

### 🐞 **Bugs** (Errores funcionales, de compilación o de lógica)

- ❌ **@Output mal definido y no inicializado**  
  `@Output() onDelete: EventEmitter;`  
  → Falta indicar el tipo (`EventEmitter<string>`, por ejemplo) y falta instanciarlo.  
  ✅ Debería ser: `@Output() onDelete = new EventEmitter<string>();`

- ❌ **Uso incorrecto de `template`**  
  `template: './my-component.html'`  
  → `template` espera una cadena HTML inline. Para archivos externos, debe usarse `templateUrl`.  
  ✅ Corregir por: `templateUrl: './my-component.html'`

- ❌ **Inyección de servicio incompleta**  
  El constructor declara `myService: MyService` pero no lo almacena en una propiedad, aunque luego lo utiliza como `this.myService`.  
  ✅ Corregir por: `constructor(private myService: MyService) { ... }`

- ❌ **Comparación inválida entre number y string**  
  `if (this.label === '')`  
  → `label` es `number`, nunca será igual a `''`.  
  ✅ Considerar: `if (this.label == null)`

- ❌ **Uso erróneo de HostListener**  
  `@HostListener('class') onMouseOver()`  
  → `'class'` no es un evento válido.  
  ✅ Debería ser: `@HostListener('mouseover')`

- ❌ **Manejo incorrecto del @Output en `clickDeleteButton`**  
  `this.onDelete = id;`  
  → Sobrescribe el `EventEmitter`.  
  ✅ Correcto sería: `this.onDelete.emit(id);`

- ❌ **Uso de `renderer` sin declarar**  
  `this.renderer.setStyle(...)`  
  → No se ha inyectado `Renderer2`.  
  ✅ Solución: inyectar `private renderer: Renderer2` en el constructor.

- ❌ **Mutación directa del input en `processData()`**  
  `oneDataChanged = oneData` y luego se modifica `oneDataChanged`.  
  → Esto modifica el objeto original de `originalData`.  
  ✅ Se debe clonar el objeto: `const oneDataChanged = {...oneData};`

---

### ⚠️ **Gaps** (Malas prácticas, problemas de diseño, mejoras sugeridas)

- ⚠️ **Campos sin tipo explícito**  
  `someData` y `parsedData` no tienen tipado.  
  ✅ Se recomienda declarar como `any[]`, `MyModel[]` u otro tipo definido.

- ⚠️ **`parsedData` no se usa en ninguna parte del código.**  
  → Indicativo de lógica incompleta o código residual.

- ⚠️ **Llamadas a métodos en orden incorrecto en el constructor**  
  `processData(this.someData)` se ejecuta antes de que `someData` se inicialice en `subscribeToData()`.

- ⚠️ **`processData()` retorna un array procesado, pero no se usa el resultado**  
  ✅ Debería hacerse: `this.parsedData = this.processData(this.someData);`

- ⚠️ **`notififyIdChanges` contiene un typo**  
  → Debería ser `notifyIdChanges`

- ⚠️ **Naming innecesariamente verboso o impreciso**  
  `updateIdWhenIsPossible` puede simplificarse y expresarse con mayor precisión, como `updateIdIfChanged`.

- ⚠️ **`changeColour()` está acoplado a `ElementRef`, lo cual puede ser riesgoso**  
  → Considerar encapsular esto dentro de un componente con estilo CSS controlado, o usar `@HostBinding` y clases condicionales.

---

## ✅ Mejoras:

En el código del repositorio se propone las mejoras siguientes:

- **Separación de responsabilidades mediante servicios dedicados:**
  - ✅ *Data Service*: se encarga exclusivamente de interactuar con la fuente de datos (API o mock).
  - ✅ *State Service*: gestiona el estado global/local y orquesta las llamadas al `DataService`.

- **Desacoplamiento del componente principal:**
  - ✅ *Componente de listado* separado del *componente item*. Esto promueve reutilización y testeo independiente.

- **Interacciones UI manejadas desde CSS:**
  - ✅ El hover se resuelve por medio de estilos CSS del componente atomizado (item), eliminando lógica innecesaria en el `HostListener`.

- **Uso de `computed()` y `signal()` (Angular Signals API):**
  - ✅ Mejora la reactividad, evita el uso de `BehaviorSubject`/`Subscription` para la mayoría de los casos simples.
  - ✅ El state fluye de forma declarativa y reactiva desde los servicios hacia los componentes, mejorando claridad y testabilidad.

---

Este enfoque de arquitectura atomizada, reactiva y separada por responsabilidades permite escalar la aplicación con una base sólida, manteniendo bajo acoplamiento y alta cohesión entre módulos.

