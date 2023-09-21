import PokeBall from '../../assets/Pok.png'

const Header = () => {
    return(
        <div>
            <div><img src={PokeBall} height="50px" /></div>
            <h1>Catch a Pokemon</h1>
            <div>Accont</div>
        </div>
    )
}


export default Header