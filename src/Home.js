import React from 'react';
import burger from './img/burger.jpg';
import icon from './img/icon.png';
import milkshake from './img/milkshake.jpeg';
import cupcake from './img/cupcake.png';
import {Card,CardGroup} from 'react-bootstrap';
function Home() {
    return(
        <div>
          <section className="bvn">
                <img src={burger} alt="burger"  height="300" width="400"/>
              <h1>BEST BURGERS</h1>
              <h2>IN GALAXY</h2>
              <button className="bt">Fast Food Burgers</button>
              <button className="button">Our Menu</button>
            </section>
           
            <section className="my">
            <CardGroup className="hg">
                <Card>
                  <Card.Img variant="top" src={icon} />
                  <Card.Body>
                    <Card.Title>Grill D Burgers</Card.Title>
                    <Card.Text>
                      Beetroot water spinach okra water<br></br>
                      cheesnut ricebean pea
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={milkshake} />
                  <Card.Body>
                    <Card.Title>Milkshakes</Card.Title>
                    <Card.Text>
                    Dandelion zucchini burdock yarrow<br></br>
                        chickpea dandelion sorrel.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={cupcake}/>
                  <Card.Body>
                    <Card.Title>Desserts</Card.Title>
                    <Card.Text>
                      Cickweed okra pea winter purslane<br></br>
                          coriander yallow sweet
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
</section>
        </div>
    )
}
export default Home;