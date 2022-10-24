#Importando Flask
import os
from flask import Flask,redirect,url_for,render_template,request
from twilio.rest import Client
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

app=Flask(__name__)

#Enviroment Twilio
@app.route('/')
def inicio():
    twilio_sid = os.environ.get('TWILIO_ACCOUNT_SID')
    return 'SID =', twilio_sid

#Servicio de envío de mensajes SMS con Twilio

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


#Servicio de envío de correo electrónico con Sengrid

@app.route('/email')
def email():
    message = Mail(
        from_email= request.args.get ('correo'),
        to_emails= request.args.get ('destinatario'),
        subject= request.args.get ('asunto'),
        html_content='<h1>envio correos equipo Energy Grupo 39</h1>')
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message) 
        print(response.status_code)
        print(response.body)
        print(response.headers)
        return ('El correo fue enviado de manera exitosa')
    except Exception as e:
        print(e.message)
        return 'el correo no se pudo enviar'
    

if __name__== '__main__':
    app.run()
    