document.addEventListener('DOMContentLoaded', function () {
    cargarEdificios();
});

const edificios = [
    { id: 1, nombre: 'Edificio Central', direccion: 'Avenida Principal 123' },
    { id: 2, nombre: 'Edificio Norte', direccion: 'Calle Norte 456' },
    { id: 3, nombre: 'Edificio Sur', direccion: 'Avenida Sur 789' }
];

const zonas = {
    1: [
        { id: 1, nombre: 'Oficinas' },
        { id: 2, nombre: 'Pasillos' },
        { id: 3, nombre: 'Salas de Reuniones' }
    ],
    2: [
        { id: 4, nombre: 'Laboratorios' },
        { id: 5, nombre: 'Cafetería' },
        { id: 6, nombre: 'Auditorio' }
    ],
    3: [
        { id: 7, nombre: 'Recepción' },
        { id: 8, nombre: 'Almacén' },
        { id: 9, nombre: 'Gimnasio' }
    ]
};

const dispositivos = {
    1: [
        { id: 1, nombre: 'Luz Principal', tipo: 'iluminacion' },
        { id: 2, nombre: 'Aire Acondicionado', tipo: 'refrigeracion' }
    ],
    2: [
        { id: 3, nombre: 'Luz Pasillo', tipo: 'iluminacion' },
        { id: 4, nombre: 'Calefacción', tipo: 'calefaccion' }
    ],
    3: [
        { id: 5, nombre: 'Proyector', tipo: 'iluminacion' },
        { id: 6, nombre: 'Luz Sala', tipo: 'iluminacion' }
    ],
    4: [
        { id: 7, nombre: 'Microscopio', tipo: 'iluminacion' },
        { id: 8, nombre: 'Luz Lab', tipo: 'iluminacion' }
    ],
    5: [
        { id: 9, nombre: 'Máquina de Café', tipo: 'refrigeracion' },
        { id: 10, nombre: 'Luz Cafetería', tipo: 'iluminacion' }
    ],
    6: [
        { id: 11, nombre: 'Micrófono', tipo: 'iluminacion' },
        { id: 12, nombre: 'Luz Auditorio', tipo: 'iluminacion' }
    ],
    7: [
        { id: 13, nombre: 'Computadora Recepción', tipo: 'iluminacion' },
        { id: 14, nombre: 'Luz Recepción', tipo: 'iluminacion' }
    ],
    8: [
        { id: 15, nombre: 'Refrigerador', tipo: 'refrigeracion' },
        { id: 16, nombre: 'Luz Almacén', tipo: 'iluminacion' }
    ],
    9: [
        { id: 17, nombre: 'Cinta de Correr', tipo: 'iluminacion' },
        { id: 18, nombre: 'Luz Gimnasio', tipo: 'iluminacion' }
    ]
};

const consumos = {
    1: 'Consumo: 20 kWh',
    2: 'Consumo: 30 kWh',
    3: 'Consumo: 10 kWh',
    4: 'Consumo: 25 kWh',
    5: 'Consumo: 15 kWh',
    6: 'Consumo: 35 kWh',
    7: 'Consumo: 5 kWh',
    8: 'Consumo: 10 kWh',
    9: 'Consumo: 40 kWh',
    10: 'Consumo: 8 kWh',
    11: 'Consumo: 12 kWh',
    12: 'Consumo: 20 kWh',
    13: 'Consumo: 7 kWh',
    14: 'Consumo: 18 kWh',
    15: 'Consumo: 22 kWh',
    16: 'Consumo: 10 kWh',
    17: 'Consumo: 50 kWh',
    18: 'Consumo: 15 kWh'
};

const horarios = [
    { id: 1, id_dispositivo: 1, hora_inicio: '08:00:00', hora_fin: '18:00:00', modo: 'Normal' },
    { id: 2, id_dispositivo: 2, hora_inicio: '08:00:00', hora_fin: '18:00:00', modo: 'Ahorro' },
    { id: 3, id_dispositivo: 3, hora_inicio: '06:00:00', hora_fin: '20:00:00', modo: 'Normal' },
    { id: 4, id_dispositivo: 4, hora_inicio: '06:00:00', hora_fin: '20:00:00', modo: 'Ahorro' },
    { id: 5, id_dispositivo: 5, hora_inicio: '09:00:00', hora_fin: '17:00:00', modo: 'Normal' },
    { id: 6, id_dispositivo: 6, hora_inicio: '09:00:00', hora_fin: '17:00:00', modo: 'Ahorro' }
];

