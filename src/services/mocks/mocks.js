export const products = [
  {
    img: 'Assento-Diamantina-Icasa-AST300-1-2.png',
    name: "Atlas Duraguard",
    description: "Universal - Oval, Linha Care e Alto Fluxo",
    price: 100,
    installmentNumber: 5
  },
  {
    img: 'Assento-Diamantina-Icasa-AST300-1-2.png',
    name: "Atlas Duraguard",
    description: "Universal - Oval, Linha Care e Alto Fluxo",
    price: 100,
    installmentNumber: 5
  },
  {
    img: 'Assento-Diamantina-Icasa-AST300-1-2.png',
    name: "Atlas Duraguard",
    description: "Universal - Oval, Linha Care e Alto Fluxo",
    price: 100,
    installmentNumber: 5
  },
  {
    img: 'Assento-Diamantina-Icasa-AST300-1-2.png',
    name: "Atlas Duraguard",
    description: "Universal - Oval, Linha Care e Alto Fluxo",
    price: 100,
    installmentNumber: 5
  }
];

export const order = {
  products: [
    {
      img: 'Assento-Diamantina-Icasa-AST300-1-2.png',
      name: "Atlas Duraguard",
      description: "Universal - Oval, Linha Care e Alto Fluxo",
      price: 120,
      installmentNumber: 5,
      quantity: 1
    }
  ],
  deliveryMethod: {
    type: "Carro próprio",
    date: "2 dias úteis",
    price: 50
  },
  unityName: "Irmãos coelho"
};

export const cart = { 
  orders: [
    order,
    order
  ],
  totalProductsPrice: 240,
  totalDeliveryPrice: 100,
  promotion: 40,
  totalCart: 400
}