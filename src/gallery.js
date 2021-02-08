import React from 'react';
import './gallery.css'
import {Card, CardDeck} from 'react-bootstrap';
import a from './img/a.jpg';
import b from './img/b.jpg';
import c from './img/c.jpg';
import d from './img/d.jpg';
import e from './img/e.jpg';
import f from './img/f.jpg';
import g from './img/g.jpg';
import h from './img/h.jpg';
import i from './img/i.jpg';
import j from './img/j.jpg';
import k from './img/k.jpg';
import l from './img/l.jpg';
import m from './img/m.jpg';
import n from './img/n.jpg';

function  gallery() {
    return(
        <div>
            <section className="gh">
              <CardDeck>
    <Card>
      <Card.Img variant="top" src={a}/>
      <Card.Body>
        <Card.Title>Meats and Samossa</Card.Title>
        <Card.Text>
        Eat more of chicken, beef, suya and stake
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={b} />
      <Card.Body>
        <Card.Title>Vegetable</Card.Title>
        <Card.Text>
        Eat more of carrot, spinach and gabbage.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={c} />
      <Card.Body>
        <Card.Title>Spaghetti</Card.Title>
        <Card.Text>
        Spaghetti Bangolis mixed with cabbage, carrots and beef
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
  </CardDeck>

  <CardDeck>
    <Card>
      <Card.Img variant="top" src={d}/>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={e} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={f} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
  </CardDeck>

  <CardDeck>
    <Card>
      <Card.Img variant="top" src={g}/>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={h} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={i} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
  </CardDeck>


  <CardDeck>
    <Card>
      <Card.Img variant="top" src={j}/>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={k} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={l} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
  </CardDeck>


  <CardDeck>
    <Card>
      <Card.Img variant="top" src={m}/>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={n} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src={c} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
  </CardDeck>
</section>
        </div>
    )
}

export default gallery;