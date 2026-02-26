import { useState, createContext } from "react";

import BuyActionWindow from "./BuyActionWindow";

import SellActionWindow from "./SellActionWindow";

const GeneralContext = createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
  openSellWindow: () => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  const [selectedStock, setSelectedStock] = useState({
    uid: null,
    price: null,
  });

  const handleOpenBuyWindow = (data) => {
    setIsBuyWindowOpen(true);
    setSelectedStock(data);
    setIsSellWindowOpen(false);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(false);
    setSelectedStock({ uid: null, price: null });
  };

  const handleOpenSellWindow = (data) => {
    setIsBuyWindowOpen(false);
    setSelectedStock(data);
    setIsSellWindowOpen(true);
  };

  const handleCloseSellWindow = () => {
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(false);
    setSelectedStock({ uid: null, price: null });
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStock.uid} price={selectedStock.price} />
      )}
      {isSellWindowOpen && (
        <SellActionWindow uid={selectedStock.uid} price={selectedStock.price} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
