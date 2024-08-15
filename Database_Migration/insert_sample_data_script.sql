-- Truncate tables
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE product_variance;
TRUNCATE TABLE Product;
TRUNCATE TABLE User;
SET FOREIGN_KEY_CHECKS = 1;

-- Insert sample data into the User table
INSERT INTO User (Id, Username, Password, Email)
VALUES 
('81dc9bdb-52d4-4dbd-96d4-3b58eeda440a', 'johndoe', 'password123', 'john.doe@example.com'),
('67f733ea-bf8c-4f6a-8e1f-8e8b8a42b22c', 'janedoe', 'password456', 'jane.doe@example.com'),
('a4aede7f-0f6a-41b1-bc3b-1e29ee80b24d', 'adminuser', 'admin123', 'admin@example.com'),
('c1a5b5a0-6b6a-46df-a15c-1911e626b32c', 'moderator', 'moderator456', 'moderator@example.com'),
('81e3b4b5-c7c6-4d47-98cd-5f8b6b7d89e0', 'testuser', 'test123', 'test.user@example.com');

-- Insert sample data into the Product table
-- Insert car products
INSERT INTO Product(Id, Name, Description, image_path)
VALUES
('daa57e8d-1111-40b2-80ab-31a52dbd7f83', 'Tesla Model S', 'The Tesla Model S is a full-size luxury sedan that is known for its exceptional performance, impressive range, and advanced technology features. With a range of up to 373 miles on a single charge, the Model S is a great option for those who want to go electric without sacrificing on performance. The car features a sleek and modern design, with a spacious interior and a massive touchscreen display that controls everything from the navigation system to the climate control. The Model S also boasts a range of advanced safety features, including Autopilot, which enables semi-autonomous driving. With its impressive acceleration and smooth ride, the Tesla Model S is a great option for those who want a luxurious and environmentally friendly driving experience.', 'https://www.tesla.com/ownersmanual/images/GUID-5543BA62-932F-46C5-B1EF-44707D4726B2-online-en-US.png'),
('9a9e1f5c-2222-49d8-a2a9-c5b6d7e8f9aa', 'BMW 3 Series', 'The BMW 3 Series is a compact luxury sedan that is known for its exceptional handling, impressive performance, and premium features. With a range of engine options, including a powerful inline-6 and a efficient 4-cylinder, the 3 Series has something for everyone. The car features a sleek and sporty design, with a spacious interior and a range of advanced technology features, including a touchscreen display and a premium sound system. The 3 Series also boasts a range of advanced safety features, including adaptive cruise control and lane departure warning. With its exceptional handling and impressive performance, the BMW 3 Series is a great option for those who want a fun and luxurious driving experience.', 'https://www.bmw.com.my/content/dam/bmw/common/all-models/3-series/sedan/2022/navigation/bmw-3-series-sedan-lci-phev-modelfinder.png'),
('45c6e7d8-3333-55ab-66cd-77e8f9a0b1cc', 'Ford Mustang', 'The Ford Mustang is a iconic American muscle car that is known for its powerful engine, aggressive styling, and exceptional performance. With a range of engine options, including a powerful V8 and a efficient 4-cylinder, the Mustang has something for everyone. The car features a sleek and sporty design, with a spacious interior and a range of advanced technology features, including a touchscreen display and a premium sound system. The Mustang also boasts a range of advanced safety features, including blind spot monitoring and forward collision warning. With its exceptional acceleration and smooth ride, the Ford Mustang is a great option for those who want a fun and exciting driving experience.', 'https://platform.cstatic-images.com/in/v2/stock_photos/90884105-7fd5-4da9-8479-27e482a4e479/2b678835-3279-4de7-8047-36484d4e2900.png'),
('98f7e6d5-4444-66df-77e8-88f9a0b1c2dd', 'Audi A4', 'The Audi A4 is a compact luxury sedan that is known for its exceptional comfort, impressive performance, and premium features. With a range of engine options, including a powerful 4-cylinder and a efficient 2.0-liter turbo, the A4 has something for everyone. The car features a sleek and modern design, with a spacious interior and a range of advanced technology features, including a touchscreen display and a premium sound system. The A4 also boasts a range of advanced safety features, including adaptive cruise control and lane departure warning. With its exceptional comfort and impressive performance, the Audi A4 is a great option for those who want a luxurious and practical driving experience.', 'https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/model-years/15099-2023-audi-a4'),
('7e6f5d4c-5555-77e8-88f9-99a0b1c2d3ee', 'Mercedes-Benz C-Class', 'The Mercedes-Benz C-Class is a compact luxury sedan that is known for its exceptional comfort, impressive performance, and premium features. With a range of engine options, including a powerful V6 and a efficient 4-cylinder, the C-Class has something for everyone. The car features a sleek and modern design, with a spacious interior and a range of advanced technology features, including a touchscreen display and a premium sound system. The C-Class also boasts a range of advanced safety features, including adaptive cruise control and lane departure warning. With its exceptional comfort and impressive performance, the Mercedes-Benz C-Class is a great option for those who want a luxurious and practical driving experience.', 'https://www.mercedes-benz.com.my/content/dam/hq/passengercars/cars/c-class/c-class-saloon-w206-pi/modeloverview/06-2022/images/mercedes-amg-c-class-w206-modeloverview-696x392-06-2022.png'),
('3c2b1a0d-6666-77e8-88f9-99a0b1c2d4ee', 'Lexus IS', 'The Lexus IS is a compact luxury sedan that is known for its exceptional performance, impressive handling, and premium features. With a range of engine options, including a powerful V6 and a efficient 4-cylinder, the IS has something for everyone. The car features a sleek and sporty design, with a spacious interior and a range of advanced technology features, including a touchscreen display and a premium sound system. The IS also boasts a range of advanced safety features, including adaptive cruise control and lane departure warning. With its exceptional handling and impressive performance, the Lexus IS is a great option for those who want a fun and luxurious driving experience.', 'https://www.cars.com/i/xlarge/in/v2/stock_photos/a79709e7-d4d3-4f23-a8c9-e7d56dc1d710/641e5637-7f92-4dbc-9eb1-efdca008ee02.png');

