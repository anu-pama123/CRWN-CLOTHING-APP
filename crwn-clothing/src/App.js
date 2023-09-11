import './categories.styles.css';

const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <div className="category-container">
            <div className="background-image" style={{backgroundImage: `url(${category.imageUrl})`}}></div>
            <div className="category-body-container">
              <div className="category-body">
                <h2 className="category-title">{category.title}</h2>
                <p className="category-action">Shop Now</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
