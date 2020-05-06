FROM ubuntu:18.04

RUN mkdir /server

WORKDIR /server

RUN apt -y update && apt -y upgrade
RUN apt -y install curl

RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN apt -y install nodejs
RUN apt -y install gcc g++ make
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" |  tee /etc/apt/sources.list.d/yarn.list
RUN apt -y  update && apt -y install yarn

COPY data /server/data
COPY modules /server/modules
COPY resources /server/resources
COPY altv-server /server/altv-server
COPY libnode.so.72 /server/libnode.so.72
COPY server.cfg /server/server.cfg
COPY start.sh /server/start.sh

RUN cd resources/myresource && yarn install
RUN cd resources/myresource && yarn build

RUN chmod +x /server/start.sh
RUN chmod +x /server/altv-server

CMD start.sh