from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import smtplib
import os
from fastapi.responses import JSONResponse
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://portfolio-harshaans-projects.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/contact')
async def contact(name: str = Form(...), email: str = Form(...), message: str = Form(...)):
    sender_email = os.getenv('SMTP_SENDER')
    sender_password = os.getenv('SMTP_PASSWORD')
    receiver_email = os.getenv('RECEIVER_EMAIL')

    subject = f'New Message from {name}'
    body = f'From: {name} <{email}>\n\n{message}'
    msg = f'Subject: {subject}\n\n{body}'

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(sender_email, sender_password)
            smtp.sendmail(sender_email, receiver_email, msg)
        return JSONResponse(content={'message': 'Email sent successfully'})
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
    