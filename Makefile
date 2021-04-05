start:
	HTTPS=true SSL_CRT_FILE=./.cert/cert.pem SSL_KEY_FILE=./.cert/key.pem npm start 

build: 
	npm run build

serve:
	npm run serve