from flask import Flask, jsonify, request, Response
import json

app = Flask(__name__)

# Routes
PRODUCTS_DIR = 'db/products'
CLIENTS_DIR = 'db/clients'
TECNICIANS_DIR = 'db/tecnicians'
SERVICES_TYPE_DIR = 'db/service_type'
SERVICES_ORDER_DIR = 'db/service_order'


@app.route('/products', methods=["POST"])
def create_products():
    # Recebe o dicionário enviado na request
    product_data = json.load(request.files['data'])

    try:
        # Carrega os dados do arquivo json
        with open(f'{PRODUCTS_DIR}/products.json', 'r') as f:
            products = json.load(f)

    except FileNotFoundError:
        # Cria um novo arquivo json vazio
        open(f'{PRODUCTS_DIR}/products.json', 'w').close()
        products = []

    # Bloqueia Duplicatas
    if product_data in products:
        msg = jsonify(
            {'message': 'Produto existente, não criado!',
             'status': 409})

        msg.status_code = 409

    # Adiciona o novo produto a lista de produtos
    else:
        product_images = request.files.getlist('images')
        products.append(product_data)

        # Salvando o dicionário em um arquivo json
        with open(f'{PRODUCTS_DIR}/products.json', 'w') as f:
            json.dump(products, f)

        # Salvando imagens em um diretório
        for image in product_images:
            image.save(f'{PRODUCTS_DIR}/images/{image.filename}')

        msg = jsonify({'message': 'Produto criado!',
                       'status': 201})

        msg.status = 201

    msg.headers.add('Content-Type', 'application/json')
    return msg


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
        with open(f'{SERVICES_TYPE_DIR}/services.json', 'r') as f:
            services = json.load(f)

    except FileNotFoundError:
        # Cria um novo arquivo json vazio
        open(f'{SERVICES_TYPE_DIR}/services.json', 'w').close()
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
        with open(f'{SERVICES_TYPE_DIR}/services.json', 'w') as f:
            json.dump(services, f)

        msg = jsonify({'message': 'Serviço criado!',
                       'status': 201})

        msg.status = 201

    msg.headers.add('Content-Type', 'application/json')
    return msg


@app.route('/service-order', methods=['POST'])
def create_service_order():
    # Recebe o dicionário enviado na request
    new_service_order = json.load(request.files['data'])

    try:
        # Carrega os dados do arquivo json
        with open(f'{SERVICES_ORDER_DIR}/service_orders.json', 'r') as f:
            service_orders = json.load(f)

    except FileNotFoundError:
        # Cria um novo arquivo json vazio
        open(f'{SERVICES_ORDER_DIR}/service_orders.json', 'w').close()
        service_orders = []

    # Bloqueia Duplicatas
    if new_service_order in service_orders:
        msg = jsonify(
            {'message': 'Ordem de serviço existente, não criado!',
             'status': 409})

        msg.status_code = 409

    # Adiciona o novo produto a lista de produtos
    else:
        service_imgs = request.files.getlist('images')
        service_report = request.files.getlist('report')
        service_orders.append(new_service_order)

        # Salvando o dicionário em um arquivo json
        with open(f'{SERVICES_ORDER_DIR}/service_orders.json', 'w') as f:
            json.dump(service_orders, f)

        # Salvando imagens em um diretório
        for image in service_imgs:
            image.save(f'{SERVICES_ORDER_DIR}/images/{image.filename}')

        for report in service_report:
            report.save(f'{SERVICES_ORDER_DIR}/reports/{report.filename}')

        msg = jsonify({'message': 'Produto criado!',
                       'status': 201})

        msg.status = 201

    msg.headers.add('Content-Type', 'application/json')
    return msg


if __name__ == '__main__':
    app.run(debug=True)