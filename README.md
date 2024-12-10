# Project Setup Instructions

## Setting Up the Backend
### Create a virtual environment (only once):
   - On Linux/macOS:
     ```bash
     python -m venv venv
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     python -m venv venv
     .\venv\Scripts\activate
     ```

 Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

Apply migrations to set up the database:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

Run backend server:
   ```bash
   python manage.py runserver
   ```

Access the project:
   - Backend: [http://localhost:8000/](http://localhost:8000/)
   - Admin panel: [http://localhost:8000/admin/](http://localhost:8000/admin/)

---

### API Endpoints

1. The main API endpoint to access tasks:
   ```
   http://localhost:8000/api/v1/tasks/
   ```

2. Example Usage:
   - Use tools like Postman, Curl, or a fetch function to interact with this API.
   - Ensure your front-end connects to the `/api/v1/tasks/` endpoint correctly.

---

### Design Reference
- Follow the design available at:
  [Figma Design URL](https://www.figma.com/design/8xvQYQgDo50asbY319e2In/Untitled?node-id=0-1&t=pUuOXXboSyIiUwSI-1)

---

### Development Tips
 Front-End Integration:
   - Use tools like **Vite** for fast front-end development. [Vite Documentation](https://vite.dev/)
   - Ensure the API calls are correctly configured to interact with the backend.

 Alerting and Notifications:
   - Use **SweetAlert2** for stunning user notifications.
   - Refer to [SweetAlert2 Documentation](https://sweetalert2.github.io/#usage) for implementation.

---

### Additional Resources

- Python Virtual Environment: [Python venv Documentation](https://docs.python.org/3/library/venv.html)
- Django Framework: [Django Official Documentation](https://www.djangoproject.com/)
- Vite (Front-End): [Vite Documentation](https://vite.dev/)
- SweetAlert2: [SweetAlert2 Documentation](https://sweetalert2.github.io/#usage)

---

### Next Steps

1. Confirm that the backend is running correctly on [http://localhost:8000/](http://localhost:8000/).
2. Start designing or connecting your front-end application with the API.
