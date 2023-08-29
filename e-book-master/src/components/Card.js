import React, { useState } from "react";

function Card({ book }) {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book);
  return (
    <div className="container-fluid ">
      <div className="container api2data">
        <div className="row">
          {book.map((item) => {
            let thumbnail =
              item.volumeInfo.imageLinks &&
              item.volumeInfo.imageLinks.smallThumbnail;
            let amount =
              item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
            if (thumbnail != undefined && amount != undefined) {
              return (
                <div
                  className="card cardt2 "
                  style={{ width: "19rem" }}
                  onClick={() => {
                    setShow(true);
                    setItem(item);
                  }}
                >
                  <div className="card-body">
                    <img
                      className="card-img-top cimg "
                      src={thumbnail}
                      alt=".."
                    />

                    <h5 className="card-title p-2">{item.volumeInfo.title}</h5>

                    <a href={item.volumeInfo.previewLink}>
                      <button className="btn btn-secondary">More</button>
                    </a>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
