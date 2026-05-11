# Manual de Capacitación Técnica DeUna — Frame Banking & PTS

Este sitio estático es un manual interno para capacitar desarrolladores en Frame Banking / PTS dentro del contexto DeUna.

## Enfoque

- La teoría queda como prelectura breve.
- La sesión prioriza práctica, discusión técnica y evidencia RUN.
- El objetivo es que el developer pueda explicar, configurar, invocar y diagnosticar servicios financieros digitales.
- El material no copia assets del sitio público de DeUna; usa una estética inspirada en su tono simple, móvil, comercial y de beneficios.

## Ruta recomendada

1. Prelectura: modelo mental mínimo.
2. Casos DeUna: CNB Depósito, CNB Retiro, Merchant Payment y UTILS.
3. Configuración: DFS, operación, canal, agreement, límites, acumuladores, posting.
4. Build: Designer e integraciones custom.
5. Ejecución: Postman y API Enablement.
6. RUN: logs, trazas, IDs, respuesta, errores y checklist.
7. Labs: aprender haciendo.

## Criterio editorial

El contenido se apoya en documentación y publishers revisados. Cuando un dato exacto no esté confirmado, debe presentarse como punto por validar.

## Seguridad

No guardar tokens Bearer reales, JWT, credenciales, secretos ni datos sensibles en documentación, repositorios o capturas.

## Cambios v4

Se incorporó un módulo de lectura de publishers/productos DeUna basado en los nuevos archivos entregados:
Mambu, transferencia interna, límites custom, servicios digitales custom y operaciones Mambu débito/crédito.

Se generó un análisis sanitizado en `recursos/analisis_publishers_deuna_sanitizado.json`.
