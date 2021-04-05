start:
	HTTPS=true SSL_CRT_FILE=./.cert/cert.pem SSL_KEY_FILE=./.cert/key.pem npm start && react-dotenv

build: 
	react-dotenv && npm run build

serve:
	react-dotenv && npm run serve