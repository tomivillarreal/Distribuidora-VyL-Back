SELECT 'CREATE DATABASE distribuidoraDB'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'distribuidoraDB')\gexec