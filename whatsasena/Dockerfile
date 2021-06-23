FROM fusuf/whatsasena:latest

RUN git clone https://github.com/homeditor/homeditor /root/homeditor
WORKDIR /root/homeditor/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
