#Importando Flask
from flask import Flask,redirect,url_for,render_template,request

app=Flask(__name__)
@app.route('/')

def inicio():
    return '<h1>Hola desde Flask Equipo Energy Grupo 39 Notificacion<h1>'

if __name__== '__main__':
    app.run()
    
