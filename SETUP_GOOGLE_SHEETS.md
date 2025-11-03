# Configuración de Google Sheets para AmigIA Beta Signups

## Paso 1: Crear Google Sheet

1. Abre [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nómbrala: **"AmigIA Beta Signups"**
4. En la primera fila, agrega estos encabezados:
   - A1: `Timestamp`
   - B1: `Nombre`
   - C1: `Email`
   - D1: `User Agent`

## Paso 2: Crear Apps Script

1. En tu Google Sheet, ve a **Extensiones** → **Apps Script**
2. Borra todo el código que aparece por defecto
3. Pega este código:

```javascript
function doPost(e) {
  try {
    // Obtener la hoja activa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parsear los datos recibidos
    var data = JSON.parse(e.postData.contents);

    // Obtener timestamp
    var timestamp = new Date();

    // Agregar nueva fila con los datos
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.userAgent || 'N/A'
    ]);

    // Respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': true,
        'message': 'Registro guardado correctamente'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Respuesta de error
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': false,
        'message': 'Error: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función de test (opcional)
function testPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        userAgent: "Test Browser"
      })
    }
  };

  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Guarda el proyecto con el nombre **"AmigIA Beta API"**

## Paso 3: Desplegar como Web App

1. Haz clic en **Implementar** (arriba a la derecha) → **Nueva implementación**
2. Haz clic en el ícono de engranaje junto a "Seleccionar tipo"
3. Selecciona **"Aplicación web"**
4. Configura así:
   - **Descripción**: "AmigIA Beta Signup API"
   - **Ejecutar como**: "Yo (tu email)"
   - **Quién tiene acceso**: "Cualquier persona"
5. Haz clic en **Implementar**
6. Autoriza los permisos (te pedirá acceso a Google Sheets)
7. **COPIA LA URL** que te da (algo como: `https://script.google.com/macros/s/AKfycby.../exec`)

## Paso 4: Configurar la Landing

Agrega la URL copiada en el archivo `.env` de tu proyecto:

```bash
PUBLIC_SHEETS_API_URL=https://script.google.com/macros/s/TU_URL_AQUI/exec
```

## Paso 5: Formatear la hoja (Opcional pero recomendado)

Para que se vea bonita:

1. Selecciona la fila 1 (encabezados)
2. Hazla en **negrita** y con **fondo de color**
3. Congela la fila 1: **Ver** → **Congelar** → **1 fila**
4. Ajusta el ancho de las columnas
5. Ordena por fecha descendente para ver los más recientes primero

## Testing

Para probar que funciona:
1. Usa la función `testPost()` en Apps Script
2. Ve a **Ejecución** → **Ejecutar**
3. Revisa que se agregue una fila en tu hoja

## Notas de Seguridad

- ✅ **No expone datos sensibles**: Solo recibe POST requests
- ✅ **No requiere autenticación**: Perfecto para formularios públicos
- ✅ **Ilimitado y gratis**: Sin límites de registros
- ⚠️ **No validar emails duplicados**: Si querés evitar duplicados, agregá validación en el script

## Troubleshooting

Si no funciona:
1. Verifica que el despliegue sea "Cualquier persona" en permisos
2. Asegúrate de usar la URL `/exec` (no `/dev`)
3. Revisa los logs en Apps Script: **Ver** → **Registros de ejecución**
