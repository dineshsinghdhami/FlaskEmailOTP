# 🔐 Flask Email OTP Verification

A simple Flask project to implement **Email OTP (One-Time Password) verification**.  
This project allows users to verify their email addresses securely using OTPs sent via email.

---

## 🚀 Features

- Generate secure OTPs for email verification  
- Send OTPs to user email using Flask-Mail  
- Verify OTP input by the user  
- Easy to integrate into existing Flask projects  
- Beginner-friendly and lightweight  

---

## 📂 Project Structure

```
flask_email_otp/
│── app.py              
│── templates/         
│    ├── index.html
│    ├── verify.html
│── static/             
│── venv/               
│── requirements.txt    
│── README.md           
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/dineshsinghdhami/flaskemailotp.git
cd flaskemailotp
```

### 2️⃣ Create a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate   # On macOS/Linux
venv\Scripts\activate      # On Windows
```

### 3️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```

### 4️⃣ Configure Email Settings
Edit `app.py` and configure the email settings:

```python
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'dummy-email@gmail.com'
app.config['MAIL_PASSWORD'] = 'dummy-email-password-or-app-password'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
```

> ⚠️ For Gmail, you may need to generate an **App Password** if using 2FA. Never commit your email credentials to GitHub.

### 5️⃣ Run the Application
```bash
python app.py
```
Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

---

## ✅ Example Usage

1. Enter your email in the input form.  
2. Click **Send OTP**.  
3. Check your email for the OTP.  
4. Enter the OTP in the verification form to confirm your email.

---

## 📦 Dependencies

```txt
Flask==3.0.3
Flask-Mail==0.9.1
```

Install via:
```bash
pip install -r requirements.txt
```

---

## 🛡️ Security Notes

- Never expose your email credentials in public repositories.  
- Use environment variables or secret managers in production.  
- OTPs expire after a short period to maintain security.

---

## 🤝 Contributing

Pull requests are welcome!  
Improve features, fix bugs, or enhance the UI.

---

## ©️ Copyright

© 2025 Dinesh Singh Dhami — All Rights Reserved.

This project is licensed for personal and educational use.

For commercial use or redistribution, please contact the owner.
