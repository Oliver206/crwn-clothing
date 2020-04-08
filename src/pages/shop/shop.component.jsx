import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview-component";

const ShopPage = () => (
  <div className="shop-page">
    <CollectionsOverview />
  </div>
);

// In collection.map() wird noch eine Klammer gesetzt,
// da wir der Funktion statt einem Object einzelne, vom Object "destructured" Variablen geben.
// --> Ein Mal id als Variable und das Object otherCollectionProps.
// Diese einzelnen Variabeln von otherCol.. werden in Form von einem Object dann and die CollectionPreview Component weitergegeben.
// Dort wird dann wieder aus dem otherCol.... destructured.

export default ShopPage;
