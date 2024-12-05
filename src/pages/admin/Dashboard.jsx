import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Stats from "../../component/Stat";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [statis, setStatis] = useState([]);
  const navigate = useNavigate();

  async function getProducts() {
    await fetch(
      `https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=getprods`
    )
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.product);
        let count = 0;
        res.product.forEach((p) => {
          count += p[13];
        });
        setClickCount(count);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  async function getStats() {
    await fetch(
      `https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=getstats&token=Yc1m0FD7vh31ywrfAMI6qw1LcvGSlCoPAztGvfgw2GkYKYr5A1mkubKdb2ECv4yC`
    )
      .then((res) => res.json())
      .then((res) => {
        setStatis(res.stats);
        // console.log(res.stats);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/mm3000/login");
    }
    getProducts();
    getStats();
  }, []);
  return (
    <div className="admin-cont">
      <h1>Dashboard</h1>
      <div className="total-data">
        <div>
          <div role="button">
            <h3>Active</h3>
            <span>
              {products
                ? products.filter(function (f) {
                    return f.length > 3 && f[14] === 1;
                  }).length
                : "..."}
            </span>
          </div>
        </div>
        <div>
          <div role="button">
            <h3>Inactive</h3>
            <span>
              {products
                ? products.filter(function (f) {
                    return f.length > 3 && f[14] === 0;
                  }).length
                : "..."}
            </span>
          </div>
        </div>
        <div>
          <div role="button">
            <h3>Clicks</h3>
            <span>{clickCount}</span>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      {statis && statis.length ? (
        <div>
          <h1 style={{ marginBottom: "1em" }}>Statistics</h1>
          <section className="chart-cont">
            {statis ? <Stats c = {statis} /> : "Loading..."}
          </section>
        </div>
      ) : null}

      <div className="data-cont">
        <div>
          <div className="data-list">
            <h3>
              Most Viewed <span>Clicks</span>
            </h3>
            <ol>
              {products ? (
                products
                  .sort((a, b) => {
                    if (a[13] > b[13]) {
                      return -1;
                    }
                    return 1;
                  })
                  .slice(0, 5)
                  .map((p, key) => (
                    <li key={"k-" + key}>
                      <span>
                        {" "}
                        <a
                          href={`/product/${p[2]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {p[1]}
                        </a>
                      </span>
                      <span>{p[13]}</span>
                    </li>
                  ))
              ) : (
                <li>Loading...</li>
              )}
            </ol>
          </div>
        </div>
        <div>
          <div className="data-list">
            <h3>Most Valued</h3>
            <ol>
              {products ? (
                products
                  .sort((a, b) => {
                    if (a[7] > b[7]) {
                      return -1;
                    }
                    return 1;
                  })
                  .slice(0, 5)
                  .map((p, key) => (
                    <li key={"k-" + key}>
                      <span>
                        {" "}
                        <a
                          href={`/product/${p[2]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {p[1]}
                        </a>
                      </span>
                      <span>Rs.{p[7]}</span>
                    </li>
                  ))
              ) : (
                <li>Loading...</li>
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
