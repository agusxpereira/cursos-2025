
# Historia de la ciberseguridad

Algunos ataques famosos:

- [Virus Brain](#)
    El virus brain fue un malware(*como se le conoce actualmente a los virus*) antiguo que atacaba a diskets (se alojaba a nivel bios) y mostraba un mensaje, se transmitia copiando archivos de un disquet infectado a otro.

- [Morris worm](https://es.wikipedia.org/wiki/Gusano_Morris):
    Tuvo como resultado el establecimiento de un grupo de respuesta(CSIRTs).

- [Love letter virus]():    
    Era un mail que infectaba la computadora, al rededor del año 2000. Fue el primero en usar **social engineering**.
    > The LoveLetter attack was an example of social engineering. Social engineering is a manipulation technique that exploits human error to gain private information, access, or valuables


Una manera de mantener a la gente de nuestro trabajo "segura" es mantener constantes entrenamiento en seguridad. Nosotros, como fututos analistas en ciberseguridad se nos puede pedir que participemos o conduzcamos de estos entrenamientos.

Estos entrenamientos es común que se basen en como identificar ataques de ingenieria social. Especificamente *pishing*


Otro ataque famoso fue el ataque a Equifax. Que fue una de las filtraciones de informacion sensible de empresas. Informacion como numeros de tarjetas de credito, direcciones de casas, licencias de conducit, etc.

Este ataque se debio a multiples fallos en  la seguridad de la compañia Equifax. 


#### Social Enginerring
Una tecnica de manipulacion que explota el error humanos para ganar acceso a informacion privada

#### pishing
El uso de medios de comunicacion digitales para engañar a la gente a revelar informacion sensible o ejecutar *software malicioso*


## Common attacks and their effectiveness

En esta seccion aprendemos mas sobre ciberataques comunes. Nos familiarizamos con distintos metodos y las tacticas y tecnicas envolventes usadas por *threat users*, lo que nos va a ayudar a protejer mejor a las personas  y a las organizaciones.  

#### Pishing
Es el uso de comunicaciones digitales para engañar a las personas y llevarlas a revelar informacion sensible, o ejecutar software malicioso.

Algunos de los ataques más comúnes de **pishing** son:

- **Business Email Compromise (BEC)**: Un threat actor envia un email que parece ser de una fuente conocida, haciendo alguna peticion de informacion que parece legitima, para poder obtener una ventaja financiera.

- **Spear pishing**: Un ataque malicioso via email que apunta a un usuario especifico o grupo de usuarios. El  email parece ser originado de una fuente confiable.

- **Whaling**: Es una forma de spear pishing. Los threat actors apuntan a ejecutivos de la compañía para obtener acceso a informacion sensible.

- **Vishing**: La explotacion de comunicacion en base a voces electronicas para obtener informacion sensible o para personificar a una fuente conocida.

- **Smishing**: Es el uso de mensaje de texto con el objetivo de obtener informacion sensible engañando a los usuarios o haciendose pasar por una fuente conocida.


#### Malware:

Es software diseñado para dañar dispositivos o redes. Hay muchos tipos de malware. El objetivo primario del malware es obtener dinero, o en algunos casos, una ventaja de inteligencia que pueda ser usada en contra de una persona, organizacion o territorio. 

Algunos de los ataques de malware mas comunes son:

- **Viruses**: Código malicioso escrito para interferir con las operaciones de la computadora y causa daño a la informacion y software. Un virus necesita ser iniciado por un usuario (a threat actor), que transmite el virus via un algun elemento malicioso adjunto o descargado. Cuando alguien abre este archivo malicioso, el virus se oculta en otro directorio  del ahora sistema infectado. Cuando el archivo infectado es abierto, permite al virus insertar su propio codigo para dañar y/o destruir informacion en el sistema.

- **Worms**: Es malware que puede duplicarse y dispersarse a través del sistema por su propia cuenta. Contrario a un virus, un gusano no necesita ser descargado por un usuario. En cambio, este se auto-replica y se exparse desde un dispositivo ya infectado a otros en la misma red.

- **Ransomware**: Un ataque maliciosos donde el actor de amenaza encripta la informacion de una organizacion y demanda un pago para devolver el acceso.

- **Spyware**: Malware utilizado para recolectar y vender informacion privada sin consentimiento. El spyware puede ser usado para acceder a dispositivos. Esto permite a los threat actors recolectar informacion personal, como emails privados, textos, mensajes de voz e imagenes, asi como locations.

#### Social Engineering 
Es una tecnica de manipulacion que explota el error humano para ganar acceso  a informacion privada. El error humano generalmente es el resultado de confiar en alguien sin cuestionar. La mision del actor de amenaza actuando como un ingeniero social, es crear un ambiente de falsa confianza y mentir para explotar a tanta gente como sea posible.

Algunos de  los tipos más comunes de ingenieria social son:

- **Social media pishing**: un actor de amenaza colecta informacion detallada sobre su objetivo de redes sociales. Entonces inician el ataque.
- **Waterning hole attack**: Un threat actor ataca un sitio visitado por un grupo de personas.
- **USB baiting**: Un threat actor estrategicamente deja un malware en un USB para que lo encuentre un empleado y lo instale, infectando una red sin este saberlo.
- **Physical social enginering**: Un threat actor suplanta a un empleado, cliente, o vendedor(socio) para obtener acceso inautorizado a una locacion fisica.

#### Principios de la ingenieria social
Esta es altamente efectiva. Esto es porque generalmente la gente suele creer y estar condicionados a respetar la autoridad. El numero de ataques de ingenieria social está en aumento con cada nueva red social que permite al publico acceder a la informacion de las peronas. Lo que hace que compartir informacion peronal sea un riesgo.

Algunas de las razones son:

- **Authority**: Threat actor suplantan a individuos con poder. Esto es porque en general, han sido condicionados para respetar y seguir figuras de autoridad.

- **Intimidation**: Los acotres de amenaza usan tacticas de bullying. Lo que incuye persuadir e intimidar vinctimas para hacer lo que se les dice.

- **Consensus/Social proof**: Como la gente muchas veces hacen cosas que creen que mucha otra gente está haciendo, los acotores de amenaza usa la confianza de otros para prentender que son legitimos. Por ejemplo, un actor de amenaza puede intentar ganar acceso a informacion privada a través de un empleado, diciendole que otro empleado ya le dió acceso en el pasado.

- **Scarcity**: Una tactica usada para implicar que bienes o servicios tiene un suministro limitado.
- **Familiarity**: Los actores de amenaza establecen una coneccion emocional *falsa* con usuarios que pueden ser explotados.
- **Trust**: Los acotores de amenaza estableces una relacion emocional con usuarios que puede ser explotados *en el tiempo*. Usan esta relacion para desarrollar confianza y ganar informacion personal.
- **Urgency**: Un actor de amenaza persuade a otros de responder rapidamente y sin cuestionamiento.

#### Key takeaways
In this reading, you learned about some common attacks and their impacts. You also learned about social engineering and why it’s so successful. While this is only a brief introduction to attack types, you will have many opportunities throughout the program to further develop your understanding of how to identify and defend against cybersecurity attacks. 


## Upgraded Puglin

|Malware |
|:--------:|
|Definition: A software designed to harm devices or networks. Review various methods of attack|



|Virus|
|-----|
| A malware program that modifies other computer programs by inserting its own code to damage and/or destroy data |
|Example of: *Malware*|

| Worm |
|------|
| Malware that self-replicates, spreading across the network and infecting computers |
| Example of: *Malware* |


| Ransomware |
| ---------- |
| A malicious attack during which threat actors encrypt an organization's data and demand payment to restore access |
| Example of: *Malware* |

| Spyware |
|---------|
| Malicious software installed on a user’s computer without their permission, which is used to spy on and steal user data |
| Example of: Malware |

| Phishing |
|:--------:|
|The use of digital communications to trick people into revealing sensitive data or deploying malicious software|

| Spear phishing |
|----------------|
| A malicious email attack targeting a specific user or group of users that appears to originate from a trusted source |
| Example of: *Phishing* |

| Whaling |
|---------|
| A form of spear phishing during which threat actors target executives in order to gain access to sensitive data |
| Example of: *Phishing* |

| Business email compromise (BEC) |
| ------------------------------- |
| An attack in which a threat actor impersonates a known source to obtain a financial advantage |
| Example of: *Phishing* |

| Vishing |
| ------- |
| The exploitation of electronic voice communication to obtain sensitive information or to impersonate a known source |
| Example of: *Phishing* |


| Social engineering |
| :----------------: |
| A manipulation technique that exploits human error to gain unauthorized access to sensitive, private, and/or valuable data |

| Social media phishing |
| --------------------- |
| An attack in which a threat actor collects detailed information about their target on social media sites before initiating an attack |
| Example of: *Social engineering*  |

| Watering hole attack |
| -------------------- |
| An attack in which a threat actor compromises a website frequently visited by a specific group of users |
| Example of: *Social engineering*  |

| Physical social engineering |
| --------------------------- |
| An attack in which a threat actor impersonates an employee, customer, or vendor to obtain unauthorized access to a physical location |
| Example of: *Social engineering*  |

| USB baiting |
| ----------- |
| An attack in which a threat actor strategically leaves a malware USB stick for an employee to find and unknowingly infect a network |
| Example of: *Social engineering*  |



## Menciones y links

[CERT](https://es.wikipedia.org/wiki/Equipo_de_Respuesta_ante_Emergencias_Inform%C3%A1ticas)