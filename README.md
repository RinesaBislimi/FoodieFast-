# FoodieFast Project

FoodieFast is a full-stack web application built using Django for the backend and React for the frontend. This project structure helps you set up and run a web application with a REST API backend and a responsive frontend.

### Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/RinesaBislimi/FoodieFast-.git
    cd FoodieFast
    ```

2. **Backend Setup:**
    ```bash
    cd backend
    ```

    **Create a virtual environment:**
    ```bash
    python -m venv venv
    ```

    **Activate the virtual environment:**
    - On Windows:
      ```bash
      venv\Scripts\activate
      ```
    - On macOS/Linux:
      ```bash
      source venv/bin/activate
      ```

    **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

    **Apply migrations to set up the database:**
    ```bash
    python manage.py migrate
    ```

    **Create a superuser account (for admin access):**
    ```bash
    python manage.py createsuperuser
    ```

    **Run the Django development server:**
    ```bash
    python manage.py runserver
    ```

3. **Frontend Setup:**

    **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```

    **Install the dependencies:**
    ```bash
    npm install
    ```

    **Start the React development server:**
    ```bash
    npm start
    ```

### Running the Application

With both servers running, you can access:

- **Django Backend**: [http://localhost:8000/](http://localhost:8000/)
- **React Frontend**: [http://localhost:3000/](http://localhost:3000/)

The React app will communicate with the Django backend via API endpoints.
