# Layout

Layout con un sidemenu y pagina de login

## Requerimientos

- Instalar [Node Js](https://nodejs.org/en/download/)

- Instalar [Ionic Cli](https://ionicframework.com/)

## Ejecutar localmente

Clonar el proyecto

```bash
  git clone https://github.com/diego-acetun/layout
```

Ir al directorio del proyecto

```bash
  cd layout
```

Instalar dependencias

```bash
  npm install
```

Iniciar servidor

```bash
  ionic serve
```

## División de directorios

### Routing

- app
  - rounting.module.ts

### routing.module.ts

En este fichero se configuran las páginas que se
deben mostrar en cada url visitada

### Components

- app
  - components
    - sidemenu
    - menu-button

#### sidemenu

Este es el sidemenu que se muestra en todas las páginas
a excepción de la página de login.

#### menu-button

Este es el boton que colapsa el menu y se utiliza en todas
las páginas a excepción de la pagina de login.

### Services

- app
  - services
    - toggle-menu
      - toggle-menu.service.ts
    - show-section-name
      - show-section-name.service.ts

#### toggle-menu.service.ts

En este fichero se maneja cuándo el menú debe estar o no
colapsado. Se utiliza en el fichero
[sidemenu.component.ts](https://github.com/diego-acetun/layout/blob/sidemenu/src/app/components/sidemenu/sidemenu.component.ts)

#### show-section-name.service.ts

En este fichero se maneja cuándo deben mostrarse los
nombres de las secciones del menu al pasar el mouse
encima de ellos
Se utiliza en el fichero
[sidemenu.component.ts](https://github.com/diego-acetun/layout/blob/sidemenu/src/app/components/sidemenu/sidemenu.component.ts)
