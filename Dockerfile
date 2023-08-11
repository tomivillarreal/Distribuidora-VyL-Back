# # Utiliza una imagen base de Node.js
# FROM node:18

# # Copia los archivos de tu aplicación al contenedor
# COPY package*.json ./


# # Copia el resto de la aplicación
# COPY . .
# RUN npm install
# # Expone el puerto en el que escucha tu aplicación NestJS
# EXPOSE 3000

# # Comando para ejecutar tu aplicación
# CMD ["npm", "run", "start:prod"]




FROM node:18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
