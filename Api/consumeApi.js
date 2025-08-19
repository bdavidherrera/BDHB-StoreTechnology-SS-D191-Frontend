//Usuarios API
const urlRegistarUsu = "https://bdhb-storetechnology-ss-d191.onrender.com/Registrar";
const urlLoginUsu = "https://bdhb-storetechnology-ss-d191.onrender.com/Login";
const urlUsuarios = "https://bdhb-storetechnology-ss-d191.onrender.com/api/usuarios/admin"
const urlActualizarUsuarios = "https://bdhb-storetechnology-ss-d191.onrender.com/api/usuarios/Actualizar";
const  urlEliminarUsuarios = "https://bdhb-storetechnology-ss-d191.onrender.com/api/usuarios/EliminarUsuario/:idusuarios";

//Productos API
const urlProductos = "https://bdhb-storetechnology-ss-d191.onrender.com/api/tecnologia"
const urlRegistrarProductos = "https://bdhb-storetechnology-ss-d191.onrender.com/api/tecnologia/RegistrarProducto"
const urlActualizarProductos = "https://bdhb-storetechnology-ss-d191.onrender.com/api/tecnologia/ActualizarProducto"
const urlEliminarProductos = "https://bdhb-storetechnology-ss-d191.onrender.com/api/tecnologia/EliminarProducto/:idProducto"

//Pedidos API

const urlPedidos = "https://bdhb-storetechnology-ss-d191.onrender.com/api/pedidos";
const urlPedidosUsuario = "https://bdhb-storetechnology-ss-d191.onrender.com/api/pedidos/usuario/:idUsuario";
const urlPedidoDetalle = "https://bdhb-storetechnology-ss-d191.onrender.com/api/pedidos/:idPedido/detalle";
const urlPedidoEstado = "https://bdhb-storetechnology-ss-d191.onrender.com/api/pedidos/:idPedido/estado";
const urlPedidosTodo = "https://bdhb-storetechnology-ss-d191.onrender.com/api/pedidos/mostrarPedidos";


//Pagos API
const urlPagos = "https://bdhb-storetechnology-ss-d191.onrender.com/api/pagos";
const urlPagosUsuario = "https://bdhb-storetechnology-ss-d191.onrender.com/api/pagos/usuario/:idUsuario";
const urlFormasPago = "https://bdhb-storetechnology-ss-d191.onrender.com/api/pagos/formas-pago";
const urlPagoEstado = "https://bdhb-storetechnology-ss-d191.onrender.com/api/pagos/:idPago/estado";
const urlPagosTodo = "https://bdhb-storetechnology-ss-d191.onrender.com/api/pagos/MostrarP";
const urlPagosCount = "https://bdhb-storetechnology-ss-d191.onrender.com/api/pagos/count";

//Usuarios CRUD

export const registrarUsuario = async (datosUsuario) => {
    try {
        const response = await fetch(`${urlRegistarUsu}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosUsuario)
        });
        
        const resultado = await response.json();
        return resultado;
        
    } catch (error) {
        console.error("Error al registrar usuario:", error);
    }
}

export const loginUsuario = async (datosLogin) => {
    try {
        const response = await fetch(`${urlLoginUsu}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosLogin)
        });
        
        const resultado = await response.json();
        return resultado;
        
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
    }
}

export const obtainUsuarios = async ()=>{
    try {
        const resultadousuarios = await fetch(urlUsuarios);
        const usuarios = await resultadousuarios.json();
        return usuarios;
    } catch (error) {
        console.error("error al obtener los usuarios");
    }
}

export const actualizarUsuarios = async (datosUsuarios) => {
    try {
        const response = await fetch(`${urlActualizarUsuarios}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosUsuarios)
        });
        const resultado = await response.json();
        return resultado;                                   
    } catch (error) {
        console.error("Error al actualizar usuarios:", error);
    }
} 

export const eliminarUsuarios = async (idusuarios) => {
    try {
        const response = await fetch(`${urlEliminarUsuarios.replace(':idusuarios', idusuarios)}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }   
        });
        const resultado = await response.json();
        return resultado;
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
    }
}

//Productos Tecnologicos CRUD

export const obtainProductos = async ()=>{
    try {
        const resultado = await fetch(urlProductos);
        const productos = await resultado.json();
        return productos;
    } catch (error) {
        console.error("error al obtener los productos");
    }
}

export const RegistrarProductos = async (datosProductos) => {
    try {
        const response = await fetch(`${urlRegistrarProductos}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosProductos)
            
        });
        
        
        const resultado = await response.json();
        return resultado;
        
    } catch (error) {
        console.error("Error al registrar los productos:", error);
    }
}

export const actualizarProductos = async (datosProductos) => {
    try {
        const response = await fetch(`${urlActualizarProductos}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosProductos)
        });

        const resultado = await response.json();

        if (response.ok) {
            // Refrescar la página después de 1 segundo
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else {
            console.error("❌ Error en la actualización:", resultado);
        }

        return resultado;

    } catch (error) {
        console.error("Error al actualizar los productos:", error);
    }
}


