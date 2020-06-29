import React from 'react';
import TweetHeader from './components/TweetHeader';
import TweetContent from './components/TweetContent';
import TweetStats from './components/TweetStats';
import TweetOptions from './components/TweetOptions';
import TweetDetail from './pages/TweetDetail';
import Header from './components/Header';
import './App.css';

export default class App extends React.Component {

    render() {

        return (

            <div className="App">
                <Header />
                <TweetDetail>
                    <TweetHeader 
                        name="Corinthians" 
                        user="@Corinthians" />
                    <TweetContent
                        content="Nas finais, o Coringão enfrentou o Botafogo em Ribeirão Preto e goleou por 3 a 0, gols de João Carlos e Marcelinho duas vezes! No Morumbi dia 27 de Maio de 2001, o empate em 0 x 0 deu o título de Campeão ao Alvinegro de Parque São Jorge!"
                        datetime="7:10 PM · 28 de jun de 2020"
                        location="Twitter for iPhone" />
                    <TweetStats
                        retweets={9}
                        likes={135} />
                    <TweetOptions />
                </TweetDetail>
                <Header />
                <TweetDetail>
                    <TweetHeader 
                        name="Corinthians" 
                        user="@Corinthians" />
                    <TweetContent
                        hasImage
                        content="Fiel, o Limpa Nome é um serviço da Serasa que oferece até 90% de desconto e condições especiais para você quitar suas dívidas. Consulte grátis seu CPF e confira suas ofertas. Acesse: http://serasa.news/LNOeFiel_tt"
                        datetime="1:00 PM · 13 de jun de 2020"
                        location="TweetDeck" />
                    <TweetStats
                        retweets={17}
                        likes={223} />
                    <TweetOptions />
                </TweetDetail>
            </div>
        );
    }
}