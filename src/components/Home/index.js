import "./index.css";
import Product from "../../components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div>
          <img
            alt="Header"
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            price={29.99}
            rating={5}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            price={239}
            rating={4}
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          />
        </div>

        <div className="home__row">
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            price={18.99}
            rating={2}
            title="Xiaomi Mi band 4 | Smart fit-band 8gb - Black"
          />

          <Product
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            price={98.99}
            rating={5}
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          />

          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            price={598.99}
            rating={4}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          />
        </div>

        <div className="home__row">
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            price={1095.99}
            rating={4}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