-- Insert sample data into the Product_Variance table
INSERT INTO Product_Variance(Id, Info, Price, Product_id)
VALUES
('1a2b3c4d-1111-40b2-80ab-31a52dbd7f83', 'Tesla Model S Long Range', 79990, 'daa57e8d-1111-40b2-80ab-31a52dbd7f83'),
('5e4d3c2b-2222-49d8-a2a9-c5b6d7e8f9aa', 'Tesla Model S Plaid', 119990, 'daa57e8d-1111-40b2-80ab-31a52dbd7f83'),
('2b1a0c9d-3333-55ab-66cd-77e8f9a0b1cc', 'BMW 3 Series Sedan', 41000, '9a9e1f5c-2222-49d8-a2a9-c5b6d7e8f9aa'),
('9d8c7b6a-4444-66df-77e8-88f9a0b1c2dd', 'BMW 3 Series M340i xDrive', 54600, '9a9e1f5c-2222-49d8-a2a9-c5b6d7e8f9aa'),
('6a5b4c3d-5555-77e8-88f9-99a0b1c2d3ee', 'Ford Mustang EcoBoost', 27155, '45c6e7d8-3333-55ab-66cd-77e8f9a0b1cc'),
('3c2b1a0d-6666-77e8-88f9-99a0b1c2d4ee', 'Ford Mustang GT Premium', 39685, '45c6e7d8-3333-55ab-66cd-77e8f9a0b1cc'),
('0c9d8b7a-7777-88e8-99f9-00a0b1c2d5ee', 'Audi A4 Premium', 39300, '98f7e6d5-4444-66df-77e8-88f9a0b1c2dd'),
('4d3c2b1a-8888-99e8-00f9-11a0b1c2d6ee', 'Audi A4 Prestige', 47500, '98f7e6d5-4444-66df-77e8-88f9a0b1c2dd'),
('8f7e6d5c-9999-00e8-11f9-22a0b1c2d7ee', 'Mercedes-Benz C-Class C 300', 41400, '7e6f5d4c-5555-77e8-88f9-99a0b1c2d3ee'),
('7e6f5d4c-0000-11e8-22f9-33a0b1c2d8ee', 'Mercedes-Benz C-Class AMG C 43', 56900, '7e6f5d4c-5555-77e8-88f9-99a0b1c2d3ee'),
('6a5b4c3d-1111-22e8-33f9-44a0b1c2d9ee', 'Lexus IS 300', 39850, '3c2b1a0d-6666-77e8-88f9-99a0b1c2d4ee'),
('5e4d3c2b-2222-33e8-44f9-55a0b1c2a0ee', 'Lexus IS 350 F Sport', 44275, '3c2b1a0d-6666-77e8-88f9-99a0b1c2d4ee');


-- Retrieve data
SELECT * FROM User;
SELECT * FROM Product INNER JOIN Product_Variance ON Product.id = Product_Variance.Product_id