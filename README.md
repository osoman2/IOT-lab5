# Laboratorio 5
Para esta pregunta se propone la transmisión de datos con REACT, NODE, AIOCOAP y simple_library. Dónde, REACT y NODE se comunican vía HTTP, NODE, AIOCOAP y simple_library con COAP. Donde AIOCOAP será el server , y NODE y simple_library serán sus cliente en el entorno COAP.

## Dependencias
- Tener implementado el Coap Server y el Coap Client indicado en el [repositorio](https://github.com/rvmosquera/IoT_lab5_coap)


## Instrucciones
Paara correr la emulación de la página Web, dentro de cada modulo Client Server se debe escribir:
>> npm install

### Client
El cliente se inicia con:
>> npm start


### Server
Referencias del paquete [coap para node.js](https://github.com/AlCalzone/node-coap-client)


El server se inicia con:
>> npm run dev

Cabe resaltar, que se debe hacer una modificación en el archivo Server/routes/routes.js, con la ip, el puerto y el nombre de la ruta establecida en el coap. En este caso quedando de la siguiente manera coap://{ip}:{port}/{test}
