import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardItem } from "../redux/actions/CardItem";
import {Breadcrumbs, ItemDetails, ItemSlider, ProductSlider} from "../components";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Item() {

  let { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCardItem(id));
    window.scrollTo(0,0)
  }, [dispatch, id]);

  const item = useSelector(({CardItem}) => CardItem.item)
  const isLoaded = useSelector(({CardItem}) => CardItem.isLoaded)

  return (
    <div>
      <Breadcrumbs/>
      <section className="product-section">
        <div className="container">
          <div className="back-link">
            <Link to={"/"}> &lt;&lt; Back</Link>
          </div>
          {isLoaded &&
            (item.map((obj) =>
              <div className="row" key={obj.id}>
                <ItemSlider {...obj}/>
                <ItemDetails {...obj}/>
              </div>
            ))
          }
        </div>
      </section>
      <ProductSlider/>
    </div>
  );
}

export default Item;
