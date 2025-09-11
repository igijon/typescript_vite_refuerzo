# Crear proyecto

``bash 
npm install vite
``

``bash
npm create vite
``

 - nombre del proyecto
 - Proyecto Vanilla de TypeScript
``bash
npm install
``

``bash
npm run dev
``

# Estructura de directorios
- `node_modules`: dependencias de desarrollo
- `package.json`: 
  - `devDependencies`: dependencias de desarrollo
  - `scripts`: npm run dev, dev es la referencia al script dev y se convierte en una forma abreviada para ejecutar el script correspondiente.
- `public`: de momento sólo tiene el logo de vite
- `.gitignore`: fichero con lo que no quiero que tenga control de versiones
- `index.html`: cascarón de la aplicación
- `package-log.json`: se crea de forma automática por eficiencia para recrear el proyecto
- `tsconfig.json`: archivo de configuración que nos permite configurar cómo typescript queremos que trabaje en el proyecto. De momento lo dejaremos así.
- `src`: carpeta de source.