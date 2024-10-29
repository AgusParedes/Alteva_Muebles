
const ColorCard = ({item}) => {

    return(
    <div className='div_card-color_container'>
        <div className='div_color-img'><img src={item.img} alt={item.titulo} /></div>
        <div className='div_color-title'><p>{item.titulo}</p></div>
    </div>
)
}
export default ColorCard