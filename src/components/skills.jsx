// Importa o componente Carousel para criar um carrossel responsivo
import Carousel from 'react-multi-carousel';
// Importa o CSS padrão do Carousel
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
    // Define configurações para responsividade
    const responsive = {
        // Telas muito grandes
        super_large_desktop: {
            breakepoint: { max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakepoint: { max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakepoint: { max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakepoint: { max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>adafdssnvsfvsnvnsfljvnsfjçlvnsfhvarhrbvhifsbviabhuibbo</p>

                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                                <div className="item">
                                    <img src="" alt="Image"/>
                                    <h5>Web Development</h5>
                                </div>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};