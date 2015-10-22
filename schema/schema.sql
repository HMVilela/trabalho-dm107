-----------------------------------------------------------
-- Create Database
create database dm107_lh_root;

-----------------------------------------------------------
-- To use  Database from Terminal
use dm107_lh_root -u root -p;

-----------------------------------------------------------
-- Drop tables
drop table tblDelivery;
drop table tblOrder;
drop table tblUser;

-----------------------------------------------------------
-- Delete tables
delete from tblDelivery;
delete from tblOrder;
delete from tblUser;

-----------------------------------------------------------
-- Create tables
-- tabela de usuarios
create table tblUser(
    id INTEGER NOT NULL AUTO_INCREMENT,
    email VARCHAR(100) UNIQUE NOT NULL,
    passw VARCHAR(100) NOT NULL,
    contactName VARCHAR(100) NOT NULL,
    zipCode VARCHAR(30) NOT NULL,
    state VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    address VARCHAR(500) NOT NULL,
    phoneNumber VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
-- tabela de pedidos
create table tblOrder(
    id INTEGER NOT NULL AUTO_INCREMENT,
    userIdFk INTEGER NOT NULL,
    orderStatus VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

-- tabela referente as entregas dos produtos
create table tblDelivery(
    id INTEGER NOT NULL AUTO_INCREMENT,
    orderIdFk INTEGER NOT NULL,
    userIdFk INTEGER NOT NULL,
    receiverAddress VARCHAR(500) NOT NULL,
    receiverCpf VARCHAR(50) NOT NULL,
    receiverIsBuyer BOOLEAN NOT NULL,
    deliveryDateTime DATETIME NOT NULL,
    geolocation VARCHAR(50),
    PRIMARY KEY(id)
);

-----------------------------------------------------------
-- Insert tables


INSERT INTO tblUser(id, passw, contactName, email, zipCode, state, city, address, phoneNumber) VALUES(1, 'a', 'Luciano', 'luciano.ctrl@hotmail.com', '37540-000', 'Minas Gerais', 'Santa Rita do Sapucai', 'Rua lala, 1', '35-1234-1234');
INSERT INTO tblUser(id, passw, contactName, email, zipCode, state, city, address, phoneNumber) VALUES(2, 'a', 'Henrique', 'henrique.marrom@gmail.com', '37540-000', 'Minas Gerais', 'Santa Rita do Sapucai', 'Rua lele, 2', '35-1234-2345');
INSERT INTO tblUser(id, passw, contactName, email, zipCode, state, city, address, phoneNumber) VALUES(3, 'p3', 'name_03', 'email_03@email.com', '37540-000', 'Minas Gerais', 'Santa Rita do Sapucai', 'Rua lili, 3', '35-1234-3456');
INSERT INTO tblUser(id, passw, contactName, email, zipCode, state, city, address, phoneNumber) VALUES(4, 'p4', 'name_04', 'email_04@email.com', '37540-000', 'Minas Gerais', 'Santa Rita do Sapucai', 'Rua lolo, 4', '35-1234-4567');
INSERT INTO tblUser(id, passw, contactName, email, zipCode, state, city, address, phoneNumber) VALUES(5, 'p5', 'name_05', 'email_05@email.com', '37540-000', 'Minas Gerais', 'Santa Rita do Sapucai', 'Rua lulu, 5', '35-1234-5678');
INSERT INTO tblUser(id, passw, contactName, email, zipCode, state, city, address, phoneNumber) VALUES(6, 'p6', 'name_06', 'email_06@email.com', '37540-000', 'Minas Gerais', 'Santa Rita do Sapucai', 'Rua kaka, 6', '35-1234-6789');
INSERT INTO tblUser(id, passw, contactName, email, zipCode, state, city, address, phoneNumber) VALUES(7, 'p7', 'name_07', 'email_07@email.com', '37540-000', 'Minas Gerais', 'Santa Rita do Sapucai', 'Rua keke, 7', '35-1234-7890');
INSERT INTO tblUser(id, passw, contactName, email, zipCode, state, city, address, phoneNumber) VALUES(8, 'p8', 'name_08', 'email_08@email.com', '37540-000', 'Minas Gerais', 'Santa Rita do Sapucai', 'Rua kiki, 8', '35-1234-0987');
INSERT INTO tblUser(id, passw, contactName, email, zipCode, state, city, address, phoneNumber) VALUES(9, 'p9', 'name_09', 'email_09@email.com', '37540-000', 'Minas Gerais', 'Santa Rita do Sapucai', 'Rua koko, 9', '35-1234-9876');

INSERT INTO tblOrder(id, userIdFk, orderStatus) VALUES(1, 1, 'PENDING');
INSERT INTO tblOrder(id, userIdFk, orderStatus) VALUES(2, 1, 'PENDING');
INSERT INTO tblOrder(id, userIdFk, orderStatus) VALUES(3, 2, 'PENDING');

INSERT INTO tblDelivery(id, orderIdFk, userIdFk, receiverAddress, receiverCpf, receiverIsBuyer, deliveryDateTime, geolocation) VALUES (1, 1, 1, 'Rua lala , 1', '0123456789-01', true, CURDATE(), '14444654445');
INSERT INTO tblDelivery(id, orderIdFk, userIdFk, receiverAddress, receiverCpf, receiverIsBuyer, deliveryDateTime, geolocation) VALUES (2, 2, 1, 'Rua lala , 1', '6454613214-01', false, CURDATE(), '7798444654');
INSERT INTO tblDelivery(id, orderIdFk, userIdFk, receiverAddress, receiverCpf, receiverIsBuyer, deliveryDateTime, geolocation) VALUES (3, 3, 2, 'Rua lele , 2', '9876543210-22', true, CURDATE(), '666454113214');



