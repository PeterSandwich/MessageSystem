FROM ubuntu

MAINTAINER PJW 1120491948@qq.com
ENV GO_VERSION 1.12
ENV GO_DOWNLOAD_URL https://dl.google.com/go/go$GO_VERSION.linux-amd64.tar.gz
ENV GO_DOWNLOAD_SHA256 750a07fef8579ae4839458701f4df690e0b20b8bcce33b437e4df89c451b6f13


RUN apt-get update && apt-get install -y --no-install-recommends \
    g++ \
    gcc \
    libc6-dev \
    make \
    ca-certificates \
    curl \
    && rm -rf /var/lib/apt/lists/* \
    && curl  "$GO_DOWNLOAD_URL" -o golang.tar.gz \
    #&& echo "$GO_DOWNLOAD_SHA256 golang.tar.gz" | sha256sum -c - \
    && tar -C /usr/local -xzf golang.tar.gz \
    && rm golang.tar.gz


ENV GOPATH /go
ENV PATH $GOPATH/bin:/usr/local/go/bin:$PATH

RUN mkdir -p "$GOPATH/src" "$GOPATH/bin" && chmod -R 777 "$GOPATH"

WORKDIR $GOPATH

COPY . $GOPATH/src

EXPOSE 9988

CMD src/IM/IM

#WORKDIR /go/src/IM

#CMD ./IM