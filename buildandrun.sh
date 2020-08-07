docker build -f Dockerfile -t journalclient .
docker run -it --rm -p 3000:3000 sample:prod