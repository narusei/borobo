FROM nginx:1.17.5
ENV LANG C.UTF-8

# インクルードするための/root/etc/nginx/conf.d/ディレクトリ内を削除して、その中にnginxの独自設定ファイルをコピー
RUN rm -f /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/webapp.conf

# ビルド完了後にnginxを起動する
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf