# --help:
#
# usage 1:
# upload your enviorment file for prod and dev
# `vim .env; make put-dev`
# `vim .env;  make put-prod`
#
# usage 2:
# switch env to prod
# `make prod`
#
# usage 3:
# switch env to dev
# `make prod`
#
# reference:
# https://ithelp.ithome.com.tw/articles/10207173

file = /your/path/git_root/project/.env

config_map_prod = my-config-map-name.prod
config_map_dev = my-config-map-name.dev
tmp=/tmp/config_map

bak:
	cp -a $(file) $(file).bak

prod: bak
	kubectl get configmaps $(config_map_prod) -o json > $(tmp)
	cat $(tmp) | jq '.data' | jq -r '[ . as $$in | (paths(scalars), paths((. | length == 0)?)) | join(".") as $$key | $$key + "=" + ($$in | getpath($$key | split(".") | map((. | tonumber)? // .)) | tostring) ] | sort | .[]' > $(file)

dev: bak
	kubectl get configmaps $(config_map_dev) -o json > $(tmp)
	cat $(tmp) | jq '.data' | jq -r '[ . as $$in | (paths(scalars), paths((. | length == 0)?)) | join(".") as $$key | $$key + "=" + ($$in | getpath($$key | split(".") | map((. | tonumber)? // .)) | tostring) ] | sort | .[]' > $(file)

put-prod:
	kubectl create configmap $(config_map_prod) --from-env-file=$(file)

put-dev:
	kubectl create configmap $(config_map_dev) --from-env-file=$(file)



##### remake
# put:
# 	kubectl create configmap $(config_map) --from-env-file=$(file)
#
# get:
# 	kubectl get configmaps $(config_map_dev) -o json > $(tmp)
# 	cat $(tmp) | jq '.data' | jq -r '[ . as $$in | (paths(scalars), paths((. | length == 0)?)) | join(".") as $$key | $$key + "=" + ($$in | getpath($$key | split(".") | map((. | tonumber)? // .)) | tostring) ] | sort | .[]'
#
# check-env:
# ifndef env
# 	$(error ---===> env is undefined)
# endif
