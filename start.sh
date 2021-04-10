#!/usr/bin/env bash

sudo docker build -t dawe/b201api .
sudo docker run -p 8080:8080 -d dawe/b201api