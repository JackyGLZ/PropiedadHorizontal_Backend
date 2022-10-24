#Importando Flask
import os
from flask import Flask,redirect,url_for,render_template,request
from twilio.rest import Client

app=Flask(__name__)

@app.route('/')
def inicio():
    twilio_sid = os.environ.get('TWILIO_ACCOUNT_SID')
    return 'SID == AC1ff03f491954368be973ffe395426e10', twilio_sid


@app.route('/sms')
def sms():
    account_sid = os.environ['TWILIO_ACCOUNT_SID']
    auth_token = os.environ['TWILIO_AUTH_TOKEN']
    client = Client(account_sid, auth_token)
    
    #Obteniendo las variables de la petición REQUEST 
    mensaje = request.args.get('mensaje') 
    destino = "+57" + request.args.get('telefono')

  
    message = client.messages.create(
        body= mensaje,
        from_='+12059418879', 
        to= destino
        )
    
    print(message.sid)
    return 'Mensaje enviado de manera exitosa'


if __name__== '__main__':
    app.run()