function cargarEdificios() {
    const edificioSelect = document.getElementById('edificio');
    const edificioConfigSelect = document.getElementById('edificio-config');

    const optionBlank = document.createElement('option');
    optionBlank.value = "";
    optionBlank.textContent = "--Seleccione un edificio--";
    edificioSelect.appendChild(optionBlank.cloneNode(true));
    edificioConfigSelect.appendChild(optionBlank);

    edificios.forEach(edificio => {
        const option = document.createElement('option');
        option.value = edificio.id;
        option.textContent = edificio.nombre;
        edificioSelect.appendChild(option);

        const configOption = option.cloneNode(true);
        edificioConfigSelect.appendChild(configOption);
    });
}

function cargarZonas() {
    const edificioId = document.getElementById('edificio').value;
    const zonaSelect = document.getElementById('zona');
    zonaSelect.innerHTML = ''; // Limpiar las opciones previas

    const optionBlank = document.createElement('option');
    optionBlank.value = "";
    optionBlank.textContent = "--Seleccione una zona--";
    zonaSelect.appendChild(optionBlank);

    if (zonas[edificioId]) {
        zonas[edificioId].forEach(zona => {
            const option = document.createElement('option');
            option.value = zona.id;
            option.textContent = zona.nombre;
            zonaSelect.appendChild(option);
        });
    }
}

function cargarZonasConfiguracion() {
    const edificioId = document.getElementById('edificio-config').value;
    const zonaSelect = document.getElementById('zona-config');
    zonaSelect.innerHTML = ''; // Limpiar las opciones previas

    const optionBlank = document.createElement('option');
    optionBlank.value = "";
    optionBlank.textContent = "--Seleccione una zona--";
    zonaSelect.appendChild(optionBlank);

    if (zonas[edificioId]) {
        zonas[edificioId].forEach(zona => {
            const option = document.createElement('option');
            option.value = zona.id;
            option.textContent = zona.nombre;
            zonaSelect.appendChild(option);
        });
    }
}

function cargarDispositivos() {
    const zonaId = document.getElementById('zona').value;
    const dispositivoSelect = document.getElementById('dispositivo');
    dispositivoSelect.innerHTML = ''; // Limpiar las opciones previas

    const optionBlank = document.createElement('option');
    optionBlank.value = "";
    optionBlank.textContent = "--Seleccione un dispositivo--";
    dispositivoSelect.appendChild(optionBlank);

    if (dispositivos[zonaId]) {
        dispositivos[zonaId].forEach(dispositivo => {
            const option = document.createElement('option');
            option.value = dispositivo.id;
            option.textContent = dispositivo.nombre;
            dispositivoSelect.appendChild(option);
        });
    }
}

function cargarDispositivosConfiguracion() {
    const zonaId = document.getElementById('zona-config').value;
    const dispositivoSelect = document.getElementById('dispositivo-config');
    dispositivoSelect.innerHTML = ''; // Limpiar las opciones previas

    const optionBlank = document.createElement('option');
    optionBlank.value = "";
    optionBlank.textContent = "--Seleccione un dispositivo--";
    dispositivoSelect.appendChild(optionBlank);

    if (dispositivos[zonaId]) {
        dispositivos[zonaId].forEach(dispositivo => {
            const option = document.createElement('option');
            option.value = dispositivo.id;
            option.textContent = dispositivo.nombre;
            dispositivoSelect.appendChild(option);
        });
    }
}

function verConsumo() {
    const dispositivoId = document.getElementById('dispositivo').value;
    const resultadosDiv = document.getElementById('resultados');

    if (consumos[dispositivoId]) {
        resultadosDiv.textContent = consumos[dispositivoId];
    } else {
        resultadosDiv.textContent = 'No se encontraron datos de consumo.';
    }
}

function guardarConfiguracion() {
    const edificioId = document.getElementById('edificio-config').value;
    const zonaId = document.getElementById('zona-config').value;
    const dispositivoId = document.getElementById('dispositivo-config').value;
    const horarioInicio = document.getElementById('horario-inicio').value;
    const horarioFin = document.getElementById('horario-fin').value;
    const modoAhorro = document.getElementById('modo-ahorro').value;

    // Simulación de guardar configuración
    console.log(`Configuración guardada:
        Edificio: ${edificioId},
        Zona: ${zonaId},
        Dispositivo: ${dispositivoId},
        Horario: ${horarioInicio} - ${horarioFin},
        Modo de Ahorro: ${modoAhorro}`);
    
    alert('Configuración guardada exitosamente.');
}
/// Codigo Inicio Sesion / Regsitro Sesion

// script.js

document.addEventListener('DOMContentLoaded', function () {
    checkSession();
});

function showRegister() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
}

function checkSession() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('register-section').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const user = storedUsers.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', username);
        checkSession();
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = storedUsers.some(user => user.username === username);

    if (userExists) {
        alert('El nombre de usuario ya está en uso');
    } else {
        storedUsers.push({ username, password });
        localStorage.setItem('users', JSON.stringify(storedUsers));
        alert('Registro exitoso');
        showLogin();
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('main-content').style.display = 'none';
}