export const eliminarProductos = async (idproductos) => {
    try {
        const response = await fetch(`${urlEliminarProductos.replace(':idProducto', idproductos)}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }   
        });
        const resultado = await response.json();
        return resultado;
    } catch (error) {
        console.error("Error al eliminar el Producto:", error);
    }
}



//Pedidos CRUD

export const crearPedido = async (datosPedido) => {
    try {
        const response = await fetch(`${urlPedidos}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosPedido)
        });
        
        const resultado = await response.json();
        return resultado;
        
    } catch (error) {
        console.error("Error al crear el pedido:", error);
        throw error;
    }
}

export const obtenerPedidos = async () => {
    try {
        const resultado = await fetch(urlPedidos);
        const pedidos = await resultado.json();
        return pedidos;
    } catch (error) {
        console.error("Error al obtener los pedidos:", error);
    }
}

export const obtenerPedidosPorUsuario = async (idUsuario) => {
    try {
        const url = urlPedidosUsuario.replace(':idUsuario', idUsuario);
        const resultado = await fetch(url);
        const pedidos = await resultado.json();
        return pedidos;
    } catch (error) {
        console.error("Error al obtener los pedidos del usuario:", error);
    }
}

export const obtenerDetallePedido = async (idPedido) => {
    try {
        const url = urlPedidoDetalle.replace(':idPedido', idPedido);
        const resultado = await fetch(url);
        const detalle = await resultado.json();
        return detalle;
    } catch (error) {
        console.error("Error al obtener el detalle del pedido:", error);
    }
}

export const actualizarEstadoPedido = async (idPedido, estado) => {
    try {
        const url = urlPedidoEstado.replace(':idPedido', idPedido);
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ estado })
        });
        
        const resultado = await response.json();
        return resultado;
        
    } catch (error) {
        console.error("Error al actualizar el estado del pedido:", error);
    }
}

export const obtainPedidos = async ()=>{
    try {
        const resultadopedidos = await fetch(urlPedidosTodo);
        const pedidos = await resultadopedidos.json();
        return pedidos;
    } catch (error) {
        console.error("error al obtener los pedidos");
    }
}

//Pagos CRUD

export const crearPago = async (datosPago) => {
    try {
        const response = await fetch(`${urlPagos}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosPago)
        });
        
        const resultado = await response.json();
        return resultado;
        
    } catch (error) {
        console.error("Error al crear el pago:", error);
        throw error;
    }
}

export const obtenerPagos = async () => {
    try {
        const resultado = await fetch(urlPagos);
        const pagos = await resultado.json();
        return pagos;
    } catch (error) {
        console.error("Error al obtener los pagos:", error);
    }
}

export const obtenerPagosPorUsuario = async (idUsuario) => {
    try {
        const url = urlPagosUsuario.replace(':idUsuario', idUsuario);
        const resultado = await fetch(url);
        const pagos = await resultado.json();
        return pagos;
    } catch (error) {
        console.error("Error al obtener los pagos del usuario:", error);
    }
}

export const obtenerFormasPago = async () => {
    try {
        const resultado = await fetch(urlFormasPago);
        const formasPago = await resultado.json();
        return formasPago;
    } catch (error) {
        console.error("Error al obtener las formas de pago:", error);
    }
}

export const actualizarEstadoPago = async (idPago, estado_pago, notas_pago = null) => {
    try {
        const url = urlPagoEstado.replace(':idPago', idPago);
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ estado_pago, notas_pago })
        });
        
        const resultado = await response.json();
        return resultado;
        
    } catch (error) {
        console.error("Error al actualizar el estado del pago:", error);
    }
}

export const obtainPagos = async ()=>{
    try {
        const resultadoPagos = await fetch(urlPagosTodo);
        const pagos = await resultadoPagos.json();
        return pagos;
    } catch (error) {
        console.error("error al obtener los pagos");
    }
}

export const obtainPagosCount = async ()=>{
    try {
        const resultadoPagos = await fetch(urlPagosCount);
        const pagos = await resultadoPagos.json();
        return pagos;
    } catch (error) {
        console.error("error al obtener los pagos");
    }
}


//Historial compras

export async function getHistorialCompras() {
    try {
        const idUsuario = sessionStorage.getItem("idUsuario");
        const rol = sessionStorage.getItem("rol");

        if (!idUsuario || rol !== "cliente") {
            return { success: false, message: "No autorizado: debes ser cliente" };
        }

        const response = await fetch(`http://localhost:8000/historial/${idUsuario}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error al obtener historial de compras:", error);
        return { success: false, message: "No se pudo obtener el historial" };
    }
}

