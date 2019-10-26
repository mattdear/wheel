from flask import Flask, request
import requests

app = Flask(__name__)

@app.route("/")
def hello():
	latitude = request.args.get("lan",default=False);
	longitude = request.args.get("lon",default=False);
	radius = request.args.get("radius",default=False);
	location_type = request.args.get("type",default=False);
	if latitude == False or longitude == False or radius == False or location_type == False:
		return "[\"Missing parameters\"]"
	else:
		
	return "Hello World!"

if __name__ == "__main__":
	app.run()
