# Roles
INSERT INTO Roles(name, createdAt, updatedAt) VALUES ('Administrador', now(), now());
INSERT INTO Roles(name, createdAt, updatedAt) VALUES ('Gestor Pedidos', now(), now());
INSERT INTO Roles(name, createdAt, updatedAt) VALUES ('Reporte', now(), now());

# Menus
INSERT INTO Menus(name, prefix, icon, createdAt, updatedAt) VALUES ('Seguridad', 'security', 'lock', now(), now());
INSERT INTO Menus(name, prefix, icon, createdAt, updatedAt) VALUES ('Gestion', 'management', 'archive', now(), now());
INSERT INTO Menus(name, prefix, icon, createdAt, updatedAt) VALUES ('Reporte', 'report', 'archive', now(), now());

# Submenus
# menu -> seguridad
INSERT INTO Submenus(name, name_key, url, icon, menu_id, createdAt, updatedAt) VALUES ('Roles', 'roles', 'security/roles', 'chevron-right', 1, now(), now());
INSERT INTO Submenus(name, name_key, url, icon, menu_id, createdAt, updatedAt) VALUES ('Usuarios', 'users', 'security/users', 'chevron-right', 1, now(), now());
INSERT INTO Submenus(name, name_key, url, icon, menu_id, createdAt, updatedAt) VALUES ('Modulos', 'modules', 'security/modules', 'chevron-right', 1, now(), now());

# menu -> gestion
INSERT INTO Submenus(name, name_key, url, icon, menu_id, createdAt, updatedAt) VALUES ('Pedidos', 'orders', 'management/orders', 'chevron-right', 2, now(), now());
INSERT INTO Submenus(name, name_key, url, icon, menu_id, createdAt, updatedAt) VALUES ('Catalogo', 'catalog', 'management/catalog', 'chevron-right', 2, now(), now());

# menu -> reporte
INSERT INTO Submenus(name, name_key, url, icon, menu_id, createdAt, updatedAt) VALUES ('Reporte de puntos', 'point_report', 'report/point_report', 'chevron-right', 3, now(), now());

# Customers
INSERT INTO Customers(name, createdAt, updatedAt) VALUES ('Administrador', now(), now());

# Users
INSERT INTO Users(user_name,password, email, customer_id, rol_id, createdAt, updatedAt) VALUES ('admin', '$2b$10$PRHs62IO9mo8TlRMCzwDtuLRn35UHmD.K9/TAr2NVME8iDHu.4IDe', 'admin@admin.com', 1, 1, now(), now());

# Roles Submenu
# rol -> admin
INSERT INTO RolesSubmenus(rol_id, submenu_id, can_create, can_view, can_update, can_delete, createdAt, updatedAt)
VALUES (1, 1, 1, 1, 1, 1, now(), now());
INSERT INTO RolesSubmenus(rol_id, submenu_id, can_create, can_view, can_update, can_delete, createdAt, updatedAt)
VALUES (1, 2, 1, 1, 1, 1, now(), now());
INSERT INTO RolesSubmenus(rol_id, submenu_id, can_create, can_view, can_update, can_delete, createdAt, updatedAt)
VALUES (1, 3, 1, 1, 1, 1, now(), now());
INSERT INTO RolesSubmenus(rol_id, submenu_id, can_create, can_view, can_update, can_delete, createdAt, updatedAt)
VALUES (1, 4, 1, 1, 1, 1, now(), now());
INSERT INTO RolesSubmenus(rol_id, submenu_id, can_create, can_view, can_update, can_delete, createdAt, updatedAt)
VALUES (1, 5, 1, 1, 1, 1, now(), now());
INSERT INTO RolesSubmenus(rol_id, submenu_id, can_create, can_view, can_update, can_delete, createdAt, updatedAt)
VALUES (1, 6, 1, 1, 1, 1, now(), now());

# rol -> Gestor Pedidos
INSERT INTO RolesSubmenus(rol_id, submenu_id, can_create, can_view, can_update, can_delete, createdAt, updatedAt)
VALUES (2, 4, 1, 1, 1, 1, now(), now());
INSERT INTO RolesSubmenus(rol_id, submenu_id, can_create, can_view, can_update, can_delete, createdAt, updatedAt)
VALUES (2, 5, 1, 1, 1, 1, now(), now());

# rol -> Reporte
INSERT INTO RolesSubmenus(rol_id, submenu_id, can_create, can_view, can_update, can_delete, createdAt, updatedAt)
VALUES (3, 6, 1, 1, 1, 1, now(), now());