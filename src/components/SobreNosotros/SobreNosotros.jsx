import './SobreNosotros.scss';


export const SobreNosotros = () =>{

    return(
        <>
        <div className='div_SNContainer'>
            <div className='div_introduccionSN'>
                <div className='titulo_introduccionSN'>
                    ¿QUIENES SOMOS?
                </div>
                <div className='descripcion_introduccionSN'>
                    Alteva es una empresa familiar especializada en la creación de muebles a medida que combinan funcionalidad, estética y durabilidad. Con años de experiencia en carpintería, contamos con un amplio conocimiento que nos permite ofrecer soluciones únicas y creativas para cada cliente.
                    Cuidamos cada detalle y nos comprometemos a entender tus necesidades para diseñar piezas que se adapten perfectamente a tu espacio y estilo de vida. Nuestro objetivo es transformar tus ideas en muebles que destaquen por su calidad y diseño personalizado.</div>
            </div>
            <section className='div_secciones'>
                <div className='div_iconoSN'>
                    <i className='iconoSN'>paid</i>
                </div>
                <div className='div_textoSN'>
                    <div className='tituloSN'>PAGOS</div>
                    <div className='descripcionSN'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum animi fugit deleniti molestias, voluptas est sint reiciendis voluptate nemo voluptatem fuga accusamus aperiam maxime libero cupiditate odit eaque numquam possimus.</div>
                </div>
            </section>
            <section className='div_secciones seccion_oscura'>
                <div className='div_iconoSN_oscuro'>
                    <i className='iconosOscuros'>import_contacts</i>
                </div>
                <div className='div_textoSN'>
                    <div className='tituloSN texto_oscuro tituloSN_oscuro'>NUESTRA HISTORIA</div>
                    <div className='descripcionSN texto_oscuro'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum animi fugit deleniti molestias, voluptas est sint reiciendis voluptate nemo voluptatem fuga accusamus aperiam maxime libero cupiditate odit eaque numquam possimus.</div>
                </div>
            </section>
            <section className='div_secciones'>
                <div className='div_iconoSN'>
                    <i className='iconoSN'>construction</i>
                </div>
                <div className='div_textoSN'>
                    <div className='tituloSN'>SERVICIOS</div>
                    <div className='descripcionSN'>Los servicios incluyes el transporte e instalacion del mueble, usted no tendra que porcuparse por nada, cordinamos una fecha y hora que le sea mas comodo y se lo instalaremos</div>
                </div>
            </section>
        </div>
        </>
    )
}
export default SobreNosotros