CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role INTEGER DEFAULT 2,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP WITH TIME ZONE
);

-- Campos adicionales para seguridad y autenticación
refresh_token VARCHAR(255) UNIQUE, -- Para refresh tokens JWT (opcional, si los manejas en DB)
refresh_token_expires_at TIMESTAMP WITH TIME ZONE, -- Caducidad del refresh token
reset_password_token VARCHAR(255) UNIQUE, -- Para recuperación de contraseña
reset_password_expires_at TIMESTAMP WITH TIME ZONE -- Caducidad del token de recuperación

-- Opcional: Crear un índice para búsquedas rápidas por username o email
CREATE INDEX idx_users_username ON users (username);
CREATE INDEX idx_users_email ON users (email);

INSERT INTO users (email, password_hash, first_name, last_name) VALUES ('jhondoe@dominio.com', 'un_hash_generado_con_seguridad', 'Jhon', 'Doe');