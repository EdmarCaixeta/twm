import os

db_path = 'db'
if not os.path.isdir(db_path):
    os.makedirs(db_path)
    os.makedirs(os.path.join(db_path, 'clients'))
    os.makedirs(os.path.join(db_path, 'products'))
    os.makedirs(os.path.join(db_path, 'products', 'images'))
    os.makedirs(os.path.join(db_path, 'service_order'))
    os.makedirs(os.path.join(db_path, 'service_order', 'images'))
    os.makedirs(os.path.join(db_path, 'service_order', 'reports'))
    os.makedirs(os.path.join(db_path, 'service_type'))
    os.makedirs(os.path.join(db_path, 'tecnicians'))
