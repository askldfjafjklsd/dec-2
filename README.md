# Project Setup Instructions

### Prerequisites

1. Install [Docker](https://www.docker.com/).
2. Install [Docker Compose](https://docs.docker.com/compose/).

---

### Running the Project

1. **Build and Start Containers:**
   Navigate to the project directory containing the `docker-compose.yml` file and run:
   ```bash
   docker-compose up --build
   ```
   This command will:
   - Build the `backend`, `frontend`, and `db` services.
   - Start the containers and link them.

2. **Access the Application:**
   - **Backend:** [http://localhost:8000/](http://localhost:8000/)
   - **Frontend:** [http://localhost:5173/](http://localhost:5173/)
   - **Admin Panel:** [http://localhost:8000/admin/](http://localhost:8000/admin/)

3. **Stop Containers:**
   To stop the containers without deleting them:
   ```bash
   docker-compose stop
   ```

4. **DELETE Containers:**
   To stop and remove containers, networks, and volumes:
   WARNING: THIS DELETE THE CONTAINERS
   ```bash
   docker-compose down
   ```

---

### Setting Up the Admin User

After the containers are running, create an admin user for Django, open a new terminal and run the following commands:

1. **Run migrations:**
   ```bash
   docker-compose exec backend python manage.py migrate
   ```

2. **Create a new user for Django admin:**
   ```bash
   docker-compose exec backend python manage.py createsuperuser
   ```
   Follow the prompts to set up the username, email, and password.

3. **Exit the Container:**
   Type `exit` to leave the container.

---

### Key Commands for Docker Management

1. **Check Running Containers:**
   ```bash
   docker ps
   ```
   This show a table with the containers running

2. **View Logs:**
   ```bash
   docker-compose logs -f
   ```

3. **Rebuild Containers:**
   If you make changes to the `Dockerfile` or dependencies, rebuild the images:
   ```bash
   docker-compose up --build
   ```
   Pretty sure you won't use this, but just in case.

4. **Access a Specific Container:**
   To open a shell in a running container:
   ```bash
   docker-compose exec <service_name> bash
   ```
   Replace `<service_name>` with `backend`, `frontend`, or `db`.

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

### Additional Notes

- **Database Persistence:**
  The database data is stored in a Docker volume named `postgres_data`, ensuring persistence across container restarts.

- **Environment Variables:**
  Key configuration values (e.g., database credentials) are set in the `docker-compose.yml` file under the `environment` section. Modify these as needed.

- **Frontend Proxy Issues:**
  Ensure the `VITE_API_URL` in `docker-compose.yml` points to the backend URL (`http://localhost:8000`).

- **Dependencies:**
  To add new dependencies to the backend or frontend:
  - Access the respective container (`backend` or `frontend`).
  - Install the dependency inside the container.
  - Update the relevant `requirements.txt` or `package.json` file.

---
