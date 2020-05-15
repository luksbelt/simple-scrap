#!/bin/sh
mvn clean install
docker build .
