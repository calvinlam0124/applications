SCRIPT_PATH=$(dirname $(readlink -f "$0"))
source $SCRIPT_PATH/setting.ini
curl ${CURL_ENDPOINT}/hello