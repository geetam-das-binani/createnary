import { useEffect, useState } from "react";
import "../styles/features.css";
import Card from "./Card";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { getFeatures } from "../apiClient";
const Feature = () => {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [features, setFeatures] = useState([]);

  const handleFeaturesChange = async () => {
    try {
      const data = await getFeatures(page);
      if (!total) {
        setTotal(data.total);
      }

      setFeatures(data.features);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    handleFeaturesChange();
  }, [page]);

  return (
    <div className="feature__container">
      <h2>{features[0]?.subtext}</h2>
      <h4>{features[0]?.heading}</h4>
      <div className="card__container">
        <FaLongArrowAltLeft
          style={{
            color: page === 1 ? "grey" : "white",
            pointerEvents: page === 1 ? "none" : "auto",
          }}
          onClick={() => setPage(page - 1)}
          className="arrow__left"
        />
        {features?.length > 0 &&
          features.map((feature) => (
            <Card key={feature.id} src={feature.image} />
          ))}
        <FaLongArrowAltRight
          style={{
            color: page < total ? "white" : "grey",
            pointerEvents: page < total ? "auto" : "none",
          }}
          onClick={() => {
            if (page >= total) return;
            setPage(page + 1);
          }}
          className="arrow__right"
        />
      </div>
    </div>
  );
};

export default Feature;
