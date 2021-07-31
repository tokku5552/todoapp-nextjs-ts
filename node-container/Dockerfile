FROM node:latest

# Define working directory
WORKDIR /workdir

# Firebase toolsのインストール
#RUN apt-get -y update && apt-get install -y sudo openjdk-11-jdk
RUN npm install -g firebase-tools

# aliasの設定
RUN echo 'alias ll="ls -l"' >> ~/.bashrc

# Expose ports
ENV HOST 0.0.0.0
# next.js localhost
EXPOSE 3000
EXPOSE 4000
EXPOSE 5000
EXPOSE 5001
EXPOSE 8080
# firebase login
EXPOSE 9005