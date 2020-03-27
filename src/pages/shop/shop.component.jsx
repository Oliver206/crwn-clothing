import React from "react";

import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
// In collection.map() wird noch eine Klammer gesetzt,
// da wir der Funktion statt einem Object einzelne, vom Object "destructured" Variablen geben.
// --> Ein Mal id als Variable und das Object otherCollectionProps.
// Diese einzelnen Variabeln von otherCol.. werden in Form von einem Object dann and die CollectionPreview Component weitergegeben.
// Dort wird dann wieder aus dem otherCol.... destructured.

export default ShopPage;
