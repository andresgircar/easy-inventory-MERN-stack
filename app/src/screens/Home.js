import { Link } from 'react-router-dom';

function Home () {
    return (
        <div className='main-container'>
            <section className="title-container">
                <h2>Que gusto tenerte aquí <strong>Andrés!</strong></h2>
                <p>Bienvenido a tu gestor de inventarios</p>
            </section>
            <section className='main-content'>
                <Link to="/my-inventory" className='first'>
                    <div className='img-container'>
                        <h3>MI INVENTARIO</h3>
                    </div>
                </Link>
                <Link to="/new-item" className='second'>
                    <div className='img-container'>
                        <h3>NUEVO ITEM</h3>
                    </div>
                </Link>
                <Link to="/update" className='third'>
                    <div className='img-container'>
                        <h3>ACTUALIZAR / ELIMINAR</h3>
                    </div>
                </Link>
            </section>
        </div>
    )
}

export default Home;