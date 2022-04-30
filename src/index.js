// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Create a react component
const App = () => {
  return (
    <body>
      <header>
        <div id="logo" onclick="slowScroll('#top')">
          <span>Combine</span>
        </div>
        <div id="about">
          <a href="#" title="О нас">
            О нас
          </a>
          <a href="#" title="Наша продукция">
            Наша продукция
          </a>
          <a href="#" title="Контакты">
            Контакты
          </a>
          <a href="#" title="Ответы на вопросы">
            FAQ
          </a>
        </div>
      </header>

      <div id="top">
        <h1>Производство</h1>
        <h3>Показатели</h3>
      </div>

      <div id="main">
        <div class="intro">
          <h2>Наши ценности</h2>
          <span>Ответственность, Качество, Стабильность</span>
        </div>
        <div class="text">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            impedit, ut vero commodi voluptate? Ipsam reiciendis, necessitatibus
            incidunt ipsa quis sapiente excepturi, optio iusto voluptatibus
            dolorem officia quidem, numquam eaque minus, autem praesentium rem
            architecto dolores. Ipsa unde id velit optio magni enim! Illum
            obcaecati, dolorem distinctio nemo, ipsum iure.
          </span>
        </div>
      </div>

      <div id="overview">
        <h2>Наша продукция</h2>
        <h4>Железня руда и Магнетитовые кварциты</h4>

        <div class="img">
          <img
            src="https://www.mckinsey.com/~/media/mckinsey/industries/metals%20and%20mining/working%20with%20us/how%20we%20help%20clients/new%20images%2020%2008/1_ironore_thumbnail_1536x1536.jpg"
            alt=""
          />
          <span>Железая руда</span>
        </div>
        <div class="img">
          <img
            src="https://m.media-amazon.com/images/I/711GHXHV8FL._SL1500_.jpg"
            alt=""
          />
          <span>Магнетитовый кварцит</span>
        </div>
      </div>

      <div id="contacts">
        <center>
          <h5>Обратная связь</h5>
        </center>
        <form id="form_input">
          <label for="name">
            Имя <span>*</span>
          </label>
          <br />
          <input type="text" placeholder="Введите имя" name="name" id="name" />
          <br />
          <label for="email">
            Ваша почта <span>*</span>
          </label>
          <br />
          <input
            type="email"
            placeholder="Введите email"
            name="email"
            id="email"
          />
          <br />
          <label for="message">
            Сообщение <span>*</span>
          </label>
          <br />
          <textarea
            placeholder="Введите ваше сообщение"
            name="message"
            id="message"
          ></textarea>
          <br />
          <div id="mess_send" class="btn">
            Отправить
          </div>
        </form>
      </div>

      <div id="faq">
        <div>
          <span class="title">Оплата</span>
          <br />
          <span class="heading">Как будет проходит оплата?</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium beatae asperiores debitis perspiciatis perferendis nemo
            tempore distinctio officia commodi et non tempora laudantium culpa
            nostrum, quidem, quasi ratione itaque nam.
          </p>
          <span class="heading">Как будет проходит оплата?</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium beatae asperiores debitis perspiciatis perferendis nemo
            tempore distinctio officia commodi et non tempora laudantium culpa
            nostrum, quidem, quasi ratione itaque nam.
          </p>
          <span class="heading">Как будет проходит оплата?</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium beatae asperiores debitis perspiciatis perferendis nemo
            tempore distinctio officia commodi et non tempora laudantium culpa
            nostrum, quidem, quasi ratione itaque nam.
          </p>
        </div>
        <div>
          <span class="title">Информация</span>
          <br />
          <span class="heading">Что входит в услуги сервиса</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium beatae asperiores debitis perspiciatis perferendis nemo
            tempore distinctio officia commodi et non tempora laudantium culpa
            nostrum, quidem, quasi ratione itaque nam.
          </p>
          <span class="heading">Что входит в услуги сервиса</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium beatae asperiores debitis perspiciatis perferendis nemo
            tempore distinctio officia commodi et non tempora laudantium culpa
            nostrum, quidem, quasi ratione itaque nam.
          </p>
          <span class="heading">Что входит в услуги сервиса</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium beatae asperiores debitis perspiciatis perferendis nemo
            tempore distinctio officia commodi et non tempora laudantium culpa
            nostrum, quidem, quasi ratione itaque nam.
          </p>
        </div>
        <div>
          <span class="title">Гарантии</span>
          <br />
          <span class="heading">Какие гарантии есть</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium beatae asperiores debitis perspiciatis perferendis nemo
            tempore distinctio officia commodi et non tempora laudantium culpa
            nostrum, quidem, quasi ratione itaque nam.
          </p>
          <span class="heading">Какие гарантии есть</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium beatae asperiores debitis perspiciatis perferendis nemo
            tempore distinctio officia commodi et non tempora laudantium culpa
            nostrum, quidem, quasi ratione itaque nam.
          </p>
          <span class="heading">Какие гарантии есть</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium beatae asperiores debitis perspiciatis perferendis nemo
            tempore distinctio officia commodi et non tempora laudantium culpa
            nostrum, quidem, quasi ratione itaque nam.
          </p>
        </div>
      </div>
    </body>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
