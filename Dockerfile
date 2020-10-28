FROM ruby:2.6.5
ENV LANG C.UTF-8

# 必要ライブラリをインストール
RUN apt-get update -qq && apt-get install -y postgresql-client build-essential libpq-dev

# node.jsとyarnをインストール
RUN apt-get update && apt-get install -y curl apt-transport-https wget && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && apt-get update -qq && apt-get install -y nodejs yarn

RUN rm -rf /var/lib/apt/lists/*

RUN gem install bundler

ENV APP_HOME /borobo

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
COPY Gemfile ${APP_HOME}/Gemfile
COPY Gemfile.lock ${APP_HOME}/Gemfile.lock
RUN bundle install
COPY . $APP_HOME

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
RUN export SECRET_KEY_BASE=`bundle exec rake secret`
ENTRYPOINT ["entrypoint.sh"]
# puma.sockを配置するディレクトリを作成
RUN mkdir -p tmp/sockets