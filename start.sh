ssh root@house-map.cn 'docker stop movie-ui';
ssh root@house-map.cn 'docker rm movie-ui';
ssh root@house-map.cn 'docker run -p 9700:80 --restart=always --name movie-ui -d $IMAGE_NAME';
ssh root@house-map.cn 'docker logs movie-ui'
