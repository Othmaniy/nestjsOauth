FROM node:20
WORKDIR /app
COPY . .
ENV PORT=3000
EXPOSE 3000
RUN npm install
CMD ["npm","run","start:dev"]