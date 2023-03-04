# Pre_curso
Este es un repositorio de prueba, para resolver ejercicios de cursos 

-Se clono desde el github usando git


comandos para git 

crear credenciales en git

--
git config --global user.email "correoelectronico"
--
git config --global user.name "nombre de usuario"


comandos basicos

--mkdir "nombre de la carpeta"  ... creas una carpeta para tu repositorio

-- dentro de la carpeta que creaste puedes crear un archivo con el comando "touch" y al final del nombre del archivo su extencion

--con el comando "code" y el nombre del archivo abres el archivo 

--para crear un repositorio local comando
 	git init

-- si quiero agregar un archivo al siguiente commit por comando git 
	git add "elnombre del archivo.la extencion"

-- si quiero agregar todos los archivos al siguiente commit seria el siguiente comando 
	git add .

-- el comando apra saber el estado de tu carpeta 
	git status

-- para realizar el commit de tu proyecto 
	git commit -m 'algun texto referente al commit'

-- para cunsultar cuantos y cuales commit tenemos en el repositorio local
	git log


comandos git cuando tenemos un repositorio en el github

--para clonar un repositorio 
	git clone

-- comando para que el visual studio code se habra y solo trabeje el repositorio 
	code .

-- sincronizar nuestro repositorio local con el github
	git push origin main   ... la palabra main es la rama a donde va tu repositorio tiene que ser igual al de tu direccion que aparece en el bash


si tu tienes u nrepositorio limpio recien creado tiene que primero sincronizar el git con el github

-- segir los pasos que te parece en el github cuando esta en 0