import React from "react";
import {
  catigoriesTitles,
  addressesTitle,
  adultsComponent, //in all state
  childrenComponent, //in all state
  accessoriesComponent,
  bellsComponent, //in all state
  locksComponent, //in all state
  mudguardComponent, //in all state
  mirrorComponent, //in all state
  lightsComponent, //in all state
  gearHangerComponent, //in all state
  clothesComponent,
  shortSleevedComponent, //in all state
  longSleevedComponent, //in all state
  bibShortsComponents, //in all state
  shortsComponents, //in all state
} from "./data";
const ProductContext = React.createContext();

let adultsCopy = [],
  childCopy = [],
  bellsCopy = [],
  locksCopy = [],
  mudguardsCopy = [],
  mirrorsCopy = [],
  lightsCopy = [],
  gearHangersCopy = [],
  shortSleevedCopy = [],
  longSleevedCopy = [],
  bibShortsCopy = [],
  shortsCopy = [];

export class ProductProvider extends React.Component {
  state = {
    categories: [],
    addresses: [],
    adults: [],
    child: [],
    accessories: [],
    bells: [],
    locks: [],
    mudguards: [],
    mirrors: [],
    lights: [],
    gearHangers: [],
    clothes: [],
    shortSleeved: [],
    longSleeved: [],
    bibShorts: [],
    shorts: [],
    allProducts: [], //includes all products and have its own set func
    detailsId: 0,
    detailsType: "",
    detailsImg: "",
    detailsDesc: "",
    detailsPrice: 0,
  };

  setDetailId = (id) => {
    this.setState({ detailsId: id });
  };

  setDetailsType = (id) => {
    let detailsType;
    this.state.allProducts.map((item) => {
      if (id === item.id) {
        detailsType = item.type;
      }
    });
    this.setState({ detailsType });
  };

  setDetailsImg = (id) => {
    let detailsImg;
    this.state.allProducts.map((item) => {
      if (id === item.id) {
        detailsImg = item.img;
      }
    });
    this.setState({ detailsImg });
  };

  setDetailsDesc = (id) => {
    let detailsDesc;
    this.state.allProducts.map((item) => {
      if (id === item.id) {
        detailsDesc = item.desc;
      }
    });
    this.setState({ detailsDesc });
  };

  setDetailsPrice = (id) => {
    let detailsPrice;
    this.state.allProducts.map((item) => {
      if (id === item.id) {
        detailsPrice = item.price;
      }
    });
    this.setState({ detailsPrice });
  };

  /* ////////////////////////////////////////// */
  /* for rendering components */
  componentDidMount() {
    this.setCategories();
    this.setAddresses();
    this.setAdultsComponent();
    this.setChildComponent();
    this.setaccessories();
    this.setBells();
    this.setLocks();
    this.setMudguard();
    this.setMirrors();
    this.setLights();
    this.setProducts();
    this.setClothesComponent();
    this.setShortSleevedComponent();
    this.setLongSleevedComponent();
    this.setBibShortsComponents();
    this.setShortsComponents();
    this.setAllProducts();
  }

  /* for setting the data into the state */

  /* set all products in allProducts arr in state */
  setAllProducts = () => {
    const allProducts = [
      ...adultsCopy,
      ...childCopy,
      ...bellsCopy,
      ...locksCopy,
      ...mudguardsCopy,
      ...mirrorsCopy,
      ...lightsCopy,
      ...gearHangersCopy,
      ...shortSleevedCopy,
      ...longSleevedCopy,
      ...bibShortsCopy,
      ...shortsCopy,
    ];
    this.setState({ allProducts });
  };

  setCategories = () => {
    let categories = [];
    catigoriesTitles.map((catg) => {
      const singleCatg = { ...catg };
      categories = [...categories, singleCatg];
    });
    this.setState({ categories });
  };

