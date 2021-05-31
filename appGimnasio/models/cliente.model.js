// TODOS LOS METODOS DE ACCESO A BBDD clientes

const getAll = () => {

    return new Promise((resolve, reject) => {
        db.query('select * from clientes', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    })
};

const create = ({
    nombre,
    apellidos,
    direccion,
    email,
    edad,
    sexo,
    fecha_inscripcion,
    cuota,
    fecha_nacimiento,
    dni,
    imagen
}) => {
    return new Promise((resolve, reject) => {
        db.query('insert into clientes (nombre, apellidos, direccion, email, edad, sexo, fecha_inscripcion, cuota, fecha_nacimiento, dni,imagen) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)', [nombre, apellidos, direccion, email, edad, sexo, new Date(), cuota, fecha_nacimiento, dni, imagen], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

const getById = (pClienteId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from gimnasioespartaco.clientes where id = ?', [pClienteId], (err, rows) => {
            if (err) reject(err);
            //ROWS puede tener 0 valores si el ID no exite
            //ROWS tendrá un valor si el valor existe
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        });
    });
    
}

const getByAge = (pEdad) => {
    return new Promise((resolve, reject) => {
        db.query('select * from gimnasioespartaco.clientes where edad > ?', [pEdad], (err, rows) => {
            if (err) reject(err);
      
            resolve(rows);
        });
    });
    
}

const deleteById = (pClienteId) => {

    return new Promise((resolve, reject) => {
        
        db.query('delete from gimnasioespartaco.clientes where id = ?', [pClienteId], (err, result) => {
            
            if (err) reject(err);
            resolve(result)
        });
    });
    
}

const getPage = (pPage) => {

    return new Promise((resolve, reject) => {
        
        db.query('delete from gimnasioespartaco.clientes where id = ?', [pPage], (err, result) => {
            
            if (err) reject(err);
            resolve(result)
        });
    });
    
}



module.exports = {
    getAll,
    create,
    getById,
    getByAge,
    deleteById
}