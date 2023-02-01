from flask import Flask, jsonify, request, Response
from werkzeug.utils import secure_filename
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)


# Routes
PRODUCTS_DIR = 'db/products'
CLIENTS_DIR = 'db/clients'
TECNICIANS_DIR = 'db/tecnicians'
SERVICES_TYPE_DIR = 'db/service_type'
SERVICES_ORDER_DIR = 'db/service_order'


app.config['ALLOWED_EXTENSIONS'] = {'jpg', 'jpeg', 'png'}


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower(
           ) in app.config['ALLOWED_EXTENSIONS']

def generic_get(fpath):
    with open(fpath) as json_file:
        data = json.load(json_file)
    return jsonify(data)

@app.route('/products', methods=['GET'])
def get_products():
    return generic_get(f'{PRODUCTS_DIR}/products.json')

@app.route('/clients', methods=['GET'])
def get_clients():
    return generic_get(f'{CLIENTS_DIR}/clients.json')

@app.route('/tecnicians', methods=['GET'])
def get_tecnicians():
    return generic_get(f'{TECNICIANS_DIR}/tecnicians.json')

@app.route('/service-type', methods=['GET'])
def get_service_type():
    return generic_get(f'{SERVICES_TYPE_DIR}/service-type.json')

@app.route('/service-order', methods=['GET'])
def get_service_order():
    return generic_get(f'{SERVICES_ORDER_DIR}/service_orders.json')

@app.route('/products', methods=['POST'])
def create_products():
    data_str = request.form.get('data')
    data = json.loads(data_str)
    images = request.files.getlist('images')

    try:
        # Json existe?
        with open(f'{PRODUCTS_DIR}/products.json', 'r') as f:
            products = json.load(f)
    except FileNotFoundError:
        # Se json não existir, cria json
        open(f'{PRODUCTS_DIR}/products.json', 'w').close()
        products = []

    if data in products:
        response = jsonify({"message": "Produto já existente!", "status": 409})
        response.status_code = 409

    else:
        products.append(data)

        with open(f'{PRODUCTS_DIR}/products.json', 'w') as f:
            json.dump(products, f)

        for image in images:
            image.save(
                secure_filename(f'{PRODUCTS_DIR}/images/{image.filename}'))

        response = jsonify({"message": "Produto criado!", "status": 201})
        response.status_code = 201

    return response


@app.route('/clients', methods=['POST'])
def create_clients():
    # Recebe o dicionário enviado na request
    new_client = request.get_json()

    try:
        # Carrega os dados do arquivo json
        with open(f'{CLIENTS_DIR}/clients.json', 'r') as f:
            clients = json.load(f)

    except FileNotFoundError:
        # Cria um novo arquivo json vazio
        open(f'{CLIENTS_DIR}/clients.json', 'w').close()
        clients = []

    # Bloqueia Duplicatas
    if new_client in clients:
        msg = jsonify(
            {'message': 'Cliente existente, não criado!',
             'status': 409})

        msg.status_code = 409

    # Adiciona o novo produto a lista de produtos
    else:
        clients.append(new_client)

        # Salvando o dicionário em um arquivo json
        with open(f'{CLIENTS_DIR}/clients.json', 'w') as f:
            json.dump(clients, f)

        msg = jsonify({'message': 'Cliente criado!',
                       'status': 201})

        msg.status = 201

    msg.headers.add('Content-Type', 'application/json')
    return msg


@app.route('/tecnicians', methods=['POST'])
def create_tecnicians():
    # Recebe o dicionário enviado na request
    new_tecnician = request.get_json()

    try:
        # Carrega os dados do arquivo json
        with open(f'{TECNICIANS_DIR}/tecnicians.json', 'r') as f:
            tecnicians = json.load(f)

    except FileNotFoundError:
        # Cria um novo arquivo json vazio
        open(f'{TECNICIANS_DIR}/tecnicians.json', 'w').close()
        tecnicians = []

    # Bloqueia Duplicatas
    if new_tecnician in tecnicians:
        msg = jsonify(
            {'message': 'Técnico existente, não criado!',
             'status': 409})

        msg.status_code = 409

    # Adiciona o novo produto a lista de produtos
    else:
        tecnicians.append(new_tecnician)

        # Salvando o dicionário em um arquivo json
        with open(f'{TECNICIANS_DIR}/tecnicians.json', 'w') as f:
            json.dump(tecnicians, f)

        msg = jsonify({'message': 'Técnico criado!',
                       'status': 201})

        msg.status = 201

    msg.headers.add('Content-Type', 'application/json')
    return msg


@app.route('/service-type', methods=['POST'])
def create_services_types():
    # Recebe o dicionário enviado na request
    new_service = request.get_json()

    try:
        # Carrega os dados do arquivo json
        with open(f'{SERVICES_TYPE_DIR}/service-type.json', 'r') as f:
            services = json.load(f)

    except FileNotFoundError:
        # Cria um novo arquivo json vazio
        open(f'{SERVICES_TYPE_DIR}/service-type.json', 'w').close()
        services = []

    # Bloqueia Duplicatas
    if new_service in services:
        msg = jsonify(
            {'message': 'Serviço existente, não criado!',
             'status': 409})

        msg.status_code = 409

    # Adiciona o novo produto a lista de produtos
    else:
        services.append(new_service)

        # Salvando o dicionário em um arquivo json
        with open(f'{SERVICES_TYPE_DIR}/service-type.json', 'w') as f:
            json.dump(services, f)

        msg = jsonify({'message': 'Serviço criado!',
                       'status': 201})

        msg.status = 201

    msg.headers.add('Content-Type', 'application/json')
    return msg


@app.route('/service-order', methods=['POST'])
def create_service_order():
    # Recebe o dicionário enviado na request
    data_str = request.form.get('data')
    data = json.loads(data_str)
    images = request.files.getlist('images')
    report = request.files.getlist('laudo')

    try:
        # Carrega os dados do arquivo json
        with open(f'{SERVICES_ORDER_DIR}/service_orders.json', 'r') as f:
            service_orders = json.load(f)

    except FileNotFoundError:
        # Cria um novo arquivo json vazio
        open(f'{SERVICES_ORDER_DIR}/service_orders.json', 'w').close()
        service_orders = []

    # Bloqueia Duplicatas
    if data in service_orders:
        msg = jsonify(
            {'message': 'Ordem de serviço existente, não criado!',
             'status': 409})

        msg.status_code = 409

    # Adiciona o novo produto a lista de produtos
    else:
        service_orders.append(data)

        # Salvando o dicionário em um arquivo json
        with open(f'{SERVICES_ORDER_DIR}/service_orders.json', 'w') as f:
            json.dump(service_orders, f)

        # Salvando imagens em um diretório
        for image in images:
            image.save(secure_filename(f'{SERVICES_ORDER_DIR}/images/{image.filename}'))

        for laudo in report:
            laudo.save(secure_filename(f'{SERVICES_ORDER_DIR}/reports/{laudo.filename}'))

        msg = jsonify({'message': 'Produto criado!',
                       'status': 201})

        msg.status = 201

    msg.headers.add('Content-Type', 'application/json')
    return msg


if __name__ == '__main__':
    app.run(debug=True)
