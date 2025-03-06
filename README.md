> [!NOTE]  
> Este proyecto es multifuncional y permite la gestión de varias herramientas dentro de un sistema interactivo, como un generador de código QR y un conversor de imágenes, además de ser compatible con Firebase para la autenticación de usuarios.

> [!TIP]  
> Asegúrate de tener configuradas las credenciales de Firebase correctamente en el archivo `firebaseInit.js` para evitar problemas de autenticación.

> [!IMPORTANT]  
> Es necesario que configures adecuadamente Firebase y las rutas de las secciones para asegurar el correcto funcionamiento del Dashboard y las demás herramientas del proyecto.

> [!CAUTION]  
> Si no gestionas correctamente el cierre de sesión, podrías comprometer la seguridad del usuario, por lo que es importante implementar la validación de cierre de sesión de forma adecuada.

---

```markdown
# Proyecto Web Innovacentro

Este es un proyecto web multifuncional diseñado para ofrecer diversas herramientas y secciones para los usuarios, incluyendo la generación de códigos QR, la conversión de imágenes, un **Dashboard** de administración, y otras funcionalidades como **Cashback**, **Nuevos productos**, y **Ofertas**.

## Características

- **Dashboard:** Panel principal de administración donde se gestionan diversas secciones y funcionalidades.
- **Generador de Código QR:** Permite crear códigos QR a partir de texto o URLs.
- **Conversor de Imágenes:** Convierte imágenes entre diferentes formatos (por ejemplo, PNG a JPEG) y las empaqueta en un archivo ZIP para su descarga.
- **Autenticación con Firebase:** Sistema de registro, inicio y cierre de sesión de usuarios mediante Firebase.
- **Menú Interactivo:** Navegación fácil y accesible a través de un menú desplegable con iconos representativos para cada sección.
- **Secciones del Dashboard:** Incluye opciones de **Cashback**, **Nuevos Productos**, y **Ofertas**.

## Funcionalidades

### Dashboard
El **Dashboard** es el panel central donde se gestionan las principales funcionalidades del sistema. El panel incluye enlaces rápidos a las diferentes secciones de la plataforma.

- **Cashback:** Permite visualizar y administrar las promociones de cashback ofrecidas por la plataforma.
- **Nuevos Productos:** Gestión de los productos más recientes que se han agregado a la plataforma.
- **Ofertas:** Visualización y gestión de las ofertas activas disponibles para los usuarios.

#### Cómo Usar:
1. Accede al **Dashboard** desde el menú principal.
2. Desde el Dashboard, podrás gestionar cada una de las secciones: **Cashback**, **Nuevos**, **Ofertas**, entre otras.

### Generador de Código QR
Esta herramienta permite a los usuarios generar códigos QR a partir de texto o URLs. Los usuarios pueden ver el código generado en un canvas y descargarlo en formatos **PNG**, **JPG** o **SVG**.

#### Cómo Usarlo:
1. Ingresa un texto o URL en el campo de entrada.
2. Haz clic en el botón **Generar Código QR**.
3. El código QR será mostrado en un canvas, y se ofrecerán opciones para descargarlo en diferentes formatos.

### Conversor de Imágenes
Esta herramienta permite a los usuarios cargar varias imágenes y convertirlas entre diferentes formatos (por ejemplo, PNG a JPEG). Las imágenes convertidas se empaquetan en un archivo ZIP y están listas para su descarga.

#### Cómo Usarlo:
1. Selecciona varias imágenes desde tu dispositivo.
2. Haz clic en el botón **Convertir y Descargar** para obtener un archivo ZIP con las imágenes convertidas.

### Autenticación con Firebase
El proyecto implementa un sistema de autenticación utilizando Firebase. Los usuarios pueden registrarse, iniciar sesión y cerrar sesión utilizando su correo electrónico y contraseña.

#### Cómo Usarlo:
1. Los usuarios pueden registrarse utilizando su correo electrónico y contraseña.
2. Una vez registrados, pueden iniciar sesión en el sistema.
3. La sesión puede ser cerrada haciendo clic en el botón de **Cerrar Sesión**.

### Menú Interactivo y Pie de Página
El proyecto tiene un menú interactivo con enlaces a las herramientas principales y un pie de página con información de contacto.

- **Enlaces del Menú:** Dashboard, Cashback, Nuevos, Ofertas, Generar QR, Web to JPEG, etc.
- **Pie de Página:** Incluye información de contacto como número de teléfono, correo electrónico y enlaces de WhatsApp y correo.

## Instalación

### Requisitos

- Un navegador web moderno.
- Conexión a Internet.
- Cuenta en Firebase para la autenticación.

### Instrucciones

1. Clona este repositorio a tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/innovacentro.git
   ```

2. Abre el archivo `index.html` en tu navegador o sirve el proyecto usando un servidor local.

3. Para habilitar la funcionalidad de autenticación, asegúrate de configurar Firebase correctamente en el archivo `firebaseInit.js`.

### Dependencias

- **Firebase:** Para la autenticación de usuarios.
- **JSZip y FileSaver.js:** Para la creación de archivos ZIP y la descarga de imágenes.
- **QRCode.js:** Para la generación de códigos QR.
- **Bootstrap:** Para el diseño responsivo de la página.

## Estructura de Archivos

- **index.html**: Página principal del proyecto.
- **qr-code.html**: Página para la generación de códigos QR.
- **imagen-converter.html**: Página para la conversión de imágenes.
- **dashboard.html**: Página para el Dashboard de administración.
- **style.css**: Estilos generales para el diseño de la página.
- **script/firebaseInit.js**: Configuración de Firebase para la autenticación de usuarios.
- **script/menu.js**: Lógica para el menú interactivo de la aplicación.
- **script/imagen-converter.js**: Lógica para la conversión de imágenes.
- **script/dashboard.js**: Lógica y funciones del Dashboard y sus secciones (Cashback, Nuevos, Ofertas).

## Contribución

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

> Si tienes algún problema o sugerencia, no dudes en abrir un *issue* en el repositorio.
```
