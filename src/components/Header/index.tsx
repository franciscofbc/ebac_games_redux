import { useSelector } from 'react-redux'
import * as S from './styles'

// import { Game } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { RootReducer } from '../../store'

// type Props = {
//   itensNoCarrinho: Game[]
// }

// const Header = ({ itensNoCarrinho }: Props) => {
//   const valorTotal = itensNoCarrinho.reduce((acc, item) => {
//     acc += item.preco
//     return acc
//   }, 0)

//   return (
//     <S.Header>
//       <h1>EBAC Games</h1>
//       <div>
//         <img src={cesta} />
//         <span>
//           {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
//         </span>
//       </div>
//     </S.Header>
//   )
// }

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
