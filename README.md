------------------ How to set up and run the application locally --------------------------------

1. Clone the Repository

   git clone <repository-url>
   cd <project-directory>

2. Install Dependencies
   composer install
   npm install

3. Configure Environment Variables
   cp .env.example .env
   Open the .env file and configure your environment variables. You'll need to set up the following:

    APP_NAME=Laravel
    APP_ENV=local
    APP_KEY=base64:your-app-key
    APP_DEBUG=true
    APP_URL=http://localhost
    
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=your_database_name
    DB_USERNAME=your_database_username
    DB_PASSWORD=your_database_password

4. Generate Application Key
   php artisan key:generate

5. Set Up the Database
   Create a new database using your preferred database management tool (e.g., phpMyAdmin, MySQL command line).

6. Run Migrations
   php artisan migrate

7. Compile Frontend Assets
   npm run dev

8. Run Laravel Development Server
   php artisan serve

10. Access Your Application
    http://127.0.0.1:8000

11. Troubleshooting
    If you encounter issues:
    
    Check Logs: Look at the Laravel log file located at storage/logs/laravel.log for any errors.
    
    Verify Configurations: Double-check your .env file and make sure all required configurations are set.
    
    Clear Caches: Sometimes, clearing the application cache can resolve issues:

    php artisan config:cache
    php artisan cache:clear
    php artisan view:clear
    php artisan route:clear
