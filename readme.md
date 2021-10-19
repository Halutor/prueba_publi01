¿Por qué evitar los callbacks en las llamadas asíncronas?
Tenemos que entender que incluso si configuramos el retraso a 0ms no significa que el callback 
se ejecutará inmediatamente. Recordemos que un callback se añadirá al loop de eventos y debe 
esperar un turno.

¿Qué es una promesa?
Una promesa es un objeto que representa el resultado de una operación asíncrona. Este resultado podría estar disponible ahora o en el futuro. Las promesas se basan en callbacks pero añaden azúcar para un mejor manejo y sintaxis.

¿Qué es el callback hell?
No son recomendables porque podemos terminar con un código anidado dificil de entender y hacer
mantenimiento.