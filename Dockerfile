FROM 992119756375.dkr.ecr.ap-northeast-1.amazonaws.com/node:14.17.5

# Create app directory
WORKDIR /app
COPY .nuxt/. /app/.nuxt/
COPY node_modules/. /app/node_modules/
COPY package.json /app/

# global install & update
# RUN npm i
# RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "npm", "start" ]