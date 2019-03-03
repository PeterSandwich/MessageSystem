FROM ubuntu

MAINTAINER PJW 1120491948@qq.com

ENV GOPATH /go
ENV PATH $GOPATH/bin:/usr/local/go/bin:$PATH

RUN mkdir -p "$GOPATH/src" "$GOPATH/bin" && chmod -R 777 "$GOPATH"

WORKDIR $GOPATH

COPY .  $GOPATH/src

EXPOSE 9988

WORKDIR /go/src/IM

CMD ./IM