  setAddresses = () => {
    let addresses = [];
    addressesTitle.map((ad) => {
      const singleAdress = { ...ad };
      addresses = [...addresses, singleAdress];
    });
    this.setState({ addresses });
  };
  setAdultsComponent = () => {
    let adults = [];
    adultsComponent.map((item) => {
      const singleItem = { ...item };
      adults = [...adults, singleItem];
      adultsCopy = [...adults];
    });
    this.setState({ adults });
  };
  setChildComponent = () => {
    let child = [];
    childrenComponent.map((item) => {
      const singleItem = { ...item };
      child = [...child, singleItem];
      childCopy = [...child];
    });
    this.setState({ child });
  };
  setaccessories = () => {
    let accessories = [];
    accessoriesComponent.map((item) => {
      const singleItem = { ...item };
      accessories = [...accessories, singleItem];
    });
    this.setState({ accessories });
  };
  setBells = () => {
    let bells = [];
    bellsComponent.map((item) => {
      const singleItem = { ...item };
      bells = [...bells, singleItem];
      bellsCopy = [...bells];
    });
    this.setState({ bells });
  };
  setLocks = () => {
    let locks = [];
    locksComponent.map((item) => {
      const singleItem = { ...item };
      locks = [...locks, singleItem];
      locksCopy = [...locks];
    });
    this.setState({ locks });
  };
  setMudguard = () => {
    let mudguards = [];
    mudguardComponent.map((item) => {
      const singleItem = { ...item };
      mudguards = [...mudguards, singleItem];
      mudguardsCopy = [...mudguards];
    });
    this.setState({ mudguards });
  };
  setMirrors = () => {
    let mirrors = [];
    mirrorComponent.map((item) => {
      const singleItem = { ...item };
      mirrors = [...mirrors, singleItem];
      mirrorsCopy = [...mirrors];
    });
    this.setState({ mirrors });
  };
  setLights = () => {
    let lights = [];
    lightsComponent.map((item) => {
      const singleItem = { ...item };
      lights = [...lights, item];
      lightsCopy = [...lights];
    });
    this.setState({ lights });
  };
  setProducts = () => {
    let gearHangers = [];
    gearHangerComponent.map((item) => {
      const singleItem = { ...item };
      gearHangers = [...gearHangers, singleItem];
      gearHangersCopy = [...gearHangers];
    });
    this.setState({ gearHangers });
  };
  setClothesComponent = () => {
    let clothes = [];
    clothesComponent.map((item) => {
      const singleItem = { ...item };
      clothes = [...clothes, singleItem];
    });
    this.setState({ clothes });
  };
  setShortSleevedComponent = () => {
    let shortSleeved = [];
    shortSleevedComponent.map((item) => {
      const singleItem = { ...item };
      shortSleeved = [...shortSleeved, singleItem];
      shortSleevedCopy = [...shortSleeved];
    });
    this.setState({ shortSleeved });
  };
  setLongSleevedComponent = () => {
    let longSleeved = [];
    longSleevedComponent.map((item) => {
      const singleItem = { ...item };
      longSleeved = [...longSleeved, singleItem];
      longSleevedCopy = [...longSleeved];
    });
    this.setState({ longSleeved });
  };
  setBibShortsComponents = () => {
    let bibShorts = [];
    bibShortsComponents.map((item) => {
      const singleItem = { ...item };
      bibShorts = [...bibShorts, singleItem];
      bibShortsCopy = [...bibShorts];
    });
    this.setState({ bibShorts });
  };
  setShortsComponents = () => {
    let shorts = [];
    shortsComponents.map((item) => {
      const singleItem = { ...item };
      shorts = [...shorts, singleItem];
      shortsCopy = [...shorts];
    });
    this.setState({ shorts });
  };

  /* ///////////////////////////////////////////// */
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          setDetailsType: this.setDetailsType,
          setDetailsImg: this.setDetailsImg,
          setDetailsDesc: this.setDetailsDesc,
          setDetailsPrice: this.setDetailsPrice,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;
