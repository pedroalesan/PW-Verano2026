# Comandos Git

## 1. git init

**i. Comando:** `git init`

**ii. Descripción:**
Inicializa un nuevo repositorio Git en el directorio actual, permitiendo comenzar el control de versiones de un proyecto.

**iii. Caso de uso:**
Se utiliza cuando se desea convertir una carpeta de proyecto en un repositorio Git.

**Ejemplo:**

```bash
git init
```

---

## 2. git clone

**i. Comando:** `git clone`

**ii. Descripción:**
Crea una copia local de un repositorio remoto.

**iii. Caso de uso:**
Se utiliza cuando se desea descargar un proyecto alojado en GitHub para trabajar en él localmente.

**Ejemplo:**

```bash
git clone https://github.com/usuario/proyecto.git
```

---

## 3. git status

**i. Comando:** `git status`

**ii. Descripción:**
Muestra el estado actual del repositorio, incluyendo archivos modificados, nuevos o preparados para commit.

**iii. Caso de uso:**
Permite verificar qué cambios existen antes de realizar un commit.

**Ejemplo:**

```bash
git status
```

---

## 4. git add

**i. Comando:** `git add`

**ii. Descripción:**
Agrega archivos al área de preparación (staging area).

**iii. Caso de uso:**
Se utiliza para seleccionar qué cambios serán incluidos en el próximo commit.

**Ejemplo:**

```bash
git add archivo.txt
```

---

## 5. git add .

**i. Comando:** `git add .`

**ii. Descripción:**
Agrega todos los archivos modificados al área de preparación.

**iii. Caso de uso:**
Útil cuando se desea incluir todos los cambios realizados en el proyecto.

**Ejemplo:**

```bash
git add .
```

---

## 6. git commit

**i. Comando:** `git commit`

**ii. Descripción:**
Guarda permanentemente los cambios preparados en el historial del repositorio.

**iii. Caso de uso:**
Se utiliza después de agregar cambios con `git add`.

**Ejemplo:**

```bash
git commit -m "Actualización del proyecto"
```

---

## 7. git log

**i. Comando:** `git log`

**ii. Descripción:**
Muestra el historial de commits realizados en el repositorio.

**iii. Caso de uso:**
Permite revisar cambios realizados y quién los realizó.

**Ejemplo:**

```bash
git log
```

---

## 8. git diff

**i. Comando:** `git diff`

**ii. Descripción:**
Muestra las diferencias entre versiones de archivos.

**iii. Caso de uso:**
Ayuda a revisar cambios antes de agregarlos al repositorio.

**Ejemplo:**

```bash
git diff
```

---

## 9. git branch

**i. Comando:** `git branch`

**ii. Descripción:**
Permite visualizar, crear o eliminar ramas.

**iii. Caso de uso:**
Se utiliza para trabajar en funcionalidades separadas sin afectar la rama principal.

**Ejemplo:**

```bash
git branch
```

---

## 10. git branch nombre-rama

**i. Comando:** `git branch desarrollo`

**ii. Descripción:**
Crea una nueva rama.

**iii. Caso de uso:**
Permite desarrollar nuevas características de forma independiente.

**Ejemplo:**

```bash
git branch desarrollo
```

---

## 11. git checkout

**i. Comando:** `git checkout`

**ii. Descripción:**
Cambia de una rama a otra.

**iii. Caso de uso:**
Se utiliza para moverse entre diferentes líneas de desarrollo.

**Ejemplo:**

```bash
git checkout desarrollo
```

---

## 12. git checkout -b

**i. Comando:** `git checkout -b`

**ii. Descripción:**
Crea una nueva rama y cambia automáticamente a ella.

**iii. Caso de uso:**
Ahorra tiempo al crear y acceder a una rama en un solo paso.

**Ejemplo:**

```bash
git checkout -b pruebas
```

---

## 13. git switch

**i. Comando:** `git switch`

**ii. Descripción:**
Permite cambiar entre ramas utilizando la sintaxis moderna de Git.

**iii. Caso de uso:**
Facilita la navegación entre ramas.

**Ejemplo:**

```bash
git switch desarrollo
```

---

## 14. git merge

**i. Comando:** `git merge`

**ii. Descripción:**
Fusiona los cambios de una rama con otra.

**iii. Caso de uso:**
Se utiliza para integrar una funcionalidad terminada en la rama principal.

**Ejemplo:**

```bash
git merge desarrollo
```

---

## 15. git remote -v

**i. Comando:** `git remote -v`

**ii. Descripción:**
Muestra los repositorios remotos configurados.

**iii. Caso de uso:**
Permite verificar la conexión con GitHub u otros servidores remotos.

**Ejemplo:**

```bash
git remote -v
```

---

## 16. git push

**i. Comando:** `git push`

**ii. Descripción:**
Envía los commits locales al repositorio remoto.

**iii. Caso de uso:**
Se utiliza para compartir cambios con otros colaboradores.

**Ejemplo:**

```bash
git push origin main
```

---

## 17. git pull

**i. Comando:** `git pull`

**ii. Descripción:**
Descarga e integra cambios desde el repositorio remoto.

**iii. Caso de uso:**
Mantiene actualizado el repositorio local.

**Ejemplo:**

```bash
git pull origin main
```

---

## 18. git fetch

**i. Comando:** `git fetch`

**ii. Descripción:**
Obtiene cambios del repositorio remoto sin fusionarlos.

**iii. Caso de uso:**
Permite revisar cambios antes de incorporarlos.

**Ejemplo:**

```bash
git fetch
```

---

## 19. git rm

**i. Comando:** `git rm`

**ii. Descripción:**
Elimina archivos del repositorio y registra la eliminación.

**iii. Caso de uso:**
Se utiliza cuando un archivo ya no es necesario en el proyecto.

**Ejemplo:**

```bash
git rm archivo.txt
```

---

## 20. git reset

**i. Comando:** `git reset`

**ii. Descripción:**
Revierte cambios o elimina archivos del área de preparación.

**iii. Caso de uso:**
Permite corregir errores antes de realizar un commit.

**Ejemplo:**

```bash
git reset archivo.txt
```
